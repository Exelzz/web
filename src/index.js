import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
return 'Click On Me!';


}


const App = ()=>{
const style = { backgroundColor: 'blue', color: 'white' }
const labelText = "Enter name :"
return(

        <div>
         <label className="label" htmlFor="name"> {labelText} </label>
         <input  id="name" type="text"/>
         <button style= {style}> {getButtonText()} </button>
        </div>
       );
};

ReactDOM.render(<App />, document.querySelector('#root'));
