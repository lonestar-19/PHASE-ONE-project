document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'http://localhost:3000/api/cars';

    async function fetchCars() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }

    function redirectCarPage(carName) {
        let redirectUrl = '';

        // Example: Redirect to a webpage based on the car name
        switch (carName.toLowerCase()) {
            case 'mercedes':
                redirectUrl = 'Toyota.html';
                break;
            case 'bmw':
                redirectUrl = 'Mercedez.html';
                break;
            // Add more cases for other car names as needed
            default:
                redirectUrl = 'Mazda.html';
                break;
        }

        // Redirect the user to the determined URL
        window.location.href = redirectUrl;
    }

    async function handleFormSubmit(event) {
        event.preventDefault();
        const carName = document.getElementById('carNameInput').value;
        redirectCarPage(carName);
    }

    async function renderCarCards() {
        const carCardsContainer = document.getElementById('carCards');
        const cars = await fetchCars();
        cars.forEach(car => {
            const card = createCarCard(car);
            carCardsContainer.appendChild(card);
        });
    }

    function createCarCard(car) {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${car.brand} ${car.model}</h5>
                    <p class="card-text">Consumption: ${car.consumption}</p>
                    <p class="card-text">Major facts: ${car.majorFacts}</p>
                </div>
            </div>
        `;
        return card;
    }

    document.getElementById('carSearchForm').addEventListener('submit', handleFormSubmit);

    renderCarCards();
});
