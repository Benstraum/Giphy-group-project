import React, { Component } from "react";
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Results from '../Results/Results'
class Search extends Component {
  render() {
    return (
      <div>
        <SearchForm/>
        <Results/>
      </div>
    );
  }
}

export default (Search);
