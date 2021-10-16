//react package holds the react source for components, state, props and all the code that is react
import React from 'react';
//Glue between React and the DOM
import ReactDOM from 'react-dom';

const name = 'George Bush';
const user = {
  firstName:'Acharya',
  lastName: 'Narendra'
};
//JSX- Javascript extension
const element = <h1>Hello, {formatName(user)}</h1>;

function formatName(user){
  return user.firstName + '  '+ user.lastName; 
}
  
ReactDOM.render(
  element,
  document.getElementById('root')
);