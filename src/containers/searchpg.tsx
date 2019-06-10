import * as React from 'react';
import Header from './header';
import Card from "../components/card";
import styles from "./searchpg.module.scss";


export interface IProps {
    
}
 
export interface ICard {
    name: string;
    logoImageUrl: string;
}

export interface IState {
    filteredList: ICard[];
    clicked: boolean;
}
 
class SearchPage extends React.Component<IProps, IState> {
    
    state = { filteredList: [], clicked: false}

    async componentDidUpdate(prevProps: IProps, prevState: IState) {
        if (prevState.clicked !== this.state.clicked) {
        const uri =
        "http://demo.gilliard.lol/categories"

        const response = await fetch(uri);
        const returnedList = await response.json();
        this.setState({filteredList: returnedList});
        console.log(this.state);
      }}

      public handleClick = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({
          clicked: !this.state.clicked
        }); }

    render() { 
        return ( <article>
                    <button onClick={this.handleClick} className={styles.category}>Click me</button>
                    <div className={styles.cards}>
          {this.state.filteredList.map((card, index) => (
        <Card
          key={index}
          card={card}
      />
          ))}
        </div>
        </article> );
    }
}
 
export default SearchPage;