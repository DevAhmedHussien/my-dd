import {useEffect,useContext} from 'react';
import MainProduct from "../../resuable-component/MainProduct";
import { Box ,Button ,Typography} from '@mui/material';
import { tokens } from '../../Context/ThemeContext';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { useTheme } from '@mui/material';
import Questions from '../Main/questions/Questions';
import CardS from '../../resuable-component/CardSLeft';
import CardsOfPriority from '../WeigtManagment/Priority/CardsOfPriority';
import {products} from '../../data/data';
import imgG from "../../images/7145.jpg"
import  GlobalContext  from "../../Context/GlobalContext"

 const Products = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {scrollToTop } = useContext(GlobalContext)

    useEffect(()=>{
        scrollToTop()
    },[])
    return (
        <>
         <MainProduct 
         img={imgG}
          title='All Products' 
          description='Online 100%' 
          smallDesc = {`A&M is creating generic medicine for our customer – No Insurance Needed.`}/>
        
        <Box variant='div' sx={{mt:5}}>
            <Typography variant='h3' color={colors.primary[200]}
                sx={{textAlign:'center',fontWeight:'700'}}>
                <span style={{color:'#3399ff'}}>At A&M,</span> Our Sexual Health Products
            </Typography>
            <Typography variant='h5' 
                sx={{textAlign:'center',fontWeight:'500',mt:1}}
                color={colors.primary[900]}>
                 The best pharmacy that get your needs
            </Typography>
            <Box sx={{mt:10,display:'flex',justifyContent:'center',alignItem:'center',gap:1}}>
               {products.sex.map((p) => {
                return (
                    <CardsOfPriority key={p.id}  title={p.title} description={p.description}
                    img={p.img} ich="flex" ch="block"
                    item={p}/>
                )
               })}
            </Box>
        </Box>
        <Box variant='div' sx={{mt:5}}>
            <Typography variant='h3' color={colors.primary[200]}
                sx={{textAlign:'center',fontWeight:'700'}}>
                <span style={{color:'#3399ff'}}>At A&M,</span> Our weight loss Products
            </Typography>
            <Typography variant='h5' 
                sx={{textAlign:'center',fontWeight:'500',mt:1}}
                color={colors.primary[900]}>
                 The best pharmacy that get your needs
            </Typography>
            <Box sx={{mt:10,display:'flex',justifyContent:'center',alignItem:'center',gap:1}}>
               {products.weight_loss.map((p) => {
                return (
                    <CardsOfPriority key={p.id}  title={p.title} description={p.description}
                    img={p.img} ich="flex" ch="block"
                    item={p}/>
                )
               })}
            </Box>
        </Box>
        <Box variant='div' sx={{mt:5}}>
            <Typography variant='h3' color={colors.primary[200]}
                sx={{textAlign:'center',fontWeight:'700'}}>
                <span style={{color:'#3399ff'}}>At A&M,</span> Our Hair loss Products
            </Typography>
            <Typography variant='h5' 
                sx={{textAlign:'center',fontWeight:'500',mt:1}}
                color={colors.primary[900]}>
                 The best pharmacy that get your needs
            </Typography>
            <Box sx={{mt:10,display:'flex',justifyContent:'center',alignItem:'center',gap:1}}>
               {products.hair_loss.map((p) => {
                return (
                    <CardsOfPriority key={p.id}  title={p.title} description={p.description}
                    img={p.img} ich="flex" ch="block"
                    item={p}/>
                )
               })}
            </Box>
        </Box>
        <Box variant='div' sx={{mt:5,}}>
            <Typography variant='h3' color={colors.primary[200]}
                sx={{textAlign:'center',fontWeight:'700'}}>
                <span style={{color:'#3399ff'}}>At A&M,</span> Our Mental Health Products
            </Typography>
            <Typography variant='h5' 
                sx={{textAlign:'center',fontWeight:'500',mt:1}}
                color={colors.primary[900]}>
                 The best pharmacy that get your needs
            </Typography>
            <Box sx={{mt:10,display:'flex',justifyContent:'center',alignItem:'center',gap:1,flexWrap:'wrap'}}>
               {products.mental_health.map((p) => {
                return (
                    <CardsOfPriority key={p.id}  title={p.title} description={p.description}
                    img={p.img} ich="flex" ch="block"
                    item={p}/>
                )
               })}
            </Box>
        </Box>
        
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
export default Products ;