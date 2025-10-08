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

/**
 * Submit contact form data to backend
 * @param {ContactFormData} formData
 * @returns {Promise<ContactResponse>}
 */
export async function submitContactForm({ name, email, message }) {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/submit/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      // Try parsing backend JSON error
      let errorMsg = `Server responded with status ${response.status}`;
      try {
        const errorData = await response.json();
        errorMsg = errorData?.error || JSON.stringify(errorData);
      } catch (_) {
        const text = await response.text();
        if (text) errorMsg = text;
      }
      throw new Error(errorMsg);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Contact API error:", error);
    throw error;
  }
}
