import React, { PureComponent } from "react";

export default class Post extends PureComponent {
  render() {
    return <div className="post-container">{this.props.post.id}</div>;
  }
}
