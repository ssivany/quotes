import "./App.css";

import QuoteAndAuthor from "./QuoteAndAuthor";
import React from "react";
import axios from 'axios'
import quotes from './QuotesDatabase'

let allData;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    const url = 'http://localhost:5000'
    axios.get(url)
      .then((response) => {
        allData = response.data.recordset;
        console.log(response)
      })
      .catch(error => console.error(`Error: ${error}`));
  }


  randomQuote() {
    const randomNumber = Math.floor(Math.random() * allData.length);
    return allData[randomNumber];
    
  }
  shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(allData)
    this.getData();
  };

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }
  
  render() {
    return (
      <div>
        <QuoteAndAuthor
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
