import React, { useEffect, useState } from "react";

function Article(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);    
    const articleId = props.match.params.id;
    const [article, setArticle] = useState({
        title: "",
        content:"",
        id : articleId,
    });
    const apiUrl = "https://"+process.env.REACT_APP_APIURL+"/articles/"+articleId;
    useEffect(() => {
        fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setArticle(result);
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
      console.log(article);
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div >
              <h3>{article.title}</h3>
              <div>{article.content}</div>
          </div>
        );
      }
    
}
export default Article;