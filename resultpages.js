const searchResults = []; // replace with actual search results

const resultsPerPage = 10; // replace with desired number of results per page

const displayResults = (results, page) => {
  const startIndex = (page - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const displayResults = results.slice(startIndex, endIndex);

  const resultsDiv = document.getElementById('search-results');
  resultsDiv.innerHTML = '';

  displayResults.forEach(result => {
    const resultDiv = document.createElement('div');
    resultDiv.textContent = result;
    resultsDiv.appendChild(resultDiv);
  });

  const totalPages = Math.ceil(results.length / resultsPerPage);
  const paginationDiv = document.getElementById('pagination');
  paginationDiv.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    if (i === page) {
      pageButton.disabled = true;
    } else {
      pageButton.addEventListener('click', () => {
        displayResults(searchResults, i);
      });
    }
    paginationDiv.appendChild(pageButton);
  }
}

displayResults(searchResults, 1); 