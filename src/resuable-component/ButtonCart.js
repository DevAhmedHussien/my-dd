import {Button} from '@mui/material';
import { useTheme } from '@mui/material';
import { tokens} from "../Context/ThemeContext";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useNavigate } from 'react-router-dom';
 
const ButtonCart = ({toWord,title,ich="flex"})=>{

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return(
        <>
            <Button variant=""  
                    endIcon={<LocalMallOutlinedIcon id='icon1' 
                    sx={{position:'absolute',
                    top:'8px',
                    color:colors.primary[150],
                    transition:'170ms',}}/>} 
                        sx={{ 
                            my: 2, 
                            position :"relative", 
                            background: `linear-gradient(to right bottom, #007fff, #3399ff 140%)`,
                            mt:'25px',
                            boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                            display:`${ich}`,
                            justifyContent:'center',
                            alignItems:'center',
                            textTransform: 'capitalize',
                            width:220,
                            transition:'1700ms',
                            color:'white',
                            fontWeight:600,
                                '&:hover ': {
                                backgroundColor:'white !important' ,
                                // mb:1,
                            },
                                '&:hover #icon1': {
                                    top:'2px'
                            },'&:active': {
                                boxShadow: 'none',
                                backgroundColor: colors.primary[900],
                            }}}
                            onClick={()=>{toWord()}}
                            > 
                            {title}
            </Button>
        </>
    )
}
export default ButtonCart