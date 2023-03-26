import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="flex w-full  justify-center">
          <div className="flex justify-between max-w-6xl w-full p-4">
            <h1>Possível logo aqui</h1>
              <div className="flex gap-4">
              {/* <Link to="/post" className="button rounded text-white bg-blue-600 px-4 py-2 hover:bg-blue-400">
                Post
            </Link> */}
            <Link to="/usuario" className="transition duration-500 ease-in-out button rounded text-white bg-red-600 px-4 py-2 hover:bg-red-400">
                Usuário
            </Link>
              </div>
          </div>
        </header>
       
    );
}