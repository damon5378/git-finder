import React, { useEffect } from "react";
import Loader from "../layout/Loader";
import { Link } from "react-router-dom";
import { Repos } from "../repos/Repos";

const User = (props) => {
  useEffect(() => {
    props.getUser(props.match.params.login);
    props.getUserRepos(props.match.params.login);
    // eslint-disable-next-line
  }, []);
  
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = props.user;


    if (props.loading) return <Loader />;
    return (
      <>
        <Link to="/git-finder" className="btn btn-light back-to-search">
          Back To Search
        </Link>
        <div className="hire">Hireable:{" "}</div>
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} className="user-img" alt="" />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit Github Profile
            </a>
            <ul>
              <li className='user-data'>
                {login && 
                <>
                  <strong>Username: </strong> {login}
                </>}
              </li>
              <li className='user-data'>
                {company && 
                <>
                  <strong>Company: </strong> {login}
                </>}
              </li>
              <li className='user-data'>
                {blog && 
                <>
                  <strong>Website: </strong> {login}
                </>}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center own-card">
          <div className='badge badge-primary own-badge'>Followers: {followers}</div>
          <div className='badge badge-success own-badge'>Following: {following}</div>
          <div className='badge badge-info own-badge'>Public Repository: {public_repos}</div>
          <div className='badge badge-dark own-badge'>Public Gists: {public_gists}</div>
        </div>
        <Repos repos={props.repos} />
      </>
    );
}

export default User;
