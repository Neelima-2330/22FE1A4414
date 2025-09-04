const API_BASE_URL = 'http://localhost:8080/api'; // Replace with your actual backend URL

export const shortenUrl = async (data) => {
  const response = await fetch(`${API_BASE_URL}/shorten`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Assuming a pre-authorized user, no explicit Authorization header is needed per prompt.
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to shorten URL.');
  }

  return response.json();
};

export const getStats = async () => {
  const response = await fetch(`${API_BASE_URL}/stats`);
  if (!response.ok) {
    throw new Error('Failed to fetch statistics.');
  }
  return response.json();
};

export const getOriginalUrl = async (shortcode) => {
  const response = await fetch(`${API_BASE_URL}/resolve/${shortcode}`);
  if (!response.ok) {
    throw new Error('Shortcode not found.');
  }
  return response.json();
};