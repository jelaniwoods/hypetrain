import React, {Component} from 'react';

const NavLink = (props) => (
    <li style={styles.navItem}>
      <Link {...props} style={{ color: 'inherit' }}/>
    </li>
)

styles.navItem = {
    textAlign: 'center',
    flex: 1,
    listStyleType: 'none',
    padding: '10px'
}
export default NavLink;