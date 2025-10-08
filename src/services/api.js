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

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Failed to send message: ${response.status}`);
    }

    return await response.json();
  },
};