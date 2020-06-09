import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
// import components
import Card from "./components/Card";
import ScoreBoard from "./components/ScoreBoard";
import Container from "./components/Container";
import cards from "./cards.json";

class App extends Component {
    state = {
        cards,
        cardIds: [],
        score: 0,
        goal: 8,
        status: ""
    };
    
    score = id => {
        let cardIds = this.state.cardIds;
    
        if (cardIds.includes(id)) {
            this.setState({
                cardIds: [],
                score: 0,
                status:  "Game Over! You lost. Click to play again!"
            });
            return;
        } else {
            cardIds.push(id)
    
            if (cardIds.length === 8) {
                this.setState({score: 8, status: "You Won! Great Job, Smartie! Click to play again!", cardIds: []});
                console.log('You Win');
                return;
            }
    
            this.setState({
                cards,
                cardIds,
                score: cardIds.length,
                status: ""
            });
    
            for (let i = cards.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [cards[i], cards[j]] = [cards[j], cards[i]];
            }
        }
      }
    // TODO methods to handle game play shuffle and scoring logic

    // Map over this.state.cards and render a Card component for each card object
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Click that Cat</h1>
                    <p className="App-intro">
                        But try not to click the same image twice!
                    </p>
                </header>
                <ScoreBoard total={this.state.score}
                    goal={8}
                    status={this.state.status}
                />
                
                <Container>
                    {this.state.cards.map(card => (
                        <Card
                            score={this.score}
                            id={card.id}
                            key={card.id}
                            image={card.image}
                        />
                ))}
                </Container>
                <footer>
               
                </footer>
            </div>
        );
    }
}
export default App;
