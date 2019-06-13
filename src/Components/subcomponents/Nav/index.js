import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


class Nav extends Component {



  onChange = (e) => {
    this.props.onChange(e);
  };

  onKeyDown = (e) => {
    this.props.onKeyDown(e);
  }

  render() {
    return  (
      <nav className="navbar navbar-dark bg-dark">
        <a href="/" className="navbar-brand"><FontAwesomeIcon icon={faGithub} /> &nbsp;{this.props.appName}</a>
        <div className="form-inline">
          <input 
            className="form-control mr-sm-2" 
            type="search" 
            placeholder="Username" 
            aria-label="Username" 
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}/>
          <button className="btn btn-outline-secondary my-2 my-sm-0">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </nav>
    )
  }
}

export default Nav;