/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import OrgCard from '../OrgCard';

const OrgsList = (props) => {
  const {active, orgs} = props;
  return active ? (
    <div className="row no-gutters">
        { orgs.map(org => <OrgCard key={org.id} org={org} />) }
    </div>
  ) : null;
};

export default OrgsList;