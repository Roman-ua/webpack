import React from 'react';
import styles from './App.module.scss';
import { Link, Outlet } from "react-router-dom";
import imgPng from '../assets/ILTQq.png';
import imgJpeg from '../assets/raw.jpeg';
import ImgSvg from '../assets/down.svg';

export const App = () => {
  return (
    <>
      <Link to={'/about'}>About</Link>
      <div/>
      <Link to={'/shop'}>Shop</Link>
      <div/>
      <Link to={'/'}>Reset</Link>
      <div className={styles.main} data-testid={'App.DataTestId.wrapper'}>
        <div data-testid={'App.DataTestId.inform'}>Platform={__PLATFORM__} || ENV={__ENV__}</div>
        <div>
          <img width={100} src={imgPng} alt="icon"/>
          <img width={100} src={imgJpeg} alt="icon"/>
          <ImgSvg width={90} height={90} color="red" />
        </div>
        <span className={styles.test}>test react component</span>
        <Outlet />
      </div>
    </>
  );
};
