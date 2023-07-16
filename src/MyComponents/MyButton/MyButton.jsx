import Button from '@mui/material/Button'
const MyButton = ({...props}) => {
    return <Button variant={props.variant} {...props}>{props.name}</Button>
}

export default MyButton