/* Buttons*/

const All = document.querySelector('.all');
const BrFast = document.querySelector('.brFast');
const Lunch = document.querySelector('.lunch');
const Dinner = document.querySelector('.dinner');

/* items div */
const cardContainer = document.querySelector('#cards');
const Info = document.querySelector('.info');
const HeadPrice = document.querySelector('.headPrice');
const Image = document.querySelector('.image');
const Desc = document.querySelector('.desc');


const foodItems = [
    { name: "Breakfast", img: "./images/breakfast.jpeg", price: "$ 15.99", desc: "Breakfast sdkjf kasdjfhakd  kadjfs fjshd fasdjkl fasdf asjkd fasjk fasjhfb asdfhas fashk fasnkd faskd fasd jkfas dfj adasjkd faasdj asdjk fasduk f so healty and asdkj  asdkj adj dfs sd" },
    { name: "Lunch", img: "./images/lunch.jpeg", price: "$ 15.99", desc: "Lunch is sd sdj kvd jd  kadjfs fjshd fasdjkl fasdf asjkd fasjk fasjhfb asdfhas fashk fasnkd faskd fasd jkfas dfj adasjkd faasdj asdjk fasduk f so healty and asdkj  asdkj adj dfs sd" },
    { name: "Dinner", img: "./images/dinner2.jpg", price: "$ 15.99", desc: "Dinner djdf fddf kadjfs fjshd fasdjkl asjhfb asdfhas fashk fasnkd faskd fasd jkfas dfj adasjkd faasdj asdjk fasduk f so healty and asdkj  asdkj adj dfs sd" },
    { name: "Lunch", img: "./images/lunch2.jpg", price: "$ 15.99", desc: " lunch dskj adjkd  dj sdj kvd jd  kadjfs fjshd fasdjkl fasdf asjkd fasjk fasjhfb asdfhas fashk fasnkd faskd fasd jkfas dfj adasjkd faasdj asdjk fasduk f so healty and asdkj  asdkj adj dfs sd" },
    { name: "Breakfast", img: "./images/breakfastt.jpg", price: "$ 15.99", desc: "Breakfast l;rg fksd skfskd  kadjfs fjshd fasdjkl fasdf asjkd fasjk fasjhfb asdfhas fashk fasnkd faskd fasd jkfas dfj adasjkd faasdj asdjk fasduk f so healty and asdkj  asdkj adj dfs sd" },
    { name: "Dinner", img: "./images/dinner.jpeg", price: "$ 15.99", desc: "Dinner sjjd dajdjj dj sdj kvd jd  kadjfs fjshd fasdjkl fasdf asjkd fasjk fasjhfb asdfhas fashk fasnkd faskd fasd jkfas dfj adasjkd faasdj asdjk fasduk f so healty and asdkj  asdkj adj dfs sd" },
];

let autoShow = foodItems.forEach(function (item) {
    /* create elements */
    let card = document.createElement('div');
    card.classList.add('card');

    let img = document.createElement('img');
    img.src = `${item.img}`
    let info = document.createElement('div')

    let headPrice = document.createElement('div')
    headPrice.classList.add('headPrice');

    let heading = document.createElement('h3');
    heading.innerText = `${item.name}`

    let line = document.createElement('div');
    line.innerHTML = `<hr>`

    let desc = document.createElement('p');
    desc.innerText = `${item.desc}`
    desc.classList.add('desc');

    let price = document.createElement('p');
    price.innerText = `${item.price}`;
    price.classList.add('price');

    headPrice.append(heading, price)
    info.append(headPrice, line, desc)
    card.append(img, info);
    cardContainer.append(card)


})

function showAllItems() {
    Img.innerHTML = foodItems[0].img;
    Heading.innerHTML = foodItems[1]
}

/* Button Show All */

All.addEventListener('click', () => {
    cardContainer.innerHTML = " ";
    foodItems.forEach(function (item) {
        /* create elements */
        let card = document.createElement('div');
        card.classList.add('card');

        let img = document.createElement('img');
        img.src = `${item.img}`
        let info = document.createElement('div')
        info.classList.add('info')

        let headPrice = document.createElement('div')
        headPrice.classList.add('headPrice');


        let heading = document.createElement('h3');
        heading.innerText = `${item.name}`

        let line = document.createElement('div');
        line.innerHTML = `<hr>`

        let desc = document.createElement('p');
        desc.innerText = `${item.desc}`
        desc.classList.add('desc');


        let price = document.createElement('p');
        price.innerText = `${item.price}`;
        price.classList.add('price');


        headPrice.append(heading, price)
        info.append(headPrice, line, desc)
        card.append(img, info);
        cardContainer.append(card)


    })
})



/* Button Show Breakfast */
BrFast.addEventListener('click', () => {

    let breakfastItems = foodItems.filter(item => item.name === "Breakfast");

    cardContainer.innerHTML = "";  // ✔️ Clear only once

    breakfastItems.forEach(function (item) {

        let card = document.createElement('div');
        card.classList.add('card');

        let img = document.createElement('img');
        img.src = item.img;

        let info = document.createElement('div');
        info.classList.add('info');

        let headPrice = document.createElement('div');
        headPrice.classList.add('headPrice');

        let heading = document.createElement('h3');
        heading.innerText = item.name;

        let price = document.createElement('p');
        price.innerText = item.price;
        price.classList.add('price');

        let line = document.createElement('div');
        line.innerHTML = "<hr>";

        let desc = document.createElement('p');
        desc.innerText = item.desc;
        desc.classList.add('desc');

        headPrice.append(heading, price);
        info.append(headPrice, line, desc);
        card.append(img, info);

        cardContainer.append(card);
    });
});


/* Button Show Breakfast */
Lunch.addEventListener('click', () => {
    let breakfastItems   = foodItems.filter(function (item) {
        return item.name === "Lunch";
    });

    cardContainer.innerHTML = " ";

    breakfastItems.forEach(function (item) {
        let card = document.createElement('div');
        card.classList.add('card');

        let img = document.createElement('img');
        img.src = `${item.img}`
        let info = document.createElement('div')

        let headPrice = document.createElement('div')
        headPrice.classList.add('headPrice');

        let heading = document.createElement('h3');
        heading.innerText = `${item.name}`

        let line = document.createElement('div');
        line.innerHTML = `<hr>`

        let desc = document.createElement('p');
        desc.innerText = `${item.desc}`
        desc.classList.add('desc');

        let price = document.createElement('p');
        price.innerText = `${item.price}`;
        price.classList.add('price');

        headPrice.append(heading, price)
        info.append(headPrice, line, desc)
        card.append(img, info);
        cardContainer.append(card)
    });
});

/* Button Show Dinner */

Dinner.addEventListener('click', () => {
    let Dinner = foodItems.filter(item => item.name === "Dinner")

    cardContainer.innerHTML = " ";

    Dinner.forEach(function (item) {
        let card = document.createElement('div');
        card.classList.add('card');

        let img = document.createElement('img');
        img.src = `${item.img}`
        let info = document.createElement('div')

        let headPrice = document.createElement('div')
        headPrice.classList.add('headPrice');

        let heading = document.createElement('h3');
        heading.innerText = `${item.name}`

        let line = document.createElement('div');
        line.innerHTML = `<hr>`

        let desc = document.createElement('p');
        desc.innerText = `${item.desc}`

        let price = document.createElement('p');
        price.innerText = `${item.price}`;
        price.classList.add('price');

        headPrice.append(heading, price)
        info.append(headPrice, line, desc)
        card.append(img, info);
        cardContainer.append(card)
    })
});



