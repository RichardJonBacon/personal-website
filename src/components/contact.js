import React from 'react';
import styles from './contact.module.css';

const Contact = ({ id }) => {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.primaryHeading}>Contact</h2>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            I'm always happy to connect with people, you can find me on social
            media or contact me via email.
          </p>

          <ul className={styles.list}>
            <li className={styles.item}>
              <a
                className={styles.link}
                href="https://twitter.com/richardjonbacon"
                target="blank"
              >
                <i className={`fab fa-twitter ${styles.icon}`}></i>
                Twitter
              </a>
            </li>
            <li className={styles.item}>
              <a
                className={styles.link}
                href="https://linkedin.com/in/richardjonbacon"
                target="blank"
              >
                <i className={`fab fa-linkedin ${styles.icon}`}></i>
                LinkedIn
              </a>
            </li>
            <li className={styles.item}>
              <a
                className={styles.link}
                href="mailto:richardjonbacon@gmail.com"
              >
                <i className={`far fa-paper-plane ${styles.icon}`}></i>
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;