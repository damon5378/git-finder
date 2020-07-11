import React from 'react'

const UserItem = (props) => {

    // state = {
    //     id: 'id',
    //     login: 'mojombo',
    //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    //     html_url: 'https://github.com/mojombo'
    // }

        return (
            <div className='card text-center'>
                <img 
                    src={props.user.avatar_url} 
                    alt="" 
                    className="center"
                    style={{ width: '60px' }}/>
                <h3>{props.user.login}</h3>
                <div>
                    <a href={props.user.html_url} className="btn btn-dark btn-sm my-3">More</a>
                </div>
            </div>
        )
}

export default UserItem
