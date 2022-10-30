import CreatePost from './pages/createPost';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import {store} from './app/store';
import {Provider} from 'react-redux';
import Posts from './pages/Posts';
function App() {
  return (
    <Provider store={store}>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Posts/>}/>
          <Route path='/create-post' element={<CreatePost/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
    </Provider>
  )
}

export default App;

