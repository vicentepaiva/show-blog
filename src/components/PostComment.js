import { useEffect, useState } from 'react'; 
import { api } from '../lib/axios';

export function PostComment({ comment }) {

  
  return (

    <div>
        <div className={`bg-white m-2 rounded shadow-md p-4 h-64`} key={comment.id}>
          <h3 className="text-gray-600 text-lg font-bold">{comment.name}</h3>
          <p className="text-gray-600">{comment.body}</p>
        </div>
   </div>
   
  );
}

export function Comment()  {
    const [commentId, setCommentId] = useState([]);

    
  
    useEffect(() => { 
      
      
      const getCommnetId = async () => {
        const response = await api.get(`https://jsonplaceholder.typicode.com/comments/`);
        setCommentId(response.data);
      };
  
      getCommnetId()
    }, []);
  
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ">
          {commentId.length > 0 ? (
              commentId.map(comment => (
                <div className="flex justify-center" key={comment.id}>  
                  <PostComment comment={comment} />
                </div>
              ))
          ) : (
            <p>nada encontrado</p>
          )}   
        </div>
      </>
    );
  };