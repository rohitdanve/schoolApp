import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/auth/Dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 201) {
        setAuthenticated(true);
      } else {
        navigate("/login");
      }
    } catch (err) {
      navigate("/login");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-3xl text-blue-500">
      Dashboard
      {authenticated && (
        <button
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Profile;
