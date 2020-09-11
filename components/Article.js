// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import gsap from "gsap";
import {data} from "../data/data.js";

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
  */

const articleBuilder = (htmlTag, title, date, body) => {
  const articleDiv = document.createElement("div");
  articleDiv.classList.add("article");

  const articleH2 = document.createElement("h2");
  articleH2.textContent = title;
  articleDiv.appendChild(articleH2);

  const articleDate = document.createElement("p");
  articleDate.classList.add("date");
  articleDate.textContent = date;
  articleDiv.appendChild(articleDate);

  const bodyArray = body.trim().split("\n");
  bodyArray.forEach((para) => {
    const articleP = document.createElement("p");
    articleP.textContent = para;
    articleDiv.appendChild(articleP);
  });

  const articleSpan = document.createElement("span");
  articleSpan.classList.add("expandButton");
  articleSpan.textContent = "+";
  articleSpan.addEventListener("click", (event) => {
    //articleDiv.classList.toggle("article-open");
    const artDiv = event.target.parentNode;
    artDiv.offsetHeight === 50
      ? gsap.to(artDiv, { duration: 0.5, height: 400 })
      : gsap.to(artDiv, { duration: 0.5, height: 50 });
  });
  articleDiv.appendChild(articleSpan);

  const btnClose = document.createElement("button");
  btnClose.textContent = "Close";
  btnClose.classList.add("closeButton");
  btnClose.addEventListener("click", () => {
    articleDiv.style.display = "none";
  });
  articleDiv.appendChild(btnClose);

  console.log(articleDiv);

  document.querySelector(htmlTag).appendChild(articleDiv);
};

function articleMaker(article) {
  const articleDiv = document.createElement("div");
  articleDiv.classList.add("article");

  const articleH2 = document.createElement("h2");
  articleH2.textContent = article.title;
  articleDiv.appendChild(articleH2);

  const articleDate = document.createElement("p");
  articleDate.classList.add("date");
  articleDate.textContent = article.date;
  articleDiv.appendChild(articleDate);

  const articleP1 = document.createElement("p");
  articleP1.textContent = article.firstParagraph;
  articleDiv.appendChild(articleP1);

  const articleP2 = document.createElement("p");
  articleP2.textContent = article.secondParagraph;
  articleDiv.appendChild(articleP2);

  const articleP3 = document.createElement("p");
  articleP3.textContent = article.thirdParagraph;
  articleDiv.appendChild(articleP3);

  const articleSpan = document.createElement("span");
  articleSpan.classList.add("expandButton");
  articleSpan.textContent = "+";
  articleSpan.addEventListener("click", (event) => {
    //articleDiv.classList.toggle("article-open");
    const artDiv = event.target.parentNode;
    artDiv.offsetHeight === 50
      ? gsap.to(artDiv, { duration: 0.5, height: 400 })
      : gsap.to(artDiv, { duration: 0.5, height: 50 });
  });
  articleDiv.appendChild(articleSpan);

  const btnClose = document.createElement("button");
  btnClose.textContent = "Close";
  btnClose.classList.add("closeButton");
  btnClose.addEventListener("click", () => {
    articleDiv.style.display = "none";
  });
  articleDiv.appendChild(btnClose);

  return articleDiv;
}

data.push({
  title: "I love my Sunday TL group",
  date: "September 7, 2020",
  firstParagraph: `Amazing guys getting together to have fun coding`,

  secondParagraph: `Yeah Chad, go go go go go go!`,

  thirdParagraph: `We're so great!`,
});

data.push({
  title: "Welcome to the World of Lorem Ipsum",
  date: "June 7, 2001",
  firstParagraph: `orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,

  secondParagraph: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,

  thirdParagraph: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
});

data.forEach((article) => {
  document.querySelector(".articles").appendChild(articleMaker(article));
});

document.querySelector("#submit").addEventListener("click", (event) => {
  event.preventDefault();

  articleBuilder(
    ".articles",
    document.querySelector("#title").value,
    document.querySelector("#date").value,
    document.querySelector("#paragraphs").value
  );

  document.querySelector("#title").value = "";
  document.querySelector("#date").value = "";
  document.querySelector("#paragraphs").value = "";
});
