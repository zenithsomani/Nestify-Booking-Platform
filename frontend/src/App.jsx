import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className='ml-[0px]'>
        <Outlet />
      </div>
    </>
  );
};

export default App;
