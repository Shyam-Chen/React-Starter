import React from 'react';
import PropTypes from 'prop-types'

import xhr from 'superagent';

const About = ({ value, text }) => {

  text = 'List'

  const getList = () => {
    xhr.get('https://web-go-demo.herokuapp.com/__/list')
      .then(res => {
        console.log(res.text);
      });
  }


  return (
    <div>
      About Component - { value }
      <button onClick={ getList }>Get List</button>
      { text }
    </div>
  )
};

About.propTypes = {
  value: PropTypes.string,
  text: PropTypes.string,
}

export default About;
