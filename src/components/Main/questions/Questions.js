import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Question from './Question';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
export default function Questions({
    ques1,
    ques2,
    ques3,
    ques4,
    ques5,
    ques6,
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box variant='div'
        sx={{
            mt:5
        }}>
            <Typography variant='h3' sx={{textAlign:'center',fontWeight:'700'}} color={colors.primary[200]}>
                Frequently Asked 
                <span style={{color:'#3399ff'}}> Questions</span> 
            </Typography>
            <Typography variant='h5'  sx={{textAlign:'center',fontWeight:'500',mt:1}} color={colors.primary[900]}>
            More questions and answers on 
                <span style={{textTransform:'underline'}}> our FAQ page</span>
            </Typography>
            <Box variant='div'
                sx={{
                    m:'70px auto',
                    width:'80%',
                }}>
                    <Question ques={ques1} ans={answer1}/>
                    <Question ques={ques2} ans={answer2}/>
                    <Question ques={ques3} ans={answer3}/>
                    <Question ques={ques4} ans={answer4}/>
                    <Question ques={ques5} ans={answer5}/>
                    <Question ques={ques6} ans={answer6}/>
            </Box>
        </Box>
    );
    }