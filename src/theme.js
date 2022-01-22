import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#b29ddb',
            main: '#b29ddb',
            dark: '#b29ddb',
            contrastText: '#fff',
        },
        secondary: {
            light: '#f8bbd0',
            main: '#f8bbd0',
            dark: '#f8bbd0',
            contrastText: '#000',
        },
        type: "dark"
    },
    typography : {
        fontFamily : [
            'Oswald', 
            'SedanSC', 
            'Sniglet',
            'sans-serif', 
            'cursive'
        ].join(','),
    }
});

export default theme;