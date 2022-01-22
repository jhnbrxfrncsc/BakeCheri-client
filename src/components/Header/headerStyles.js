import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    font1: {
        fontFamily: "'Sniglet', cursive",
        color: "#f8bbd0",
    },
    font2: {
        fontFamily: "'Oswald', sans-serif",
        letterSpacing: 3,
        textTransform: "uppercase"
    },
    icon: {
        textDecoration: "none"
    },
    links : {
        color: "#fff",
        textDecoration: "none",
        '&:hover' : {
            textDecoration: "underline"
        },
        [theme.breakpoints.down('md')] : {
            backgroundColor: "#f8bbd0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    linkmarginleft: {
        color: "#fff",
        marginLeft: "15%",
        textDecoration: "none",
        '&:hover' : {
            textDecoration: "underline"
        },
        [theme.breakpoints.down('md')] : {
            marginLeft: 0,
            backgroundColor: "#f8bbd0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    navicon: {
        textAlign: "center",
        position: "absolute",
        zIndex: 999
    },
    navlinks:{
        position: "absolute",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        left: "0",
        transition: "all 1s ease",
        [theme.breakpoints.down('md')] : {
            height: "calc(100vh - 50vh)",
            top: "7vh",
            left: 0,
            flexDirection: "column",
            transition: "all 1s ease"
        },
        [theme.breakpoints.down('xs')] : {
            top: "8vh",
            left: 0,
            transition: "all 1s ease"
        },
    },
    burger: {
        display : "none",
        [theme.breakpoints.down('md')] : {
            display: "inline-block",
            fontSize: "2em",
            cursor: "pointer"
        }
    },
    nodisplay: {
        [theme.breakpoints.down('md')] : {
            display: "none",
            left: "-100px",
            transition: "all 1s ease",
        }
    },
    navActions: {
        position: "absolute",
        right: "17px",
    },
    cartBtn: {
        marginRight: "12px"
    },
    showCart: {
        display: "none",
    },
    checkoutBtn: {
        backgroundColor: "#f8bbd0",
        color: "#FFFFFF",
        '&:hover' :{
            backgroundColor: "#c48b9f"
        }
    },
    hideCart: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#FFF",
        position: "absolute",
        minHeight: "300px",
        minWidth: "300px",
        right: "30px",
        top: "50px",
        color: "#000"
    }
}));


export default useStyles;