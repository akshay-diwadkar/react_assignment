import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { TextField } from '@mui/material';
const MyTextField = ({...props}) => {
    return <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-basic">{props.label}</InputLabel>
        <OutlinedInput
        id="outlined-basic"
        label={props.label}
        value={props.value}
        hidden={props.hidden}
        onChange={(event) => props.onChange(event)
        }
        {...props}
        />
    </FormControl>
}

// const MyTextField = ({...props}) => {
//     return <TextField
//         id="outlined-basic"
//         label={props.label}
//         value={props.value}
//         hidden={props.hidden}
//         onChange={(event) => props.onChange(event)
//         }
//     ></TextField>
// }

export default MyTextField