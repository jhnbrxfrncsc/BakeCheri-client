import { makeStyles } from '@material-ui/styles';
import dividerImg from '../../assets/img/divider-hearts.png';

const useStyles = makeStyles(theme => ({
    root : {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#b29ddb",
        color : "#fff",
        padding: "80px 0"
    },
    font1 : {
        fontFamily: "'Slackey', cursive",
        color : "#fff",
    },
    font2 : {
        fontFamily: "'Sniglet', cursive;",
        color : "#fff"
    },
    font3 : {
        fontFamily: "'Oswald', sans-serif",
        color : "#f5f5f5",
        width: "100%"
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
        alignItems: "center",
        justifyContent: "center",
        margin: "0px",
        width: "100%",
        height: "100%"
    },
    card: {
        height: "100%",
        width: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // background: "#FFF",
        // margin: "10px"
    },
    serviceImg: {
        fontSize: "3em",
        color: "#ffeeff"
    },
}));


export default useStyles;