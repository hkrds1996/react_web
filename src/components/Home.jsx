import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const apiUrl = "https://"+process.env.REACT_APP_APIURL+"/articles";
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
          <div className="row  justify-content-center">
            {items.map(item => (
                <div className="blog col-lg-3 justify-content-center">
                    <ReactMarkdown className="article" children ={item.content.substring(0,500)}></ReactMarkdown>
                    <a href={"/#/articles/"+item._id}>Read More</a>                  
                </div>                              
            ))}
          </div>
        );
      }
}
export default Home;