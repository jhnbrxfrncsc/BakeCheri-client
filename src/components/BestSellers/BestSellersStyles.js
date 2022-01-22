import { makeStyles } from '@material-ui/styles';import dividerImg from '../../assets/img/divider-chef-violet.png';

const useStyle = makeStyles(theme => ({
    media: {
        height: 250,
        width: "100%",
        backgroundPosition: "center 30%",
        backgroundSize: "100% 100%",  
        '&:hover' : {
            backgroundSize: "120% 120%",
            transition: "all 2s ease"
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
    divider : {
        backgroundImage: `url(${dividerImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "25px",
        margin: "10px",
        [theme.breakpoints.down('sm')] : {
            backgroundSize: "100% 40%",
        }
    },
    btnAction: {
        backgroundColor: "#c48b9f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40px"
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
        color: "#FFF",
        padding: "5px 16px",
        fontSize: "1.2em",
    },
    contentCard: {
        backgroundColor: "#f8bbd0"
    },
}));

export default useStyle;