import { FC, ReactElement } from 'react';
import NotesClient from './components/NotesClient/NotesClient';

const App: FC = (): ReactElement => {
  return (
    <div>
      Client
      <NotesClient />
    </div>
  );
}

export default App;
