import { useContext } from 'react';
import {Box,Typography,Grow,Button} from '@mui/material';
import {products} from '../../data/data';
import { useState ,useEffect} from 'react';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { tokens} from '../../Context/ThemeContext'
import  GlobalContext  from "../../Context/GlobalContext"
import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';


const BlockNav =  ({setShowButtons,showButtons}) => {
    const [product ,setProduct] = useState([])  
    const { choosenProduct,setChoosenProduct} = useContext(GlobalContext)
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    useEffect(()=>{
        if (showButtons.name === 'sexual-Health') {
            setProduct(products.sex) 
        }else if (showButtons.name === 'hair-loss') {
            setProduct(products.hair_loss) 
        }else if (showButtons.name === 'weight-Loss') {
            setProduct(products.weight_loss)
        }else{
            setProduct([])
        }

    } , [showButtons])
        return (
            <>
             <Grow in={showButtons.action} timeout={500}>
                <Box
                    onMouseEnter={() => setShowButtons({action:true, name:showButtons.name})}
                    onMouseLeave={() => setShowButtons({action:false,name:''})}
                    sx={{
                    display: product.length > 0 ? 'flex' : 'none',
                    position: 'absolute',
                    width:'100%',
                    top: 55,
                    left: '0%',
                    background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
                    border:'1px solid #e5eaf299',
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    p:4,
                    borderRadius:'10px',
                    transition:'170ms',
                    '&:hover':{ 
                    boxShadow:colors.primary[1100],
                    border:'1px solid #3399ff',
                    opacity:1
                    }
                    }}
                >
                    <Box>
                        <Link to={`/${showButtons.name}`}>
                            <Typography variant='h4' color='black'  
                             sx={{
                                    cursor:'pointer',
                                    transition:'170ms',
                                    '&:hover':{ 
                                        boxShadow:'rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                                        borderBottom:'1px solid #3399ff',
                                        color:'#3399ff',
                             }
                             }} > See all </Typography>
                        </Link>
                    </Box>
                    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    <Typography variant='h3' color='black' > products </Typography>
                        {product.map((p)=>{
                            return (
                            <Link to={`/product/${p.title}`}>
                                <Typography variant='h4' color='black' 
                                sx={{
                                    mt:2,
                                    cursor:'pointer',
                                    transition:'170ms',
                                    color:colors.primary[200],
                                    '&:hover':{ 
                                        boxShadow:'rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                                        borderBottom:'1px solid #3399ff',
                                        color:'#3399ff',
                                    }
                                }}
                                onClick={()=>{setChoosenProduct(p)}} 
                                    > {p.title}</Typography>
                            </Link>
                            )
                        })}
                    </Box>
                    <Box>
                    <Link to={'/Form'}>
                        <Button variant=""  
                            endIcon={
                                <ChevronRightOutlinedIcon id='icon1' 
                                sx={{position:'absolute',top:'9px',color:colors.primary[150],transition:'170ms',}}/>
                                } 
                            sx={{
                                color:colors.primary[300],
                                textTransform:'capitalizees',
                                    '&:hover ': {
                                    },
                                        '&:hover #icon1': {
                                    marginLeft:'5px'
                                        
                                    },'&:active': {
                                        boxShadow: 'none',
                                        backgroundColor: 'black',
                                    }
                                }}
                                    type="submit" value="Send"> Get start
                        </Button>
                    </Link>
                    </Box>
                </Box>
            </Grow>
            </>
        )
}
export default BlockNav