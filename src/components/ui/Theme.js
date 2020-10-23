import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createMuiTheme({
    palette:{
        common:{
            Blue:`${arcBlue}`,
            Orange:`${arcOrange}`
        },
        primary:{
            main:`${arcBlue}`,
            secondary:`${arcOrange}`
        }
    },
    typography:{
        tab:{
            fontFamily:'Roboto',
            textTransform:'None',
            fontWeight:700,
            fontSize:'1rem',
        },
        estimate:{
            fontFamily:'Pacifico',
            fontSize:'1rem',
            transform:'none',
        }
    }
})