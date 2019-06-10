import * as React from 'react';
import styles from "./index.module.scss";
import Header from './header';
import SearchPage from "./searchpg";

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Main extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <React.Fragment>
            <Header />
        <article className={styles.main}>
            <div className={styles.locality}>
                <h1>Enter your location here</h1>
                <input type="search" placeholder="Enter a location here"></input>
            </div>
        </article> 
        </React.Fragment>);
    }
}
 
export default Main;