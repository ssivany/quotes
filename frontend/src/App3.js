import React, { useEffect, useState } from "react";

function App() {


    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        const url = 'http://localhost:5000'
        axios.get(url)
        .then((response) => {
            setData(response.data.recordset)
            console.log(data)

        })
        .catch(error => console.error(`Error: ${error}`));
    });

    randomColor(() => {
        const color = `rgb(
            ${Math.floor(Math.random() * 155)},
            ${Math.floor(Math.random() * 155)},
            ${Math.floor(Math.random() * 155)})`;
          return color;
    })

    handleClick(() => {
        const generateRandomQuote = this.randomQuote();
        this.setState({
        quote: generateRandomQuote.quote,
        author: generateRandomQuote.author
        });
        this.shuffleQuotes(data)
    })

    randomQuote(() => {
        const randomNumber = Math.floor(Math.random() * data.length);
        return data[randomNumber];
    })

    shuffleQuotes(() => {
        return array.sort(()=>Math.random()-0.5)
    })

    return (
        <div>
          <QuoteAndAuthor
            displayColor={this.randomColor}
            handleClick={this.handleClick}
          />
        </div>
      );
}