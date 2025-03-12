import * as React from 'react'
import ReactDOM from 'react-dom'
import {ErrorBoundary} from 'react-error-boundary'
import About from './About';
import AddNew from './AddNew';

// function ErrorHandler({error,resetErrorBoundary}) {
//   return (
//     <div role="alert">
//       <p>An error occurred:</p>
//       <pre>{error.message}</pre>
//       <button onClick={resetErrorBoundary}>Recovery</button>
//     </div>
//   )
// }

const ErrorFallbackComponent = ({ error, resetErrorBoundary }) => {
  return (
    <>
      <div role="alert" style={{ color: "red" }}>
        <p>Something went wrong!</p>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Reset!</button>
      </div>
    </>
  )
}

function City({name}) {
    return <div>Hello, visit {"jack".toUpperCase()}</div>
}

function Country({capital}) {
    return <div>Hello, visit {"parthi".toUpperCase()}</div>
}

function CheckError() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent} onReset={(error,component)=>{
      console.log("which component:",error)

    }}>
      <Country />
      <City />
      <About />

    </ErrorBoundary>

  )
}
export default CheckError;
