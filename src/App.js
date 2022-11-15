import { Button, Card, Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import MianSection from "./Component/MianSection";
import pic from "./pic.png";

function App() {
  return (
    <div className="App ">
      <Navbar className="nav">
        <Container>
          <Navbar className={"logo"} href="#home">
            MAG
          </Navbar>
          <Nav className={"lists"}>
            <Nav className={"list home"} href="#home">
              Home
            </Nav>
            <Nav className={"list"} href="#features">
              Skills
            </Nav>
            <Nav className={"list"} href="#pricing">
              About
            </Nav>
          </Nav>
        </Container>
      </Navbar>
      <body className={"main"}>
        <main className="main-sec">
          <div className="par">
            <h1 className="myname">
              Mohamed <span>Abdelghani</span>
            </h1>
            <h3 className="def">Future Web-Developer</h3>
            <p className="parag">
              My name is Mohamed Ben Hadj Ali im 19 years old. Now im Taking a
              FullStack JavaScript Course At GOMYCODE! im looking forward to
              Become A Web Developer
            </p>
          </div>
          <img className="picture" src={pic} alt="ProfilePicture" />
        </main>
      </body>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#020122"
          fill-opacity="1"
          d="M0,96L60,133.3C120,171,240,245,360,256C480,267,600,213,720,176C840,139,960,117,1080,138.7C1200,160,1320,224,1380,256L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <MianSection/>
    </div>
  );
}

export default App;
