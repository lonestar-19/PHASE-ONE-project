const express = require('express');
const app = express();
const PORT = 3000; // You can change the port number if needed

// Sample data for car information
const cars = [
  { id: 1, brand: 'Toyota', model: 'Corolla', year: 2022 },
  { id: 2, brand: 'Mercedes', model: 'C-Class', year: 2023 },
  { id: 3, brand: 'Mazda', model: 'Mazda3', year: 2021 }
];

// Route to get all cars
app.get('/api/cars', (req, res) => {
  res.json(cars);
});

// Route to get a specific car by ID
app.get('/api/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const car = cars.find(car => car.id === id);
  if (!car) {
    res.status(404).json({ error: 'Car not found' });
  } else {
    res.json(car);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


const myDiv = document.getElementsByClassName('card');
myDiv.addEventListner('click', function(){
  alert('clicked')
})