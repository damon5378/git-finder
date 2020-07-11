import React, { Component } from 'react'

class UserItem extends Component {

    // state = {
    //     id: 'id',
    //     login: 'mojombo',
    //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    //     html_url: 'https://github.com/mojombo'
    // }

    render() {
        return (
            <div className='card text-center'>
                <img 
                    src={this.props.user.avatar_url} 
                    alt="" 
                    className="center"
                    style={{ width: '60px' }}/>
                <h3>{this.props.user.login}</h3>
                <div>
                    <a href={this.props.user.html_url} className="btn btn-dark btn-sm my-3">More</a>
                </div>
            </div>
        )
    }
}

export default UserItem
