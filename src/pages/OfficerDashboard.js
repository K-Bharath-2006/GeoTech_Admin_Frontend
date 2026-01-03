import { useEffect, useState } from "react";
import { getOfficerIssues } from "./../api/issueApi";
import "../styles/OfficeDashboard.css";
  import { getAuth, onAuthStateChanged } from "firebase/auth";

function OfficerDashboard() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);


useEffect(() => {
  const auth = getAuth();

  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (!user) {
      alert("User not logged in");
      setLoading(false);
      return;
    }

    try {
      const data = await getOfficerIssues();
      setIssues(data || []);
    } catch (e) {
      alert("Access denied or failed to fetch issues");
    } finally {
      setLoading(false);
    }
  });

  return () => unsubscribe();
}, []);


  if (loading) {
    return <div className="dashboard-loading">Loading dashboard...</div>;
  }

  if (!issues.length) {
    return <div className="dashboard-loading">No issues found</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Officer Dashboard</h1>
        <p>GeoTech Secure Issue Management</p>
      </div>

      <div className="issues-grid">
        {issues.map((issue) => (
          <div className="issue-card" key={issue.issueId}>

            <div className="issue-header">
              <span className={`status ${issue.status.toLowerCase()}`}>
                {issue.status}
              </span>
            </div>

            <p className="issue-description">
              {issue.description}
            </p>

            <div className="issue-details">
              <span>
                <strong>Verified:</strong>{" "}
                {issue.verified ? "Yes" : "No"}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default OfficerDashboard;
