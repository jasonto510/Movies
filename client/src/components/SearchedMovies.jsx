import React from 'react';

class SearchedMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      movies : [],
      description : false
    })
    this.showDescription = this.showDescription.bind(this);
  }


  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevState.movies.length === 0) {
      this.setState({
        movies : this.props.movies
      })
    }
  }

  showDescription(event) {
    event.preventDefault();
    this.setState({
      description : true
    })
  }

  render() {
    return (
      <div>
        <div id="moviesTitles" onClick={this.showDescription} style={{fontSize : '18px'}}> 
          {this.state.movies.original_title}
        </div>
        {this.state.description ? 
          <div>
            {this.state.movies.overview}
          </div> : null
        }
      </div>
    )
  }
}

export default SearchedMovies;