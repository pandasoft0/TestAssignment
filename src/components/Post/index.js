import React, { PureComponent } from "react";

import "./styles.css";

export default class Post extends PureComponent {
  render() {
    const { title, link } = this.props.post;

    return (
      <div className="post-container">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="post-title">{title.rendered}</div>
        </a>
      </div>
    );
  }
}
