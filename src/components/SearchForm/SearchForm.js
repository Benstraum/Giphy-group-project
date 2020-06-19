import React, { Component } from "react";
import { connect } from "react-redux";
import './SearchForm.css';
import SearchIcon from '@material-ui/icons/Search';
import { Button, TextField, Typography } from '@material-ui/core';

class SearchForm extends Component {
  state = {
    searchInput: " ",
  };

  handleSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state);
  };

  setSearch = (event) => {
    this.props.dispatch({
      type: "GET_SEARCH",
      payload: this.state.searchInput,
    });
    this.setState({
      searchInput: " ",
    });
  };

  render() {
    return (
      <div className="alignSearch">
        <form className="centerSearch">
          <Typography variant="h5" className="underline">
            Find GIFs: 
          
          <TextField size="small" label="What's your flavor?" variant="outlined" onChange={this.handleSearchInput} />
          <Button size="large" variant="contained" color="primary" aria-label="search for giphy" onClick={this.setSearch}>
            <SearchIcon />
          </Button>
          </Typography>
        </form>
      </div>
    );
  }
}

export default connect()(SearchForm);
