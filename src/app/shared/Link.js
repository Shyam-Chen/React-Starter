import React from 'react';
import { Link } from 'react-router-dom';

export const _Link = ({ ...other }) => (
  <Link {...other} style={{ textDecoration: 'none' }} />
);

export default _Link;
