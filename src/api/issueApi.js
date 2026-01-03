import { getAuth } from "firebase/auth";

export const getOfficerIssues = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User not logged in");
  }

  // 🔥 ALWAYS get fresh token
  const token = await user.getIdToken(true);

  const res = await fetch("http://localhost:8080/api/issues/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Access denied");
  }

  return res.json();
};
