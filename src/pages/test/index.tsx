import React, { use } from 'react';
import axios from 'axios';
import { AxiosResponse, AxiosError } from 'axios'
import { Button } from "@mui/material";

const client = axios.create({
    baseURL: "http://127.0.0.1:8080",
    withCredentials: true,
    maxRedirects: 4
    
});
const Test = () => {
        const [user, setUser] = React.useState([]);
        const [redirectUrl, setRedirectUrl] = React.useState('');
     const getUser =async() => {
        await client
            .get("/me",{
                params: {
 
                },
            })
            .then((response) => {
                setUser(response.data);
            })
            .catch((error: AxiosError) => {
                if (error.response!.status === 302) {
                    setRedirectUrl(error.response?.headers.location);
                }
                console.error("There was an error!", error);
            });}
    return (
        <div>
        <h1>User</h1>
        <p>Welcome to the home page!</p>
        <Button variant="contained" onClick={getUser}>
            Get User
        </Button>
        {user}
        {redirectUrl ? (
          <iframe
            src={redirectUrl}
            title="Iframe Display"
            style={{ width: "80%", height: "500px", border: "none" }}
          />
        ) : (
          <p>Please enter a valid URL above.</p>
        )}
        </div>
    );
    }


    export default Test;