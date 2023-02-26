const url = 'https://free-football-soccer-videos1.p.rapidapi.com/v1/';

fetch(url, {
  headers: {
    'x-rapidapi-host': 'free-football-soccer-videos1.p.rapidapi.com',
    'x-rapidapi-key': 'a6a607e301mshd8a2c50e65c914cp1c7be8jsn0e88a17ec262'
  }
})
.then(response => response.json())
.then(data => {
  const output = document.getElementById('output');
  output.innerHTML = '';
  for(let i = 0; i < 20; i++) {
    output.innerHTML += `<div style="margin-bottom: 0.5em;"><a href="${data[i].url}" target="_blank" class="btn btn-primary">${data[i].title}</a></div>`;
}
})



