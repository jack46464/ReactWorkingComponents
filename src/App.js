import logo from './logo.svg';
import './App.css';
import AddNew from './components/AddNew';
import NextPage from './components/NextPage';
import WorkingPage from './components/WorkingPage';
import { Route,Routes,NavLink } from 'react-router-dom';
import ErrorBoundary from "./components/ErrorBoundary";
import HocComponent from './components/HocComponent';
import AsyncPromise from './components/AsyncPromise';
import CallbackParent from './components/CallbackParent';
import LearnRedux  from './components/Redux/LearnRedux';
import ReduxComponent from './components/Redux/ReduxComponent';
import ReactStore from './components/Redux/ReactStore';
import ReduxWork from './components/Redux/ReduxWork';
function App() {
  return (

  //  <AddNew></AddNew>
    // <NextPage></NextPage>
    // <WorkingPage></WorkingPage>
    <>
    <nav>
      <NavLink to='/'>    
      </NavLink>
      <NavLink to='HOC' style={{padding:"20px"}}>HOC</NavLink>
      <NavLink to='Promise' style={{padding:"20px"}}>Promise</NavLink>
      <NavLink to='ErrorBoundray' style={{padding:"20px"}}>ErrorBoundray</NavLink>
      <NavLink to='UseCallback' style={{padding:"20px"}}>Use Callback</NavLink>
      <NavLink to='Redux' style={{padding:"20px"}}>Redux</NavLink>
    </nav>
    <Routes>
      <Route path='/' element={<AddNew />}></Route>
      <Route path='HOC' element={<HocComponent />}></Route>
      <Route path='Promise' element={<AsyncPromise />}></Route>
      <Route path='ErrorBoundray' element={<ErrorBoundary />}></Route>
      <Route path='UseCallback' element={<CallbackParent />}></Route>
      <Route path='Redux' element={<ReduxWork />}></Route>
    </Routes>
    </>
  );
}

export default App;
