
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PostList } from "../components/PostList";

import homeImg from "../assets/imagem2.jpg";


export function Home() {
    return (
        <>
          <div className="container mx-auto flex flex-col min-h-screen">
              <Header />

             <div className="my-8">
               <div className="mx-auto w-full px-4 lg:px-0 max-w-screen-xl">
                <img src={homeImg} alt="imgHome" className="w-full h-70" />
               </div>
            </div> 
    
            <main className="flex flex-1 items-center justify-center lg:justify-start max-w-screen-xl mx-auto">
            <PostList />
            </main>
    
              <Footer />
          </div>
        </>
      );
}