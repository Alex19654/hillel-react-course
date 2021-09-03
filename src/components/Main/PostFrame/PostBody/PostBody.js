import React from "react";
import "./PostBody.css";

class PostBody extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return <div className="postBody">
            <div className="postFrame__titles">
                  <div className="postBody__userid element">{this.props.posts.userId}</div>
                  <div className="postBody__id element">{this.props.posts.id} </div>
                  <div className="postBody__title element">{this.props.posts.title} </div>
                  <div className="postBody__body element">{this.props.posts.body}</div>
            </div>
         
         </div>
   }
 }
 

export default PostBody; 