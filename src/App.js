import React from "react";
import "./App.css";
import Hero from './Hero';
import MySkills from './MySkills';
import MyWorks from './MyWorks';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <MySkills />
        <MyWorks />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;