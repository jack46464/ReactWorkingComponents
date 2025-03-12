import React from 'react';

const withLogging = (WrappedComponent) => {
  const WithLogging = React.forwardRef((props, ref) => {
    const handleClick = () => {
      console.log('Input field clicked!');
    };

    return (
      <div onClick={handleClick}>
        <WrappedComponent ref={ref} {...props} />
      </div>
    );
  });

  return WithLogging;
};

export default withLogging;