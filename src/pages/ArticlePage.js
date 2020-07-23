import React from 'react';
import lifestyleArticles from './lifestyle-content';
const ArticlePage = ( {match}) => {

    const name = match.params.articleName;
    const article = lifestyleArticles.find(article => article.name === name);
    return (
    
    <>
    <h1>{article.title}</h1>
   {article.content.map((paragraph, key) => (

    <p key={key}>{paragraph}</p>


   ))}
    </>



 )
}

export default ArticlePage;