import {Box} from '@mui/material';
import AlarmIcon from '@mui/icons-material/Alarm';
import IconButton from '@mui/material/IconButton';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';
    
export default function ToggleButtons(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <>
        <Box variant='div' sx={{}}>
            <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon  sx={{color:colors.primary[300]}}/>
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
                <FacebookOutlinedIcon   sx={{color:colors.primary[300]}}/>
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
                <SendOutlinedIcon   sx={{color:colors.primary[300]}}/>
            </IconButton>
        </Box>
        </>
    )
}