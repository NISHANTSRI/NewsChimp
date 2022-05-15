import React from 'react'

const NewsData = (props) => {


    let { title, description, imageURL, newsURL, author, publishedAt, source } = props;
    return (
        <div>
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{ left: '90%', zIndex: '1' }}>
                    {source}
                </span>
                <img src={imageURL ? imageURL : "https://images2.markets.businessinsider.com/5f3a825ce89ebf001f04527b?format=jpeg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'} on {new Date(publishedAt).toUTCString()}</small></p>
                    <a href={newsURL} className="btn btn-primary btn-sm bg-dark">read more</a>
                </div>
            </div>
        </div>
    )

}
export default NewsData