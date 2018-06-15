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

const timeString = (value: number): string => {
  const date = new Date();
  date.setSeconds(value);
  return date.toISOString().substr(14, 5);
};

const filerList = length => (list) => {
  return list.filter((item) => {
    // < 4
    if (length === 'a') {
      return item.duration <= 240;
    }

    // 5 ~ 10
    if (length === 'b') {
      return item.duration > 300 && item.duration < 600;
    }

    // > 10
    if (length === 'c') {
      return item.duration >= 600;
    }

    return list;
  });
};

const softList = soft => (list) => {
  if (soft === 'publish') {
    return list.sort((a, b) => a.publish - b.publish).reverse();
  }

  if (soft === 'views') {
    return list.sort((a, b) => a.views - b.views).reverse();
  }

  if (soft === 'collectCount') {
    return list.sort((a, b) => a.collectCount - b.collectCount).reverse();
  }

  return list;
};

export const Home = ({ list, soft, setSoft, length, setLength }): React$Element<*> => (
  <div>
    <h1>Home Page</h1>

    <div className="nav">
      <div>
        <span className="mr-3">排序</span>
        <span className="ma-2"><Button variant="raised" color={soft === 'publish' ? 'primary' : 'default'} onClick={() => setSoft('publish')}>發佈時間</Button></span>
        <span className="ma-2"><Button variant="raised" color={soft === 'views' ? 'primary' : 'default'} onClick={() => setSoft('views')}>觀看次數</Button></span>
        <span className="ma-2"><Button variant="raised" color={soft === 'collectCount' ? 'primary' : 'default'} onClick={() => setSoft('collectCount')}>收藏次數</Button></span>
      </div>

      <div>
        <span className="ml-3 mr-3">長度</span>
        <span className="ma-2"><Button variant="raised" color={length === 'all' ? 'primary' : 'default'} onClick={() => setLength('all')}>不限</Button></span>
        <span className="ma-2"><Button variant="raised" color={length === 'a' ? 'primary' : 'default'} onClick={() => setLength('a')}>4 分鐘以下</Button></span>
        <span className="ma-2"><Button variant="raised" color={length === 'b' ? 'primary' : 'default'} onClick={() => setLength('b')}>5 - 10 分鐘</Button></span>
        <span className="ma-2"><Button variant="raised" color={length === 'c' ? 'primary' : 'default'} onClick={() => setLength('c')}>超過 10 分鐘</Button></span>
      </div>
    </div>

    <div className="grid">
      {
        compose(softList(soft), filerList(length))(list).map(item => (
          <div key={item.id} className="card ma-3">
            <div className="card-media">
              <img src={item.thumbnail} alt="" className="card-image" />
              <div>
                <span className="black white--text pa-1 card-time">{timeString(item.duration)}</span>
              </div>
            </div>

            <div className="card-content">
              <div className="pl-2 pr-2">{truncate(item.title, 55)}</div>
              <div className="ma-2 icon"><Icon>headset</Icon> {item.views.toLocaleString('en-US')}</div>
            </div>
          </div>
        ))
      }
    </div>

    <div>{compose(softList(soft), filerList(length))(list).length === 0 && '沒有篩選結果'}</div>

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
        height: 234px;
        box-sizing: border-box;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        margin: 0.75rem;
      }

      .card-media {
        position: relative;
        transition: all 0.2s ease-in-out;

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
  withState('length', 'setLength', 'all'),
  withState('soft', 'setSoft', 'publish'),
  lifecycle({
    componentDidMount() {
      axios.get('https://us-central1-lithe-window-713.cloudfunctions.net/fronted-demo')
        .then(({ data }) => {
          this.setState({ list: data.data });
        });
    },
  }),
)(Home);
