import React, { Component } from 'react';
import styles from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
        <nav className={styles.navbar}>

            <div className={styles.title}>
               <h3>Pro-Organizer</h3>

            </div>
            <ul className={styles.lists}>
               <NavLink id="list1" className={styles.links} exact activeClassName={styles.active} to="/">Home</NavLink> 
               <NavLink id="list2" className={styles.links} activeClassName={styles.active} to="/createboard">Create a Board</NavLink> 
               <NavLink id="list3" className={styles.links} activeClassName={styles.active} to="/signup">Sign Up</NavLink> 
            </ul>
        </nav>
        )
    }
}

export default Navbar
