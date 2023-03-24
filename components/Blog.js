import React from 'react';

export default function Blog(props) {
  return (
    <div className="blog-container">
      <h1 className="blog-title">{props.blog.title}</h1>
      <p className="blog-description">{props.blog.description}</p>
    </div>
  );
}
