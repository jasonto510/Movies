import React from 'react';

class SearchedMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      movies : []
    })
  }

  componentDidMount() {
    console.log('something')
    this.setState({
      movies : this.props.movies
    })
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log(this.props.movies, prevProps.movies);
  }

  render() {
    return (
      <div>
        {this.state.movies.original_name}
      </div>
    )
  }
}

export default SearchedMovies;