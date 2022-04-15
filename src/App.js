
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AllVideos from './components/AllVideos/AllVideos'
import UploadPage from './components/UploadPage/UploadPage';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={AllVideos} />
        <Route exact path="/UploadPage" component={UploadPage}/>
        <Route exact path="/:videoId" component={AllVideos} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
