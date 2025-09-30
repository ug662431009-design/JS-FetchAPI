addCardBtn.addEventListener('click', () => {
  fetch('cards.json') // You can also use an API URL
    .then(response => response.json())
    .then(newCards => {
      // Add the new card to existing cards
      cards = cards.concat(newCards); // concat uses higher-order method internally
      renderCards();
    })
    .catch(error => console.error('Error fetching cards:', error));
});
