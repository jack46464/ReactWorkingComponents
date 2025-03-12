import { forwardRef } from 'react';

const CoolInput = forwardRef(function CoolInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      {/* <input ref={ref} value={ref.current} /> */}
      <br />
      <input id="empid" ref={ref} value={props.label} />
    </label>
  );
});

export default CoolInput;