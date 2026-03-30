import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FaithQuestService from '../services/FaithQuestService';

function DevotionalList() {
  const [devotionals, setDevotionals] = useState([]);

  useEffect(() => {
    loadDevotionals();
  }, []);

  const loadDevotionals = async () => {
    const data = await FaithQuestService.getAllDevotionals();
    setDevotionals(data);
  };

  return (
    <div>
      <h2>Devotional List</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Scripture</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {devotionals.map((devotional) => (
            <tr key={devotional.id}>
              <td>{devotional.id}</td>
              <td>{devotional.title}</td>
              <td>{devotional.scripture}</td>
              <td>{devotional.author}</td>
              <td>
                <Link to={`/devotionals/${devotional.id}`} className="btn btn-info btn-sm me-2">View</Link>
                <Link to={`/edit/${devotional.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <Link to={`/delete/${devotional.id}`} className="btn btn-danger btn-sm">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DevotionalList;