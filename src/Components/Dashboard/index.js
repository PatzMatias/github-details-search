import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import './Dashboard.css';


const Dashboard = inject("appStore", "userStore") (
  observer(
    class Dashboard extends Component {
      constructor() {
        super();
        this.state = {
          username: ''
        }
      }
      
      _onUsernameChange = (e) => {
        this.setState({'username': e.currentTarget.value});
      };
      
      _handleKeyDown = (e) => {
        if (this.state.username && e.keyCode === 13) {
          this.getUserData();
        }
      }

      getUserData = () => {
          const {userStore} = this.props;
          userStore.getUser(this.state.username, '');
      };
      
      render() {
        const {userStore} = this.props;
    
        return (
          <div className="dashboard">
            <header className="dashboard-header">
                <div className="search-form">
                  <div className="input">
                    <label htmlFor="username">Search</label> 
                    <input placeholder="Username" name="username" type="text" 
                      onChange={this._onUsernameChange}
                      onKeyDown={this._handleKeyDown}/>
                  </div>
                </div>
                <div className="search-result-user">
                  {userStore.user ? userStore.user.name : null}
                </div>
            </header>
          </div>
        );
      }
    }
  )
);



export default Dashboard;
