// import axios from "axios";
// export const getOfficerProfile = async (token) => {
//   const response = await axios.get("http://localhost:5000/api/officer/profile", {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return response.data;
// };

// export const addOfficer = async (officerData) => {
//   const response = await axios.post("http://localhost:8080/api/admin/officer", officerData);
//   return response.data;
// };

// src/services/officerService.js
import axios from "axios";

const API_URL = "https://geotech-backend.onrender.com/api/issues/all"; // Replace with your backend URL

export const getOfficerIssues = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/issues`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // assumes backend returns array of issues
  } catch (error) {
    console.error("Error fetching officer issues:", error);
    throw error;
  }
};
