import React, {useContext} from 'react'
import UserItem from './UserItem';
import Loader  from '../layout/Loader';
import GithubContext from '../../context/github/GithubContext';

const Users = () => {

  const githubContext = useContext(GithubContext);

  const {loading, users} = githubContext;

    if(loading) {
        return <Loader />
    } else {
        return (
      <div className="user-style">
        {users.map(user => (
            <UserItem key={user.id} user={user}/> 
        ))}
      </div>
    )
    }


}

export default Users;
