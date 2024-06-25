import { Typography,Box} from '@mui/material';
import { tokens } from '../Context/ThemeContext';
import { useTheme } from '@mui/material';
export default function CardSLeft({ 
// dir,  
ques='',
typ1='',
typ2='',
typ3='',
typ4='',
img
}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box variant='div'
            sx = {{
                width:'90%',
                p:5,
                m:'80px auto',
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'center',
                alignItems:'start',
                gap:4
            }}>
                <Box 
                variant='div'
                sx = {{
                    width:'60%',
                    p:1,
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'start',
                    gap:3
                }}
                >
                    <Typography variant='h4' color={colors.primary[300]}>
                        {ques}
                    </Typography>
                    <Typography variant='h5' color={colors.primary[200]}> 
                        {typ1} 
                    </Typography>
                    <Typography variant='h5' color={colors.primary[200]}>
                        {typ2}
                    </Typography>
                    <Typography variant='h5' color={colors.primary[200]}>
                        {typ3}
                    </Typography>
                    <Typography variant='h5' color={colors.primary[200]}>
                        {typ4}
                    </Typography>
                </Box>
                <img src={img} alt=''  style={{ 
                    height:'400px',
                    width: '30%' , p:4,
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'start',
                    gap:2,
                    borderRadius:'10px',
                    transition:'170ms',
                    background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
                    border:'1px solid #e5eaf299',
                }}
                    />
            </Box>
    )
}