import React from 'react';

class Navbar extends React.Component {

    state = {
        searchInput: ""
    }

    searchHandler = (event) => {
        console.log("Search Handled")
        this.setState({
            searchInput: event.target.value
        }, this.props.changeSearchInput(event.target.value))
        
    }

    render() {
        

        return (
            <div id="navbar">
                <input onChange={this.searchHandler} value={this.state.searchInput} placeholder="search" />
            <div id="filter-container">
                <div onClick={() => this.props.changeFilter("")} className="filter-item" id="all">All</div>
                <div onClick={() => this.props.changeFilter("Gender Neutral")} className="filter-item" id="neutral">Gender Neutral</div>
                <div onClick={() => this.props.changeFilter("Men")} className="filter-item" id="men">Men</div>
                <div onClick={() => this.props.changeFilter("Women")} className="filter-item" id="women">Women</div>
            </div>
        </div>
        )
    }      
}

export default Navbar;