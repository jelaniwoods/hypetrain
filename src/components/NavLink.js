import React, {Component} from 'react';
import { Link } from 'react-router-dom';
const NavLink = (props) => (
    <li style={styles.navItem}>
      <Link {...props} style={{ color: 'inherit' }}/>
    </li>
)
let styles = {};
styles.navItem = {
    textAlign: 'center',
    flex: 1,
    listStyleType: 'none',
    padding: '10px'
}
export default NavLink;