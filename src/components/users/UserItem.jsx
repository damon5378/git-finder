import React from 'react'
import { Link } from 'react-router-dom'

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
                <Link to={`git-finder/user/${props.user.login}`} className="btn btn-dark btn-sm my-3">More</Link>
                </div>
            </div>
        )
}

export default UserItem
