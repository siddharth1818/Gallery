window.onload = function() {
  const location = window.location.href;
  const url = new URL(location);
  const query_params = new URLSearchParams(url.search);

  if (!query_params.has('id') || query_params.get('id') === "") {
      window.location.href = './';
  }

  fetch(`https://api.unsplash.com/photos/${query_params.get('id')}?client_id=${API_KEY}`)
      .then(response => response.json())
      .then(function (data) {
          loadDetail(data);

        document.getElementById('image_id').innerText = query_params.get('id');
      })
      .catch(error => console.error('Error fetching data:', error));
      
};

function loadDetail(data) {
  console.log(data);
  document.getElementById('detail_image').src = data.urls.regular;
  document.getElementById('detail_image').style.borderColor = data.color;
  document.getElementById('description_text').innerText = data.description || 'No description available';
  document.getElementById('username').innerText = data.user.username;
  document.getElementById('like_count').innerText = data.likes;
  document.getElementById('view_count').innerText = data.views;
  document.getElementById('alt_description').innerText = data.alt_description;
  document.getElementById('image_color').style.backgroundColor = data.color;
  document.getElementById('color_text').innerText = data.color;
  document.getElementById('download_link').href = data.links.download;


  const date = new Date(data.created_at);
  const upload_date = `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;

  document.getElementById('Upload_date').innerText = upload_date;

}
