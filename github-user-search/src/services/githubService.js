import axios from 'axios';

// Basic user fetch by username
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Advanced user search with filters
export const fetchAdvancedUsers = async (username, location, minRepos) => {
  let query = username;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data.items;
};
