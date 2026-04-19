package com.teckstack.JobApp.reviews;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/companies/{companyId}")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/reviews")
    public ResponseEntity<List<Review>> getAllReviews(@PathVariable Long companyId){
        return new ResponseEntity<>(reviewService.getAllReviews(companyId), HttpStatus.OK);
    }

    @PostMapping("/reviews")
    public ResponseEntity<String> addReview(@PathVariable Long companyId,@RequestBody Review review){
        boolean isReviewdSaved = reviewService.addReview(companyId,review);
        if (isReviewdSaved) {
            return new ResponseEntity<>("Review added sucessfully", HttpStatus.OK);
        }else {
            return new ResponseEntity<>("Review Not saved", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/reviews/{reviewId}")
    public ResponseEntity<Review> getReview(@PathVariable Long companyId,@PathVariable Long reviewId){
        return new ResponseEntity<>(reviewService.getReview(companyId,reviewId),HttpStatus.OK);
    }

    @PutMapping("/reviews/{reviewId}")
    public ResponseEntity<String> updateReview(@PathVariable Long companyId,@PathVariable Long reviewId, @RequestBody Review review){
        boolean isReviewUpdated = reviewService.updateReview(companyId,reviewId,review);
        if (isReviewUpdated)
            return new ResponseEntity<>("Review update sucessfully",HttpStatus.OK);
        else
            return new ResponseEntity<>("Review not update",HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/reviews/{reviewId}")
    public ResponseEntity<String> deleteReview(@PathVariable Long companyId,@PathVariable Long reviewId){
        boolean isReviewdeleted = reviewService.deleteReview(companyId,reviewId);
        if (isReviewdeleted) {
            return new ResponseEntity<>("Review deleted sucessfully", HttpStatus.OK);
        }else {
            return new ResponseEntity<>("Review Not deleted", HttpStatus.NOT_FOUND);
        }    }
}
