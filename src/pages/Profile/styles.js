import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    root: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    orderBtn: {
        margin: "20px auto",
    },
    
}));

export default useStyle;