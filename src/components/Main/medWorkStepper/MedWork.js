import * as React from 'react';
import { Button, Step ,Stepper,Typography,StepLabel,StepContent,Paper,Box} from '@mui/material';
import mainPhoto from '../../../images/doctor-nurses-special-equipment.jpg'
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const steps = [
    {
        label: 'Step 1 - Medical History ',
        description: `Complete a simple medical history form so your provider can develop the best 
        treatment plan for you. It’s fast, easy, and free.`,
        image:mainPhoto
        
    },
    {
        label: 'Step 2 - Online Visit',
        description:
        `Speak to a physician or nurse practitioner licensed to treat 
        your condition with a simple online conversation.`,
        image:mainPhoto
    },
    {
        label: 'Step 3 - Receive Meds',
        description: `Receive your medication in the mail, all programs come with free shipping directly to your door.
        Follow up with your provider any time you need assistance.`,
        image:mainPhoto
    },
];
export default function MedWork() {
const [activeStep, setActiveStep] = React.useState(0);
const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
};
const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
};
const handleReset = () => {
    setActiveStep(0);
};
//THEME
const theme = useTheme();
const colors = tokens(theme.palette.mode);
return (
<Box variant='div' sx={{height:'100%',width : '100%'}} color={colors.primary[200]} >
    <Typography variant='h3' sx={{textAlign:'center',fontWeight:'700'}}>How 
    <span style={{color:'#3399ff'}}> A&M-care </span>
    Meds Works</Typography>
    <Typography variant='h5' 
    sx={{textAlign:'center',fontWeight:'500',mt:1}} color={colors.primary[900]}>
        A&M Makes it easy to get started with no insurance required</Typography>
        <Box 
        sx={{ width: '100%' ,
        m:'70px auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        }}>
            <Stepper activeStep={activeStep} orientation="vertical" sx={{width:'72%'}}>
            {steps.map((step, index) => (
            <Step key={step.label} 
            sx={{m:'10px auto',}}

            >
                <StepLabel
                optional={
                    index === 2 ? (
                    <Typography variant="caption" color={colors.primary[200]}  >Last step</Typography>
                    ) : null
                }
                >
                <Typography content='h4' color={colors.primary[200]}  style={{
                    fontSize:'23px'
                }}>{step.label}</Typography>
                </StepLabel>
                <StepContent>
                    <Box 
                    sx={{display: 'flex', flexWrap:'wrap' ,p:2,
                    justifyContent:'space-around',
                    alignItems:'center',//gap:'30px',
                    background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
                    transition:'170ms',
                    border:'1px solid #e5eaf299',
                    borderRadius:'20px',
                    '&:hover':{ 
                        boxShadow:'rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                        border:'1px solid #3399ff'
                    }}}>
                        <Typography variant='h5' sx={{width:'50%'}}>{step.description}</Typography>
                        <img src={step.image} alt='' style={{width:'200px',height:'200px',borderRadius:'10px'}}/>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <div className='HEY' style={{display :'flex',gap:2 }}>
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 , background: `linear-gradient(to right bottom, #007fff, #3399ff 140%)`,
                                boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                                display: 'block',textTransform: 'capitalize',width:150,
                                color:'white',
                                    fontWeight:600,
                                    transition:'170ms',
                                    '&:hover': {
                                    backgroundColor:'white !important' ,
                                    // mb:1,
                                },'&:active': {
                                    boxShadow: 'none',
                                    backgroundColor: 'black',
                                }}}
                                
                            >
                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                            </Button>
                            <Button
                                disabled={index === 0}
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 , color:colors.primary[300],
                                boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                                display: 'block',textTransform: 'capitalize',
                                    fontWeight:600,
                                    transition:'170ms',
                                    '&:hover': {
                                        backgroundColor:'#e5eaf299',
                                    // mb:1,
                                },'&:active': {
                                    boxShadow: 'none',
                                    backgroundColor: 'black',
                                }}}
                            >
                                Back
                            </Button>
                        </div>
                    </Box>
                </StepContent>
            </Step>
            ))}
        </Stepper>
        {activeStep === steps.length && (
            <Paper      sx={{
                //     display: 'flex', flexWrap:'wrap' ,p:2,
                // justifyContent:'space-around',
                // alignItems:'center',//gap:'30px',
                m :'20px auto',
                p:5,
                height:'100%',
                // width:'30%',
                background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
                transition:'170ms',
                border:'1px solid #e5eaf299',
                borderRadius:'20px',
                '&:hover':{ 
                    boxShadow:'rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                    border:'1px solid #3399ff'
                }}}>
                     <Box 
                >
                        <Typography color={colors.primary[200]}>All steps completed - you&apos;re finished</Typography>
                        <Typography color={colors.primary[200]}> Did you understand our Steps ?!</Typography>
                        <Button color='error' onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            No
                        </Button>
                        <Link to={'./Form'} >
                            <Button variant=""  
                                    endIcon={
                                        <ChevronRightOutlinedIcon id='icon1' 
                                        sx={{position:'absolute',top:'9px',color:colors.primary[150],transition:'170ms',}}/>
                                } 
                                    sx={{
                                        color:colors.primary[300],
                                        textTransform:'captalize',
                                            '&:hover ': {
                                                // backgroundColor:'white !important' ,
                                                // mb:1,
                                            },
                                                '&:hover #icon1': {
                                            marginLeft:'5px'
                                                
                                            },'&:active': {
                                                boxShadow: 'none',
                                                backgroundColor: 'black',
                                            }
                                    }}
                                            type="submit" value="Send"> Get start
                            </Button>
                        </Link>
                    </Box>
            
          
            </Paper>
        )}
    </Box>
</Box>
);
}