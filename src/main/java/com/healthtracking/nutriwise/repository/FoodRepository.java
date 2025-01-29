package com.healthtracking.nutriwise.repository;

import com.healthtracking.nutriwise.model.FoodEntry;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends MongoRepository<FoodEntry, String> {
}
