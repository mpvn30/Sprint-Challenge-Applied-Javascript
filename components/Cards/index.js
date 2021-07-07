// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    // console.log(response);
    // console.log(response.data)
    const data = response.data;
    const articles = data.articles;
    const info = Object.values(articles);
    const addInfo = [];
    console.log(info.length)

    for (var i = 0; i < info.length; i++){
        for (var n = 0; n < info[i].length; n++)
        addInfo.push(info[i][n])
        console.log(addInfo)
    }
    addInfo.forEach(item => {
        const addCard = card(item);
        enter.appendChild(addCard);
    })

})
function card(obj){
    const
    newCard = document.createElement('div');
    headline = document.createElement('div');
    authorContainer = document.createElement('div');
    imgContainer = document.createElement('div');
    image = document.createElement('img');
    author = document.createElement('span');

    newCard.classList.add('card');
    headline.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = obj.headline;
    image.src = obj.authorPhoto;
    author.textContent = obj.authorName;

    newCard.appendChild(headline);
    newCard.appendChild(authorContainer);
    authorContainer.appendChild(imgContainer);
    imgContainer.appendChild(image);
    authorContainer.appendChild(author);

    return newCard;
}

const enter = document.querySelector('.cards-container')
 
