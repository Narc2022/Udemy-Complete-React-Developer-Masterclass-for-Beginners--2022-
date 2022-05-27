import React, { Component } from "react";
import axios from "axios";
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts1")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errormsg: "error retrieving data" });
      });
  }

  render() {
    const { posts, errormsg } = this.state;
    console.log(posts);
    return (
      <div>
        <h1>List of posts</h1>
        {posts.length
          ? posts.map((posts) => <div key={posts.id}>{posts.title}</div>)
          : null}
        {errormsg ? <div> {errormsg} </div> : null}
      </div>
    );
  }
}

export default PostList;
