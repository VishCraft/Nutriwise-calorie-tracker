package com.healthtracking.nutriwise.controller;

import com.healthtracking.nutriwise.model.FoodEntry;
import com.healthtracking.nutriwise.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // Replace with your frontend URL if different
@RestController
@RequestMapping("/api/food")
public class FoodController {

    @Autowired
    private FoodService foodService;

    // Get all food entries
    @GetMapping
    public List<FoodEntry> getAllFoodEntries() {
        return foodService.getAllFoodEntries();
    }

    // Add a new food entry
    @PostMapping
    public ResponseEntity<FoodEntry> addFoodEntry(@RequestBody FoodEntry foodEntry) {
        FoodEntry savedFoodEntry = foodService.addFoodEntry(foodEntry);
        return new ResponseEntity<>(savedFoodEntry, HttpStatus.CREATED);
    }

    // Delete a food entry by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteFoodEntry(@PathVariable("id") String id) {
        try {
            foodService.deleteFoodEntry(id);
            return ResponseEntity.ok("Food entry deleted successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Food entry not found");
        }
    }
}
