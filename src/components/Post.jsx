import { React, useState,useEffect } from "react";
import Change from './Change';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Post(params) {
    const apiUrl = "https://" + process.env.REACT_APP_APIURL + "/articles";
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
                        <Link to={"/write/newArticle"} className="list-group-item">New Article</Link>
                        <ul className = "list-group">
                            {items.map(item => (
                                <li  className="list-group-item">
                                    <Link to={"/write/" + item._id}>{item.title}</Link>
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