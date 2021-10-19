import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    root:{
        padding:'1rem',
        borderRadius:'12px',
        marginBottom:'2rem',
    },
    lbContainer:{
        maxHeight:'50vh',
        overflowY:'scroll',
        '&::-webkit-scrollbar': {
            width: '0.5em',
          },
          '&::-webkit-scrollbar-track': {
            background: '#FFFFFF',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(180deg, #3D59F7 0%, #283B9E 100%)',
            borderRadius:'.5rem'
          }
    },

    container:{
        maxWidth:'70vw',
    },

    title:{
        fontWeight:'500',
        paddingBottom:'.5rem'
    },
});
