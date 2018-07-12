import React, { Component } from "react";

import PostList from "../PostList";

export default class Main extends Component {
  state = {
    posts: [],
    loading: false
  };

  setPosts = posts => {
    this.setState({ posts, loading: false });
  };

  setLoading = loading => this.setState({ loading });

  rednerLoading = () => {
    return <div>{"Loading"}</div>;
  };

  componentDidMount = async () => {
    try {
      this.setLoading(true);

      const resp = await fetch("https://thewirecutter.com/wp-json/wp/v2/posts");
      const data = await resp.json();

      this.setPosts(data);
      console.log("data", data);
    } catch (e) {
      console.error("Fetch data failed");
    }
  };

  render() {
    const { posts, loading } = this.state;

    if (loading) {
      return this.rednerLoading();
    }

    console.log("this.state", this.state);

    return (
      <div>
        <PostList posts={posts} />
      </div>
    );
  }
}
