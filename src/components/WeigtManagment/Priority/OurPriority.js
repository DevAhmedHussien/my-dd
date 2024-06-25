import { Typography,Box,TextField ,Button} from '@mui/material';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import CardsOfPriority from './CardsOfPriority';
export default function OurPriority(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box variant='div'
            sx={{
            //height:'100%',
            mt:5}}>
            <Typography variant='h3' color={colors.primary[200]}
            sx={{textAlign:'center',fontWeight:'700'}}>
                <span 
            style={{color:'#3399ff'}}>At A&M,</span> Your Needs Are Our Priority 
            </Typography>
            <Typography variant='h5' 
            sx={{textAlign:'center',fontWeight:'500',mt:1}}
            color={colors.primary[900]}>
                <a style={{color:'#3399ff'}} 
                href='https://'>Our Providers </a>
                are here to help and care for your needs
            </Typography>
            <Box variant='div'
            sx={{
                p:5,
                m:'80px auto',
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'center',
                alignItems:'center',
                gap:3}}
            >
                <CardsOfPriority 
                i ={<PriceChangeOutlinedIcon sx={{fontSize:150 ,color:colors.primary[300]}}/>} 
                title='Affordable Medication' 
                description='A&M offers access to medication below competitor prices because we believe health comes first.' 
                />
                <CardsOfPriority
                i ={<SelfImprovementOutlinedIcon sx={{fontSize:150,color:colors.primary[300]}}/>}
                title='Caring Providers' 
                description='Our team of providers are dedicated to your wellbeing and are here to find the best solution for you. No judgements.' 
                />
                <CardsOfPriority
                i ={<HealthAndSafetyOutlinedIcon sx={{fontSize:150,color:colors.primary[300]}}/>}
                title='100% Satisfaction Guarantee' 
                description='Try Henry confidently knowing that we have a full 30-day refund guarantee, no questions asked. Set your mind at ease.' 
                />
                
            </Box>
        </Box>
    )
}