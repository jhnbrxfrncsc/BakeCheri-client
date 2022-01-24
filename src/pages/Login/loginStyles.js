import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        backgroundColor: "#FFF",
        backgroundImage: "url('/img/header-9.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "80vh",
        padding: "5% 20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    font1 : {
        fontFamily: "'Slackey', cursive",
        fontSize: "3.2em",
        fontWeight: "bold",
    },
    font2 : {
        fontFamily: "'Oswald', sans-serif",
        color: "#f8bbd0"
    },
    title : {
        
    },
    paper: {
        minHeight: "50vh",
        padding: 30,
        width: "40%" ,
        backgroundColor: "#333",

        [theme.breakpoints.down('md')]: {
            width: "60%" 
        },
        [theme.breakpoints.down('sm')]: {
            width: "80%" 
        },
        [theme.breakpoints.down('xs')]: {
            width: "90%" 
        },
    },
    link: {
        color: "#FFF",
        textDecoration: "none",
        margin: "0 4px",
        "&:hover": {
            textDecoration: "underline",
        }
    },
    heroImg : {
        backgroundImage: `url("img/whiteDonut.png")`,
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
        url("img/header-9.jpg")`,
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
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    alert: {
        marginTop: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
    },
    alertTitle: {
        fontSize: "1.75em",
        fontFamily: "Slackey",
        color: "#FFF",
        letterSpacing: "1.5px"
    }
}));