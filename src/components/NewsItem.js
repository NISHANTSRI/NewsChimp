import React from "react";
import NewsData from "./NewsData";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
const NewsItem = (props) => {

  const update = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsingData = await data.json();
    props.setProgress(50)

    setarticles(parsingData.articles)
    settotalResults(parsingData.totalResults)
    setloading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    update()
    //eslint-disable-next-line
    document.title = 'NewsC#imp -> ' + `${capitalizeFirstLetter(props.category)}`;

    //eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setpage(page + 1)
    let data = await fetch(url);
    let parsingData = await data.json();
    setarticles(articles.concat(parsingData.articles))
    settotalResults(parsingData.totalResults)
  };


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)


  return (
    <>

      <h1 className="text-center" style={{ margin: '35px,0px', marginTop: '90px' }}>Top {capitalizeFirstLetter(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row my-3">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-3">
                  <NewsData
                    key={element.url}
                    title={element.title ? element.title : ""}
                    description={
                      element.description ? element.description : ""
                    }
                    imageURL={element.urlToImage}
                    newsURL={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );

}


NewsItem.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

NewsItem.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default NewsItem