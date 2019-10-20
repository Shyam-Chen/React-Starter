import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InfiniteScroll extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    ref: PropTypes.func,
    element: PropTypes.node,
    pageStart: PropTypes.number,
    hasMore: PropTypes.bool,
    loadMore: PropTypes.func.isRequired,
    resetPage: PropTypes.bool,
    threshold: PropTypes.number,
  };

  static defaultProps = {
    ref: null,
    element: 'div',
    pageStart: 0,
    hasMore: false,
    resetPage: false,
    threshold: 250,
  };

  scrollComponent = null;

  pageLoaded = null;

  componentDidMount() {
    const { pageStart } = this.props;
    this.pageLoaded = pageStart;
    this.attachScrollListener();
  }

  componentDidUpdate() {
    const { pageStart, resetPage } = this.props;
    this.attachScrollListener();

    if (resetPage) {
      this.pageLoaded = pageStart;
      window.scrollTo(0, 0);
    }
  }

  componentWillUnmount() {
    this.detachScrollListener();
  }

  attachScrollListener = () => {
    const { hasMore } = this.props;
    if (!hasMore) return;
    window.addEventListener('scroll', this.scrollListener);
  };

  detachScrollListener = () => {
    window.removeEventListener('scroll', this.scrollListener);
  };

  scrollListener = () => {
    const { threshold, hasMore, loadMore } = this.props;
    const el = this.scrollComponent;
    const offset = this.calculateOffset(el, window.pageYOffset);

    if (offset < threshold && (el && el.offsetParent !== null)) {
      this.detachScrollListener();

      if (hasMore && typeof loadMore === 'function') {
        loadMore((this.pageLoaded += 1));
      }
    }
  };

  calculateOffset = (el, scrollTop) => {
    if (!el) return 0;

    return (
      this.calculateTopPosition(el) +
      (el.offsetHeight - scrollTop - window.innerHeight)
    );
  };

  calculateTopPosition = el => {
    if (!el) return 0;
    return el.offsetTop + this.calculateTopPosition(el.offsetParent);
  };

  render() {
    const {
      children,
      ref,
      element,
      pageStart,
      hasMore,
      loadMore,
      resetPage,
      threshold,
      ...props
    } = this.props;

    props.ref = node => {
      this.scrollComponent = node;
      if (ref) ref(node);
    };

    return React.createElement(element, props, [children]);
  }
}
