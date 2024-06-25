import { Box, Button, Typography,TextField } from "@mui/material";
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import SendIcon from '@mui/icons-material/Send';
    
export default function Inner(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box
        variant='div'
        sx={{
            margin:'-50px 0 10px',
            display: "flex",
            justifyContent:'center',
            alignItem:'start',
            gap:1,
        }}
        >
        <TextField sx={{'& .MuiInput-underline:before': { borderBottomColor: colors.primary[300] },}}
            style={{marginTop:10,width:500 ,color:colors.primary[200] ,
            overflowY:'hidden'}} 
            name="user_email"
            id="standard-textarea"
            label="Your Email"
            placeholder="Your Email"
            multiline
            variant="standard"
            inputProps={{
                style: { height:'30px',Width:500 , }}}
            InputLabelProps={{
                style: { color:colors.primary[200]},
            }}
                        />
            <Button variant="contained"  
                        endIcon={<SendIcon id='icon1' 
                        sx={{position:'absolute',top:'9px',color:colors.primary[150],
                        transition:'170ms',}}/>} 
                            sx={{ 
                                mt:'15px',
                                position :"relative", 
                                background: `linear-gradient(to right bottom, #007fff, #3399ff 140%)`,mt:'25px',
                                boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                                display: 'flex',textTransform: 'capitalize',width:150,
                                transition:'1700ms',
                                color:'white',
                                fontWeight:600,
                                    '&:hover ': {
                                    backgroundColor:'white !important' ,
                                    // mb:1,
                                },
                                    '&:hover #icon1': {
                                        marginLeft:'5px'
                                },'&:active': {
                                    boxShadow: 'none',
                                    backgroundColor: 'black',
                                }}}
                                type="submit" value="Send">subscribe
                        </Button>
        </Box>
    )
}