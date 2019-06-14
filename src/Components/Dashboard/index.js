/* eslint-disable react/jsx-no-target-blank */
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import cn from 'classnames';
import Nav from '../subcomponents/Nav';
import UserCard from '../subcomponents/UserCard';
import RepoCard from '../subcomponents/RepoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import OrgCard from '../subcomponents/OrgCard';
import './Dashboard.css';


const Dashboard = inject("appStore", "userStore") (
  observer(
    class Dashboard extends Component {
      constructor() {
        super();
        this.state = {
          username: '',
          activeData: 'repos'
        }
      }
      
      _onUsernameChange = (e) => {
        this.setState({'username': e.currentTarget.value});
      };
      
      _onKeyDown = (e) => {
        if (this.state.username && e.keyCode === 13) {
          this.getUserData();
        }
      }

      _onSearch = (e) => {
        if(this.state.username) {
          this.getUserData();
        }
      }

      switchData = (value) => {
        // const {activeData} = this.state
        console.log(value)
        this.setState({'activeData': value});
      };

      getUserData = () => {
          const {userStore} = this.props;
          userStore.clearAllData();
          userStore.getAllData(this.state.username);
          this.switchData('repos');
      };


      header = () => {
        const {user, orgs} = this.props.userStore;
        return  user === null ? null : (
          <div className="row no-gutters">
            <h3 className="list-header">
              { this.state.activeData === 'repos' ? 
                `Repositories (${user.publicRepos})` : `Organizations (${orgs ? orgs.length : 0})` }
            </h3>
          </div>
        )
      }

      reposList = () => {
        const {repos} = this.props.userStore;
        return ( <div className="row">
          { repos.map(repo => <RepoCard key={repo.id} repo={repo} />) }
        </div>)
      }

      orgsList = () => {
        const {orgs} = this.props.userStore;
        return (<div className="row no-gutters">
          { orgs.map(org => <OrgCard key={org.id} org={org} />) }
        </div>)
      }

      content = () => {
        const {error} = this.props.userStore;
        return !error ? (
          this.state.activeData === 'repos' ? this.reposList() : this.orgsList() 
        ) : this.error();
      }

      error = () => {
        const {error, errorMessage} = this.props.userStore;
        return error ? (
          <div className="row h-100 d-flex justify-content-center align-items-center error-box">
            <div className="col-6 text-center">
              <h1><FontAwesomeIcon icon={faTimesCircle}/></h1>
              <h4>{errorMessage}</h4>
            </div>
          </div>
        ) : null;
      }

      userEmpty = () => {
        const {error} = this.props.userStore;
        return !error ? (
          <div className="row h-100 d-flex justify-content-center align-items-center user-empty">
            <div className="col-6 text-center">
              <h1><FontAwesomeIcon icon={faSearch}/></h1>
              <h4>Go find someone!</h4>
            </div>
          </div>
        ) : this.error();
      }
      
      render() {
        const {appStore, userStore} = this.props;

        const {user, orgs, error} = userStore;

        const profile = cn("col-12","col-sm-4","profile",{'bg-primary': user});
        const profileBox = cn('profile-box', {'reveal': user});
        const userDataBox = cn('user-data-box', {'reveal': user || error});
        const userData = cn('col-12','col-sm-8', 'user-data', {'bg-danger': error, 'h-100': error});

        return (
          <div className="container h-100">
            <div className="row">
              <Nav 
                appName={appStore.appName}
                onChange={this._onUsernameChange} 
                onKeyDown={this._onKeyDown} 
                onClick={this._onSearch}/>
            </div>
            <div className="row search-result-user h-100">
              <div className={profile}>
                <div className={profileBox}>
                  { user === null ? null :
                    <UserCard user={user} orgs={orgs} activeData={this.state.activeData} switcher={this.switchData}/>}
                </div>
              </div>
              <div className={userData}>
                {user!== null ? 
                <div className={userDataBox}>
                    {this.header()}
                    {this.content()}
                </div> : this.userEmpty()
              }
              </div>
            </div>
          </div>
        );
      }
    }
  )
);



export default Dashboard;
