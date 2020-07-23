import React from 'react'
import {Link} from 'react-router-dom'
import lifestyleArticles from './lifestyle-content';

const Lifestyle = () => {
    
    return (
    <>
    <h1>Lifestyle Articles</h1>
    {lifestyleArticles.map((article, key) => (
        <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0,150)}...</p>
        </Link>
        
    ))}
  
    </>
)
}

export default Lifestyle