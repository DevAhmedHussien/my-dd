import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
export default function Question({ques,ans}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <>
        <Accordion  sx={{ background:colors.primary[100] }}>
            <AccordionSummary
            expandIcon={<ArrowDropDownIcon sx={{ color:'#3399ff' //colors.primary[200] 
            }} />}
            aria-controls="panel2-content"
            id="panel2-header"
            >
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1}}>  
                <GppGoodIcon sx={{color:'#3399ff', fontSize:'15px' }}/>
                <Typography  color={colors.primary[200]}>{ques}</Typography>
            </Box>
            </AccordionSummary>
            <AccordionDetails>
            <Box sx={{display:'flex',justifyContent:'start',alignItems:'center',gap:1}}>  
                <GppGoodIcon sx={{color:'#3399ff', fontSize:'15px' }}/>
                <Typography  color={colors.primary[200]}>{ans}</Typography>
            </Box>
            </AccordionDetails>
        </Accordion>
        </>
    )
}