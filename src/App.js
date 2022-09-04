import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import {useRef} from "react";
import {useState} from "react";
import {ModalContext} from "./Context"
import Modal from "./components/Modal/Modal";


function App() {
  const [modalActive, setModalActive] = useState(false)

  const work = useRef(null);
  const about = useRef(null);
  const blog = useRef(null);

  const scrollToSection = (elementRef) => {
      window.scrollTo({
          top: elementRef.current.offsetTop - 50,
          behavior: 'smooth'
      })
  }

  return (
     <div>
         <ModalContext.Provider value={{
             modalActive,
             setModalActive
         }}>
             <Navbar props = {{
                 refWork: work,
                 refAbout: about,
                 refBlog: blog,
                 scrollToSection: scrollToSection
             }}/>
             <Intro/>
             <Work props = {work}/>
             <About props = {about}/>
             <Reviews/>
             <Courses props = {blog}/>
             <Footer props = {{
                 refWork: work,
                 refAbout: about,
                 refBlog: blog,
                 scrollToSection: scrollToSection
             }}/>
             <Modal/>
         </ModalContext.Provider>
     </div>
  );
}

export default App;
