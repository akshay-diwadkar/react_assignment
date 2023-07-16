import { Search } from "@mui/icons-material"
import { Box, Stack, TextField, Button, IconButton } from "@mui/material"
import MyButton from "../MyButton/MyButton"

const MySearchField = ({...props}) => {
    return <Stack direction='row'>
        <TextField
          id="outlined-basic"
          placeholder="Search for Characters"
          value={props.value}
          onChange={(event) => props.onChange(event)}
          style={{width: '500px'}}
        />
        <MyButton variant='contained' name='Search' onClick={()=>props.onClick()}></MyButton>
    </Stack>
}

export default MySearchField