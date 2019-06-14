/* eslint-disable react/jsx-no-target-blank */
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import cn from 'classnames';
import Nav from '../subcomponents/Nav';
import UserCard from '../subcomponents/UserCard';
import ReposList from '../subcomponents/ReposList';
import OrgsList from '../subcomponents/OrgsList';
import ErrorDisplay from '../subcomponents/ErrorDisplay';
import InitDisplay from '../subcomponents/InitDisplay';
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
        );
      }

      render() {
        const {appStore, userStore} = this.props;

        const {user, repos, orgs, error, errorMessage} = userStore;

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
                <InitDisplay active={!error && user === null} />
                <div className={userDataBox}>
                    {this.header()}
                    <ReposList active={this.state.activeData === 'repos' && user !== null} repos={repos} />
                    <OrgsList active={this.state.activeData === 'orgs' && user !== null} orgs={orgs} />
                    <ErrorDisplay error={error} message={errorMessage} />
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  )
);



export default Dashboard;
