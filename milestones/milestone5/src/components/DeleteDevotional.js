import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import FaithQuestService from '../services/FaithQuestService';

function DeleteDevotional() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [devotional, setDevotional] = useState(null);

  useEffect(() => {
    loadDevotional();
  }, []);

  const loadDevotional = async () => {
    const data = await FaithQuestService.getDevotionalById(id);
    setDevotional(data);
  };

  const handleDelete = async () => {
    await FaithQuestService.deleteDevotional(id);
    navigate('/devotionals');
  };

  if (!devotional) {
    return <p>Loading devotional...</p>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h2>Delete Devotional</h2>
        <p>Are you sure you want to delete <strong>{devotional.title}</strong>?</p>
        <button onClick={handleDelete} className="btn btn-danger me-2">Yes, Delete</button>
        <Link to="/devotionals" className="btn btn-secondary">Cancel</Link>
      </div>
    </div>
  );
}

export default DeleteDevotional;