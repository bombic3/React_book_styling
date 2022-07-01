import classNames from 'classnames';
import styles from './CSSModule.module.scss';
// CSS Module과 classnames 함께 사용하기
// - classnames에 내장되어 있는 bind 함수 사용하면 styles.[클래스이름] 써줄 필요 X
// - 사전에 미리 styles에서 받아 온 후 사용하게끔 설정하고
// - cx(’클래스 이름’, ‘클래스 이름2’) 형태로 사용
const cx = classNames.bind(styles);
// -> 미리 styles에서 클래스 받아 오도록 설정

const CSSModule = () => {
  return (
    // 엘리먼트에 className={styles.클래스이름}
    // :global은 그냥 문자열로 넣어줌
    // 클래스 여러개 넣어줄 때 백틱으로 감싸써 리터럴해주기 '${} ${}'
    // 또는 className={[styles.wrapper, styles.inverted].join(' ')}
    // <div className={`${styles.wrapper} ${styles.inverted}`}>
    // <div className={[styles.wrapper, styles.inverted].join(' ')}>
    <div className={cx('wrapper', 'inverted')}>
      안녕하세요. 예쁘고 편리한 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;