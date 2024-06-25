import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';

export default function CardsInnerAboutMe({icon , title , perif,sendM ,href}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Card className ='cartAboutMe' 
            sx={{width:210 , height:180, 
                display:'flex', 
                flexDirection:"column" ,
                borderRadius:'20px',
                alignItems : 'center' ,
                cursor:'pointer',
                transition:'170ms',
                background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
                border:'1px solid #e5eaf299',
                '&:hover':{ 
                    boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                    border:'1px solid #3399ff'
                }
                }}>
            <Box style={{fontSize: '66px'}}>{icon}</Box>
            <Typography  variant='h6' color={colors.primary[200]}
            sx={{ fontSize: "17px",margin:'0' ,
            // color:colors.primary[300]
            }} >{title}</Typography>
            <Typography variant='h6' color={colors.primary[200]}
            sx={{fontSize: "9px",
            // color:colors.primary[300]
            }}>{perif}</Typography>
            <a href={href} rel="noreferrer"  target='_blank' alt=''style={{fontSize: "11px", color: '#4db5ff',textDecoration:'none'}}>{sendM}</a>
        </Card>
        
            
        
)}