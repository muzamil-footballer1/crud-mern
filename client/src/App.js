import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CodeForInterview from './components/CodeforInterview';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<CodeForInterview />} />
          <Route path="all" element={<AllUsers />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
