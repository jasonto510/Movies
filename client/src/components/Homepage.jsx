import React from 'react';
import keys from './apikeys.jsx';


class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.findMovies = this.findMovies.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
  }

  findMovies(event){
    event.preventDefault();
    console.log('thsi was clicked')
  }

  searchMovies(event) {
    event.preventDefault();
    console.log(keys.movies)
  }
  render() {
    return(
      <div>
        Let's Find Some Movies To Watch!
        <div>
            <button onClick ={this.findMovies}> Let's Find a Movie To Watch </button> 
        </div>
        <form>
          <label>
            Let's Find a movie:
            <input type='text' name='name'/>
            <button onClick={this.searchMovies}> Enter </button> 
          </label>
        </form> 
      </div>
    ) 
  }
}

export default HomePage;