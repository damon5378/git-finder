import React, { Component } from 'react'

class Search extends Component {

    state = {
        text: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === '') {
            this.props.setAlert('Please enter the username', 'light')
        } else {
            this.props.searchUsers(this.state.text);
        this.setState({ 
            text: ''
        })
        }
        
    }

    onChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Search Users..." 
                        className="search-input" 
                        value={this.state.text}
                        onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {
                    this.props.showClear && <button onClick={this.props.clearUsers} className="btn btn-info btn-block">Clear</button>
                }
                
            </div>
        )
    }
}

export default Search
