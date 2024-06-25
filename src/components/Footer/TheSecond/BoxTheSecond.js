import { Box, Button, Typography } from "@mui/material";
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

export default function BoxTheSecond(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const pages = ['sexual-Health','hair-loss','weight-Loss','mental-Health','contact','about']
    const products = ['Viagra','Cialis','Ozempic','Stopping Hair Loss','Bupropion XL','Fluoxetine']
    
    return(
        <>
        <Box  sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'start',
            // flexDirection:'column',
            gap:10
        }}>
           
        <Box 
        sx={{
            // width:'20%',
            display:'flex',
            flexDirection:'column',
            gap:1
        }}>
            <Typography variant="h4" 
            sx={{
                fontWeight:700,
                lineHeight:1,
                // textAlign:'START'
            }}> 
              Pages
            </Typography>
            {pages.map((page) => (
                <Link key={page} to={`/${page}`}>
                    <Button  
                        sx={{ 
                            display: 'block',
                            textTransform: 'capitalize',
                            transition:'170ms',
                            '&:hover': {
                                backgroundColor:'#e5eaf299',
                                mb:1,
                                fontWeight:600
                            },
                            '&:active': {
                                boxShadow: 'none',
                                backgroundColor: 'black',
                            } 
                        }}
                    >
                        {page.replace('-',' ')}
                    </Button>
                </Link>
                ))
                }
        </Box>
        <Box 
        sx={{
            // width:'20%',
            display:'flex',
            flexDirection:'column',
            gap:1
        }}>
            <Typography variant="h4" 
            sx={{
                fontWeight:700,
                lineHeight:1,
            }}> 
              Products
            </Typography>
            {products.map((page) => (
                <Link key={page} to={`/product/${page}`}>
                    <Button  
                        sx={{ 
                            display: 'block',
                            textTransform: 'capitalize',
                            transition:'170ms',
                            '&:hover': {
                                backgroundColor:'#e5eaf299',
                                mb:1,
                                fontWeight:600
                            },
                            '&:active': {
                                boxShadow: 'none',
                                backgroundColor: 'black',
                            } 
                        }}
                    >
                        {page.replace('-',' ')}
                    </Button>
                </Link>
                ))
                }
        </Box>
        </Box>
       
        </>
    )
}

