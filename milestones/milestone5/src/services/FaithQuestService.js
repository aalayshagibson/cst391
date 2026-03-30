const API_URL = 'http://localhost:3000/entries';

const FaithQuestService = {
  getAllDevotionals: async () => {
    const response = await fetch(API_URL);
    return response.json();
  },

  getDevotionalById: async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
  },

  createDevotional: async (devotional) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(devotional),
    });
    return response.json();
  },

  updateDevotional: async (id, devotional) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(devotional),
    });
    return response.json();
  },

  deleteDevotional: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },
};

export default FaithQuestService;