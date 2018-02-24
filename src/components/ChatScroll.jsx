import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

const hasOverflow = el => el.clientHeight < el.scrollHeight;

const isScrolledDown = (el, threshold) => {
  const bottom = el.scrollTop + el.clientHeight;
  return bottom >= el.scrollHeight - threshold;
};

const scrollDown = el => {
  el.scrollTop = el.scrollHeight - el.clientHeight;
};

export default (Component, { isScrolledDownThreshold = 150 } = {}) =>
  class Wrapper extends PureComponent {
    componentDidMount = () => {
      this.scrollDownIfNeeded();
    };
    componentDidUpdate = () => {
      this.scrollDownIfNeeded();
    };
    scrollDownIfNeeded = () => {
      if (this._isScrolledDown && hasOverflow(this._elem)) {
        scrollDown(this._elem);
      }
    };
    handleScroll = e => {
      this._isScrolledDown = isScrolledDown(
        this._elem,
        isScrolledDownThreshold
      );
    };
    _elem = null;
    _isScrolledDown = true;
    render() {
      return (
        <Component
          {...this.props}
          ref={elem => {
            this._elem = ReactDOM.findDOMNode(elem);
          }}
          onScroll={e => this.handleScroll(e)}
        />
      );
    }
  };
