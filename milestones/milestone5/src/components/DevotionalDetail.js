import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import FaithQuestService from '../services/FaithQuestService';

function DevotionalDetail() {
  const { id } = useParams();
  const [devotional, setDevotional] = useState(null);

  useEffect(() => {
    loadDevotional();
  }, []);

  const loadDevotional = async () => {
    const data = await FaithQuestService.getDevotionalById(id);
    setDevotional(data);
  };

  if (!devotional) {
    return <p>Loading devotional...</p>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h2>{devotional.title}</h2>
        <p><strong>ID:</strong> {devotional.id}</p>
        <p><strong>Scripture:</strong> {devotional.scripture}</p>
        <p><strong>Author:</strong> {devotional.author}</p>
        <p><strong>Message:</strong> {devotional.message}</p>
        <Link to="/devotionals" className="btn btn-secondary">Back to Devotionals</Link>
      </div>
    </div>
  );
}

export default DevotionalDetail;