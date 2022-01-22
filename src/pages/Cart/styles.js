import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    heroImg : {
        backgroundImage: `url("/img/whiteDonut.png")`,
        backgroundColor: "transparent",
        backgroundSize: "90% 70%",
        backgroundPosition: "top" ,
        backgroundRepeat: "repeat-x",
        height: "100vh",
        boxShadow: 0,
        [theme.breakpoints.down('sm')]: {
            backgroundSize: "150% 70%",
        },
        [theme.breakpoints.down('xs')]: {
            backgroundSize: "200% 60%",
            height: "90vh",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    hero : {
        minHeight: "calc(100vh - 40px)",
        backgroundImage: `linear-gradient(rgba(243, 229, 245, 0.5), rgba(252, 228, 236, 0.5)),
        url("/img/cupcake-17.jpg")`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        [theme.breakpoints.down('sm')]: {
            minHeight: "calc(100vh - 40px)",
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: "calc(100vh - 200px)",
        },
    },
    container: {
        minHeight: "100vh",
        maxWidth: "100%",
        backgroundColor: "#FFF",
        padding: "20px 100px",
    },
    table: {
        maxWidth: "100%",
        // marginRight: "150px",
        background: "#555",
        [theme.breakpoints.down("md")]: {
            marginTop: "20px",
            width: "100%",
            justifyContent: "flex-end"
        }
    },
    font1 : {
        fontFamily: "'Slackey', cursive",
        marginTop: "25px"
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
        fontSize: "1em"
    },
    font4 : {
        fontWeight: "500",
        fontSize: "1em"
    },
    font5 : {
        fontFamily: "'Slackey'",
        fontWeight: "700",
        fontSize: "1.5em",
    },
    font6 : {
        fontFamily: "'Oswald'",
        fontWeight: "bolder",
        fontSize: "2em",
        marginBottom: "12px"
    },
    tHeader: {
        background: "#000",
        height: "100px"
    },
    uploadImage: {
        width: "120px",
        height: "120px",
        background: "#444",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.5s",
        margin: "0 auto"
    },
    totalWrap: {
        width: "40%",
        minHeight: "100%",
        textAlign: "right",
        display: "flex",
        paddingLeft: "25px",
        [theme.breakpoints.down("md")]: {
            marginTop: "20px",
            width: "90%",
            justifyContent: "flex-end"
        },
    },
    totalBox: {
        height: "250px",
        width: "65%",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        [theme.breakpoints.down("md")]: {
            height: "200px",
            margin: "auto",
            width: "50%",
        }
    },
    checkoutBtn: {
        width: "60%",
        marginTop: "20px"
    },
    tableWrapper: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }
    },
    emptyCart: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        width: "100%",
        border: "1px solid black",
        padding: "25px"
    }
}));


export default useStyles;