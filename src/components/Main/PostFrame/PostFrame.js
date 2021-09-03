import React from "react";
import PostBody from "./PostBody/PostBody";
import "./PostFrame.css";

class PostFrame extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         posts: null
      };
      this.inputChange = this.inputChange.bind(this);
      this.getPosts = this.getPosts.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleChangeTitle = this.handleChangeTitle.bind(this);
   }

   inputChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   getPosts() {
      const queryString = 'https://jsonplaceholder.typicode.com/posts/' + this.state.postNumber;

      try {
         fetch(queryString)
            .then((response) => response.json())
            .then((json) => {
               this.setState({
                  posts: json
               }) 
            });
      } catch(err) {
         console.log(err);
      }
   }

   handleDelete() {
      this.setState({
         posts: null
      })
   }

   handleChangeTitle() {
      let posts = Object.assign({}, this.state.posts);
      posts.title = this.state.postTitle;
      this.setState({
         posts: posts
      })
   }

   render() {
      return <div className="postFrame">
        <div className="postFrame__header">
           <span>Choose number of posts: </span>
           <input className="postFrame__input" name="postNumber" onChange={this.inputChange} type="number" min="1" max="100"  />
           <button className="postFrame__button" onClick={this.getPosts}>Get it</button>
           <button className="postFrame__button" onClick={this.handleDelete}>Delete</button>
           <input className="postFrame__input" name="postTitle" onChange={this.inputChange} type="text" min="1" max="10"  />
           <button className="postFrame__button" onClick={this.handleChangeTitle}>Change Title</button>
        </div>
        
        {this.state.posts ? <PostBody posts={this.state.posts} /> : <></>}
        
      </div>;
   }
 }
 

export default PostFrame; 