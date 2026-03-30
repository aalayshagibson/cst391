import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FaithQuestService from '../services/FaithQuestService';

function CreateDevotional() {
  const navigate = useNavigate();

  const [devotional, setDevotional] = useState({
    title: '',
    scripture: '',
    author: '',
    message: ''
  });

  const handleChange = (e) => {
    setDevotional({
      ...devotional,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await FaithQuestService.createDevotional(devotional);
    navigate('/devotionals');
  };

  return (
    <div>
      <h2>Create Devotional</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={devotional.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Scripture</label>
          <input
            type="text"
            name="scripture"
            className="form-control"
            value={devotional.scripture}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            name="author"
            className="form-control"
            value={devotional.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            value={devotional.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success">Add Devotional</button>
      </form>
    </div>
  );
}

export default CreateDevotional;