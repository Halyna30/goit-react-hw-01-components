import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const TitleStat = ({ title, children }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    {children}
  </section>
);

TitleStat.defaultProps = {
  title: '',
  children: [],
};

TitleStat.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default TitleStat;
