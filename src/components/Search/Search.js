import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
class Search extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchForm/>
      </div>
    );
  }
}

export default (Search);
