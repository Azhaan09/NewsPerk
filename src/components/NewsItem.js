import React from 'react'
import styles from './NewsItem.module.css'

const NewsItem =(props) => {
  
    let {title, description, imageurl, newsurl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card" style={{backgroundColor: '#EEEDEB', height: "30rem"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left: '85%', zIndex: '1'}}>{source}</span>
  <img src={!imageurl?"https://community.atlassian.com/t5/image/serverpage/image-id/157040i289B328EEF18671A/image-size/large?v=v2&px=999":imageurl} className="card-img-top" alt="..." style={{height: "15rem"}}/>
  <div className="card-body">
    <h5 className={`card-title ${styles.texting}`}>{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toUTCString()}</small></p>
    <a href={newsurl} target='blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }

export default NewsItem
