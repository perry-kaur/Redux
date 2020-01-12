// src/js/components/List.js

import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { books: state.books };
};

const ConnectedList = ({ books }) => (
  <ul>
    {books.map(el => (
      <li key={el.id}>
        {el.title}
         </li>
    ))}

  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;