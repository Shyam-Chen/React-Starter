import React from 'react';
import { Link } from 'react-router-dom';

export default ({ ...other }) => (
  <Link {...other} style={{ textDecoration: 'none' }}></Link>
);
