import Grid from '@mui/material/Unstable_Grid2';
import photoCheckOut from '../../images/checkoutAd.jpg'
import { Typography,Box,Divider } from '@mui/material';
import GlobalContext  from "../../Context/GlobalContext"
import { useTheme } from '@mui/material';
import { useContext, useEffect } from 'react';
import { tokens} from '../../Context/ThemeContext'
import { styled } from '@mui/material/styles';
import PhotoAnna from '../../images/pexels-anna-shvets-4167542.jpg'
import ProductsInCart from './ProductsInCart';
import NoProductsInCart from './NoProductsInCart';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function Cart() {

   const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body1,
    color: colors.primary[300],
    // background:colors.primary[200],
    '& > :not(style) ~ :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const context = useContext(GlobalContext)
  const { state , scrollToTop} = context

  // when load page run to top
  useEffect(()=>{
    scrollToTop();
  },[])

  // strip key frontend 
  const stripePromise = loadStripe("pk_test_51PUuH9DbmrMUrxP2ZE9hNE2w8XeeZNsDaiU5bjpXAD6PlTnRXCglGWy8u4nScZ0hRUzMXcbFLHxF1JAjwrGWFcLT00RhLLCnAl");

  return (
    <Box sx={{ flexGrow: 1 ,mt:7,p:2
    }}>
      <Grid container spacing={1}>
        <Grid xs={6} md={8}>
          <img src={photoCheckOut} alt=''
          style={{width:'100%',
        }}/>
          <Typography  color={colors.primary[200]} variant="h3" align='left' sx={{mt:2}}>Hello, <span style={{textDecoration:'underline',color:colors.primary[900]}}>{state.user}</span></Typography>
          <Typography  color={colors.primary[200]} variant="h2" align='left' sx={{mt:2}}>
            Your shopping <span style={{color:colors.primary[300]}}> Basket</span></Typography>
          <Root >
            <Divider textAlign="left"  color={ colors.primary[300] }>Box</Divider>  
          </Root>
          {
          state.basket.length === 0 ?
          <NoProductsInCart/>
          :
          <Elements stripe={stripePromise}>
            <ProductsInCart/>
          </Elements>
          }
        </Grid>
        <Grid xs={6} md={4}
        >
        <img src={PhotoAnna} alt=''
            style={{width:'100%',
            height:'100%',
            boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
          }}/>
        </Grid>
      </Grid>
    </Box>
  );
}