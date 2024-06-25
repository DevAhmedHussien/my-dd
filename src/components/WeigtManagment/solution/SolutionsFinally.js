import { Typography,Box} from '@mui/material';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import CardS from '../../../resuable-component/CardS'
export default function SolutionFinally(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box variant='div'
            sx={{
            mt:5
            }}>
            <Typography variant='h3' color={colors.primary[200]}
            sx={{textAlign:'center',fontWeight:'700'}}>
                <span 
            style={{color:'#3399ff'}}>The Solution</span> That Finally Works!
            </Typography>
            <Typography variant='h5'  sx={{textAlign:'center',fontWeight:'500',mt:1}} color={colors.primary[900]}>
                <a style={{
                    color:'#3399ff'
                }} 
                href='https://'> Stop </a>
        wasting years and your hard-earned money on fads and gimmicks that aren’t backed by science.
            </Typography>
         
        </Box>
    )
}