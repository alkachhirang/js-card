var cards = [

    {
        Img: './assets/images/png/rose.png',
        h2: 'Rose-garden',
        p: 'Smells like heaven',
    },
    {
        Img: './assets/images/png/rose.png',
        h2: 'Rose-garden',
        p: 'Smells like heaven',
    },
    {
        Img: './assets/images/png/rose.png',
        h2: 'Rose-garden',
        p: 'Smells like heaven',
    },

]
const mycontainer = document.querySelector('.cardcontainer');
const mycard =
    cards.map((postdata) => {

        return `
        <div class="cards">
            <img class="w_100 max_width_250 border-radius_10" src=${postdata.Img} alt="" />
            <h2 class="pt_20 d-flex align-items-center justify-content-center flex-column">${postdata.h2}</h2>
            <p class="d-flex align-items-center justify-content-center flex-column">${postdata.p}</p>

        </div>
        `
    }).join(" ")
mycontainer.innerHTML = mycard;

