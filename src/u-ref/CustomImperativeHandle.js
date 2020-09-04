import React, {useImperativeHandle, forwardRef, useRef} from 'react';

/*
1. Bạn gây ra một event render (thay đổi state, hoặc re-renders từ cha)
2. React render Component của bạn (Gọi nó)
3. Màn hình được cập nhật UI
4. Cuối cùng useEffect chạy

/*
1. Bạn gây ra một event render
2. React render Component của bạn
3. useLayoutEffect chạy, và React đợi đến khi nào nó finish.
4. 

*/

const FancyInput = forwardRef ( (props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    getLocalContent: () => {
      return inputRef.current.value
    }
  }));
  return <input ref={inputRef} />;
});

function CustomImperativeHandle () {

  const refLocal = useRef(null);
  const clickBt = () => {
    console.log(refLocal.current);
    console.log(refLocal.current.getLocalContent());
  }

  return <>
    <FancyInput ref={refLocal} data="098" />
    <button onClick={clickBt}>Click Here. !</button>
  </>
}

export default CustomImperativeHandle;