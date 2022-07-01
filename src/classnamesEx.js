// classnames 간략 사용법
import classNames from 'classnames';

classNames('one', 'two'); // = 'one two'
classNames('one', {two: true}); // = 'one two'
classNames('one', {two: false}); // = 'one'
classNames('one', ['two', 'three']); // = 'one two three'

const myClass = 'hello';
classNames('one', myClass, { myCondition: true });
// = 'one hello mycondition'

// 여러 가지 종류의 파라미터를 조합해 CSS 클래스를 설정 할 수 있다