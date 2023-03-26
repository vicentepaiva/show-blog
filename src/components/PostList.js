import { useState, useEffect } from 'react';
import { api } from '../lib/axios';
import { Link } from 'react-router-dom';

 function Post({ post }) {
  const [comments, setComments] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [showComments, setShowComments] =  useState(false);


  const getComments = async () => {


    const response = await api.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);

    setComments(response.data);
    setShowComments(true);
    
  };



  return (
    <>
      <div className={`transition duration-400 ease-in-out transform hover:scale-105 bg-white p-4 mt-4 ml-4 mr-4 rounded shadow-md ${showComments ? 'relative' : ''} h-full `}>
        <h2 className="text-black text-xl font-bold">{post.title}</h2>
        <p className="text-gray-600 pb-1 border-b-2 border-gray-400 m-4">{post.body}</p>
       
        { showButton ? null : (
          <Link to="/post" className="transition duration-500  bg-blue-500 hover:bg-blue-400 text-white rounded p-2 mt-2" onClick={getComments}>
            Ver comentários
          </Link>
        )}
      </div>
    </>
  );
};
  
export function PostList()  {
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    const getPosts = async () => {
      const response = await api.get(`/posts`);
      setPosts(response.data);
    };

    getPosts();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
        {posts.map(post => (
          <div key={post.id}> 
            <Post post={post} />
          </div>
        ))}
      </div>
    </>
  );
};
  
