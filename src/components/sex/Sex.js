
import { useEffect,useState,useContext } from 'react';
import MainProduct from '../../resuable-component/MainProduct'
import ProductItems from './ProductsItems'
import Questions from '../Main/questions/Questions';
import LoadingComponent from '../../resuable-component/LoadingComponent';
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import { Box ,Button ,Typography} from '@mui/material';
import OurPriority from '../WeigtManagment/Priority/OurPriority'
import SolutionFinally from '../WeigtManagment/solution/SolutionsFinally'
import CardS from '../../resuable-component/CardS';
import ProvidersFaces from '../WeigtManagment/ProviderPricing/providersFaces';
import CardSLeft from '../../resuable-component/CardSLeft';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import img1 from "../../images/side-view-woman-sitting-boyfriend.jpg"
import img2 from "../../images/single-blue-softgel-capsule-pill.jpg"
import img3 from "../../images/happy-woman-looking-man-show-striptease-bedroom.jpg"
import img4 from "../../images/pink-cup-full-colorful-bean-candies.jpg"
import imgG from "../../images/7145.jpg"
import  GlobalContext  from "../../Context/GlobalContext"

export default function Sex(){

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const[isLoading , setLoading] = useState(false)
    const {scrollToTop } = useContext(GlobalContext)

    useEffect(()=>{
        scrollToTop()

    },[])
    return(
    <>
        <MainProduct 
        img={img1}
        title='We love this'
        description='mission is to empower individuals to take control of their sexual health through innovative products, trusted information, and professional support. We offer a wide range of sexual health products '
        smallDesc='Let’s face it'/>
        <Typography variant='h3' color={colors.primary[200]}
            sx={{textAlign:'center',
                fontWeight:'700'}}> 
                Which product is right for 
                <span 
                style={{color:'#3399ff'}}> you 
                </span>  
        </Typography>
        <Typography variant='h5'  
                sx={{textAlign:'center',fontWeight:'500',mt:1}} color={colors.primary[900]}>
            These treatments requires an assessment of your medical history and labwork by a MinuteMD medical provider.</Typography>
        <div>
            {isLoading ?
            <LoadingComponent />
            :
            <ProductItems/>
            }
        </div>
        <OurPriority/>
            <SolutionFinally/>
            <CardS 
            img={img2}
                ques='What is Viagra? '
                typ1={`Viagra is a well-known and highly effective oral medication used to treat erectile dysfunction. Its active ingredient, sildenafil citrate, works by increasing blood flow to the penis.`}
                typ2={`helping to achieve and maintain an erection when sexually aroused. `}
                typ3={`Key Benefits: `}
                typ4={` Starts working within 30 to 60 minutes. \n Effective for up to 4 hours \n Proven Track Record: Trusted by millions of men worldwide since its introduction.   `}
            />
            
            <CardSLeft 
            img={img4}
                ques='What is Cialis? '
                typ1='Cialis is another popular and effective oral medication for erectile dysfunction, featuring the active ingredient tadalafil. It is renowned for its long-lasting effects,  '
                typ2='offering greater flexibility and spontaneity in intimate moments.'
                typ3='Key Benefits:'
                typ4='Long-Lasting: Effective for up to 36 hours, earning it the nickname "The Weekend Pill."
                    Quick Onset: Can start working in as little as 30 minutes.
                    Flexibility: Allows for more spontaneous sexual activity without the need for precise timing. '
            />
            <CardS 
            img={img3}
                ques='Why Choose Viagra and Cialis? '
                typ1='Discreet Service: Confidential ordering and discreet packaging to ensure your privacy.'
                typ2='When taken daily, orally, and combined with diet and exercise, stimulant weight loss treatments can help you succeed on your weight loss journey. '
                typ3='Professional Support: Access to expert advice and consultation to find the best solution for your needs.'
                typ4='Convenience: Easy online ordering and fast delivery to your doorstep.'
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
               ques1='What causes ED?'
               ques2='How do ED medications work?'
               ques3='What is the safest medication for ED?'
               ques4='What is the most effective medication for ED?'
               ques5='What are the side effects of ED medications?'
               ques6='Which ED medication is best for me?'
               answer1="Erectile dysfunction can be caused by a variety of issues such as psychological distress, medical conditions or medications. Situational anxiety and stress tend to be the leading causes in younger men and may restrict blood flow to the penis at the wrong moment. As you age, ED may become persistent due to underlying problems with nerves, blood vessels or hormone production. Our online medical assessment can help establish the cause and treat your ED."
               answer2='Get the party started; the pills will do the rest. When sexually aroused, the body releases a substance called nitric oxide which works to relax the blood vessels in the penis. When the blood vessels relax, the blood rushes to the penis, leaving it hard and ready for penetration. When sexual intercourse is complete, an enzyme called PDE5 shuts this process off. ED pills work by blocking PDE5, which makes it easier for your erection to go longer and stronger.'
               answer3='All medications go through extensive clinical trials and quality checks before getting approved by Health Canada. The safety and effectiveness of erectile dysfunction medications is well established, which is why it is an excellent treatment option for most men. Our online questionnaire will take into account your personal medical history and determine if these pills are right for you!'
               answer4= "While both Sildenafil (Viagra) and Tadalafil (Cialis) are equally effective, there are a few differences. Sildenafil (Viagra) can take between 30-60 mins to work after ingestion, but sometimes can be delayed up to 2 hours with its effects lasting an average of 4 hours; food affects its effects. Tadalafil (Cialis), on the other hand, may act faster, last longer and it works regardless of when you had your last meal. With enough information, Rocky can help you find an ED medication and dosage that is right for you. Our platform provides ongoing care from our healthcare providers."
               answer5='In general, ED treatment is well tolerated. However if side effects occur, they are usually mild and temporary. This includes headaches, flushed skin, a runny nose and upset stomach. ED medications can very rarely cause serious side effects such as priapism (a prolonged erection lasting more than 4 hours after stimulation has ended) which can result in permanent damage to your penis if not treated immediately. Other rare events include sudden loss of vision or loss of hearing.'
               answer='There is no particular medication that is superior to the other; they are equally effective. However, one option vs another may have a particular advantage that is best suited for your needs. Our medical experts can help find the best treatment for each case.'
            />
    </>    
    )
}