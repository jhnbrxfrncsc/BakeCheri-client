import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    heroImg : {
        backgroundImage: `url("/img/whiteDonut.png")`,
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
    title: {
        fontFamily: "'Oswald', sans-serif",
        color: "#000", 
        textTransform: "uppercase"
    }
}));


export default useStyles;