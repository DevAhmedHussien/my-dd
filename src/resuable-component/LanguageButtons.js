import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import  GlobalContext  from "../Context/GlobalContext"
import { useTheme } from '@mui/material';
import { useContext } from 'react';
import { tokens} from '../Context/ThemeContext'
const actions = [
{ icon: <p>En</p>, name: 'English',value:'en' },
{ icon: <p>Ar</p>, name: 'عربي' ,value:'ar'},
];
export default function LanguageButtons() {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
const  { language, setLanguage}  = useContext(GlobalContext)
return (
    <Box>
        <SpeedDial 
        sx={{ position:'fixed',
        zIndex:160,
        top:0,
        right:language ==='en'?20:1350
        }}
        ariaLabel="SpeedDial basic example"
        icon={<p>lg</p>}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={()=>{
                        setLanguage(action.value)
                    }}
                />
            ))}
        </SpeedDial>
    </Box>
);
}