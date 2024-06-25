    import * as React from 'react';
    import CardsInnerAboutMe from './CardsInnerAboutMe'
    import { Typography,Box,TextField ,Button} from '@mui/material';
    import MarkunreadIcon from '@mui/icons-material/Markunread';
    import WhatsAppIcon from '@mui/icons-material/WhatsApp';
    import TelegramIcon from '@mui/icons-material/Telegram';
    import SendIcon from '@mui/icons-material/Send';
    import { useRef ,useEffect} from 'react';
    import emailjs from '@emailjs/browser';
    // import scrollReveal from "scrollreveal";
    import Snackbar from '@mui/material/Snackbar';
    import MuiAlert from '@mui/material/Alert';
    import IconButton from '@mui/material/IconButton';
    import { tokens } from '../../Context/ThemeContext';
    import { useTheme } from '@mui/material';
    import Questions from '../Main/questions/Questions';
    const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    export default function ContactMe() {

    const [formValue,setFormValue ]= React.useState({
        name:"",
        email: "",
        message: ""
    });
    const handleChangeName = (e)=>{
        setFormValue({...formValue,name:e.target.value})
    };
    const handleChangeEmail = (e)=>{
        setFormValue({...formValue,email:e.target.value})
    };
    const handleChangeMessage = (e)=>{
        setFormValue({...formValue,message:e.target.value})
    };
    //snackbar
    const [open, setOpen] = React.useState(false);
    const [type,setTYPE] =React.useState('');
    const[message,setMESSAGE] =  React.useState('');
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const email = useRef(null)
    // useEffect(() => {
    //     if (email.current )
    //         scrollReveal().reveal(email.current  , {
    //         // origin:'right',
    //         distance:'40px',
    //         duration:2000,
    //         delay:200
    //         });
    // }, []);
    const card = useRef(null)
    // useEffect(() => {
    //     if (card.current )
    //         scrollReveal().reveal(card.current  , {
    //         // origin:'left',
    //         distance:'40px',
    //         duration:2000,
    //         delay:200
    //         });
    // }, []);
    //email js 
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if(formValue.name === '' || formValue.email === '' || formValue.name === 'message'){
        setOpen(true);
        setTYPE('info')
        setMESSAGE('U have to write name and ur email')
        setFormValue({
            name:"",
            email: "",
            message: ""
        })
        }else{
        emailjs.sendForm('service_gufllpi', 'template_n3zcmlk', form.current, 'Oq8h-9gW4i-CXe746')
        .then((result) => {
            console.log(result.text);
            if(result.text==='OK'){
                setOpen(true);
                setTYPE('success')
                setMESSAGE('Your message has been sent successfully!')
                setFormValue({
                name:"",
                email: "",
                message: ""
                })
            }
        }, (error) => {
            console.log(error.text);
        });
        
        }
    
    };

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
    <Box id='contact' variant='div'>
        <Box sx={{mt:'40px'}}>
            <br/>
            <br/>
            <Typography variant='h3' color={colors.primary[200]}
            sx={{textAlign:'center',fontWeight:'700',mt:5}}> Contact <span 
            style={{color:'#3399ff'}}> A&M</span>  </Typography>
            <Typography variant='h5'  
            sx={{textAlign:'center',fontWeight:'500',mt:1}} 
            color={colors.primary[900]}>
                Get in touch
            </Typography>
        </Box>
    <Box className='ConBox'
    component="form" ref={form} onSubmit={sendEmail}
    sx={{
        m:'80px auto',
        width:'70%',
    
    '& .MuiTextField-root': 
    { m: 1, width: '25ch' }, display:'flex',flexWrap:'wrap',
    justifyContent:'center',gap:20,alignItems: 'center'
    }}
    noValidate
    autoComplete="off">
        <Box className='ConCardBox' ref={ card }
            sx={{display:'flex',flexDirection:'column', flexWrap:'wrap',justifyContent:'center', gap:2 }} >
            <Box>
            <CardsInnerAboutMe icon ={
            <IconButton target='_blank' sendM='Send a message' href='mailto:a.abdelmaskoud@mail.ru' >
                <MarkunreadIcon sx={{fontSize:35 ,color:colors.primary[300]}} />
            </IconButton>} 
            title='E-mail' perif='a.abdelmaksoud@mail.ru'
            sendM='Send a message' href='mailto:a.abdelmaskoud@mail.ru'
            />
            </Box>
            <Box>
            <CardsInnerAboutMe icon ={
                <IconButton   sendM='Send a message' href='https://wa.me/79821313577?' target='_blank' >
                <WhatsAppIcon  sx={{fontSize:35 ,color:colors.primary[300]}} /> 
                </IconButton>}
                title='WhatsApp' perif='+7(982)131-35-77' 
                sendM='Send a message' href='https://wa.me/79821313577?'
                />
            </Box>
            <Box>
                <CardsInnerAboutMe icon ={
                <IconButton   sendM='Send a message' href='https://t.me/mango12198' target='_blank' >
                <TelegramIcon  sx={{fontSize:35 ,color:colors.primary[300]}}  />
                </IconButton>} 
                    title='Telegram' perif='Ahmed Hussien'
                    sendM='Send a message' href='https://t.me/mango12198'
                    />
            </Box>
        </Box>
        <Box  ref={email} 
        sx={{display:'flex',
        flexDirection:'column',
        alignItems:'start',
        gap:5}}>
            <TextField sx={{'& .MuiInput-underline:before': { borderBottomColor: colors.primary[300] },
    }}
            style={{width:500,
                background:'',
                color:colors.primary[900]}} 
                onChange={handleChangeName}
            name="user_name"
            id="standard-textarea"
            label="Full name"
            placeholder="Full name"
            multiline
            variant="standard"
            inputProps={{
                style: {color:colors.primary[200],background:'',},
                }}
            InputLabelProps={{
                style: { color: colors.primary[200] ,background:''},
            }}
            />
            <TextField sx={{'& .MuiInput-underline:before': { borderBottomColor: colors.primary[300] },}}
            style={{width:500 ,color:colors.primary[200] ,}} onChange={handleChangeEmail}
            name="user_email"
            id="standard-textarea"
            label="Your Email"
            placeholder="Your Email"
            multiline
            variant="standard"
            inputProps={{
                style: { width:'300px' ,color:colors.primary[200] }}}
            InputLabelProps={{
                style: { color:colors.primary[200]},
            }}
            />
            <TextField  className='INP' 
            sx={{'& .MuiInput-underline:before': { borderBottomColor: colors.primary[300] },}}
            style={{width:500}}
            onChange={handleChangeMessage}
            name="message"
            id="standard-multiline-static"
            label="Your Message"
            placeholder="Your Message"
            multiline
            rows={4}
            defaultValue="Name Project"
            variant="standard"
            inputProps={{
                style: { width:'300px' ,color:colors.primary[200]},
                }}
            InputLabelProps={{
                style: { color: colors.primary[200] },
            }}
            />
            <Button variant="contained"  
            endIcon={<SendIcon id='icon1' sx={{position:'absolute',top:'10px',color:colors.primary[150],transition:'170ms',}}/>} 
                sx={{ my: 2, 
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
                    type="submit" value="Send">Get Started
            </Button>
        </Box>
    </Box>
        <Questions/>
    {/* snack bar  */}
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
            {message}
        </Alert>
        </Snackbar>
    </Box>
    );
    }