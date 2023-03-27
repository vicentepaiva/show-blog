import { useEffect, useState } from 'react'; 
import { api } from '../lib/axios';

export function PostComment({ comment }) {
  const [ comments, setComments ] = useState([])


  useEffect(() => {
    const getComments = async () => {
      const response = await api.get(`https://jsonplaceholder.typicode.com/comments`);
      setComments(response.data);
     
    };
        getComments();
  }, []);

  
  return (

  
    <div>
      {comments.map(comment => (
        <div className={`bg-white m-6 rounded shadow-md`} key={comment.id}>
          <h3 className="text-gray-600 text-lg font-bold">{comment.name}</h3>
          <p className="text-gray-600">{comment.body}</p>
        </div>
      ))}
  </div>
   

  );
}

export function Comment()  {
    const [commentId, setCommentId] = useState([]);

    
  
    useEffect(() => { 
      const getCommnetId = async () => {
        const response = await api.get(`/comments`);
        setCommentId(response.data);
      };
  
      getCommnetId()
    }, []);
  
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {commentId.length > 0 ? (
              commentId.map(comment => (
                <div key={comment.id}> 
                  
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