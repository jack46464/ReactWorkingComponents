import { useRef } from 'react';
import CoolInput from './CoolFile';
import SecondChild from './SecondChild';
export default function RefComponent() {
  const ref = useRef("100");

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      <CoolInput label="Type some text here:" ref={ref} />
      <SecondChild label="Type some text here:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}