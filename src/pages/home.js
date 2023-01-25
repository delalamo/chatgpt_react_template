import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../styles/About.css';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;