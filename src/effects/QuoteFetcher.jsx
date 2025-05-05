import { useEffect, useState } from "react";

const randomUrl = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
  // useState does not take an asynchronus function
  // for api data start w/ empty ap then use Effect
  const [quote, setQuote] = useState({ text: "", author: "" });
  // Empty array run on inital render
  // Below provide regurlar funciton that has an async function in it. 
  useEffect(() => {
    async function getInitialQuote() {
      const res = await fetch(randomUrl);
      const jsonResponse = await res.json();
      const randomQuote = jsonResponse.quote;
      setQuote(randomQuote);
    }
    getInitialQuote();
  }, []);

  async function fetchAndSetQuote() {
    const res = await fetch(randomUrl);
    const jsonResponse = await res.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
  }

  return (
    <div>
      <button onClick={fetchAndSetQuote}>Get Random Quote</button>
      <h1>{quote.text} </h1>
      <h3>{quote.author} </h3>
    </div>
  );
}
