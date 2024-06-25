import { useState,useEffect,useContext } from 'react';
import { Box ,Button ,Typography} from '@mui/material';
// import MainPricing from './Main/MainPricing';
// import WPrograms from './variants/WPrograms';
import OurPriority from './Priority/OurPriority'
import SolutionFinally from './solution/SolutionsFinally'
import MedWork from '../Main/medWorkStepper/MedWork';
import Questions from '../Main/questions/Questions';
import CardS from '../../resuable-component/CardS';
import { tokens } from '../../Context/ThemeContext';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { useTheme } from '@mui/material';
import ProvidersFaces from './ProviderPricing/providersFaces';
import CardSLeft from '../../resuable-component/CardSLeft';
import CardsOfPriority from './Priority/CardsOfPriority';
import {products} from '../../data/data';
import MainProduct from '../../resuable-component/MainProduct';
import img1 from "../../images/young-man-holding-rubber-sport-dark-blue-wall.jpg"
import img2 from "../../images/fitness-girl-measuring-her-waist.jpg"
import imgW from "../../images/pills-forming-arrow (1).jpg"
import imgW2 from "../../images/various-plastic-bottles-pills.jpg"
import imgG from "../../images/7145.jpg"
import  GlobalContext  from "../../Context/GlobalContext"
export default function Princing(){  

    const [product ,setProduct] = useState([])
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {scrollToTop } = useContext(GlobalContext)

    useEffect(()=>{
        setProduct(products.weight_loss)
        scrollToTop()
    },[])
    return(
        <>
        <Box>
            {/* <MainPricing/> */}
        <MainProduct 
            img={img1}
            title='Easy Weight Management' 
            description='Choose The Best Method That Works For You!' 
            smallDesc = {`Includes Provider & Medication Access \n No Hidden Fees – No Insurance Needed.`}/>
            <Box variant='div' sx={{mt:5}}>
            <Typography variant='h3' color={colors.primary[200]}
                sx={{textAlign:'center',fontWeight:'700'}}>
                <span style={{color:'#3399ff'}}>At A&M,</span> Our Weigt Managment Products
            </Typography>
            <Typography variant='h5' 
                sx={{textAlign:'center',fontWeight:'500',mt:1}}
                color={colors.primary[900]}>
                In clinical trials, Ozempic and Mounjaro patients with a weight-related condition and with BMI ≥30, or BMI ≥27 lost 15% and 20% of their weight on average, when paired with diet and exercise changes (compared to 2.4% and 3.1%, with diet and exercise alone).
                In Ozempic trials, participants achieved an average weight loss of 12.4% and 10.3%, over 68 weeks.
            </Typography>
            <Box sx={{mt:10,display:'flex',justifyContent:'center',alignItem:'center',gap:1}}>
               {product.map((p) => {
                return (
                    <CardsOfPriority key={p.id}  title={p.title} description={p.description}
                    img={p.img} ich="flex" ch="block"
                    item={p}/>
                )
               })}
            </Box>
            </Box>
            {/* <WPrograms/> */}
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
            {/* <MedWork/> */}
            <CardSLeft 
                img={imgW}
                ques='How GLP-1s Work ? '
                typ1='GLP-1 (glucagon-like peptide 1) weight loss treatments are named after the hormone receptor they stimulate. When injected or taken orally, GLP-1s increase insulin production and reduce your feeling of hunger.  '
                typ2='When combined with diet and exercise, GLP-1 weight loss treatments can help you succeed on your weight loss journey. '
                typ3='There are different types of GLP-1 treatments so it is best to discuss your options with a provider to find the right one for you.'
                typ4='Lets read moree about that ... '
            />
            <CardS 
                img={imgW2}
                ques='How Stimulants Work ? '
                typ1='Weight loss stimulants work by increasing neurotransmitter levels in the brain, leading to a suppressed appetite. Stimulants may also be combined with anticonvulsants which also help reduce appetite.  '
                typ2='When taken daily, orally, and combined with diet and exercise, stimulant weight loss treatments can help you succeed on your weight loss journey. '
                typ3='There are different types of stimulant treatments so it is best to discuss your options with a provider to find the right one for you.'
                typ4='Lets read moree about that ... '
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
               ques1='How much does the Weight Loss Program cost?'
               ques2='Do you accept insurance?'
               ques3='What if my insurance doesn’t cover the medication?'
               ques4='What is the most effective medication for ED?'
               ques5='What can I expect after I sign up?'
               ques6='Why do I need a metabolic lab test?'
               answer1="The Weight Loss Program consists of an initial medication consultation fee of $99. Follow up consults/new prescriptions cost $40. The cost of medication depends on what you are prescribed and the dose. For more information regarding medication costs please email pharmacy@myrocky.ca"
               answer2='To determine insurance coverage for weight loss medication (Ozempic, Mounjaro®, etc.), you will need to contact your insurance provider directly. Most insurances in Canada do not cover Ozempic or Mounjaro® for weight loss as this is off-label use. The cost of all GLP-1 medications on Rocky is separate from the initial consultation cost of $100. We can provide you with a detailed invoice upon request, which you can submit to your insurance for reimbursement purposes.'
               answer3='All medications go through extensive clinical trials and quality checks before getting approved by Health Canada. The safety and effectiveness of erectile dysfunction medications is well established, which is why it is an excellent treatment option for most men. Our online questionnaire will take into account your personal medical history and determine if these pills are right for you!'
               answer4= "If your insurance does not cover the medication, you have the option to pay for it out of pocket, typically ranging from $200 to $400 per month, depending on the specific medication. For your convenience, you can cancel your subscription at any time with no penalty."
               answer5='In general, ED treatment is well tolerated. However if side effects occur, they are usually mild and temporary. This includes headaches, flushed skin, a runny nose and upset stomach. ED medications can very rarely cause serious side effects such as priapism (a prolonged erection lasting more than 4 hours after stimulation has ended) which can result in permanent damage to your penis if not treated immediately. Other rare events include sudden loss of vision or loss of hearing.'
               answer6="The metabolic lab test is crucial for understanding your body's biology, especially concerning weight loss. It examines hormones and metabolism to determine the suitability of GLP-1 medication."
            />
            
        </Box>
        </>
    )
}