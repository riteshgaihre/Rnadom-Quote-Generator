const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
async function getQuote(){
    try {
        const url = "https://api.quotable.io/random";
        const result = await fetch(url).then((res)=>res.json());
        const quoteContent = result.content;
        const quoteAuthor = result.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = quoteAuthor;
        

        
    } catch (error) {
        console.log(error);
        quoteEl.innerText = `An error happened, check connection`;
        authorEl.innerText = `error`;
        
    }
}
btnEl.addEventListener("click", getQuote);
    