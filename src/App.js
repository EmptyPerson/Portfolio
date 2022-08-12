import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";


function App() {

  return (
     <div>
         <Navbar/>
         <Intro/>
         <div className="works">
             <div className="container">
                 <h3 className='text_center'>My works</h3>
                 <div className="portfolio">
                     <div className="work">
                         <div className="work_logo">
                            <h2 className='work_name'>HOTEL</h2>
                         </div>
                         <div className="work_content">
                             <div className="work_cat">category: website</div>
                             <div className="work_title">
                                 HOTEL
                                <div className="work_data">2022</div>
                             </div>
                         </div>
                     </div>
                     <div className="work">
                         <div className="work_logo">
                             <h2 className='work_name'>QUIZ</h2>
                         </div>
                         <div className="work_content">
                             <div className="work_cat">category: website</div>
                             <div className="work_title">
                                 Quiz
                                 <div className="work_data">2022</div>
                             </div>
                         </div>
                     </div>
                     <div className="work">
                         <div className="work_logo">
                             <h2 className='work_name'>crypto<br/>charts</h2>
                         </div>
                         <div className="work_content">
                             <div className="work_cat">category: website</div>
                             <div className="work_title">
                                 crypto charts
                                 <div className="work_data">2021</div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
  );
}

export default App;
