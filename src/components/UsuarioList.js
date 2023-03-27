import { useState, useEffect  } from 'react';
import { api } from '../lib/axios';

import avatarImg from '../assets/avatarImg.png'


const User = ({ usuario }) => {
    const [user, setUser] = useState(null);
   
    
    const getUserInfo = async () => {
      const response = await api.get(`https://jsonplaceholder.typicode.com/users/${usuario.id}`);
      
      setUser(response.data); 
    };
    
  
    return (
      <>
      <div className="flex p-4">
      <button className="fixed top-0 left-0 bg-red-600 px-4 py-2 hover:bg-red-400 text-white rounded p-2 mt-2 ml-4 z-10" onClick={() => window.history.back()}>
        voltar
      </button>
      </div >
      <div className="transition duration-500 ease-in-out transform hover:scale-105 bg-white p-4 mt-8 rounded shadow-md h-full">
        <div className="flex justify-end">
          <img className="rounded-full w-10 h-10 mr-4 bg-red-400" src={avatarImg} alt="user avatar"/>
        </div>
        <h2 className="text-black text-xl font-bold">{usuario.name}</h2>
        {usuario && (
          <div className="bg-white m-4 rounded shadow-md">
            <h3 className="text-gray-600 text-lg font-bold">{usuario.username}</h3>
            <p className="text-gray-600">{usuario.email}</p>
            <p className="text-gray-600">{usuario.phone}</p>
            <p className="text-gray-600">{usuario.website}</p>
          </div>
        )}
      </div>
      </>
    );
  };
  
  export function UserList()  {
    const [ids, setIds] = useState([]);
  
    useEffect(() => {
      const getInfo = async () => {
        const response = await api.get('/users');
        setIds(response.data);
      };
  
      getInfo();
    }, []);
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-4 ">
        {ids.map(usuario => (
            <div key={usuario.id} >
                <User usuario={usuario} />
            </div>
        ))}
      </div>
    );
  };