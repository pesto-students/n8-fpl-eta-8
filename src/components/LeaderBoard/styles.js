import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    root:{
        padding:'1rem',
        borderRadius:'12px'
    },
    title:{
        fontWeight:'500'
    },
    tableTitle:{
        fontWeight:'500',
        fontSize:'1.15rem',
        borderBottom:'none',
        padding:'0.23rem',
    },
    tableRow:{
        border:'2px solid #7F8081',
        borderRadius:'12px',
        marginBottom:'.5rem',
        display: 'table-row',
    },
    tableCell:{
        fontSize:'1rem',
        borderBottom:'none',
        padding:'.25rem .75rem',
    },
    

});