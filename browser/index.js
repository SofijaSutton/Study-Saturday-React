import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/main'

//console.log('Hello Webpack!');
//const element = <h2>Hello React!</h2>

//first arg is the component we want, second arg is html div place  
ReactDOM.render(<Main />, document.getElementById('app'))