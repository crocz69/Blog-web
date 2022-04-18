import React from 'react'
import { useParams } from 'react-router-dom';
import articleContent from "../pages/article-content";
import Articles from '../component/Articles';
import NotFound from './NotFound';

const Article = () => {
    const otherArticles = articleContent.filter(article => article.name )
    const { name } = useParams();
    const article = articleContent.find((article) => {
        if(article.name === name){
            
            return article;
        }
        
    });
    if(!article){
        return (
            <>
            <NotFound />
        </>
          )
    }
    return (
        <>
        <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900'>
            {article && article.title}
        </h1>
        {article && article.content.map((paragraph, index) => {
            return ( <p className=' mx-auto leading-relaxed text-base mb-4' key={index}>{paragraph} </p>)
        })}
        <h1 className=' sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900'>Other Articles</h1>
        <div className='flex flex-wrap m-4'></div>
        <Articles articles = {otherArticles} />
    </>
      );
  
};

export default Article