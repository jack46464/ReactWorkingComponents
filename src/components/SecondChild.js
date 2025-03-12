import { forwardRef } from 'react';

const SecondChild = forwardRef(function CoolInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      {/* <input ref={ref} value={ref.current} /> */}
      <br />
      <input id="empid" ref={ref} value={"second child"} />
    </label>
  );
});

export default SecondChild;