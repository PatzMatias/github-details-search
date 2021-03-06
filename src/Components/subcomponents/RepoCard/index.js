/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import moment from 'moment';


const RepoCard = (props) => {
  const {repo} = props;
  return (
    <div className="w-100">
      <div className="card">
        <div className="card-body">
          <h6 className="card-title"><a href={repo.htmlUrl} target="_blank">{repo.name}</a></h6>
          <p className="card-text">{repo.description}</p>
          <div className="other-details">
            <span className="text-muted">Updated on {moment(repo.updatedAt).format('MMM D, YYYY')}</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default RepoCard;