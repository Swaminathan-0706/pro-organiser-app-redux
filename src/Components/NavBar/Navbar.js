import React, { Component } from 'react'
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <header className={styles.header}>
             <h1>Pro-Organizer</h1> 
             <ul className={styles.listCtr}>
                 <NavLink exact to='/' className={styles.listItem} activeClassName={styles.active}>Home</NavLink>
                 <NavLink to='/createboard' className={styles.listItem} activeClassName={styles.active}>Create a Board</NavLink>
             </ul> 
            </header>
        )
    }
}

export default Navbar
