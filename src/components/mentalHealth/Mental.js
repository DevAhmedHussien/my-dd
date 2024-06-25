import MainProduct from "../../resuable-component/MainProduct";
import { useState,useEffect,useContext } from 'react';
import { Box ,Button ,Typography} from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { tokens } from '../../Context/ThemeContext';
import Questions from '../Main/questions/Questions';
import { useTheme } from '@mui/material';
import CardsOfPriority from "../WeigtManagment/Priority/CardsOfPriority";
import {products} from '../../data/data';
import OurPriority from "../WeigtManagment/Priority/OurPriority";
import SolutionFinally from '../WeigtManagment/solution/SolutionsFinally'
import CardS from '../../resuable-component/CardS';
import ProvidersFaces from '../WeigtManagment/ProviderPricing/providersFaces';
import CardSLeft from '../../resuable-component/CardSLeft';
import img1 from "../../images/person-suffering-from-ptsd-psychologist.jpg"
import img2 from "../../images/group-people-working-out-together-outdoors.jpg"
import imgW from "../../images/pills-package.jpg"
import imgW2 from "../../images/various-plastic-bottles-pills.jpg"
import imgG from "../../images/7145.jpg"
import  GlobalContext  from "../../Context/GlobalContext"

const Mental = ()=>{
    const [product ,setProduct] = useState([])
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {scrollToTop } = useContext(GlobalContext)


    // get product about mental health 
    useEffect(()=>{
        setProduct(products.mental_health)
        scrollToTop()

    },[])

    return(
        <>
        <MainProduct img={img1} title='Mental Health Support' description='100% Online' 
        smallDesc='Depression, also called major depressive disorder (MDD), is a health condition that affects how you feel, think, and function. It’s pretty common, too. It’s estimated that 1 in 15 adults are affected by depression in any given year.'/>
        <Box variant='div' sx={{mt:5}}>
            <Typography variant='h3' color={colors.primary[200]}
                sx={{textAlign:'center',fontWeight:'700'}}>
                <span style={{color:'#3399ff'}}>At A&M,</span> Your well-being
                Matters to us
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
                ques=' Struggling to improve mentality ? '
                typ1={`If you’ve tried everything, only to see \n the number on the scale grow even larger, there is still hope.`}
                typ2={`Exclusively using FDA-approved ingredients, developed in licensed facilities, \n A&M programs offer you only high-quality solutions shown to aid weight loss. `}
                typ3={`Plus, you get access to licensed medical professionals to discuss and \nchoose the best option for your personal needs, so you can have\n the highest chance of success with our weight loss programs.  `}
                typ4={` The next step in your weight loss journey is just one click away. `}
            />
            {/* <MedWork/> */}
            <CardSLeft 
            img={imgW}
            ques='What is Wellbutrin?'
            typ1='Wellbutrin is an atypical antidepressant. Unlike Celexa, it only comes as oral tablets. The following dosage forms and strengths are available: '
            typ2='The different forms of Wellbutrin — immediate-release (IR), SR, and XL — have different approved uses.'
            typ3='Wellbutrin IR and Wellbutrin SR are FDA-approved to treat depression in adults. Wellbutrin XL is FDA-approved to treat depression and prevent seasonal affective disorder (SAD) in adults.'
            typ4='Lets read moree about that ... '
            />
            <CardS 
            img={imgW2}
            ques='How are Celexa and Wellbutrin administered?? '
            typ1='When starting Celexa or Wellbutrin, your healthcare provider will typically start you at a low dose, then raise your dose if needed. They can both be taken with or without food.  '
            typ2='Celexa is an IR medication that’s taken once daily. Taking 20 mg every day is a common starting dose, but some people may take up to 40 mg.  '
            typ3='On the other hand, Wellbutrin IR is dosed 2 to 3 times daily. The longer lasting versions of Wellbutrin, Wellbutrin SR and Wellbutrin XL, are taken 1 to 2 times daily, depending on the product. Specific doses depend on the type of Wellbutrin that’s being taken,'
            typ4=' but maximum doses range from 400 mg/day to 450 mg/day.'
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
               ques1='What is anxiety?'
               ques2='Do I need anxiety treatment?'
               ques3='What anxiety treatments are available?'
               ques4='What is depression?'
               ques5='How can depression be addressed?'
               ques6='What kinds of depression treatments are available?'
               answer1="Anxiety is your body's response to stress. It's a common experience, but if you find yourself dealing with persistent, overwhelming worry or fear that disrupts your daily life, you might have an anxiety disorder."
               answer2='If your anxiety feels uncontrollable, persistent, or hinders your ability to function, seeking treatment can be beneficial. Frequent panic attacks or intense worry may also indicate the need for treatment. Consult a healthcare provider to discuss anxiety treatment options.'
               answer3='We provide various Health Canada approved medications prescribed by licensed Canadian healthcare professionals. These daily medications are intended for managing long-term anxiety. We also provide a hub where you can find self-help resources.'
               answer4='Depression, also known as major depressive disorder, presents with a range of symptoms. These can include prolonged feelings of sadness, disinterest in daily activities, disrupted sleep patterns, and emotions such as guilt or a sense of purposelessness.'
               answer5='Depression can be treated through various approaches. This includes, but not limited to, medications, therapy or speaking to a licensed specialist. Our experts will guide you down the right path.'
               answer='Every person is treated with a personalized plan to match their needs. We provide different treatment options to guide you after your assessment. We provide various Health Canada approved medications prescribed by licensed Canadian healthcare professionals. These daily medications are intended for managing long-term depression. We also provide a hub where you can find self-help resources.'
            />
        </>
    )
}
export default Mental ;