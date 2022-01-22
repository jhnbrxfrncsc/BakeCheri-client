import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    media: {
        height: 250,
        width: "100%",
        backgroundPosition: "center 30%",
        backgroundSize: "105% 105%",
        transition: "all 0.8s ease",
        '&:hover' : {
            backgroundSize: "120% 120%",
            transition: "all 0.8s ease",
            opacity: 0.4
        },
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        overflow: "hidden"
    },
    iconBtn: {
        marginRight: "-60px",
        marginBottom: "-130px",
        fontSize: "2em",
        backgroundColor: "#b29ddb",
        color: "#fff",
        padding: 15,
        borderStartEndRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        '&:hover' : {
            color: "#fff",
            transition: "all .1s ease",
        },
    },
    price : {
        backgroundColor: "#b29ddb",
        position: "absolute",
        top: 25,
        left: 20,
        borderRadius: 12

    },
    priceTxt : {
        fontFamily: "'Oswald', sans-serif",
        color: "#fff",
        padding: "2px 12px",
        fontSize: "1em",
    },
    actions: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8bbd0"
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
    pagination: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#f8bbd0",
        marginTop: 20,
        padding: "16px 0px",
        width: "50%",
        [theme.breakpoints.down('xs')]:{
            width: "100%",
        },
        [theme.breakpoints.down('sm')]:{
            width: "80%",
        },
        [theme.breakpoints.down('md')]:{
            width: "60%",
        },
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    filterBtn : {
        fontFamily: "'Slackey', cursive",
        margin: "2px 10px",
        height: 50,
        width: 150,
        [theme.breakpoints.down('sm')] : {
            width: 200,
        }
    },
    filterWrapper : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
    },
    btnAction: {
        position: "absolute", 
        left: "5px", 
        bottom: "14px"
    },
    contentCard: {
        backgroundColor: "#f8bbd0", 
        position: "relative" 
    },
    available: {
        background: "#00D100",
        position: "absolute",
        top: "20px",
        right: "20px",
        padding: "10px 20px",
        borderRadius: "10px"
    },
    unavailable: {
        background: "red",
        position: "absolute",
        top: "20px",
        right: "20px",
        padding: "10px 20px",
        borderRadius: "10px",
    },
    prodActions: {
        display: "flex",
        justifyContent: "center",
        borderTop: "1px solid #444"
    },
    prodBtn: {
        fontFamily: "Oswald",
        fontSize: "1em",
        fontWeight: "700",
        letterSpacing: "1px",
        margin: "0 12px",
        transition: "0.8s",
        "&:hover": {
            opacity: 0.9,
            transition: "0.8s"
        }
    },
    addProd : {
        fontFamily: "'Slackey', cursive",
        margin: "2px 10px",
        height: 70,
        width: 210,
    }
}));

export default useStyle;