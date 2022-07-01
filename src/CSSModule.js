import styles from './CSSModule.module.css';

const CSSModule = () => {
  return (
    // 엘리먼트에 className={styles.클래스이름}
    // :global은 그냥 문자열로 넣어줌
    // 클래스 여러개 넣어줄 때 백틱으로 감싸써 리터럴해주기 '${} ${}'
    // 또는 className={[styles.wrapper, styles.inverted].join(' ')}
    // <div className={`${styles.wrapper} ${styles.inverted}`}>
    <div className={[styles.wrapper, styles.inverted].join(' ')}>
      안녕하세요. 예쁘고 편리한 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;