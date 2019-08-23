import React, {Component} from 'react';
import Navigation from './components/navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import 'tachyons';
import './App.css';


const particlesOptions={
                particles: {
                  number:{
                    value:50,
                    density:{
                      enable:true,
                      value_area:400
                    }
                  }
                  }
                }
              

class App extends Component{
  constructor(){
    super();
    this.state={
      input:'',
    }
  }

  onButtonSubmit=()=>{
    console.log("click");
  }

  onInputChange=(event)=>{
    console.log(event.target.value);
  }

render(){
  return(
    <div className="App">
      <Particles className="particles"
              params={particlesOptions}/>
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm onInputChange={this.onInputChange}
      onButtonSubmit={this.onButtonSubmit}/>
    
     {/*<FaceRecognition/ >*/}
    </div>
  );
}
}
export default App;
