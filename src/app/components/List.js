'use client';
import React, { useState, useEffect } from 'react';
import BookmarkButton from './BookmarkButton';
import Link from 'next/link';
import css from '../page.module.css';

export default function List() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(`https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io/jptest?page=${page}`);
      const responseData = await resp.json();

      setData((prevData) => [...prevData, ...responseData.data.recruits]);
      setTotalCount(responseData.data.total_count);
      console.log('total', responseData.data.total_count);
    };

    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    const maxPage = Math.ceil(totalCount / 9);
    if (page >= maxPage) {
      console.log(`${maxPage}페이지 끝났어라~~`);
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page, totalCount]);

  return (
    <>
      <ul className={css.group}>
        {data.map((item, index) => {
          return (
            <li key={index}>
              <Link href="/">
                <div className="h-[180px] overflow-hidden">
                  <img src={item.image} alt={item.company.name} />
                </div>

                <div className={css.itemInfo}>
                  <div className="font-ft-700 text-20px text-gray01 overflow-hidden overflow-ellipsis whitespace-nowrap">{item.title}</div>
                  <div className="font-ft-400 text-12px text-gray02 overflow-hidden overflow-ellipsis whitespace-nowrap">{item.description}</div>
                  <div className={css.companyInfo}>
                    <span className={css.companyLogo}>
                      <img src={item.company.logo} alt={item.company.name} />
                    </span>
                    <span className="inline-block font-ft-700 text-16px text-gray01  overflow-hidden overflow-ellipsis whitespace-nowrap" style={{ maxWidth: '130px' }}>
                      {item.company.name}
                    </span>
                    {item.company.grade && (
                      <>
                        <span className="ml-2 font-ft-700 text-16px text-gray01">
                          <i className={css.icoGrade}></i>
                          {item.company.grade}
                        </span>
                        <span className="ml font-ft-400 text-16px text-gray02">&#40;{item.company.grade_count}&#41;</span>
                      </>
                    )}
                    <div className="mt-2 ft-font-400 text-14px text-gray02">{item.appeal}</div>
                  </div>
                  {item.reward_text && (
                    <div className={css.rewardInfo}>
                      <i className={css.icoReward}></i>취업 축하금 : {item.reward_text}
                    </div>
                  )}
                </div>
              </Link>
              <BookmarkButton />
            </li>
          );
        })}
      </ul>
    </>
  );
}
