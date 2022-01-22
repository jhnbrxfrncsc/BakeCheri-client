import { makeStyles } from "@material-ui/styles";


export default makeStyles(theme => ({
    font1 : {
        fontFamily: "'Slackey', cursive",
    },
    font2 : {
        fontFamily: "'Oswald', sans-serif",
        color: "#000",
        fontSize: "2.5em",
    },
    title : {
        fontSize: "1.5em",
        fontWeight: "bold",
        color: "#fff"
    },
    paper: {
        minHeight: "80vh",
        padding: 30,
        width: "40%" ,
        backgroundColor: "#333"
    },
    catalog: {
        width: "100%",
        height: "100px",
        margin: "60px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    uploadImage: {
        width: "200px",
        height: "200px",
        background: "#444",
        cursor: "pointer",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.5s",
        "&:hover": {
            background: "#666",
            transition: "0.5s"
        }
    },
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
        url("/img/gradientBG.svg")`,
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