import React, { useState, useEffect } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to navigate to post details

const PostsList = ({ language }) => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // Get the navigate function from React Router

  useEffect(() => {
    // Fetch posts based on the 'language' prop and posts.json file
    fetch(`posts_${language}.json`) // Use language prop to determine the file name
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error loading data:', error));
  }, [language]);

  return (
    <div className="px-4 py-4 pb-1 md:p-8 bg-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <div
            key={index}
            onClick={() => navigate(`/${post.metadata.url}`)} // Use navigate to link to post details
            className="hover:cursor-pointer hover:underline"
          >
            <Card heading={post.metadata.title} imgSrc={post.metadata.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
