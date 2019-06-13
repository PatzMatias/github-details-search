import {decorate, action, observable} from "mobx";
import api from '../../Utils/api.js';
import User from '../_models/User';
import Repo from '../_models/Repo';
import Organization from '../_models/Organization';

class UserStore {
  user = null;
  repos = [];
  orgs = [];
  error = false;
  errorMessage = null;


  assignError(error) {
    this.error = error
  }

  assignErrorMessage(message) {
    this.errorMessage = message;
  }

  clearErrorMessage() {
    this.errorMessage = null;
  }

  errorCallback = (error) => {
    this.assignError(true);
  }

  getAllData = async(username) => {
    try {
      const user = await this.getUser(username);
      const repos = await this.getRepos(username);
      const orgs = await this.getOrgs(username);
     
      this.assignUser(user.data);
      this.collectRepos(repos.data);
      this.collectOrgs(orgs.data);
      if(this.error) {
        this.assignError(false);
        this.clearErrorMessage();
      }
    } catch (error) {
      this.assignErrorMessage(`${username} doesn't exist`);
      console.error(error)
    }
  };

  clearAllData() {
    if(this.user !== null) {
      this.user = null;
      this.repos = [];
      this.orgs = [];
    }
  };
  
  getUser = async (username) => {
    try {
      const user = await api('get', username, '', {}, this.errorCallback);
      return user;
    } catch(error) {
      this.error = error;
    }
  };

  getRepos = async (username) => {
    try {
      const repos = await api('get', username, '/repos', {}, this.errorCallback);
      return repos;
    } catch(error) {
      return error;
    }
  };

  getOrgs = async (username) => {
    try {
      const orgs = await api('get', username, '/orgs', {}, this.errorCallback);
      return orgs;
    } catch(error) {
      return error;
    }
  };
  
  assignUser(user) {
    this.user = new User(user);
  };

  collectRepos = async (repos) => {
    const repositories = await repos.map(repo => new Repo(repo));
    this.assignRepos(repositories);
  }

  assignRepos(repos) {
    this.repos = repos;
  }

  collectOrgs = async (orgs) => {
    const organizations = await orgs.map(org => new Organization(org));
    this.assignOrgs(organizations);
  }

  assignOrgs(orgs) {
    this.orgs = orgs;
  };
}

export default decorate(UserStore, {
  //actions
  getAllData: action,
  clearAllData: action,
  getUser: action,
  getRepos: action,
  getOrgs: action,
  assignError: action,
  assignErrorMessage: action,
  assignUser: action,
  assignRepos: action,
  assignOrgs: action,
  collectRepos: action,
  collectOrgs: action,
  clearErrorMessage: action,
  
  //observables
  user: observable,
  repos: observable,
  orgs: observable,
  error: observable,
  errorMessage: observable
});

// export default UserStore;