import React, { useState } from 'react';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';
import BookList from './BookList';
import AuthorList from './AuthorList';
import './Dashboard.css';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [editingAuthor, setEditingAuthor] = useState(null);

  const handleBookSubmit = (book) => {
    if (editingBook) {
      setBooks(books.map((b) => (b.id === editingBook.id ? { ...book, id: editingBook.id } : b)));
      setEditingBook(null);
    } else {
      setBooks([...books, { id: books.length + 1, ...book }]);
    }
  };

  const handleAuthorSubmit = (author) => {
    if (editingAuthor) {
      setAuthors(authors.map((a) => (a.id === editingAuthor.id ? { ...author, id: editingAuthor.id } : a)));
      setEditingAuthor(null);
    } else {
      setAuthors([...authors, { id: authors.length + 1, ...author }]);
    }
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const handleEditAuthor = (author) => {
    setEditingAuthor(author);
  };

  const handleDeleteAuthor = (id) => {
    setAuthors(authors.filter((a) => a.id !== id));
  };

  return (
    <div className="dashboard-container">
      <h1>Library Management Dashboard</h1>
      
      <h2>Book Management</h2>
      <div className="form-box">
        <BookForm onSubmit={handleBookSubmit} book={editingBook} />
      </div>
      <BookList books={books} onEdit={handleEditBook} onDelete={handleDeleteBook} />

      <h2>Author Management</h2>
      <div className="form-box">
        <AuthorForm onSubmit={handleAuthorSubmit} author={editingAuthor} />
      </div>
      <AuthorList authors={authors} onEdit={handleEditAuthor} onDelete={handleDeleteAuthor} />
    </div>
  );
};

export default Dashboard;
