import { Routes, Route } from 'react-router-dom';
import DashBoard from './dash';


function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<DashBoard />} />
    </Routes>
  );
}

export default MainRoutes;
