import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    filterBtn : {
        fontFamily: "'Slackey', cursive",
        margin: "2px 10px",
        height: 50,
        width: 150,
        [theme.breakpoints.down('sm')] : {
            width: 200,
        }
    }
}));

export default useStyle;