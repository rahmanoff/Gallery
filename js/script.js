console.log('Gallery Project');

const page_wrapper = document.querySelector('.page_wrapper');
console.log('page_wrapper', page_wrapper);

function createCard(cardObj) {
    return `
    <div class="card">
            <div class="header">
                <img class="header_img" src="img/Hipster_Vector_2.jpg" alt="Avatar">
                <div class="header_title">
                ${cardObj.author}
                </div>
            </div>
            <div class="image_wrapper"> <img class="image" src="${cardObj.download_url}" alt="image"> </div>
            <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus dolore molestias fugiat. Voluptates maxime unde fuga aperiam non praesentium expedita consequatur voluptate soluta delectus laudantium exercitationem, modi sint dolorum?</div>
        </div>
    `;
}

fetch('https://picsum.photos/v2/list')
    .then(function(response) {
        return response.json();
    })
    .then((data) => {
        console.log('data', data);

        let cardList = '';
        data.forEach((cardObj) => {
            cardList = cardList + createCard(cardObj)

        })

        page_wrapper.innerHTML = cardList;

        let msnry;
        setTimeout(() => {
            msnry = new Masonry(page_wrapper);
        }, 1000)

        setTimeout(() => {
            msnry.reloadItems();
        }, 2000)

    });