document.addEventListener('DOMContentLoaded', function() {
  // Listen for Add to Cart forms
  document.querySelectorAll('form[action^="/cart/add"]').forEach(form => {
    form.addEventListener('submit', function(e) {
      const selectedOptions = Array.from(form.querySelectorAll('select')).map(s => s.value);

      // Check for Black + Medium variant
      if (selectedOptions.includes('Black') && selectedOptions.includes('Medium')) {
        // Add Soft Winter Jacket automatically
        fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items: [{ id: 46669021282525, quantity: 1 }] // <-- Replace with your variant ID
          })
        })
        .then(response => response.json())
        .then(data => {
          console.log('Soft Winter Jacket added automatically!');
        })
        .catch(err => console.error(err));
      }
    });
  });
});

