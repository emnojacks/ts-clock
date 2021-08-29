import React from 'react';
import './App.css';
import Clock from './components/Clock';

let testProp: string = "Am I getting passed to the Clock component?";
let optionalProp: string = "you sure are!";

//ts does not allow func declarations to be typed but it DOES allow 
//func expressions to be typed
//the colon after app is its type
//this digs into the @types pck that was installed
const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className="verticalCenter">
        <Clock
          testProp={testProp}
          optionalProp={optionalProp}
          />
      </div>
    </div>
  );
}


export default App;

//If you write object-oriented code — use interfaces, if you write functional code — use type aliases.
//React is more functional by nature. Functional components are generally preferred over class-based components. 

//With interfaces, we can re-open previously declared interfaces and add additional properties to it

//One thing that type aliases can do that interfaces can’t is create an intersection with a type alias that uses union operator within its definition

//using interface requires iprops not just props which causes confuction and more typing

//main takeaway from the above article is that Type Aliases allow us to use Intersection Types (allows you to add together existing types to get a single type that has all the features you need)