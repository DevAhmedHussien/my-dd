import * as React from 'react';
import { Button, CardActionArea ,Typography,CardMedia,CardContent,Card} from '@mui/material';
import mainPhoto from '../../../images/doctor-nurses-special-equipment.jpg'
import InnerCardWeightMan from './InnerCardWeightMan';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
export default function MultiActionAreaCard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);  
return (
    <Card sx={{ transition:'170ms',width: '70%' , height:350, borderRadius:'10px' , background:colors.primary[100],
    border:'1px solid #e5eaf299',
    '&:hover':{ 
        // backgroundColor:'#e5eaf299',
        transition:'170ms',
        boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
        border:'1px solid #3399ff'
    }}}>
    <CardActionArea sx={{display:'flex',justifyContent:'center',alignItems:'start',gap:1}}>
        <CardMedia 
        sx={{}}
        component="img"
        width = '200'
        height="350"
        image={mainPhoto}
        alt="green iguana"
        />
        <CardContent
            sx={{background:colors.primary[100],
            // background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
            }}>
        <Typography gutterBottom variant="h4" component="div" color = {colors.primary[200]} sx={{width:350}} >
            Weight Management
        </Typography>
        <InnerCardWeightMan/>
        <InnerCardWeightMan/>
        <InnerCardWeightMan/>
        <InnerCardWeightMan/>
        <InnerCardWeightMan/>
        <InnerCardWeightMan/>
        <InnerCardWeightMan/>
        <InnerCardWeightMan/>
        <Button variant="contained"  
            endIcon={<ChevronRightOutlinedIcon id='icon1' sx={{position:'absolute',top:'10px',color:colors.primary[150],transition:'170ms',}}/>} 
            sx={{ my: 2, 
            position :"relative", 
            background: `linear-gradient(to right bottom, #007fff, #3399ff 140%)`,mt:'25px',
            boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
            display: 'flex',textTransform: 'capitalize',width:150,
            transition:'1700ms',
            color:'white',
            fontWeight:600,
                '&:hover ': {
                backgroundColor:'white !important' ,
                // mb:1,
            },
                '&:hover #icon1': {
                    marginLeft:'5px'
            },'&:active': {
                boxShadow: 'none',
                backgroundColor: 'black',
            }}}
            type="submit" value="Send">Get Started
        </Button>
        </CardContent>
    </CardActionArea>
    </Card>
);
}