import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Paper, Container } from '@mui/material';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './validations'; // Ensure this path is correct
import GlobalContext from "../../Context/GlobalContext";
import { useTheme } from '@mui/material';
import { tokens } from '../../Context/ThemeContext';
import img from "../../images/Screenshot 2024-06-24 at 11.12.41 PM.png"

const ForgotPassword = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const context = useContext(GlobalContext);
    const { showSnackbar } = context;
    const { register, handleSubmit, formState: { errors } } = useForm(
    //     {
    //     resolver: yupResolver(loginSchema)
    // }
);

    const onSubmit = (data) => {
        sendPasswordResetEmail(auth, data.email.toLowerCase())
            .then(() => {
                console.log(data)
                showSnackbar('Password reset email sent!', 'success');
            })
            .catch((error) => {
                showSnackbar('someThing is wrong', 'error');
            });
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3}
                sx={{
                    margin: '100px auto',
                    // height: 450,
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    borderRadius: '10px',
                    background: 'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
                    border: '1px solid #e5eaf299',
                    transition: '170ms',
                    cursor: 'pointer',
                    '&:hover': {
                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                        border: errors.email ? '1px solid red' : '1px solid #3399ff'
                    }
                }}
            >
                <img src={img} alt='' 
                    style={{
                        width:'100px',
                        borderRadius:'10px'
                    }}/>
                <Typography variant="h4" component="h2" gutterBottom color={colors.primary[200]}>Reset Password</Typography>
                <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                    <Box style={styles.inputGroup}>
                        <TextField
                            placeholder="E-mail"
                            variant="outlined"
                            label="Email"
                            type="email"
                            id="email"
                            {...register('email')}
                            fullWidth
                            error={!!errors.email}
                            helperText={errors.email ? errors.email.message : ''}
                            sx={styles.textField}
                            InputLabelProps={{
                                sx: {
                                    color: colors.primary[300],
                                    '&.Mui-focused': {
                                        color: colors.primary[900],
                                    },
                                },
                            }}
                            inputProps={{
                                style: {
                                    color: 'black',
                                },
                            }}
                        />
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:2}}>
                        <Link to='/login'><Button variant="contained" color="primary" style={styles.button}>login</Button></Link>
                        <Button type="submit" variant="contained" color="primary" style={styles.button}>Reset Password</Button>
                    </Box>
                </form>
            </Paper>
           
        </Container>
    );
};

const styles = {
    form: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    textField: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#3399ff',
            },
            '&:hover fieldset': {
                borderColor: '#007BFF',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#0056b3',
            },
        },
    },
    button: {
        marginTop: '20px',
        padding: '10px',
        background: '#0283d6',
        color: 'white'
    }
};

export default ForgotPassword;
