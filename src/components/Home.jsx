import React, { useEffect, useState } from "react";

function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const apiUrl = "https://"+process.env.REACT_APP_APIURL+"/articles";
    console.log(apiUrl);
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
          <div className="row">
            {items.map(item => (
                <div className="blog col-lg-6">
                    <h1>{item.title}</h1>
                    <p>{item.content.substring(0,500)}</p>  
                    <a href={"/articles/"+item._id}>Read More</a>                  
                </div>                              
            ))}
          </div>
        );
      }
}
export default Home;