import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Results from '../Results/Results'
class Search extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchForm/>
        <Results/>
      </div>
    );
  }
}

export default (Search);
