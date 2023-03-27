
import { Comment, PostComment } from '../components/PostComment';




export function Post() {
    return(
       <div className="flex p-8 m-4">
      <button className="fixed top-0 left-0 bg-blue-600 px-4 py-2 hover:bg-blue-400 text-white rounded p-4 mt-2 ml-4 z-10" onClick={() => window.history.back()}>
        voltar
      </button>
        <Comment />
       </div>
    );
}