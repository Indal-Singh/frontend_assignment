document.addEventListener('DOMContentLoaded', () => {
 
    const radioButtons = document.querySelectorAll('input[name="radio"]');
    const totalPriceElement = document.querySelector('#total');

    // Add event listener to each radio button
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            // Remove active class from all offers
            const offers = document.querySelectorAll('.offer');
            offers.forEach(offer => {
                offer.classList.remove('active');
                const offerBody = offer.querySelector('.offer-body');
                if (offerBody) {
                    offerBody.classList.add('hide');
                }
            });

            // Add active class to the selected offer
            const selectedOffer = radio.closest('.offer');
            selectedOffer.classList.add('active');
            const selectedOfferBody = selectedOffer.querySelector('.offer-body');
            if (selectedOfferBody) {
                selectedOfferBody.classList.remove('hide');
            }

            // Update the total price
            const priceText = selectedOffer.querySelector('.right-price h3').innerText;
            const priceValue = priceText.replace('$', '').replace(' USD', '').trim();
            totalPriceElement.innerText = parseFloat(priceValue).toFixed(2);
        });
    });
    
});