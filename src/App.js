import {SearchBar, Card, Navbar, RepoCard} from './components';
import UserContextProvider from './context/userContext.js';

function App() {

  return (
    <UserContextProvider>
      <SearchBar/>
      <Card/>
      <Navbar/>
      <RepoCard title="Title" fullname="full/name" reference="#"/>
    </UserContextProvider>
  );
}

export default App;
