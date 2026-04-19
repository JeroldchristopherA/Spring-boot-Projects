package com.teckstack.JobApp.reviews;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepo extends JpaRepository<Review ,Long> {
    List<Review> findByCompanyId(Long companyID);
}
