import React, { Component } from "react";
import NewsData from "./NewsData";
import Spinner from "./Spinner";

export default class NewsItem extends Component {
  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ed3a0b0ce4ad440e965ddf9046ab3693&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsingData = await data.json();
    console.log(parsingData);
    this.setState({ articles: parsingData.articles });
  }

  handlePrev = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ed3a0b0ce4ad440e965ddf9046ab3693&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsingData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsingData.articles,
      loading: false,
    });
  };
  handleNext = async () => {
    console.log("next");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ed3a0b0ce4ad440e965ddf9046ab3693&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsingData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsingData.articles,
        loading: false,
      });
    }
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center">TOP HEADLINES</h1>
          {this.state.loading && <Spinner />}
          <div className="row my-3">
            {!this.state.loading &&
              this.state.articles.map((element) => {
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
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            &larr; PREVIOUS
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            NEXT &rarr;
          </button>
        </div>
      </div>
    );
  }
}
