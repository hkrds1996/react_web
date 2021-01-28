import React, { useState } from "react";

import { useCookies } from 'react-cookie';

function Login(params) {
    const [cookies, setCookie, removeCookie] = useCookies(['sessionID']);    
    const [user, setUser] = useState({
        username: "",
        password:""
    });
    const apiUrl = "https://"+process.env.REACT_APP_APIURL+"/login";
    const submit = e => {
        e.preventDefault();
        let formBody = [];
        for (let property in user) {
          let encodedKey = encodeURIComponent(property);
          let encodedValue = encodeURIComponent(user[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        console.log(user);
        formBody = formBody.join("&");
        fetch(apiUrl, {
          method: 'POST',
          body: formBody,
          headers: {  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
        })
          .then(res => res.json())
          .then(json =>{
              if(json.sessionID != null){
                  setCookie("sessionID", json.sessionID);
              }
          });
    }
    return (
        <div class="container mt-5">
            <h1>Login</h1>

            <div class="row">
                <div class="col-sm-8">
                    <div class="card">
                        <div class="card-body">
                            <form onSubmit={submit}>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" value={user.username} name="username" onChange={e => setUser({ ...user, username: e.target.value })} />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" name="password" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })}  />
                                </div>
                                <button type="submit" class="btn btn-dark">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;