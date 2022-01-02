import React, { useState, useEffect } from "react";
import getPost from "./helpers/getPost";

export default function Card() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const updatePost = () => {
    getPost().then((newPost) => {
        setTimeout(() => {
            setPost(newPost);
            setLoading(false);

        }, 2000);
    
    });
  };
  useEffect(() => {
    updatePost();
  }, []);
  return (
    <div>
      <h1>{post.title}</h1>
      {loading && <h2>Cargando</h2>}
    </div>
  );
}
