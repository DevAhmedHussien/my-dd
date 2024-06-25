import mainPhoto from '../../images/blue-ribbon-stethoscope.png';
import { Button,Box } from '@mui/material';
import noneed from '../../images/Screenshot_1.png';
import Typography from '@mui/material/Typography';

import MedWork from'./medWorkStepper/MedWork'
import Questions from './questions/Questions';
import ToggleButtons from './ToggleButtons'
// import Comment from './comment/Comment';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
// import Provider from './providerDoctor/Provider';
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import OurPriority from "../WeigtManagment/Priority/OurPriority";
import SolutionFinally from '../WeigtManagment/solution/SolutionsFinally'
import CardS from '../../resuable-component/CardS';
import ProvidersFaces from '../WeigtManagment/ProviderPricing/providersFaces';
import CardSLeft from '../../resuable-component/CardSLeft';
import img1 from "../../images/woman-with-tangled-hair.jpg"
import img2 from "../../images/fitness-girl-measuring-her-waist.jpg"
import imgW from "../../images/high-angle-medical-desk-composition.jpg"
import imgW2 from "../../images/front-view-argan-oil-arrangement.jpg"
import imgG from "../../images/7145.jpg"
import img3 from "../../images/happy-woman-looking-man-show-striptease-bedroom.jpg"

import  GlobalContext  from "../../Context/GlobalContext"

export default function Main(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
return (
<Box sx={{position:'relative'}}>
{/* <LanguageButtons/> */}
    
    <Box component ='div' 
    sx={{
        height:'96vh',
        position:'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        gap:1,
        textAlign:'center',
        padding: '163px'
        }}>
            <Box 
            sx={{ 
                backgroundImage: `url(${mainPhoto})`,
                position:'absolute', 
                backgroundRepeat: 'no-repeat', 
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                opacity:'0.8'
                }}> 
            </Box>
            <Box  
                sx={{display:'flex' , justifyContent:'center', alignItems:'center',gap:1}}>
                <img
                style={{
                    width: '30px',
                    height: '30px',
                    borderRadius:15
                }} src={noneed} alt='No - Needed'/>
                <Typography variant='h1' color={colors.primary[200]} 
                sx={{
                    fontSize:'23px'
                }}>No Insurance <span style={{color:'#3399ff'}}>Needed</span> </Typography>
            </Box>
        <Typography variant='h3' sx={{mt:5}} color={colors.primary[200]} > Healthcare for 
            <del style={{textDecoration:'line-through'}}>  Jane</del>, <del style={{textDecoration:'line-through'}}> Jone</del>,   
            <del style={{color:'#3399ff'}}>Everyone</del> .
        </Typography>
        <Typography variant='h4'  color={colors.primary[200]} >
                Upfront pricing with no hidden fees.</Typography>
            <ToggleButtons/>
        <Button variant="contained"  
            endIcon={
            <ChevronRightOutlinedIcon id='icon1' 
            sx={{position:'absolute',top:'9px',color:colors.primary[150],transition:'170ms',}}/>} 
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
        {/* </Box> */}
    </Box>
    {/* <WeightM/> */}
    <MedWork/>
    <OurPriority/>
            <SolutionFinally/>

            <CardS 
                img={img2}
                ques=' Struggling to lose weight ? '
                typ1={`If you’ve tried everything, only to see \n the number on the scale grow even larger, there is still hope.`}
                typ2={`Exclusively using FDA-approved ingredients, developed in licensed facilities, \n A&M programs offer you only high-quality solutions shown to aid weight loss. `}
                typ3={`Plus, you get access to licensed medical professionals to discuss and \nchoose the best option for your personal needs, so you can have\n the highest chance of success with our weight loss programs.  `}
                typ4={` The next step in your weight loss journey is just one click away. `}
            />

            <CardSLeft 
                img={img3}
                ques='Why Choose Viagra and Cialis? '
                typ1='Discreet Service: Confidential ordering and discreet packaging to ensure your privacy.'
                typ2='When taken daily, orally, and combined with diet and exercise, stimulant weight loss treatments can help you succeed on your weight loss journey. '
                typ3='Professional Support: Access to expert advice and consultation to find the best solution for your needs.'
                typ4='Convenience: Easy online ordering and fast delivery to your doorstep.'
            />

            <CardS 
                img={imgW2}
                ques='Types of Hair Loss Medications'
                typ1={`Minoxidil (Rogaine) is a topical treatment that promotes hair growth by improving blood flow to hair follicles.`}
                typ2={`Finasteride (Propecia) is an oral medication that reduces the levels of DHT, a hormone that causes hair follicles to shrink.`}
                typ3={`Both treatments are FDA-approved and have been shown to be effective in clinical studies.`}
                typ4={`Let's read more about these and other options available for treating hair loss.`}
            />

            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Button variant="contained"  
                    endIcon={
                        <ChevronRightOutlinedIcon id='icon1' 
                        sx={{position:'absolute',top:'9px',color:colors.primary[150],transition:'170ms',}}/>
                } 
                    sx={{
                        m:'10px auto',
                        width:'250px',
                        color:colors.primary[300],
                        textTransform:'capitalizees',
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
            </Box>
            {/* <Comment/> */}
            <ProvidersFaces/>
            <CardS 
            img={imgG}
            ques='The A&M Guarantee ? '
            typ1='100% Satisfaction Or Your Money Back'
            typ2='For the first 30 days, you get complete access to Henry programs and our providers to fully test how effective our weight loss treatments are.   '
            typ3='If you are not 100% satisfied, or you do not see adequate results within 30 days, simply request your money back and you will be refunded in full. '
            typ4='No questions asked.'
            />
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Button variant="contained"  
                    endIcon={
                        <ChevronRightOutlinedIcon id='icon1' 
                        sx={{position:'absolute',top:'9px',color:colors.primary[150],transition:'170ms',}}/>
                } 
                    sx={{
                        mt:'-73px',
                        width:'250px',
                        color:colors.primary[300],
                        textTransform:'capitalizees',
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
            </Box>
            <Questions 
                ques1='How much does the Hair Loss Treatment cost?'
                ques2='Do you accept insurance for hair loss treatments?'
                ques3='What if my insurance doesn’t cover the hair loss medication?'
                ques4='What is the most effective medication for hair loss?'
                ques5='What can I expect after I sign up for the hair loss program?'
                ques6='Why do I need a scalp examination?'
                answer1="The cost of hair loss treatment varies depending on the type and dosage of the medication prescribed. An initial consultation fee is $99, and follow-up consultations or new prescriptions cost $40. For specific medication costs, please contact pharmacy@myrocky.ca."
                answer2='Insurance coverage for hair loss treatments varies. You will need to contact your insurance provider to determine if they cover medications like minoxidil or finasteride. We can provide a detailed invoice upon request for you to submit to your insurance for reimbursement.'
                answer3='If your insurance does not cover the hair loss medication, you have the option to pay for it out of pocket. The monthly cost typically ranges from $50 to $150, depending on the medication and dosage. You can cancel your subscription at any time without penalty.'
                answer4="Minoxidil (Rogaine) and finasteride (Propecia) are the most effective medications for hair loss. Minoxidil is a topical solution that promotes hair growth, while finasteride is an oral medication that reduces DHT levels to prevent hair loss. Both are FDA-approved and have been shown to be effective in clinical studies."
                answer5='After signing up for the hair loss program, you will have a consultation with a licensed medical professional who will review your medical history and discuss treatment options. You will receive a personalized treatment plan and ongoing support to monitor your progress and adjust the treatment as needed.'
                answer6="A scalp examination is important to determine the cause of hair loss and to ensure that the prescribed treatment is suitable for your specific condition. It helps in understanding the health of your scalp and hair follicles, which is crucial for effective treatment."
            />

\
</Box>
)
}