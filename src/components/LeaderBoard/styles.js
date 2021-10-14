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
    },
    tableRow:{
        border:'2px solid #7F8081',
        borderRadius:'12px',
        paddingBottom:'.25rem'
    }, 
    positionChange:{
        display:'flex',
        alignItems:'center'
    },

    up:{
        color:'#07A287'
    },
    down:{
        color:'#F43C3C'
    },
    noChange:{
        color:"#0C77F8"
    }
});