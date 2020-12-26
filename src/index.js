import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from "./Redux/Reducer";
import {Provider} from "react-redux"

const store=createStore(rootReducer)

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'))