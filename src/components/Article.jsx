import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import TextareaAutosize from 'react-textarea-autosize';

function Article(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['sessionID']);
  const articleId = props.match.params.id;
  const [article, setArticle] = useState({
    sessionID: cookies.sessionID,
    title: "",
    content: ""
  });
  const apiUrl = "https://" + process.env.REACT_APP_APIURL + "/articles/" + articleId;
  const submit = e => {
    e.preventDefault();
    let formBody = [];
    for (let property in article) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(article[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch(apiUrl, {
      method: 'PATCH',
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
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    let shouldDisable = true;
    if (cookies.sessionID != null) {
      shouldDisable = false;
    }
    return (
      <div className="container mt-5">
        <h1></h1>
        <div className="card">
          <div className="card-body">
          <form onSubmit={submit}>
            <div className="form-group">
              <label for="title">Title</label>
              <TextareaAutosize name="title" className="form-control textareaAutosize " defaultValue={article.title} disabled={shouldDisable}
                onChange={e => setArticle({ ...article, title: e.target.value })}></TextareaAutosize>
            </div>
            <div className="form-group">
              <label for="content">Content</label>
              <TextareaAutosize name="content" className="form-control textareaAutosize" defaultValue={article.content} disabled={shouldDisable}
                onChange={e => setArticle({ ...article, content: e.target.value })}></TextareaAutosize>
              <button type="submit" className="btn btn-dark somemargin" disabled={shouldDisable}>Update</button>
            </div>
          </form>
          </div>
        </div>
          
        </div>
    );
  }

}
export default Article;