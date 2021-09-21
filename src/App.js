import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import Menu from './components/menucomponent'
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from './components2/dishes'
import React, { Component } from 'react'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConfigureStore } from './components2/redux'
class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
         dishes:DISHES
        }
    }
   
    render()
    {
      const store = ConfigureStore();
      return(
        <Provider store={store}>
          <BrowserRouter>
       <div className="App">
      <Main/>
      </div>
        </BrowserRouter>
        
        </Provider>
        

       
        
    )
      
      
    }
}

export default App;
