import MainProduct from "../../resuable-component/MainProduct";
import { useState,useEffect,useContext} from 'react';
import { Box ,Button ,Typography} from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { tokens } from '../../Context/ThemeContext';
import Questions from '../Main/questions/Questions';
import { useTheme } from '@mui/material';
import CardsOfPriority from "../WeigtManagment/Priority/CardsOfPriority";
import img from '../../images/Screenshot_1.png'
import {products} from '../../data/data';
import OurPriority from "../WeigtManagment/Priority/OurPriority";
import SolutionFinally from '../WeigtManagment/solution/SolutionsFinally'
import CardS from '../../resuable-component/CardS';
import ProvidersFaces from '../WeigtManagment/ProviderPricing/providersFaces';
import CardSLeft from '../../resuable-component/CardSLeft';
import img1 from "../../images/woman-with-tangled-hair.jpg"
import img2 from "../../images/close-up-man-combing-hair.jpg"
import imgW from "../../images/high-angle-medical-desk-composition.jpg"
import imgW2 from "../../images/front-view-argan-oil-arrangement.jpg"
import imgG from "../../images/7145.jpg"
import  GlobalContext  from "../../Context/GlobalContext"

const Hair = ()=>{
    const [product ,setProduct] = useState([])
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const {scrollToTop } = useContext(GlobalContext)
    // get product about hair_loss
    useEffect(()=>{
        setProduct(products.hair_loss)
        scrollToTop()
    },[])
    return(
        <>
        <MainProduct 
            img={img1}
            title='Regrow Hair With Science' 
            description='100% Online' 
            smallDesc='180-Day money-back guarantee.'/>
        <Box variant='div' sx={{mt:5}}>
            <Typography variant='h3' color={colors.primary[200]}
                sx={{textAlign:'center',fontWeight:'700'}}>
                <span style={{color:'#3399ff'}}>At A&M,</span> Choose your Plan & Products
            </Typography>
            <Typography variant='h5' 
                sx={{textAlign:'center',fontWeight:'500',mt:1}}
                color={colors.primary[900]}>
               Our licensed healthcare practitioners are here to help you find the right treatment.
            </Typography>
            <Box sx={{mt:10,display:'flex',justifyContent:'center',alignItem:'center',gap:1,flexWrap:'wrap'}}>
                {product.map((p) => {
                return (
                    <CardsOfPriority key={p.id}  title={p.title} description={p.description}
                    img={p.img} ich="flex" ch="block"
                    button='Buy Now' item={p}/>
                )
               })}
            </Box>
            </Box>
            <OurPriority/>
            <SolutionFinally/>

            <CardS 
                img={img2}
                ques='Struggling with Hair Loss?'
                typ1={`Hair loss can be a distressing experience, but there are effective treatments available.`}
                typ2={`Our solutions include FDA-approved medications and clinically-proven treatments developed in licensed facilities to help stop hair loss and promote hair regrowth.`}
                typ3={`Plus, you get access to licensed medical professionals to discuss and choose the best treatment for your specific condition, ensuring the highest chance of success with our hair loss programs.`}
                typ4={`The next step in your journey to healthier hair is just one click away.`}
            />

            <CardSLeft 
                img={imgW}
                ques='How Hair Loss Treatments Work?'
                typ1={`Hair loss treatments work by addressing the underlying causes of hair loss, such as hormonal imbalances, nutrient deficiencies, and genetic factors.`}
                typ2={`Medications like minoxidil and finasteride are commonly used to stimulate hair growth and slow down hair loss.`}
                typ3={`When used consistently, these treatments can help you maintain and even regrow your hair over time. `}
                typ4={`Let's read more about how these treatments can benefit you.`}
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

        </>
    )
}
export default Hair;