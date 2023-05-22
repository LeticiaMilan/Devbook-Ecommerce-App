import React, { Component } from 'react';
import SearchModal from './header/SearchModal';
import request from 'superagent';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
        books: [],
        searchField: ''
        };
    }

    searchBook = () => {
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.searchField })
            .then((data) => {
                console.log(data);
            })
    }

    handleSearch = (e) => {
        console.log(e.target.value);
        this.setState({ searchField: e.target.value });
    };

    render() {
        return (
        <div>
            <SearchModal searchBook={this.searchBook} handleSearch={this.handleSearch} />
        </div>
        );
    }
}

export default Search;
