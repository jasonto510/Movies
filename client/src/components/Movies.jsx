import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      moviesFound : false,
      movieList : [],
      showDescription : false
    })

    this.showDescription = this.showDescription.bind(this);
  }

  componentDidMount() {
    this.setState ({
      moviesFound : true,
      movieList : this.props.movies
    })
  }

  showDescription(event) {
    event.preventDefault();
    this.setState({
      showDescription : !this.state.showDescription
    })
  }

  render() {
    return (
      <div>
        {this.state.moviesFound ? 
          <div onClick={this.showDescription}> 
            <li> 
              {this.state.movieList.original_title}
            </li>
            {this.state.showDescription ?
            <div>
              <div>{this.state.movieList.overview}</div>
              <div> Average movie rating out of 10: {this.state.movieList.vote_average}</div>
              <br></br>
            </div> 
            : null
            }
          </div>
          : null
        }
      </div>
    )
  }
}

export default Movies;