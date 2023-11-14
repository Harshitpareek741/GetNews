import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let { text, description, imageurl, newsurl ,author,date,source} = this.props;
    return (
      <div>
        <div className="card" >
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex: '1'}}>
    {source}
    <span class="visually-hidden"/></span>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{text}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:""} On {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blanck" className="btn btn-primary">
             Know More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;
