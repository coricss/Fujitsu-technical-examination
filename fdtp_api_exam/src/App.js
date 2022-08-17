import logo from './logo.svg';
import './App.css';

import AppRegistration from './components/AppRegistration/AppRegistration';
import AppTable from './components/AppTable/AppTable';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="title text-center mb-5">
          <h1>FDTP Technical Examination</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <AppRegistration />
          </div>
          <div className="col-md-8">
            <AppTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
