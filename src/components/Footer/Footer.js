import { Box, Button, Typography } from "@mui/material";
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import TheSecond from "./TheSecond/TheSecond";
import img from "../../images/Screenshot 2024-06-24 at 11.12.41 PM.png"
import { useNavigate } from "react-router-dom";

export default function Footer(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate()
    return(
        <Box 
        sx={{
            background: 'linear-gradient(45deg, rgb(84 87 93), #2d5c6d)'
        }}
        >
            <TheSecond/>
            <Box sx={{p:10,display:'flex',justifyContent:'center',alignItems:'cstartenter'}}>
            <img src={img} alt='' 
                style={{
                    cursor:'pointer',
                    marginRight:10,
                    width:'40px',
                    height:'40px',

                    borderRadius:'10px'
            }}
            onClick={()=>{navigate('/')}}/>
                <Typography variant="p"  
                sx={{ textAlign:'left'}} >
                    Adonis Health Inc.™ is a patient management platform that works with independent physicians and practitioners who provide services utilizing the Adonis Patient Engagement Platform. Adonis Health does not directly provide medical or pharmacy services and payment does not guarantee the writing or dispensing of a prescription. Medical Services are provided via independent providers and Colchis Medical Group PC. The information provided on this website is for informational purposes and not a substitute for professional medical advice, diagnosis, or treatment. If you have questions or concerns about your health, please talk to your doctor. This site is an advertisement for services and not any specific medication.
                </Typography>
            </Box>
        </Box>
    )
}