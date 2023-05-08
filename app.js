
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  if (!searchTerm) return;

  const url = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${searchTerm}&apikey=088685c2a67e77bd14b598ddd8d14d66`;

  fetch(url)
  
    .then(response => response.json())
    .then(data => {
      const tracks = data.message.body.track_list;
      const html = tracks.map(track => `
        <div>
          <h2>${track.track.track_name}</h2>
          <p>By ${track.track.artist_name}</p>
          <a href="${track.track.track_share_url}">View Lyrics</a>
        </div>
      `).join('');
      console.log(data)

      searchResults.innerHTML = html;
    })
    .catch(error => {
      console.error(error);
      searchResults.innerHTML = '<p>Sorry, there was an error searching for lyrics. Please try again later.</p>';
    });
});

