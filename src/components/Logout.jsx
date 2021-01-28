import React from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

function Logout() {
    const [cookies, setCookie, removeCookie] = useCookies(['sessionID']);

    const history = useHistory();

    const myfunction = e => {
        e.preventDefault();
        let formBody = [];
        let encodedKey = encodeURIComponent("sessionID");
        const apiUrl = "https://" + process.env.REACT_APP_APIURL + "/logout";
        let encodedValue = encodeURIComponent(cookies.sessionID);
        formBody.push(encodedKey + "=" + encodedValue);
        formBody = formBody.join("&");
        fetch(apiUrl, {
            method: 'POST',
            body: formBody,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        })
            .then(res => res.json())
            .then(json => {
                if (json.code === 0) {
                    removeCookie("sessionID");
                    history.push("/");
                }
            });                
    }

    return (
        <a className="dropdown-item" onClick={myfunction}>
            LOGOUT
        </a>
    );
}

export default Logout;