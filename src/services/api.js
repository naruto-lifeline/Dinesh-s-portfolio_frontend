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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Try parsing JSON safely
    let data;
    try {
      data = await response.json();
    } catch (err) {
      // If response is not JSON (likely HTML), throw a clearer error
      const text = await response.text();
      throw new Error(`Server returned invalid JSON:\n${text}`);
    }

    if (!response.ok) {
      throw new Error(data.error || `Failed to send message: ${response.status}`);
    }

    return data;
  },
};