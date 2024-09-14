import React from 'react';
import './Table.css';

const AuthorList = ({ authors, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <h3>Author List</h3>
      {authors.length === 0 ? (
        <p>No authors available.</p>
      ) : (
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth Date</th>
              <th>Biography</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author) => (
              <tr key={author.id}>
                <td>{author.name}</td>
                <td>{author.birthDate}</td>
                <td>{author.biography}</td>
                <td>
                  <button onClick={() => onEdit(author)} className="edit-button">Edit</button>
                  <button onClick={() => onDelete(author.id)} className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AuthorList;
