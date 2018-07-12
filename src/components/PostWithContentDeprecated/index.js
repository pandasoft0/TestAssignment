import React, { PureComponent } from "react";

import "./styles.css";

export default class Post extends PureComponent {
  createContent = () => {
    const {
      content: { rendered }
    } = this.props.post;

    return {
      __html: rendered
    };
  };

  render() {
    const { title, id } = this.props.post;

    return (
      <div className="post-container">
        <div className="post-title">{title.rendered}</div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={this.createContent()}
        />
      </div>
    );
  }
}
