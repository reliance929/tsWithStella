import React from 'react';

import classNames from 'classnames/bind';

import styles from 'assets/css/default.module.scss';

const cx = classNames.bind(styles);

const cards = ['봄', '여름', '가을', '겨울'];
const cardlist = cards.map((card, index) => (
  <div className={cx('card')} key={index}>
    {card}
  </div>
));

const App = () => {
  return (
    <div className={cx('App')}>
      <section className={cx('layer')}>
        <article>
          <div className={cx('head')}>헤더부분</div>
          <div className={cx('content')}>
            <div>{cardlist}</div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default App;
