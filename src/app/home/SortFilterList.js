// @flow

import React from 'react';
import { compose, withState, lifecycle } from 'recompose';
import { Button, Icon } from 'material-ui';
import axios from 'axios';

const truncate = (value: string, length?: number = 15): string => {
  if (!value) return '';
  if (value.length <= length) return value;
  return `${value.substring(0, length)}...`;
};

const convertSeconds = (value: number): string => {
  const second = Math.round(value % 60);
  const minute = Math.round(value / 60);

  if (second < 10) return `${minute}:0${second}`;

  return `${minute}:${second}`;
};

const timeSince = (date) => {
  const d = new Date(1529585376100);
  const now = new Date();

  const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
  const minutes = Math.round(Math.abs(seconds / 60));
  const hours = Math.round(Math.abs(minutes / 60));
  const days = Math.round(Math.abs(hours / 24));
  const months = Math.round(Math.abs(days / 30.416));
  const years = Math.round(Math.abs(days / 365));

  if (Number.isNaN(seconds)) {
    return '';
  } else if (seconds <= 45) {
    return 'a few seconds ago';
  } else if (seconds <= 90) {
    return 'a minute ago';
  } else if (minutes <= 45) {
    return `${minutes} minutes ago`;
  } else if (minutes <= 90) {
    return 'an hour ago';
  } else if (hours <= 22) {
    return `${hours} hours ago`;
  } else if (hours <= 36) {
    return 'a day ago';
  } else if (days <= 25) {
    return `${days} days ago`;
  } else if (days <= 45) {
    return 'a month ago';
  } else if (days <= 345) {
    return `${months} months ago`;
  } else if (days <= 545) {
    return 'a year ago';
  }

  return `${years} years ago`;
};

const filerList = (length: string) => (list) => {
  return list.filter((item) => {
    if (length === 'lessThanFive') return item.duration < 300;
    if (length === 'fiveToTen') return item.duration >= 300 && item.duration <= 600;
    if (length === 'moreThanTen') return item.duration > 600;

    return list;
  });
};

const sortList = (sort: string) => (list) => {
  if (sort === 'published') {
    return list.sort((a, b) => a.publish - b.publish).reverse();
  }

  if (sort === 'views') {
    return list.sort((a, b) => a.views - b.views).reverse();
  }

  if (sort === 'collections') {
    return list.sort((a, b) => a.collectCount - b.collectCount).reverse();
  }

  return list;
};

export const Home = ({ list, sort, setSort, length, setLength }): React$Element<*> => (
  <div>
    <div className="nav">
      <div>
        <span className="mr-3">Sort</span>
        <span className="ma-2"><Button variant="raised" color={sort === 'published' ? 'primary' : 'default'} onClick={() => setSort('published')}>Published</Button></span>
        <span className="ma-2"><Button variant="raised" color={sort === 'views' ? 'primary' : 'default'} onClick={() => setSort('views')}>Views</Button></span>
        <span className="ma-2"><Button variant="raised" color={sort === 'collections' ? 'primary' : 'default'} onClick={() => setSort('collections')}>Collections</Button></span>
      </div>

      <div>
        <span className="ml-3 mr-3">Length</span>
        <span className="ma-2"><Button variant="raised" color={length === 'any' ? 'primary' : 'default'} onClick={() => setLength('any')}>Any</Button></span>
        <span className="ma-2"><Button variant="raised" color={length === 'lessThanFive' ? 'primary' : 'default'} onClick={() => setLength('lessThanFive')}>Less than five minutes</Button></span>
        <span className="ma-2"><Button variant="raised" color={length === 'fiveToTen' ? 'primary' : 'default'} onClick={() => setLength('fiveToTen')}>Five to ten minutes</Button></span>
        <span className="ma-2"><Button variant="raised" color={length === 'moreThanTen' ? 'primary' : 'default'} onClick={() => setLength('moreThanTen')}>More than ten minutes</Button></span>
      </div>
    </div>

    <div className="grid">
      {
        compose(sortList(sort), filerList(length))(list).map(item => (
          <div key={item.id} className="card ma-3">
            <div className="card-media">
              <img src={item.thumbnail} alt="" className="card-image" />
              <div>
                <span className="black white--text pa-1 card-time">{convertSeconds(item.duration)}</span>
              </div>
            </div>

            <div className="card-content">
              <div className="pl-2 pr-2">{truncate(item.title, 55)}</div>
              <div className="ma-2 icon"><Icon>headset</Icon> {item.views.toLocaleString('en-US')}</div>
              <div><Icon>event</Icon>{timeSince(item.publish)}</div>
              <div><Icon>video_library</Icon>{item.collectCount.toLocaleString('en-US')}</div>
            </div>
          </div>
        ))
      }
    </div>

    <div>{compose(sortList(sort), filerList(length))(list).length === 0 && 'No results'}</div>

    <style jsx>{`
      .ml-3 {
        margin-left: 1rem;
      }

      .mr-3 {
        margin-right: 1rem;
      }

      .ma-2 {
        margin: 0.5rem;
      }

      .black {
        background: black;
      }

      .white--text {
        color: white;
      }

      .pa-1 {
        padding: 0.25rem;
      }

      .grid {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        max-width: 1280px;
      }

      .nav {
        display: flex;
        flex-flow: row wrap;
        max-width: 1280px;
        justify-content: flex-start;
      }

      .card {
        width: 240px;
        height: 280px;
        box-sizing: border-box;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        margin: 0.75rem;
      }

      .card-media {
        position: relative;
        transition: any 0.2s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }

      .card-image {
        width: 240px;
        height: 135px;
      }

      .card-time {
        position: absolute;
        right: 0.5rem;
        bottom: 0.5rem;
      }

      .card-content {
        width: 240px;
        height: 93px;
      }

      .icon {
        display: flex;
        align-self: center;
      }
    `}</style>
  </div>
);

export default compose(
  withState('list', 'setList', []),
  withState('length', 'setLength', 'any'),
  withState('sort', 'setSort', 'published'),
  lifecycle({
    componentDidMount() {
      axios.get('https://us-central1-lithe-window-713.cloudfunctions.net/fronted-demo')
        .then(({ data }) => {
          this.setState({ list: data.data });
        });
    },
  }),
)(Home);
