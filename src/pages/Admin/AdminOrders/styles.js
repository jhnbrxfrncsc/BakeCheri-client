import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: "50px"
    },
    heading: {
        fontSize: "2rem",
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: "1.7rem",
        color: theme.palette.text.secondary,
    },
    font1 : {
        fontFamily: "'Slackey', cursive",
    },
    font2 : {
        fontFamily: "'Oswald', sans-serif",
        color: "#fff"
    },
    font3 : {
        fontFamily: "'Slackey', sans-serif",
        color: "#fff",
        fontWeight: 400,
        fontSize: "1.5rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
        },
    },
    title : {
        fontSize: "1.5em",
        fontWeight: "bold",
        color: "#f8bbd0"
    },
    listWrapper: {
        // background: "#333",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"center",
        flexWrap: "wrap",
        minHeight: "200px",
        maxHeight: "400px",
        minWidth: "500px"
    },
    listItem: {
        // background: "#666",
        width: "50%"
    },
    orderWrapper: {
        display: "flex",
        justifyContent:"space-around"
    },
    rightSide: {
        // background: "#555",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"center",
        marginLeft: "25px",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "0px",
            width: "50%",
        }
    },
    uploadImage: {
        width: "80px",
        height: "80px",
        background: "#444",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.5s",
        borderRadius: "250px"
    },
    itemImage: {
        marginRight: "15px"
    },
    font6 : {
        fontFamily: "'Oswald'",
        fontWeight: "bolder",
        fontSize: "2em",
        marginBottom: "12px"
    },
}));


export default useStyles;