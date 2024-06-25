import React, { useContext, useEffect, useState } from 'react';
import { Typography, Button, Box, Card } from '@mui/material';
import { useTheme } from '@mui/material';
import GlobalContext from '../../Context/GlobalContext';
import { tokens } from '../../Context/ThemeContext';
import ButtonCart from '../../resuable-component/ButtonCart';
import QuestionForm from './QuestionForm';

const style = {
  background: '#3399fe',
  borderRadius: 1,
};

const ProductDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { choosenProduct, scrollToTop, addToBasket } = useContext(GlobalContext);
  const [producte, setProducte] = useState(null);

  useEffect(() => {
    if (choosenProduct) {
      setProducte({
        ...choosenProduct,
        basePrice: choosenProduct.price,
        quantity: 1,
        type: 'generic', // Default to generic
        frequency: 'one month', // Default to one month
        tablets: 4, // Default to 4 tablets
      });
    }
    scrollToTop();
  }, [choosenProduct, scrollToTop]);

  const updatePriceSingle = (field, value) => {
    if (producte) {
      let updatedProduct = { ...producte, [field]: value };

      let basePrice;
      if (updatedProduct.type === 'generic') {
        basePrice = updatedProduct.frequency === 'one month' ? 100 : 200;
      } else if (updatedProduct.type === 'brand') {
        basePrice = updatedProduct.frequency === 'one month' ? 200 : 300;
      }

      let tabletPrice = 0;
      if (updatedProduct.tablets === 8) {
        tabletPrice = 80;
      } else if (updatedProduct.tablets === 12) {
        tabletPrice = 120;
      }

      updatedProduct.price = basePrice + tabletPrice;
      setProducte(updatedProduct);
    }
  };

  if (!producte) return null;

  return (
    <Box
      sx={{
        mt: '60px',
        p: 6,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'start',
        gap: 5,
      }}
    >
      <Box sx={{ height: '100%' }}>
        <img alt="" src={producte.img} style={{ width: 800, borderRadius: 10 ,height:500}} />
      </Box>
      <Box
        variant="div"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          height: '120%',
        }}
      >
        <Card
          key={choosenProduct.id}
          sx={{
            p: 4,
            height:500,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            borderRadius: '10px',
            transition: '170ms',
            background: 'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
            border: '1px solid #e5eaf299',
            '&:hover': {
              boxShadow: colors.primary[1100],
              border: '1px solid #3399ff',
            },
          }}
        >
          <Typography variant="h3" color={colors.primary[200]}>
            {producte.title}
          </Typography>
          <Typography variant="h5" color={colors.primary[200]} maxWidth={'295px'} sx={{ mt: 1 }}>
            {producte.description}
          </Typography>
          <Typography variant="h3" color={colors.primary[200]} maxWidth={'295px'} sx={{ mt: 1 }}>
            Instructions
          </Typography>
          <Typography variant="h5" color={colors.primary[200]} maxWidth={'295px'} sx={{ mt: 1 }}>
            {producte.instruction}
          </Typography>
        </Card>
      </Box>
      <Box  
       sx={{
        width:'70%',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        borderRadius: '10px',
        transition: '170ms',
        background: 'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
        border: '1px solid #e5eaf299',
        '&:hover': {
          boxShadow: colors.primary[1100],
          border: '1px solid #3399ff',
        },
      }}>
      <Box>
            <Typography variant="h5" sx={{ mt: 1 }} textAlign="center" color={colors.primary[200]}>
              Select Preference
            </Typography>
            <Box
              sx={{
                mt: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
              }}
            >
              <Button sx={style} onClick={() => updatePriceSingle('type', 'generic')}>
                generic
              </Button>
              <Button sx={style} onClick={() => updatePriceSingle('type', 'brand')}>
                brand
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ mt: 2 }} textAlign="center" color={colors.primary[200]}>
              Select Frequency
            </Typography>
            <Box
              sx={{
                mt: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
              }}
            >
              <Button sx={style} onClick={() => updatePriceSingle('frequency', 'one month')}>
                one month
              </Button>
              <Button sx={style} onClick={() => updatePriceSingle('frequency', 'two months')}>
                two months
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ mt: 2 }} textAlign="center" color={colors.primary[200]}>
              How Many Tablets
            </Typography>
            <Box
              sx={{
                mt: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
              }}
            >
              <Button sx={style} onClick={() => updatePriceSingle('tablets', 4)}>
                4
              </Button>
              <Button sx={style} onClick={() => updatePriceSingle('tablets', 8)}>
                8
              </Button>
              <Button sx={style} onClick={() => updatePriceSingle('tablets', 12)}>
                12
              </Button>
            </Box>
          </Box>
          <ButtonCart toWord={() => { addToBasket(producte); }} title={`${producte.price} Add to Basket`} />
      </Box>
      <Box>
        <Typography variant="h1" textAlign='center' color={colors.primary[300]}>Ask AI</Typography>
        <QuestionForm />
      </Box>
 
    </Box>
  );
};

export default ProductDetails;
