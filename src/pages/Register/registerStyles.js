import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        backgroundColor: "#FFF",
        backgroundImage: "url('/img/header-6.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        minHeight: "80vh",
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
        minHeight: "100vh",
        padding: 30,
        width: "50%" ,
        backgroundColor: "#333",

        [theme.breakpoints.down('md')]: {
            width: "70%" 
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%" 
        }
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
        minHeight: "100%",
        padding: "80px 150px",
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
}));