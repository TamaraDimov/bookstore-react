import React from 'react';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const list = [
    {
      id: 1,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
    },
    {
      id: 2,
      title: 'The Lord of the Rings ',
      author: 'J. R. R. Tolkien',
    },
    {
      id: 3,
      title: 'Nineteen Eighty Four ',
      author: 'George Orwell',
    },
  ];

  return (
    <>
      <>
        {list.map((each) => (
          <Book key={each.id} title={each.title} author={each.author} />
        ))}
      </>
      <Form />
    </>
  );
};

export default Books;
