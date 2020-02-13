import React,{useState,useEffect,Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'
import Movies from './Components/Movies'


class App extends Component{
  state={
    movies:[]
  }
  componentDidMount(){
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=c19e1fd120c44eae7767bc663d7ae237')
    .then(res=>res.json())
    .then((data) =>{
      this.setState({
        movies:data.results
      })
      
    })
    
    .catch(console.log)
  }

  render(){
    return(
      <div>
        <Header/>
        <Main/>
        <Movies movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;
