import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = ({
  country= 'us',
  pageSize= 15,
  category= 'general',
  totalArticles= 0,
  apiKey
}) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    const capitalizeFirstLetter =(string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
    

    const updateNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
      setLoading(true)
      let data = await fetch(url);
      let parseData = await data.json()
      setArticles(parseData.articles)
      settotalResults(parseData.totalResults)
      setLoading(false)
    }
    
    useEffect(()=>{
      updateNews();
      document.title = `${capitalizeFirstLetter(category)} - NewsPerk`;
      // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}`;
      setPage(page + 1)
      setLoading(true)
      let data = await fetch(url);
      let parseData = await data.json()
      setArticles(articles.concat(parseData.articles))
      settotalResults(parseData.totalResults)
      setLoading(false)
    }

  
    return (
    <>       
     <h1 className='text-center' style={{margin: '35px 0px', color: 'white'}}>NewsPerk - Top {capitalizeFirstLetter(category)} Headlines </h1>
        {/* <Spinner/>*/}
        <InfiniteScroll dataLength={articles.length
          
        }
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner/>}
        >
        <div className='container'>
        <div className='row'>
        {articles.map((element)=>{
         return <div className='col-md-4'  key={element.url} >
          <NewsItem title={element.title? element.title.slice(0, 45):"Headline not found"} description={element.description?element.description.slice(0, 88):"Description not found"} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })} 
        </div>
        </div>
        </InfiniteScroll>
      </>

    )
  }

  


//News.defaultProps = {
// country: 'us',
// pageSize: 15,
// category: 'general',
// totalArticles: 0,
//}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
