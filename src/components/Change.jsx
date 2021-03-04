import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import TextareaAutosize from 'react-textarea-autosize';

function Change(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['sessionID']);
    const [submitButton, setSubmitButton] = useState("");
    const articleId = props.match.params.id;
    const [article, setArticle] = useState({
        sessionID: cookies.sessionID,
        title: "",
        content: ""
    });
    const apiUrl = "https://" + process.env.REACT_APP_APIURL + "/articles/" + articleId;
    const submit = e => {
        e.preventDefault();
        let type = "";
        if(submitButton === "button1"){
            type = "PATCH";
        }else{
            type = "DELETE";
        }
        let formBody = [];
        for (let property in article) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(article[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        fetch(apiUrl, {
            method: [type],
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
    useEffect(() => {
        if (articleId === "newArticle") {
            
        } else {
            fetch(apiUrl)
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setArticle({ ...article, ...result });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        }
    }, []);
    return (<div>
        <div className="card">
            <div className="card-body">
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label>Title</label>
                        <TextareaAutosize name="title" className="form-control textareaAutosize " defaultValue={article.title}
                            onChange={e => setArticle({ ...article, title: e.target.value })}></TextareaAutosize>
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <TextareaAutosize name="content" className="form-control textareaAutosize" defaultValue={article.content}
                            onChange={e => setArticle({ ...article, content: e.target.value })}></TextareaAutosize>
                        <button type="submit" className="btn btn-dark somemargin" onClick={()=>setSubmitButton('button1')}>Update</button>
                        <button type="submit" onClick={()=>setSubmitButton('button2')} className="btn somemargin">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    </div>);

}

export default Change;