import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import HeadsetIcon from '@material-ui/icons/Headset';
import EventIcon from '@material-ui/icons/Event';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

const useStyles = makeStyles(() => ({
  'o-button-groups': {
    display: 'flex',
    'flex-flow': 'row wrap',
    'max-width': '1280px',
    'justify-content': 'flex-start',
  },
  'o-button-group': {
    display: 'flex',
    'align-items': 'center',
  },
  'o-button': {
    margin: '0.5rem',
  },
  'o-cards': {
    display: 'flex',
    'flex-flow': 'row wrap',
    'max-width': '1280px',
    margin: 'auto -0.75rem',
  },
  'o-card': {
    width: '240px',
    'box-sizing': 'border-box',
    'box-shadow': '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
    margin: '0.75rem',
  },
  'o-card-media': {
    position: 'relative',
  },
  'o-card-image': {
    width: '240px',
    height: '135px',
  },
  'o-card-time': {
    position: 'absolute',
    right: '0.5rem',
    bottom: '0.5rem',
    padding: '0.25rem',
    color: '#fff',
    background: '#000',
  },
  'o-card-content': {
    padding: '0.25rem 0.5rem',
  },
  'o-card-text': {
    display: 'flex',
    'align-items': 'center',
    padding: '0.25rem 0',
  },
  'o-card-icon': {
    'margin-right': '0.25rem',
  },
}));

const truncate = (value, length = 15) => {
  if (!value) return '';
  if (value.length <= length) return value;
  return `${value.substring(0, length)}...`;
};

const convertSeconds = value => {
  const timeSubstr = (start = 11, end = 8) =>
    new Date(value * 1000).toISOString().substr(start, end);

  if (value < 3600) return timeSubstr(14, 5);
  return timeSubstr();
};

const timeSince = date => {
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

const filerList = length => list =>
  list.filter(item => {
    if (length === 'lessThanFive') return item.duration < 300;
    if (length === 'fiveToTen')
      return item.duration >= 300 && item.duration <= 600;
    if (length === 'moreThanTen') return item.duration > 600;

    return list;
  });

const sortList = sort => list => {
  const typedList = type => list.sort((a, b) => a[type] - b[type]).reverse();

  if (sort === 'published') return typedList('publish');
  if (sort === 'views') return typedList('views');
  if (sort === 'collections') return typedList('collectCount');

  return list;
};

const Home = () => {
  const classes = useStyles();

  const [sort, setSort] = useState('published');
  const [length, setLength] = useState('any');
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const composeList = compose(sortList(sort), filerList(length))(list);

  useEffect(() => {
    axios.get('https://us-central1-lithe-window-713.cloudfunctions.net/fronted-demo')
      .then(({ data }) => {
        setList(data.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div className={classes['o-button-groups']}>
        <div className={classes['o-button-group']}>
          <Typography variant="h6">Sort</Typography>
          <Button className={classes['o-button']} variant="contained" color={sort === 'published' ? 'primary' : 'default'} onClick={() => setSort('published')}>Published</Button>
          <Button className={classes['o-button']} variant="contained" color={sort === 'views' ? 'primary' : 'default'} onClick={() => setSort('views')}>Views</Button>
          <Button className={classes['o-button']} variant="contained" color={sort === 'collections' ? 'primary' : 'default'} onClick={() => setSort('collections')}>Collections</Button>
        </div>

        <div className={classes['o-button-group']}>
          <Typography variant="h6">Length</Typography>
          <Button className={classes['o-button']} variant="contained" color={length === 'any' ? 'primary' : 'default'} onClick={() => setLength('any')}>Any</Button>
          <Button className={classes['o-button']} variant="contained" color={length === 'lessThanFive' ? 'primary' : 'default'} onClick={() => setLength('lessThanFive')}>Less than five minutes</Button>
          <Button className={classes['o-button']} variant="contained" color={length === 'fiveToTen' ? 'primary' : 'default'} onClick={() => setLength('fiveToTen')}>Five to ten minutes</Button>
          <Button className={classes['o-button']} variant="contained" color={length === 'moreThanTen' ? 'primary' : 'default'} onClick={() => setLength('moreThanTen')}>More than ten minutes</Button>
        </div>
      </div>


      {
        !isLoading
          ? (
            <div>
              {
                composeList.length !== 0
                  ? (
                    <div className={classes['o-cards']}>
                      {
                        composeList.map(item => (
                          <div key={item.id} className={classes['o-card']}>
                            <div className={classes['o-card-media']}>
                              <img src={item.thumbnail} alt="Thumbnail" className={classes['o-card-image']} />
                              <Typography className={classes['o-card-time']}>{convertSeconds(item.duration)}</Typography>
                            </div>

                            <div className={classes['o-card-content']}>
                              <Typography>{truncate(item.title, 50)}</Typography>
                              <Typography className={classes['o-card-text']}><EventIcon className={classes['o-card-icon']} />{timeSince(item.publish * 1000)}</Typography>
                              <Typography className={classes['o-card-text']}><HeadsetIcon className={classes['o-card-icon']} />{item.views.toLocaleString('en-US')}</Typography>
                              <Typography className={classes['o-card-text']}><VideoLibraryIcon className={classes['o-card-icon']} />{item.collectCount.toLocaleString('en-US')}</Typography>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  )
                  : <Typography>No results</Typography>
              }
            </div>
          )
          : <div>Loading...</div>
      }
    </div>
  );
};

export default Home;
