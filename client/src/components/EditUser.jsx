import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { editUser, getUser } from '../service/api.js';
import { useNavigate, useParams } from 'react-router-dom';

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const EditUser = () => {
    const [user, setUser] = useState(defaultValue);
    // const { name, username, email, phone } = user;
    
    let navigate = useNavigate();
    const { id } = useParams();

    
    
    useEffect(() => {
        const loadUserDetails = async () => {
            const response = await getUser(id);
            setUser(response.data);
        }
        loadUserDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editUserDetails = async () => {
        await editUser(user, id);
        navigate('/all');
    }
    

    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel >Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={user.email} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={user.phone} />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()} >Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;