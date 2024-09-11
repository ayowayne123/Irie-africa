"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Review() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Function to handle email sending via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      username: name, // maps to username in the email template
      userStars: rating, // maps to userStars in the email template
      userMessage: review, // maps to userReview in the email template
    };

    // Replace with your EmailJS user ID, service ID, and template ID
    emailjs
      .send(
        "service_zh6m7eo", // e.g., service_xxxxxxx

        "template_4cfjeyn", // e.g., template_xxxxxxx
        templateParams,
        "Ol9P2TQGZSxwK5-r9" // e.g., user_xxxxxxx
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessage("Review submitted successfully!");
          setLoading(false);
          setName("");
          setReview("");
          setRating(0);
        },
        (err) => {
          console.log("FAILED...", err);
          setMessage("Failed to submit review. Please try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-sky-900 font-noto px-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Leave a Review</h1>

        {/* Star Rating */}
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                  className="hidden"
                />
                <FaStar
                  className="cursor-pointer transition-transform transform hover:scale-125"
                  size={40}
                  color={
                    ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>

        {/* Review Form */}
        <form onSubmit={sendEmail} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="review" className="block text-lg font-medium">
              Your Review:
            </label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
              placeholder="Write your review here..."
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-orange-800 transition-transform transform hover:scale-105"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-lg font-semibold text-green-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
