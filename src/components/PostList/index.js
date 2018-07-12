import React, { Component } from "react";

import Post from "../Post";
import "./styles.css";

export default class PostList extends Component {
  renderPost = post => <Post key={post.id} post={post} />;

  render() {
    return (
      <div className="posts-container">
        {this.props.posts.map(this.renderPost)}
      </div>
    );
  }
}
