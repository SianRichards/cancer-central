import * as React from 'react';
import { ICard } from "../containers/searchpg";
import styles from "./card.module.scss";

export interface IProps {
    card: ICard;
    
}
 
export interface IState {
    
}
 
class Card extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( <div className={styles.card}>
            <h1>{this.props.card.name}</h1>
            <img src={this.props.card.logoImageUrl} />
        </div> );
    }
}
 
export default Card;