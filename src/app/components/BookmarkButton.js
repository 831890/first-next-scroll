'use client';
import React, { useState } from 'react';
import css from '../page.module.css';

const BookmarkButton = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked((prevBookmarked) => !prevBookmarked);
  };

  return (
    <button className={`${css.bookmarked} ${bookmarked ? css.on : null}`} onClick={toggleBookmark}>
      {bookmarked ? '북마크 해제' : '북마크 설정'}
    </button>
  );
};

export default BookmarkButton;
