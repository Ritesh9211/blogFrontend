import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col--12">
          <h2>About this site</h2>
        </div>
        <div className="col col--12 color">
          <p className="text">
          This is a Blog Application Made using React.Js, styled using Css, MongoDb as a  backend used for storing user's datas
          <br/>
          <br/>

          This application allows users to read, create, update, and delete blog posts. One of the essential sections of this web application is the "Blog Post" section, where users can view, create, and manage their blog posts.
                     
          </p>
          <p className="text"> The Home section is the heart of a blog web application as it represents the core functionality of the application - creating and managing blog posts. It provides users with the ability to share their thoughts, experiences, and ideas through written content

          </p>
        </div>
      </div>
    </div>
  );
}
