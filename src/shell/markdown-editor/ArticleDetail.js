// @flow

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dynamic } from 'redux-dynamic-manager';
import useRouter from 'use-react-router';
import useForm from 'react-hook-form';
import Markdown from 'react-markdown';

import { setData } from './actions';
import reducer from './reducer';
import { ErrorText } from './MarkdownEditor';

const ArticleDetail = () => {
  const { articleList, articleDetail } = useSelector(state => state.markdownEditor);
  const dispatch = useDispatch();
  const router = useRouter();
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = () => {
    dispatch(
      setData({
        articleList: [
          ...articleList
            .map(item => (item.id === articleDetail.id ? { ...articleDetail } : item)),
        ],
      }),
    );

    router.history.push('/markdown-editor');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span>Subject*:</span>
          <input
            name="subject"
            ref={register({ required: 'Required' })}
            value={articleDetail.subject}
            onChange={evt => {
              dispatch(
                setData({
                  articleDetail: { subject: evt.target.value },
                }),
              );
            }}
          />
          <ErrorText>{errors.subject && errors.subject.message}</ErrorText>
        </div>

        <div>
          <span>Content*</span>
          <textarea
            name="content"
            ref={register({ required: 'Required' })}
            value={articleDetail.content}
            onChange={evt => {
              dispatch(
                setData({
                  articleDetail: { content: evt.target.value },
                }),
              );
            }}
          />
          <ErrorText>{errors.content && errors.content.message}</ErrorText>
        </div>

        <div>
          <div>Preview:</div>
          <Markdown source={articleDetail.content} />
        </div>

        <button type="submit">Save</button>
        <button
          type="button"
          onClick={() => {
            router.history.push('/markdown-editor');
          }}
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default dynamic('markdownEditor', reducer)(ArticleDetail);
