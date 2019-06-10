import * as React from 'react';
import styles from "./header.module.scss";
import Nav from "./nav";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Header extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment><header className={styles.header}>
            <h1 className={styles.title}>
            Cancer Central
            </h1>
        </header> 
        <Nav />
        </React.Fragment>);
    }
}
 
export default Header;