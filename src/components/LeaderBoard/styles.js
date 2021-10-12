import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    root:{
        padding:'1rem',
        borderRadius:'12px',
    },
    title:{
        fontWeight:'500',
        paddingBottom:'.5rem'
    },
    rowTitle:{
        fontWeight:'600',
        fontSize:'1.05rem',
        borderBottom:'none',
    },
    tableRow:{
        border:'2px solid #7F8081',
        borderRadius:'12px',
        padding:'.5rem !important',
        lineHeight:"1"
    }, 
});