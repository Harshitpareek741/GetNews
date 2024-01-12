import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spin from "./Spin";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "gereral",
    url : "https://cdn.vox-cdn.com/thumbor/EOsRCVzPGUp5qGFILDbBgdkt67g=/0x0:4232x2216/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25216733/1870483642.jpg"
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    url: PropTypes.string,
  }; 

  articles = [
    
  ];

  Capitalize = (string) => {
     return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    document.title = `${this.Capitalize(this.props.category)}-NewsDonkey`
  }

  async updateNews() {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
    this.updateNews();
  };
  handlePreClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

   
    render() {
      return (
        <div className="container my-5">
          <h2 className="text-center mb-4">News-Donkey Top {this.Capitalize(this.props.category)} Headlines</h2>
          <div className="row">
            {this.state.loading && <Spin />}
            {!this.state.loading &&
              this.state.articles.map((element) => (
                <div className="col-md-6 col-lg-3 mb-4" key={element.url}>
                  <Newsitems
                    text={element.title ? element.title.slice(0, 36) : ""}
                    description={element.description ? element.description.slice(0, 55) : ""}
                    imageurl={
                      element.urlToImage
                        ? element.urlToImage
                        :this.props.category
                    }
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
          </div>
          <div className="d-flex justify-content-center my-4">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-primary mx-2"
              onClick={this.handlePreClick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              className="btn btn-primary mx-2"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      );
    }
  
}
export default News;
