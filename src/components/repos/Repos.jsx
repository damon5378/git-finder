import React, {useContext} from 'react'
import { RepoItem } from './RepoItem'
import GithubContext from '../../context/github/GithubContext';

export const Repos = ({repos}) => {
    const githubContext = useContext(GithubContext);
    return githubContext.repos.map(repo => <RepoItem key={repo.id} repo={repo} />)
}
