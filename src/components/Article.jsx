import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import TextareaAutosize from 'react-textarea-autosize';
import ReactMarkdown from 'react-markdown'

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
        <div className="card">
          <div className="card-body">
              <div className="form-group">
                <ReactMarkdown children={article.content} />
              </div>
          </div>
        </div>
      </div>
    );
  }

}
export default Article;