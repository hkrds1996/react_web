import React from "react";
import { useCookies } from 'react-cookie';
import Login from "./Login";
import Post from "./Post";

function Write(params) {
    const [cookies] = useCookies(['sessionID']);
    if(cookies.sessionID == null){
        return(<Login></Login>);
    }else{
        return <Post></Post>;
    }
    
}

export default Write;