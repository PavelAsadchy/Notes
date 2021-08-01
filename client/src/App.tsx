import { FC, ReactElement } from 'react';
import Auth from './components/Auth/Auth';
import NotesClient from './components/NotesClient/NotesClient';

const App: FC = (): ReactElement => {
  return (
    <div>
      Client
      <NotesClient />
      <Auth />
    </div>
  );
}

export default App;
