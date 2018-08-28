import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';


function Welcome() {
    return <h1>Whaddup</h1>;
  }
  
//const element = <Welcome name="Sara" />;
//ReactDOM.render(element, document.getElementById('root'));

function Example(props){
    return <h2>I'm {props.name} </h2>;
}

function Age(props){
    return <h3> I'm {props.age}</h3>;
}

function EndMeme(){
    return <h6> And I never fuckin' learned how to code </h6>;
}

function App() {
    return (
      <div>
      <Welcome/>
      <Example name="Jared"/>
      <Age age="19" />
      <EndMeme/>
    
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
  