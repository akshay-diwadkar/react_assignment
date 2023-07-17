import { Search, Clear } from "@mui/icons-material"
import { Box, Stack, TextField, Button, IconButton, OutlinedInput, InputAdornment } from "@mui/material"
import MyButton from "../MyButton/MyButton"
const MySearchField = ({...props}) => {
    return <Stack direction='row'>
        <OutlinedInput
            id="outlined-basic"
            placeholder="Search for Characters"
            value={props.value}
            onChange={(event) => props.onChange(event)}
            style={{width: '500px', background: 'white'}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={()=>props.onClear()}>
                    <Clear></Clear>
                </IconButton>
              </InputAdornment>
            }></OutlinedInput>
        <MyButton variant='contained' name='Search' onClick={()=>props.onClick()} style={{background: '#4952d1'}}></MyButton>
    </Stack>
}

export default MySearchField