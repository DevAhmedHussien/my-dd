  
    import React, { useContext, useState } from 'react';
    import { useForm } from 'react-hook-form';
    import { Link, useNavigate } from 'react-router-dom';
    import { Box, TextField, Button, Typography, Paper, Container, IconButton, InputAdornment } from '@mui/material';
    import { createUserWithEmailAndPassword } from "firebase/auth";
    import { auth } from "../../firebase";
    import { yupResolver } from '@hookform/resolvers/yup';
    import { loginSchema } from './validations'; // Ensure this path is correct
    import GlobalContext from "../../Context/GlobalContext";
    import { useTheme } from '@mui/material';
    import { tokens } from '../../Context/ThemeContext';
    import Visibility from '@mui/icons-material/Visibility';
    import VisibilityOff from '@mui/icons-material/VisibilityOff';
    import "./login.css"
    import img from "../../images/Screenshot 2024-06-24 at 11.12.41 PM.png"
    const Register = () => {
        const theme = useTheme();
        const colors = tokens(theme.palette.mode);
        const context = useContext(GlobalContext);
        const { showSnackbar } = context;
        const navigate = useNavigate();
        const { register, handleSubmit, formState: { errors } } = useForm({
            resolver: yupResolver(loginSchema)
        });
    
        const [showPassword, setShowPassword] = useState(false);
    
    
        const handleClickShowPassword = () => setShowPassword((show) => !show);
        const handleMouseDownPassword = (event) => {
            event.preventDefault();
        };
    
        const onSubmit = (data) => {
            console.log('Register Data:', data);
            createUserWithEmailAndPassword(auth, data.email , data.password)
            .then((auth) => {
              if (auth) {
                navigate("/");
                showSnackbar('Register successful!', 'success');
              }
            })
            .catch((error) => {
                showSnackbar('Register Unsuccessful!', 'error');
            });
        }

    
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
                            border: errors.password || errors.email ? '1px solid red' : '1px solid #3399ff'
                        }
                    }}
                >
                    <img src={img} alt='' 
                        style={{
                            width:'100px',
                            borderRadius:'10px'
                        }}/>
                    <Typography variant="h4" component="h2" gutterBottom color={colors.primary[200]}>Register</Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                    <Box style={styles.inputGroup}>
                            <TextField
                                placeholder="Name"
                                variant="outlined"
                                label="Name"
                                type="text"
                                id="text"
                                {...register('name')}
                                fullWidth
                                // error={!!errors.email}
                                // helperText={errors.email ? errors.email.message : ''}
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
                        <Box style={styles.inputGroup}>
                            <TextField
                                placeholder="Password"
                                variant="outlined"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                {...register('password')}
                                fullWidth
                                error={!!errors.password}
                                helperText={errors.password ? errors.password.message : ''}
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
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                sx={{color:'black',marginRight:'-4px'}}
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                       <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:2}}>
                        <Button type="submit" variant="contained" color="primary" style={styles.button}>Register Now</Button>
                        <Link to='/login'><Button variant="contained" color="primary" style={styles.button}>login</Button></Link>
                            
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
    
    export default Register;
    