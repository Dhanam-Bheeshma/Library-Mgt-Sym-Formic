import React from 'react';
import './Table.css';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <h3>Book List</h3>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <table className="custom-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Publication Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.pubDate}</td>
                <td>
                  <button onClick={() => onEdit(book)} className="edit-button">Edit</button>
                  <button onClick={() => onDelete(book.id)} className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookList;
