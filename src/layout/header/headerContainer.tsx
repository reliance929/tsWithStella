import React from 'react';

import classNames from 'classnames/bind';

import styles from 'assets/css/default.module.scss';
import ic_1 from 'assets/images/001.jpg';
import ic_2 from 'assets/images/002.jpg';
import ic_3 from 'assets/images/003.jpg';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('containers')}>
        <div className={cx('start')}>
          <img src={ic_1} className={cx('ic_1')} alt="jimin_1" />
        </div>
        <div className={cx('center')}>
          <img src={ic_2} className={cx('ic_2')} alt="jimin_2" />
        </div>
        <div className={cx('end')}>
          <img src={ic_3} className={cx('ic_3')} alt="jimin_3" />
        </div>
      </div>
    </header>
  );
};
export default Header;
