// Add JavaScript below
document.addEventListener('alpine:init', () => {
  Alpine.data('fetchData', () => ({
    data: [],
    async loadData() {
      try {
        const response = await fetch('https://zenquotes.io/api/random');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const quotes = await response.json();
        this.data = quotes.map(quote => ({
          text: quote.q,
          author: quote.a
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }));
});
