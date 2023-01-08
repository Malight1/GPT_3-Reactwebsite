import React from "react";
import './article.css';

const Article = ({imgurl, date, title }) => {
    return ( 
        <div className="article">
            <div className="article_image">
                <img src={imgurl} alt="" />
            </div>
            <div className="article_content">
                <p>{date}</p>
                <h3>{title}</h3>
            </div>
            <p>Read Full Article</p>
        </div>
     );
}
 
export default Article;