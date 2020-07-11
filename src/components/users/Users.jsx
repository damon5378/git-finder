import React from 'react'
import UserItem from './UserItem';
import Loader  from '../layout/Loader';

const Users = props => {

    if(props.loading) {
        return <Loader />
    } else {
        return (
      <div className="user-style">
        {props.users.map(user => (
            <UserItem key={user.id} user={user}/> 
        ))}
      </div>
    )
    }

    
}

export default Users;
