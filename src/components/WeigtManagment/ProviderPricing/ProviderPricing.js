import { Typography,Box,TextField ,Button} from '@mui/material';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
// import a from '../../../images/7514780.png';
export default function ProviderPricing({name,img}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <>
        <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            gap:5
        }}>
            <Box variant='div'>
                <img 
                src={img} 
                alt=''
                style={{   
                    width:'200px',
                    height:'200px',
                    borderRadius:'50%',
                    border:`0px solid ${colors.primary[300]}`,
                    boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                }}/>
                <Typography variant="h4" textAlign='center' color={colors.primary[900]} sx={{mt:2}} >{name}</Typography>
            </Box>
        </Box>
        </>
    )
}