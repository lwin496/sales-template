import {BrowserRouter as Router} from 'react-router-dom';
import AnimatedRoutes from './Components/AnimatedRoutes';
import Navbar from './Components/Navbar';
function App() {


  return (
   <div className='App'>
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
   </div>
  );
}

export default App;
