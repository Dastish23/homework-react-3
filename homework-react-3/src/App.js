import { useSelector } from 'react-redux';
import './App.css';
import { Registration } from './component/Registration';

function App() {

  const usernames = useSelector(state => state.usernames)
  const names = useSelector(state => state.names)

  return (
    <div className="App">
        {
          usernames.map(username => <div key={username.id}>{username.name} - {username.num}</div> )
        }
        {
          names.map(user => <div key={user.id}>{user.name} - {user.username}</div> )
        }
        <Registration />
    </div>
  );
}

export default App;
