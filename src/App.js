import React from "react";
import axios from 'axios';
import './App.css';

class App extends React.Component {
    state = { quote: '' };

    componentDidMount(){
        //console.log('COMPONENT DID MOUNT');
        //axios.get('https://api.adviceslip.com/advice');
        this.fetchQuote();
    }

    fetchQuote = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip;
            //console.log(advice);
            this.setState({quote:advice});
            //console.log(response.data.slip.advice);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        const {quote} = this.state;
        return (
            <div className="app">
                 <div className="card">
                     <h1 className="heading">{quote}</h1>
                     <button className="button" onClick={this.fetchQuote}>
                        <span>Go!</span>
                     </button>
                </div>
            </div>          
        );
    }
}
export default App;