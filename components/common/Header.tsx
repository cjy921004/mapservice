import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/header.module.scss';
import React from 'react';
interface Props {
  onClickLogo?: () => void;
  rightElements?: React.ReactElement[];
}
const HeaderComponent = ({ onClickLogo, rightElements }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link
          href="/"
          className={styles.box}
          onClick={onClickLogo}
          aria-label="홈으로 이동"
        >
          <Image
            src="/inflearn.png"
            width={110}
            height={20}
            alt="인프런 로고"
          />
        </Link>
      </div>
      <div className={styles.flexItem}>
        {rightElements && (
          <div className={styles.flexItem}>{rightElements}</div>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
