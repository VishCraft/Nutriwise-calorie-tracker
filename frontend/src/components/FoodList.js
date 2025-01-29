// FoodList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodList = () => {
  const [foodEntries, setFoodEntries] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [formData, setFormData] = useState({
    foodName: '',
    calories: '',
    protein: '',
    fat: '',
    carbs: ''
  });

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    const response = await axios.get('http://localhost:8080/api/food');
    setFoodEntries(response.data);
    const total = response.data.reduce((sum, entry) => sum + entry.calories, 0);
    setTotalCalories(total);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/food', formData);
      fetchEntries(); // Fetch updated list after adding new entry
      setFormData({ foodName: '', calories: '', protein: '', fat: '', carbs: '' }); // Clear form
    } catch (error) {
      console.error("Error adding food entry:", error);
    }
  };

  const deleteEntry = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/food/${id}`);
      setFoodEntries(foodEntries.filter(entry => entry.id !== id));
      setTotalCalories(totalCalories - foodEntries.find(entry => entry.id === id).calories);
    } catch (error) {
      console.error("Error deleting food entry:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">Nutrition Tracker</h1>

      {/* Add Food Form */}
      <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-6">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">Add Your Food</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Food Name"
            className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.foodName}
            onChange={(e) => setFormData({ ...formData, foodName: e.target.value })}
          />
          <input
            type="number"
            placeholder="Calories"
            className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.calories}
            onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
          />
          <div className="grid grid-cols-3 gap-4">
            <input
              type="number"
              placeholder="Protein (g)"
              className="p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.protein}
              onChange={(e) => setFormData({ ...formData, protein: e.target.value })}
            />
            <input
              type="number"
              placeholder="Fat (g)"
              className="p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.fat}
              onChange={(e) => setFormData({ ...formData, fat: e.target.value })}
            />
            <input
              type="number"
              placeholder="Carbs (g)"
              className="p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.carbs}
              onChange={(e) => setFormData({ ...formData, carbs: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Add Food Entry
          </button>
        </form>
      </div>

      {/* Total Calories */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Total Calories: {totalCalories}</h2>
        {totalCalories > 1000 && (
          <span className="text-red-500 ml-4">⚠️ Exceeded Daily Limit!</span>
        )}
      </div>

      {/* Food List */}
      <div>
        {foodEntries.map(entry => (
          <div key={entry.id} className="border p-4 rounded-lg mb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{entry.foodName}</h3>
              <button
                onClick={() => deleteEntry(entry.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
            <p>Calories: {entry.calories} kcal</p>
            <p>Protein: {entry.protein} g</p>
            <p>Fat: {entry.fat} g</p>
            <p>Carbs: {entry.carbs} g</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
