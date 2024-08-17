window.onload = function() {
    fetch('https://api.unsplash.com/photos?per_page=40&client_id=' + API_KEY)
        .then(response => response.json())
        .then(function (data) {
            generateCards(data);
        })
        .catch(error => console.error('Error fetching data:', error));
};

function generateCards(data) {
    console.log(data); 
    const container = document.getElementById('image_container');
    for (let i = 0; i < data.length; i++) {
        const single_item = data[i];
        const card = document.createElement('div');
        const anchor = document.createElement('a');
        const img = document.createElement('img');
    
        card.classList.add('item');
        anchor.href = `./detail.html?id=${single_item.id}`;
        card.style.backgroundColor = single_item.color;
        img.src = single_item.urls.thumb;

        anchor.appendChild(img);
        card.appendChild(anchor);
        container.appendChild(card);  
    }
}
