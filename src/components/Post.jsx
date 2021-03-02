import { React, useState,useEffect } from "react";
import { useCookies } from "react-cookie";
import Change from './Change';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function Post(params) {
    const [cookies] = useCookies(['sessionID']);
    const [article, setArticle] = useState({
        sessionID: cookies.sessionID,
        title: "",
        content: ""
    });
    const apiUrl = "https://" + process.env.REACT_APP_APIURL + "/articles";
    const submit = e => {
        e.preventDefault();
        if (article.title !== "" && article.content !== "") {
            let formBody = [];
            for (let property in article) {
                let encodedKey = encodeURIComponent(property);
                let encodedValue = encodeURIComponent(article[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            fetch(apiUrl, {
                method: 'POST',
                body: formBody,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
            })
                .then(res => res.json())
                .then(json => {
                    if (json.code === 0) {
                        window.location.reload(false);
                    }
                })
        }
    }
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="container">                
                <div className="row">
                    <div className="col-md-3 col-lg-2 bd-sidebar">
                        <a  className="list-group-item" href={"/write/newArticle"}>New Article</a>
                        <ul className = "list-group">
                            {items.map(item => (
                                <li  className="list-group-item">
                                    <a href={"/write/" + item._id}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-9 col-lg-10 order-md-last">
                        <Switch>
                        <Route path="/write/:id" component={Change}></Route>                        
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }

}

export default Post;