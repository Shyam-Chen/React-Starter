// @flow

import React from 'react';
import { compose, withState, lifecycle } from 'recompose';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button, Icon } from 'material-ui';
import axios from 'axios';

type List = {
  [value: string]: any,
};

type Props = {
  list: List[],
  sort: string,
  setSort(value: string): void,
  length: string,
  setLength(value: string): void,
  isLoading: boolean,
};

const truncate = (value: string, length?: number = 15): string => {
  if (!value) return '';
  if (value.length <= length) return value;
  return `${value.substring(0, length)}...`;
};

const convertSeconds = (value: number): string => {
  const timeSubstr = (start?: number = 11, end?: number = 8): string => (
    new Date(value * 1000).toISOString().substr(start, end)
  );

  if (value < 3600) return timeSubstr(14, 5);
  return timeSubstr();
};

const timeSince = (date: any): string => {
  const ago = new Date(date);
  const now = new Date();

  const seconds = Math.round(Math.abs((now.getTime() - ago.getTime()) / 1000));
  const minutes = Math.round(Math.abs(seconds / 60));
  const hours = Math.round(Math.abs(minutes / 60));
  const days = Math.round(Math.abs(hours / 24));
  const months = Math.round(Math.abs(days / 30.416));
  const years = Math.round(Math.abs(days / 365));

  if (seconds <= 45) return 'a few seconds ago';
  if (seconds <= 90) return 'a minute ago';
  if (minutes <= 45) return `${minutes} minutes ago`;
  if (minutes <= 90) return 'an hour ago';
  if (hours <= 22) return `${hours} hours ago`;
  if (hours <= 36) return 'a day ago';
  if (days <= 25) return `${days} days ago`;
  if (days <= 45) return 'a month ago';
  if (days <= 345) return `${months} months ago`;
  if (days <= 545) return 'a year ago';
  return `${years} years ago`;
};

const filerList = (length: string) => (list: List[]) => (
  list.filter((item) => {
    if (length === 'lessThanFive') return item.duration < 300;
    if (length === 'fiveToTen') return item.duration >= 300 && item.duration <= 600;
    if (length === 'moreThanTen') return item.duration > 600;

    return list;
  })
);

const sortList = (sort: string) => (list: List[]) => {
  const typedList = type => list.sort((a, b) => a[type] - b[type]).reverse();

  if (sort === 'published') return typedList('publish');
  if (sort === 'views') return typedList('views');
  if (sort === 'collections') return typedList('collectCount');

  return list;
};

export const Home = ({ list, sort, setSort, length, setLength, isLoading }: Props): React$Element<*> => {
  const composeList = compose(sortList(sort), filerList(length))(list);

  return (
    <div>
      <div className="nav">
        <div className="row">
          <Typography variant="body2">Sort</Typography>
          <span className="ma-2"><Button variant="raised" color={sort === 'published' ? 'primary' : 'default'} onClick={() => setSort('published')}>Published</Button></span>
          <span className="ma-2"><Button variant="raised" color={sort === 'views' ? 'primary' : 'default'} onClick={() => setSort('views')}>Views</Button></span>
          <span className="ma-2"><Button variant="raised" color={sort === 'collections' ? 'primary' : 'default'} onClick={() => setSort('collections')}>Collections</Button></span>
        </div>

        <div className="row">
          <Typography variant="body2">Length</Typography>
          <span className="ma-2"><Button variant="raised" color={length === 'any' ? 'primary' : 'default'} onClick={() => setLength('any')}>Any</Button></span>
          <span className="ma-2"><Button variant="raised" color={length === 'lessThanFive' ? 'primary' : 'default'} onClick={() => setLength('lessThanFive')}>Less than five minutes</Button></span>
          <span className="ma-2"><Button variant="raised" color={length === 'fiveToTen' ? 'primary' : 'default'} onClick={() => setLength('fiveToTen')}>Five to ten minutes</Button></span>
          <span className="ma-2"><Button variant="raised" color={length === 'moreThanTen' ? 'primary' : 'default'} onClick={() => setLength('moreThanTen')}>More than ten minutes</Button></span>
        </div>
      </div>

      <div>
        {
          !isLoading
            ? (
              <div>
                {
                  composeList.length !== 0
                    ? (
                      <div className="grid">
                        {
                          composeList.map(item => (
                            <div key={item.id} className="card ma-3">
                              <div className="card-media">
                                <img src={item.thumbnail} alt="" className="card-image" />
                                <Typography>
                                  <span className="black white--text pa-1 card-time">{convertSeconds(item.duration)}</span>
                                </Typography>
                              </div>

                              <div className="card-content">
                                <Typography className="pl-2 pr-2">{truncate(item.title, 55)}</Typography>
                                <Typography className="ma-2 icon"><Icon>headset</Icon> {item.views.toLocaleString('en-US')}</Typography>
                                <Typography><Icon>event</Icon>{timeSince(item.publish * 1000)}</Typography>
                                <Typography><Icon>video_library</Icon>{item.collectCount.toLocaleString('en-US')}</Typography>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    )
                    : <div>No results</div>
                }
              </div>
            )
            : <CircularProgress />
        }
      </div>

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

        .row {
          display: flex;
          flex-flow: row wrap;
        }

        .pa-1 {
          padding: 0.25rem;
        }

        .grid {
          display: flex;
          flex-flow: row wrap;
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
};

export default compose(
  withState('list', 'setList', []),
  withState('length', 'setLength', 'any'),
  withState('sort', 'setSort', 'published'),
  withState('isLoading', 'setIsLoading', true),
  lifecycle({
    componentDidMount() {
      axios.get('https://us-central1-lithe-window-713.cloudfunctions.net/fronted-demo')
        .then(({ data }) => {
          this.setState({
            list: data.data,
            isLoading: false,
          });
        });
    },
  }),
)(Home);
