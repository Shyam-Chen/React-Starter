// @flow

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dynamic } from 'redux-dynamic-manager';
import { Link } from 'react-router-dom';
import useRouter from 'use-react-router';
import useForm from 'react-hook-form';
import Markdown from 'react-markdown';
import styled from '@emotion/styled';

import { setData } from './actions';
import reducer from './reducer';

const ArticleList = styled('div')`
  border: 1px solid #ccc;
`;

ArticleList.Subject = styled('div')``;

ArticleList.Content = styled('div')``;

export const ErrorText = styled('span')`
  color: red;
`;

const MarkdownEditor = () => {
  const [content, setContent] = useState<string>('');
  const { articleList } = useSelector(state => state.markdownEditor);
  const dispatch = useDispatch();
  const router = useRouter();
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = values => {
    const id = articleList.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1;

    dispatch(setData({
      articleList: [{ id, ...values }, ...articleList],
    }));
  };

  return (
    <div id="markdown-editor">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span>Subject*:</span>
          <input name="subject" ref={register({ required: 'Required' })} />
          <ErrorText>{errors.subject && errors.subject.message}</ErrorText>
        </div>

        <div>
          <span>Content*</span>
          <textarea
            name="content"
            ref={register({ required: 'Required' })}
            value={content}
            onChange={(evt) => { setContent(evt.target.value); }}
          />
          <ErrorText>{errors.content && errors.content.message}</ErrorText>
        </div>

        <div>
          <div>Preview:</div>
          <Markdown source={content} />
        </div>

        <button type="submit">Add</button>
      </form>

      <ArticleList>
        {
          articleList.map((item) => (
            <ArticleList key={item.id}>
              <ArticleList.Subject>{item.subject}</ArticleList.Subject>

              <ArticleList.Content>
                <Markdown source={item.content} />
              </ArticleList.Content>

              <Link
                to={`${router.location.pathname}/${item.id}`}
                onClick={() => { dispatch(setData({ articleDetail: item })); }}
              >
                Edit
              </Link>
            </ArticleList>
          ))
        }
      </ArticleList>
    </div>
  );
};

export default dynamic('markdownEditor', reducer)(MarkdownEditor);
