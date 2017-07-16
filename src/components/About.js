import React from 'react';
import PropTypes from 'prop-types'

const About = (props) => (
  <div>
    About Component - { props.value }
  </div>
);

About.propTypes = {
  value: PropTypes.string
}

export default About;
