import './App.css';
import Navigation from "./screens/navigationBar/navigationBar";
import Particles from "./Particles";
import Header from "./screens/header/header";
import AboutMe from "./screens/aboutMe/AboutMe";
import Technologies from "./screens/technologies/Technologies";
import ContactMe from "./screens/contacMe/contactMe";
import Portfolio from "./screens/portfolio/Portfolio";



function App() {
  return (
    <div className="App">
        <Navigation/>
        <Header/>
        <Particles/>
        <AboutMe/>
        <Technologies/>
        <Portfolio/>
        <ContactMe/>
    </div>
  );
}

export default App;


/*
style={{ height: '96vh' }}
            background{{ r: 21, g: 22, b: 23, a: 1 }}
            particleSpeed={0.1}
            particleRadius={1.5}
            color={{ r: 158, g: 217, b: 249, a: 255 }}
* */