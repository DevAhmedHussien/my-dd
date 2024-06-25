import { Link, useNavigate } from 'react-router-dom';
import * as React from 'react';
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import {Box,Toolbar,IconButton,Typography,Menu,Button,Container,MenuItem,Grow} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { ColorModeContext,tokens} from '../../Context/ThemeContext'
import  GlobalContext  from "../../Context/GlobalContext"
import { useTheme } from '@mui/material';
import BlockNav from './BlockNav';
import Tooltip from '@mui/material/Tooltip';
import {auth} from "../../firebase"
import PersonPinIcon from '@mui/icons-material/PersonPin';
import img from "../../images/Screenshot 2024-06-24 at 11.12.41 PM.png"

// pages routing  
const pages = ['sexual-Health','hair-loss','weight-Loss','mental-Health','all-products']
const settinggs = ['Profile', 'Account', 'Dashboard', 'Logout'];

// setting of user 

function DrawerAppBar() {
    const navigate = useNavigate()
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const { state ,showSnackbar } = useContext(GlobalContext)
    const { toggleColorMode , mode } = useContext(ColorModeContext)
    const [settings,setSettings] = React.useState(settinggs)

    React.useEffect(()=>{
        if(state.user !== null) setSettings(settinggs) 
        else setSettings(['Sign In'])
    },[state])

const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);
const [showButtons, setShowButtons] = React.useState({action:false, name:''});

const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
};
const handleCloseNavMenu = () => {
        setAnchorElNav(null);
};
const handleCloseUserMenu = () => {
        setAnchorElUser(null);
};

   
    // for sign out 
    const handleAuthentication = () => {
        auth.signOut();
        showSnackbar('Log Out Successful!', 'success');
      };
return (
    <AppBar position="static"  sx={{background: colors.primary[100] , width : '100%',
    position: 'fixed',
    top: 0, //'#638889' 
    zIndex:10
    }}>
    <Container sx={{}}>
        <Toolbar disableGutters>
        {/* <AdbIcon sx={{ color:'#3399ff' ,display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
        {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{ 
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            // color: '#3399ff',
            textDecoration: 'none',
            }}
        > */}
            <img src={img} alt='' 
                style={{
                    cursor:'pointer',
                    marginRight:10,
                    width:'50px',
                    borderRadius:'10px'
            }}
            onClick={()=>{navigate('/')}}/>
        {/* </Typography> */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            >
            <MenuIcon key='menu-1' sx={{color:'black'}}/>
            </IconButton>
            <Menu
            sx={{ 
                display: { xs: 'block', md: 'none' },
            }}
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
        >
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
            ))}
        </Menu>
        </Box>
        {/* <AdbIcon sx={{color:'#3399ff', display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
        {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
            color:'#3399ff',
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            // color: 'inherit',
            textDecoration: 'none',
            }}
        >
            A&M-Care
        </Typography> */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <> 
                <Link key={page} to={`/${page}`}>
                    <Button  
                        // key={page}
                        onClick={handleCloseNavMenu}
                        onMouseEnter={() => setShowButtons({action:true,name:page})}
                        onMouseLeave={() => setShowButtons({action:false,name:''})}
                        sx={{ 
                        my: 2,color:colors.primary[200], 
                        display: 'block',textTransform: 'capitalize',
                        transition:'170ms',
                        '&:hover': {
                        backgroundColor:'#e5eaf299',
                        mb:1,
                        fontWeight:600
                    },'&:active': {
                        boxShadow: 'none',
                        backgroundColor: 'black',
                    } }}
                    >
                             {page.replace('-',' ')}
                    </Button>
                </Link>
                <BlockNav 
                    showButtons={showButtons}
                    setShowButtons={setShowButtons}
                />
                </>
               
                
            ))}
        </Box>
        <Box sx={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',gap:1 }}>
        <Box 
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
            width: '30px',
            height: '30px', 
            border:'1px solid e5eaf299',
            borderRadius: '5px',
            cursor:'pointer',
            boxShadow: '0px 0px 4px 1px silver',
            transition:'170ms',
            '&:hover': {
                backgroundColor:'#e5eaf299',
                mb:1,
            }}}
            onClick={()=>{toggleColorMode()}} >   
            { mode === "dark" ? 
            <NightsStayOutlinedIcon 
                    sx={{fontSize:'20px',color:colors.primary[300]}}
                />
                :
                <WbSunnyOutlinedIcon 
                sx={{fontSize:'20px', color:colors.primary[300]}} 
            />
                }
                
        </Box>
        <Link to={'/Cart'}>
            <Box  
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', 
                width: '30px',
                height: '30px', 
                border:'1px solid e5eaf299',
                borderRadius: '5px',
                cursor:'pointer',
                boxShadow: '0px 0px 4px 1px silver',
                transition:'170ms',
                position:'relative',
                '&:hover': {
                    backgroundColor:'#e5eaf299',
                    mb:1,
                }}}>
                <ShoppingBagOutlinedIcon sx={{fontSize:'20px', color:'#3399ff'}}/>
                <Typography variant='span' 
                    display={state.basket.length ===  0? 'none':'inline-block'}
                    sx={{position:'absolute',
                    color:colors.primary[300],
                    backgroundColor: colors.primary[600],
                    borderRadius:16,
                    bottom:16,
                    right:1,
                    fontSize: '10px',
                    fontWeight:500
                    }}>{state.basket.length}</Typography>
            </Box>
        </Link>
        <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}    
            sx={{ 
                width: '30px',
                height: '30px',
                border:'1px solid e5eaf299',
                borderRadius: '5px',
                cursor:'pointer',
                boxShadow: '0px 0px 4px 1px silver',
                transition:'170ms',
                position:'relative',
                '&:hover': {
                    backgroundColor:'#e5eaf299',
                    mb:1,
                }}}>
                <PersonPinIcon sx={{fontSize:'20px', color:'#3399ff'}}/>
            </IconButton>
            </Tooltip>
            <Menu
            sx={{ mt: '45px'}}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
       {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
            {setting === 'Logout' ? (
            <Link to='/'>
                <Typography 
                    sx={{textAlign:"center",color:colors.primary[100]}}
                    onClick={handleAuthentication}>Logout</Typography>
            </Link>
            ) : setting === 'Sign In' ? (
            <Link to='/login'>
                <Typography textAlign="center" color={ colors.primary[100]}>Sign In</Typography>
            </Link>
            ) : (
            <Typography textAlign="center">{setting}</Typography>
            )}
        </MenuItem>
        ))}

            </Menu>
        </Box>
        <Typography 
        sx={{
            color: colors.primary[200],
            width:66,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        }}>
        {state.user?state.user:'Guest'}</Typography>
       
        </Box>
        {/* <LanguageButtons/> */}
        </Toolbar>
    </Container>
    </AppBar>
);
}
export default DrawerAppBar;