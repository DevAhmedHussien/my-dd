import { Typography,Box} from '@mui/material';
import { tokens } from '../Context/ThemeContext';
import { useTheme } from '@mui/material';
import ToggleButtons from '../components/Main/ToggleButtons';

export default function MainProduct({title,description,smallDesc,img}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <>
        <Box variant='div' sx={{mt:'20px',display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexWrap:'wrap',
        // gap:25,
        height:'80vh'}}>
            <Box variant='div' sx={{display:'flex',flexDirection:'column',alignItem:'start'}}>
                <Typography variant='h3' color={colors.primary[200]}>{title}
                <span style={{color:colors.primary[300]}}> </span></Typography>
                <Typography variant='h5' color={colors.primary[200]} sx={{mt:2}} maxWidth={500}>{description} </Typography>
                <Typography variant='h6' color={colors.primary[200]} sx={{mt:1}}  maxWidth={500}>{smallDesc}</Typography>
                <ToggleButtons/>
                
            </Box>
            <Box variant='div' 
                sx={{
                    mt:5,
                    width:450,
                    height:550,
                    boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                    borderRadius:5
                    }}>
                        <img src={img} alt='' 
                            style={{
                            width:'100%',
                            height:"100%",
                            borderRadius:10
                            // animationName: 'rotate',
                            // animationDuration: '3.6s',
                            // animationTimingFunction: 'ease-in-out',
                            // animationIterationCount: 'infinite',
                    }} />
            </Box>
        </Box>
        
        </>
    )
}
