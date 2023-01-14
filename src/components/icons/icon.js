import React from 'react';
import PropTypes from 'prop-types';
import {
  IconExternal,
  IconGitHub,
} from '../../components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      console.log("at the case statement")
      return <IconGitHub />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
