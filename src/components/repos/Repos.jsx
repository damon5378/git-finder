import React from 'react'
import { RepoItem } from './RepoItem'

export const Repos = (props) => {
    return props.repos.map(repo => <RepoItem key={repo.id} repo={repo} />)
}
