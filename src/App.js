import './App.css';
import {useState} from "react";

function App() {
    const [bars, setBars] = useState({
        1: "Стрелка",
        2: "Dictatura Estetica",
        3: "Swan Lake Bar"
    })
    const [numberBar, setNumberBar] = useState()
    const [active, setActive] = useState(false)

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

  return (
      <header className="header">
        <div className="container">
            <div className="header_inner">
                <div className="user">
                    <img className="user-avatar" src='../images/avatar_photo.png' alt="sorry"/>
                    <div className="user_content">
                        <div className="user_name">Vladislav <br/> Bulakhov</div>
                        <div className="user_prof">Front Web Developer</div>
                    </div>
                </div>
                <div className="nav">
                    <a className="nav_link" href="#">work</a>
                    <a className="nav_link" href="#">about me</a>
                    <a className="nav_link" href="#">blog</a>
                    <a className="nav_link" href="#">contact</a>
                </div>
            </div>
            <div className="random">
                <div className="text_bar">
                    <p>We choose our bar right now</p>
                </div>
                <div className="bars">
                    <ol>
                        <li>{bars[1]}</li>
                        <li>{bars[2]}</li>
                        <li>{bars[3]}</li>
                    </ol>
                </div>
                <div className="random_botton">
                    <button className="clicker"
                    onClick={(e) => {
                        e.preventDefault()
                        setNumberBar(getRandomInt(3) + 1);
                        setActive(true)
                    }}
                    >I choose it <br/> by random</button>
                </div>
                <div className="our_choice">
                    {active? <p>Probably we're lucky - our bar  {`"${bars[numberBar]}"`}</p>: null}
                </div>
            </div>
        </div>
      </header>
  );
}

export default App;
