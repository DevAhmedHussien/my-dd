import { Box, Typography } from "@mui/material";
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import BoxTheSecond from "./BoxTheSecond";
import Inner from "./Inner";
import ToggleButtons from "../../Main/ToggleButtons";
import img from "../../../images/Screenshot 2024-06-24 at 11.12.41 PM.png"
import { useNavigate } from "react-router-dom";

export default function TheSecond(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate()
    return(
        <>
        <Box 
            sx={{
                p:10,
                display:'flex',
                flexWrap:'wrap',
                alignItems:'start',
                justifyContent:'space-between' }}>
                <Box sx={{width:'30%' , 
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center',
                    gap:1}}>
                    <img src={img} alt='' 
                        style={{
                            cursor:'pointer',
                            marginRight:10,
                            width:'150px',
                            borderRadius:'10px'
                    }}
                    onClick={()=>{navigate('/')}}/>
                <Typography variant='h1'   color= {colors.primary[200]} sx={{p:'10px'}}>
                    A&M Care
                </Typography>
                <ToggleButtons/>
            </Box>
            <BoxTheSecond  />

        </Box>
        <Inner/>
        </>
    )
}