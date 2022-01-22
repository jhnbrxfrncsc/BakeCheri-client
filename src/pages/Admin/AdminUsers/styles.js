import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    container: {
        padding: "50px"
    },
    font1 : {
        fontFamily: "'Slackey', cursive",
    },
    font2 : {
        fontFamily: "'Oswald', sans-serif",
        color: "#fff"
    },
    title : {
        fontSize: "1.5em",
        fontWeight: "bold",
        color: "#f8bbd0"
    },
    font3 : {
        fontFamily: "'SedanSC'",
        fontWeight: "700",
        fontSize: "1.5em"
    },
    font4 : {
        fontWeight: "500",
        fontSize: "1.2em"
    },
    tHeader: {
        background: "#000",
        height: "100px"
    }
});

export default useStyles;