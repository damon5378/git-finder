import React, { Component } from "react";
import Loader from "../layout/Loader";
import { Link } from "react-router-dom";
import { Repos } from "../repos/Repos";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  render() {
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
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Loader />;
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
        <Repos repos={this.props.repos} />
      </>
    );
  }
}

export default User;
