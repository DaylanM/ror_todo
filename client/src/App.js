import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home.js';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import Lists from './components/lists/Lists';
import MainNavbar from './components/shared/MainNavbar';
import Todos from './components/todo/Todos.js';
import Notes from './components/notes/Notes.js';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/lists' element={<Lists />} />
      <Route path='/:listId/todos' element={<Todos />} />
      <Route path='/:todoId/notes' element={<Notes />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>
)
// const App = () => {
//   return (

//   )
// }

export default App;