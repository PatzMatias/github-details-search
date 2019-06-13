import {decorate, action, observable} from "mobx";
import api from '../../Utils/api.js';
import User from '../models/User';

class UserStore {
  user = null;
  repos = null;
  organizations = null;
  
  getUser = async (username, path) => {
    try {
      const user = await api('get', username, path);
      const repos = await api('get',username,'/repos');
      const orgs = await api('get',username,'/orgs');
      console.log(repos.data)
      console.log(orgs.data);
      this.assignUser(user.data);
      return user;
    } catch(error) {
      console.error(error)
    }
  };
  
  assignUser(user) {
    this.user = new User(user);
  };
  
}

export default decorate(UserStore, {
  //actions
  getUser: action,
  assignUser: action,
  
  //observables
  user: observable,
  repos: observable,
  organizations: observable
});

// export default UserStore;