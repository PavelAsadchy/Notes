import { FC, ReactElement } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// import history from './history';
// import Auth from './components/Auth/Auth';
import Nav from './components/Nav/Nav';
// import NotesClient from './components/NotesClient/NotesClient';
import Pages from './components/Pages/Pages';

const App: FC = (): ReactElement => {
  return (
    <Router>
      <Nav />
      <Route component={Pages} />
    </Router>
    // <div>
    //   Client
    //   <NotesClient />
    //   <Auth />
    // </div>
  );
}

export default App;
