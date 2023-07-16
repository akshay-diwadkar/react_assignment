import Button from '@mui/material/Button'
const MyButton = ({...props}) => {
    return <Button variant="text" {...props}>{props.name}</Button>
}

export default MyButton