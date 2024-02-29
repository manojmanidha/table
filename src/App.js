// XTable.js
import React, { useState } from 'react';
import './App.css'; 

const initialData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" }
];

const XTable = () => {
  const [data, setData] = useState(initialData);
  const [sortBy, setSortBy] = useState(null);

  const handleSortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateComparison = new Date(b.date) - new Date(a.date);
      return dateComparison !== 0 ? dateComparison : b.views - a.views;
    });
    setData(sortedData);
    setSortBy("date");
  };

  const handleSortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      const viewsComparison = b.views - a.views;
      return viewsComparison !== 0 ? viewsComparison : new Date(b.date) - new Date(a.date);
    });
    setData(sortedData);
    setSortBy("views");
  };

  return (
    <div className="x-table">
      <h1>Date and Views Table</h1>
      <button onClick={handleSortByDate}>Sort by Date</button>
      <button onClick={handleSortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
