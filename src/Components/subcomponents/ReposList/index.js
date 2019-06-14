/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import RepoCard from '../RepoCard';

const RepoList = (props) => {
  const {active, repos} = props;
  return active ? (
    <div className="row">
      { repos.map(repo => <RepoCard key={repo.id} repo={repo} />) }
    </div>
  ) : null;
};

export default RepoList;