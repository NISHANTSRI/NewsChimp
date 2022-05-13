import React, { Component } from 'react'

export default class NewsData extends Component {
    
    render() {
        let {title,description,imageURL,newsURL} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageURL?imageURL:"https://images2.markets.businessinsider.com/5f3a825ce89ebf001f04527b?format=jpeg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsURL} className="btn btn-primary btn-sm bg-dark">read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
