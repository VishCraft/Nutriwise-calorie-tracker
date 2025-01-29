package com.healthtracking.nutriwise.service;

import com.healthtracking.nutriwise.model.FoodEntry;
import com.healthtracking.nutriwise.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodService {

    @Autowired
    private FoodRepository foodRepository;

    public List<FoodEntry> getAllFoodEntries() {
        return foodRepository.findAll();
    }

    public FoodEntry addFoodEntry(FoodEntry foodEntry) {
        return foodRepository.save(foodEntry);
    }

    public void deleteFoodEntry(String id) {
        Optional<FoodEntry> foodEntry = foodRepository.findById(id);
        if (foodEntry.isPresent()) {
            foodRepository.delete(foodEntry.get());
        } else {
            throw new RuntimeException("Food entry not found");
        }
    }
}
