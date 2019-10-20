import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { debounce } from 'lodash';
import axios from 'axios';

import InfiniteScroll from './InfiniteScroll';

const GITHUB_API = 'https://api.github.com';

const Title = styled('h2')`
  color: #222222;
`;

const Input = styled('input')`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;

const GithubRepos = () => {
  const [searchVal, setSearchVal] = useState('');
  const [repoList, setRepoList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [resetPage, setResetPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const debounceSearch = useCallback(
    debounce(val => {
      axios
        .get(`${GITHUB_API}/search/repositories`, {
          params: { page: 1, q: val },
        })
        .then(res => {
          setRepoList(res.data.items);
          setIsLoading(false);
          setResetPage(false);
          if (res.data.items.length < 30) {
            setHasMore(false);
          } else {
            setHasMore(true);
          }
        });
    }, 500),
    [],
  );

  const loadMore = page => {
    setIsLoading(true);

    axios
      .get(`${GITHUB_API}/search/repositories`, {
        params: { page, q: searchVal },
      })
      .then(res => {
        setRepoList([...repoList, ...res.data.items]);
        setHasMore(true);
        setIsLoading(false);
        if (res.data.items.length < 30) setHasMore(false);
      });
  };

  return (
    <>
      <Title>Github Repos</Title>

      <Input
        placeholder="Search Repos"
        onChange={evt => {
          if (evt.target.value) {
            setResetPage(true);
            setRepoList([]);
            setIsLoading(true);
            setSearchVal(evt.target.value);
            debounceSearch(evt.target.value);
          }
        }}
      />

      <InfiniteScroll
        element="ul"
        pageStart={1}
        hasMore={hasMore && !isLoading}
        loadMore={loadMore}
        resetPage={resetPage}
      >
        {!!repoList.length &&
          repoList.map(repo => (
            <li key={String(repo.id)}>
              {repo.name}
              <br />
              {repo.html_url}
            </li>
          ))}
        {isLoading && <div>Loading...</div>}
      </InfiniteScroll>
    </>
  );
};

export default GithubRepos;
