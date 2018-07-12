import React, { Component } from "react";
import Post from "../Post";

export default class PostList extends Component {
  renderPost = post => <Post key={post.id} post={post} />;

  render() {
    console.log("PostList", this.props);
    return <div>{this.props.posts.map(this.renderPost)}</div>;
  }
}
