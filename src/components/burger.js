import React from 'react';
import PropTypes from 'prop-types';
import routes from '../constants/routes.json';
import { Link } from "gatsby";

export default function Burger(props) {
  const height = '16px',
    halfHeight = '8px',
    isOpen = props.isOpen || false,
    animationDuration = '0.4';

  const getTransformValue = (isOpen, defaultPos, rotateVal) => (
    `translate3d(0,${isOpen ? halfHeight : defaultPos},0) rotate(${isOpen ? `${rotateVal}deg` : '0'})`
  );

  const styles = {
    menu: {
      position: 'fixed',
      margin: '10px 0 0 10px',
      width: '138px',
      zIndex: 999
    },
    route: {
      height: '39px',
      borderTop: '1px solid rgba(255,255,255,.05)',
      background: '#313131',
      textAlign: 'center',
      lineHeight: '39px',
      fontSize: '12.25px',
      color: "rgba(255,255,255,.6)"
    },
    container: {
      height: '46px',
      background: '#313131',
      cursor: 'pointer'
    },
    lineBase: {
      display: 'block',
      height: '2px',
      width: '15%',
      background: '#fff',
      transitionTimingFunction: 'ease',
      transitionDuration: animationDuration + "s",
      transformOrigin: 'center',
      position: 'absolute',
      marginLeft: '60px'
    },
    firstLine: {
      transform: getTransformValue(isOpen, 0, 45),
      marginTop: '15px'
    },
    secondLine: {
      transitionTimingFunction: 'ease-out',
      transitionDuration: animationDuration / 4 + "s",
      opacity: isOpen ? '0' : '1',
      marginTop: '23px'
    },
    thirdLine: {
      transform: getTransformValue(isOpen, height, -45),
      marginTop: '15px'
    }
  };

  return (
    <div style={styles.menu}>
      <div style={styles.container} onClick={props.menuClicked}>
        <div style={Object.assign({}, styles.lineBase, styles.firstLine)}></div>
        <div style={Object.assign({}, styles.lineBase, styles.secondLine)}></div>
        <div style={Object.assign({}, styles.lineBase, styles.thirdLine)}></div>
      </div>

      {props.isOpen && routes.map(( route ) => (
        <div key={route.name} style={styles.route}>
          <Link to={route.link}>{route.name}</Link>
        </div>
      ))}
    </div>
  );
};

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  menuClicked: PropTypes.func.isRequired
};
