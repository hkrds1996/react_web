import { React, useState } from "react";
import { useCookies } from "react-cookie";
import TextareaAutosize from 'react-textarea-autosize';
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
                    if(json.code===0){
                      window.location.reload(false);
                    }
                })
        }
    }

    return (
        <div className="container mt-5">
            <h1>New Article</h1>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label for="title">Title</label>
                            <input className="form-control textareaAutosize" value={article.username} name="title" onChange={e => setArticle({ ...article, title: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label for="content">Content</label>
                            <TextareaAutosize className="form-control textareaAutosize" name="content" onChange={e => setArticle({ ...article, content: e.target.value })}></TextareaAutosize>
                        </div>
                        <button type="submit" className="btn btn-dark">Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Post;