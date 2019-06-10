import * as React from 'react';
import styles from "./nav.module.scss"
import {Link} from "react-router-dom";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Nav extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <nav className={styles.navbar}>
            <Link to="home" className={styles.link}>Location Search</Link>
            <Link to="/searching-page" className={styles.link}>Searching Page</Link>

        </nav> );
    }
}
 
export default Nav;