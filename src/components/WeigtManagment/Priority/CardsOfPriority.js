import { Typography,Box } from '@mui/material';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import  GlobalContext  from "../../../Context/GlobalContext"
import { useContext } from 'react';
import ButtonCart from '../../../resuable-component/ButtonCart';

export default function CardsOfPriority({i ='', ich= "none",img,title,description,item}){
    
    // get functions from context 
    const context = useContext(GlobalContext)
    const {addToBasket} = context
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
        <Box variant='div'
            sx={{ 
                height:'550px',
                width: '30%' , 
                p:4,
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                gap:2,
                borderRadius:'10px',
                transition:'170ms',
                background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
                border:'1px solid #e5eaf299',
                '&:hover':{ 
                    // boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                    boxShadow:colors.primary[1100],
                    border:'1px solid #3399ff'
            }}}>
            <img src={img} alt='images' style={{width:'100%',height:200,borderRadius:10,display:`${ich}`}}/>
            {i}
            <Typography variant= 'h4' sx={{textAlign:"center"}}    color={colors.primary[200]}> 
                {title} 
            </Typography>
            <Typography variant= 'h6' sx={{textAlign:"center"}}    color={colors.primary[900]}>  
                {description}
            </Typography>
            <ButtonCart toWord={()=>{ addToBasket(item) }} title="add to Basket" ich={ich} />
        </Box>
    )
}