// src/services/contactApi.ts

const API_BASE_URL = 'https://dinesh-s-portfolio-backend.onrender.com';

/**
 * @typedef {Object} ContactFormData
 * @property {string} name
 * @property {string} email
 * @property {string} message
 */

/**
 * @typedef {Object} ContactResponse
 * @property {string} [message]
 * @property {string} [error]
 * @property {string} status
 */

// src/services/api.js

export const contactApi = {
  submitContactForm: async ({ name, email, message }) => {
    try {
      const response = await fetch(`${BASE_URL}/contact/submit/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error("Contact API error:", error);
      throw error;
    }
  },
};