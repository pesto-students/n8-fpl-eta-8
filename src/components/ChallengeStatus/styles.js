import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    root: {
        background: (props) => {
            switch (props.status) {
                case 'NOT_LIVE':
                    return "linear-gradient(180deg, #1F41F7 0%, #142CAC 100%)";
                case 'LIVE':
                    return "linear-gradient(180deg, #08B295 0%, #07836E 100%)";
                case 'CLOSED':
                    return "linear-gradient(180deg, #FCA549 0%, #BF7B33 100%)";
                default:
                    return "linear-gradient(180deg, #1F41F7 0%, #142CAC 100%)";

            }
        },
        borderRadius: '12px'
    },
    content: {
        padding: '2rem 1rem'
    },
    text1: {
        fontWeight: '500',
        color: 'white'
    },
    circularProgressBar: {
        maxHeight: '10.75rem',
        paddingBottom: '.75rem'
    },
    button: {

    }
});
