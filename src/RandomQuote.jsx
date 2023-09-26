import React, {useState} from 'react';
import './RandomQuote.css';

const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    const [quote, setQuote] = useState({
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang von Goethe",
    });

    loadQuotes();

    return (
        <div className="container">

            <div className="quote">
                {quote.text}
            </div>

            <div className="line"> </div>

            <div className="bottom">
                <div className="author">
                    - {quote.author.split(',')[0]}
                </div>
                <div className="icons">
                    <button className="btn" onClick={() => {random()}}>Generate New Quote</button>
                </div>
            </div>

        </div>
    )
}

export default RandomQuote