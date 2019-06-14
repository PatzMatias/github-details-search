/* eslint-disable react/jsx-no-target-blank */
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import moment from 'moment';
import cn from 'classnames';
import './style.css';

export default class UserCard extends Component {

  switcher = (value) => {
    this.props.switcher(value)
  };

  render() {
    const {
      user,
      orgs,
      activeData
    } = this.props;

    const defaultListClasses = cn("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    const defaultDetailClasses = cn("list-group-item", "d-flex", "justify-content-between", "align-items-center", "bg-dark");

    const defaultPillClasses = cn("badge badge-primary badge-pill");

    const reposPill = cn(defaultPillClasses, {
      'badge-dark': activeData === 'repos'
    });

    const orgsPill = cn(defaultPillClasses, {
      'badge-dark': activeData !== 'repos'
    });

    const reposClasses = cn(defaultListClasses,"clickable", {
      'bg-secondary': activeData === 'repos',
      'bg-dark': activeData !== 'repos'
    });

    const orgsClasses = cn(defaultListClasses,"clickable", {
      'bg-secondary': activeData !== 'repos',
      'bg-dark': activeData === 'repos'
    });

    return (
      <div className="user-card card text-white bg-dark">
        <div className="row no-gutters d-flex justify-content-center">
          <div className="col-4 col-sm-4 col-md-6 ">
            <img src={user.avatarUrl} className="card-img" alt="..." />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="card-body text-center">
              <h5 className="card-title">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{user.login}</h6>
              <p className="card-text">{user.bio}</p>
              <span className="text-muted joined-text">Joined Github on {moment(user.createdAt).format('MMM D, YYYY')}</span>
            </div>
          </div>
        </div>
        <ul className="list-group list-group-flush bg-dark">
          <li className={reposClasses} onClick={e => this.switcher("repos")}>Repositories <span className={reposPill}>{user.publicRepos ? user.publicRepos : 0}</span></li>
          <li className={orgsClasses} onClick={e => this.switcher("orgs")}>Organizations <span className={orgsPill}>{orgs ? orgs.length : 0}</span></li>
          <li className={defaultDetailClasses}>Followers <span className={defaultPillClasses}>{user.followers ? user.followers : 0}</span></li>
          <li className={defaultDetailClasses}>Following <span className={defaultPillClasses}>{user.following ? user.following : 0}</span></li>
          <li className="list-group-item d-flex justify-content-between align-items-center bg-dark"><a href={user.htmlUrl} target="_blank" rel="noopener noereferrer"><FontAwesomeIcon icon={faGithub}/> &nbsp;github.com/{user.login}</a></li>
        </ul>
      </div>
  );
  }
}