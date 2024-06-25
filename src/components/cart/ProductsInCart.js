import  GlobalContext  from "../../Context/GlobalContext"
import { useTheme } from '@mui/material';
import { useContext, useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";
import { tokens} from '../../Context/ThemeContext'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import AutoDeleteOutlinedIcon from '@mui/icons-material/AutoDeleteOutlined';
import CurrencyFormat from "react-currency-format";
import axios from "../../axios"
import { useElements, useStripe ,CardElement} from "@stripe/react-stripe-js";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { styled } from '@mui/system';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function ProductsInCart(){ 

    const CardElementContainer = styled('div')(({ theme }) => ({
        padding: theme.spacing(2),
        border: '1px solid #ccc',
        borderRadius: theme.shape.borderRadius,
        marginBottom: theme.spacing(2),
      }));
      
    // ** Hooks 
    const [clientSecret, setClientSecret] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    
    const navigate = useNavigate()
    //** mui THeme */ 
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    // ** states form context
    const context = useContext(GlobalContext)
    const { state , setState, price, handleRemove ,showSnackbar,handleChangee} = context

    // confirmation payment method 
    const stripe = useStripe()
    const elements = useElements()

   
    // payment method 
    useEffect(() => {
        const getClientSecret = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url:`/payments/create?total=${ price * 100 }`, // Corrected URL format
                });
                setClientSecret(response.data.clientSecret);
                return response;
            } catch (error) {
                console.error("Axios Error:", error);
            }
        };
        getClientSecret();
        }, [state, price]); // Include 'price' in dependency array if it's used in the URL
        
    // handle Summbit payment
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
                try {
                    // Fetch a new client_secret just before confirming the payment
                    const response = await axios.post(`/payments/create?total=${price * 100}`);
                    const newClientSecret = response.data.clientSecret;
                    // const { paymentIntent } = await stripe.confirmCardPayment(newClientSecret, {
                    //     payment_method: {
                    //         card: elements.getElement(CardElement),
                    //     },
                    // });
                    // console.log('newClientSecret',newClientSecret, paymentIntent)
                    const payload = await stripe.confirmCardPayment(newClientSecret, {
                        payment_method: {
                            card: elements.getElement(CardElement),
                            billing_details: {
                                name: state.user,
                            },
                        },
                    });
                    console.log('Payload:', payload);
                    // if (payload.error) {
                    //     throw new Error(payload.error.message);
                    // }
                    const paymentIntent = payload.paymentIntent;
                    console.log('Payment Intent:', paymentIntent);
            
                    if (!paymentIntent) {
                        throw new Error('Payment intent is undefined');
                    }

                    // Proceed with handling the payment intent response
                    const orderRef = doc(db, "users", state.user?.uid, "orders", paymentIntent.id);
                    await setDoc(orderRef, {
                        basket: state.basket,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created,
                    });
                    setSucceeded(true);
                    setError(null);
                    setProcessing(false);
                    setState({ ...state, basket: [] });
                    showSnackbar('Payment successful!', 'success');
                    navigate("/order", { replace: true });
                } 
                catch (error) {
                    console.error("Error confirming payment:", error.message);
                    setError(`Payment failed: ${error.message}`);
                    setSucceeded(false);
                    setProcessing(false);
                    showSnackbar('Payment Unsuccessful!', 'error');
                }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setProcessing(true);
    
    //     try {
    //         const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
    //             payment_method: {
    //               card: elements.getElement(CardElement),
    //             },
    //           });
    
    //         const orderRef = doc(db, "users", state.user?.uid, "orders", paymentIntent.id);
    //         await setDoc(orderRef, {
    //             basket: state.basket,
    //             amount: paymentIntent.amount,
    //             created: paymentIntent.created,
    //         });
    
    //         setSucceeded(true);
    //         setError(null);
    //         setProcessing(false);
    //         setState({
    //             ...state,
    //             basket: [],
    //         });
    //         showSnackbar('Payment successful!', 'success');
    //         navigate("/order", { replace: true });
    //     } catch (error) {
    //         console.error("Error confirming payment:", error.message);
    //         setError(`Payment failed: ${error.message}`);
    //         setSucceeded(false);
    //         setProcessing(false);
    //         showSnackbar('Payment Unsuccessful!', 'error');

    //     }
    // };
    
    const handleChangeStripe = (e) => {
        setDisabled(e.empty);
        setError(error ? error.message : "");
      };

    return(
        <>
        <Box 
            sx={{
                mt:2,
                p:3,
                height: '400px',
                overflowY: state.basket.length>=5 ? 'scroll': 'hidden',
                display: 'flex', 
                flexDirection:'column',
                gap:2,
            }}>
        {state.basket.map((item,i)=>{
        return(
            <Box key={item.id}
                sx={{
                    display: 'flex', 
                    height:'70px',
                    justifyContent:'space-evenly',
                    alignItems:'center',
                    background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
                    transition:'170ms',
                    border:'1px solid #e5eaf299',
                    borderRadius:'20px',
                        '&:hover':{ 
                            boxShadow:colors.primary[1100],
                            border:'1px solid #3399ff'
                        }}}>
                        <img src={item.img} alt=""
                            style={{
                                width:'50px',
                                height:'50px',
                                borderRadius:4
                    }}/>
                <Typography  color={colors.primary[200]} variant="p" align='left' >
                    { item.price }
                </Typography>
                <Typography  color={colors.primary[200]} variant="p" align='left'>
                    { item.title }
                </Typography>
                <img src={item.image} alt='' style={{width:'20px',height:'20px',borderRadius:'10px'}}/>
                <Box variant='div' sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:2}}>
                    <IconButton  aria-label="add Item"
                        sx={{ background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
                        boxShadow:colors.primary[1100],
                        '&:hover':{ 
                            scale:2
                        }}}
                        onClick={()=>{
                            handleChangee(item, +1)
                        }}>
                            <AddCircleOutlineOutlinedIcon  sx={{color:colors.primary[300],
                            '&:hover':{ 
                            }
                        }}/>
                    </IconButton>
                    <div 
                        style={{ 
                        width:'25px',
                        height:'25px',
                        borderRadius:5,
                        display: 'flex', 
                        justifyContent:'space-evenly',
                        alignItems:'center'
                        }}>
                        <Typography  color={colors.primary[900]} variant="h4" align='center'>
                            {item.quantity}
                        </Typography>
                    </div>
                    <IconButton  aria-label="minus an Item"
                    sx={{ background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
                    boxShadow:colors.primary[1100],
                    '&:hover':{ 
                        scale:2
                    }}}
                    onClick={()=>{
                        handleChangee(item, -1)
                    }}>
                        <RemoveCircleOutlinedIcon  sx={{color:colors.primary[300]}}/>
                    </IconButton>
                </Box>
                <Typography  color={colors.primary[200]} variant="p" align='left' >
                    { item.price * item.quantity } $
                </Typography>
                <IconButton  aria-label="Delete"
                    sx={{ background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
                    boxShadow:colors.primary[1100],
                    '&:hover':{ 
                        scale:2
                    }}}
                    onClick={()=>{ handleRemove(item.id) }}>
                        <AutoDeleteOutlinedIcon sx={{color:'#e23f3f'}}/>
                </IconButton>
            </Box>
            )
        })}
        </Box>
        <Box sx={{p:3}}>
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
      <CardElementContainer>
        <CardElement onChange={handleChangeStripe} options={{ style: { base: { fontSize: '16px' } } }} />
      </CardElementContainer>
      {error && <Typography color="error">{error}</Typography>}
      <CurrencyFormat
        renderText={(value) => <Typography variant="h5" color={colors.primary[200]} >Order Total: {value}</Typography>}
        decimalScale={2}
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Box mt={2}>
      <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={processing || disabled || succeeded}
          fullWidth
          sx={{
            background: (processing || disabled || succeeded) ? 'silver' : '#3399fe',
            borderRadius: 1,
            color: theme.palette.primary[200],
            '&:hover': {
              background: (processing || disabled || succeeded) ? 'silver' : '#1e88e5',
            },
          }}
          startIcon={processing ? <CircularProgress size={24} sx={{ color: 'blue' }} /> : <ShoppingCartIcon />}
        >
          {processing ? 'Processing' : 'Buy Now'}
        </Button>
      </Box>
    </form>
        </Box>
        </>
    )
}