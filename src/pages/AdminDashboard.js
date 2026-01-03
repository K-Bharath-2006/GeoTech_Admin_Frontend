import { useState } from "react";
import "../styles/AdminDashboard.css";
import { addOfficer } from "../api/officerApi";

function AdminDashboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [region, setRegion] = useState("");

  const handleAddOfficer = async () => {
    if (!name || !email || !department || !region) {
      alert("Please fill all fields");
      return;
    }

    try {
      await addOfficer({ name, email, department, region });
      alert("Officer added successfully!");
      setName("");
      setEmail("");
      setDepartment("");
      setRegion("");
    } catch (err) {
      alert("Failed to add officer: "+ err.message);
    }
  };

  return (
    <div className="admin-dashboard-container">
      <h1>Admin Dashboard</h1>
      <p>GeoTech Administrative Panel</p>

      <div className="add-officer-form">
        <h3>Add New Officer</h3>
        <input
          type="text"
          placeholder="Officer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Officer Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <input
          type="text"
          placeholder="Region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <button onClick={handleAddOfficer}>Add Officer</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
