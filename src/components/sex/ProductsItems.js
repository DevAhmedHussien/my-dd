import { Typography, Button, Box, Card } from '@mui/material';
import { useTheme } from '@mui/material';
import { products } from '../../data/data';
import { useContext } from 'react';
import { tokens } from '../../Context/ThemeContext';
import  GlobalContext  from "../../Context/GlobalContext"
import ButtonCart from '../../resuable-component/ButtonCart';

 const style = {
    background:' #3399fe',
    borderRadius: 1
  }

export default function ProductItems() {

  // styling from theme provide   
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // call functions from context 
  const context = useContext(GlobalContext)
  const { updatePrice, productStates ,addToBasket} = context
  

  return (
    <>
      <Box
        variant="div"
        sx={{
          mt: 10,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          height: '100%',
        }}>
        {products.sex.map(card => {
          const product = productStates.find(p => p.id === card.id);
          return (
            <Card
              key={card.id}
              sx={{ 
                p:4,
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                gap:2,
                borderRadius:'10px',
                transition:'170ms',
                background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
                border:'1px solid #e5eaf299',
                '&:hover':{ 
                    // boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                    boxShadow:colors.primary[1100],
                    border:'1px solid #3399ff'
                }}}>
              <Typography variant="h3"color={colors.primary[200]}> {card.title} </Typography>
              <Typography variant="h5" color={colors.primary[200]} maxWidth={'295px'} sx={{ mt: 1 }}> {card.description} </Typography>
              <Box
                sx={{
                  mt: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 3,
                }}>
                <img src={card.img} alt='images' style={{width:300,height:200,borderRadius:10}}/>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ mt: 1 }} textAlign="center" color={colors.primary[200]}> Select Preference</Typography>
                <Box
                  sx={{
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 3,
                  }}>
                  <Button sx={style}  onClick={() => updatePrice(card.id, 'type', 'generic')}> generic </Button>
                  <Button sx={style} onClick={() => updatePrice(card.id, 'type', 'brand')}> brand </Button>
                </Box>
              </Box>
              <Box>
                <Typography variant="h5"sx={{ mt: 2 }} textAlign="center" color={colors.primary[200]}> select frequency</Typography>
                <Box
                  sx={{
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 3,
                  }}>
                  <Button  sx={style} onClick={() => updatePrice(card.id, 'frequency', 'one month')}>one month</Button>
                  <Button  sx={style} onClick={() => updatePrice(card.id, 'frequency', 'two month')}>two months</Button>
                </Box>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ mt: 2 }} textAlign="center" color={colors.primary[200]} > how many tablets</Typography>
                <Box
                  sx={{
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 3,
                  }}>
                  <Button  sx={style} onClick={() => updatePrice(card.id, 'tablets', 4)}>4</Button>
                  <Button  sx={style} onClick={() => updatePrice(card.id, 'tablets', 8)}>8</Button>
                  <Button  sx={style} onClick={() => updatePrice(card.id, 'tablets', 12)}>12</Button>
                </Box>
              </Box>
              <ButtonCart toWord={()=>{addToBasket(product)}} title = {`${product.price} Add to Basket`} />
            </Card>
          );
        })}
      </Box>
    </>
  );
}
