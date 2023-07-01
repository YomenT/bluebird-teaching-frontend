import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
<BrowserRouter>
    <ScrollToTop />
    <App /> 
</BrowserRouter>, 
document.getElementById('root')
)