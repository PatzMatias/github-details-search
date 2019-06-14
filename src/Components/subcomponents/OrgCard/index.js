/* eslint-disable react/jsx-no-target-blank */
import React, {Component} from 'react';

export default class RepoCard extends Component {
  render() {

    const {org} = this.props;
    
    return (
      <div className="w-100 mb-2">
        <div className="org-card card">
          <div className="row no-gutters">
            <div className="col-3 col-sm-3 col-md-2">
              <img src={org.avatarUrl} className="card-img" alt="..."/>
            </div>
            <div className="col-9 col-sm-9 col-md-10">
              <div className="card-body">
                <h6 className="card-title"><a href={org.htmlUrl} target="_blank">{org.login}</a></h6>
                <p className="card-text">{org.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}