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
  async submitContactForm(formData) {
    const response = await fetch(`${API_BASE_URL}/contact/submit/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Throw error if response not OK
    if (!response.ok) {
      let errorMessage = "Failed to send message";
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } catch {
        // ignore JSON parsing error
      }
      throw new Error(errorMessage);
    }

    return await response.json();
  },
};