import { makeStyles } from '@material-ui/styles';
import dividerImg from '../../assets/img/divider-hearts.png';

const useStyles = makeStyles(theme => ({
    root : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px"
    },
    font1 : {
        fontFamily: "'Slackey', cursive",
        zIndex: -999,
    },
    font2 : {
        fontFamily: "'Sniglet', cursive;",
        
    },
    font3 : {
        fontFamily: "'Oswald', sans-serif",
        color: "#000"
    },
    title: {
        fontWeight: "bold",
        color: "#f8bbd0",
        fontSize: "1.5em"
    },
    divider : {
        backgroundImage: `url(${dividerImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "25px",
        margin: "16px 0"
    },
    gridContainer : {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        },
    },
    card: {
        display: "flex",
        flexWrap: "wrap",
        width: "250px",
        height: "120px",
        margin: "5px 100px",
        padding: "10px",
        transition: "all 1s ease",
        [theme.breakpoints.down('md')]: {
            margin: "5px 30px",
            width: "30%",
        },
        [theme.breakpoints.down('sm')]: {
            width: "50%",
            margin: "0px",
        },
    },
    serviceImg: {
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "6em",
        width: "6em",
        [theme.breakpoints.down('md')]: {
            height: "6em",
            width: "5em"
        },
        [theme.breakpoints.up('lg')]: {
            width: "5em"
        }
    },
    rightSide: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: "20px",
        fontSize: "5em"
    },
}));


export default useStyles;