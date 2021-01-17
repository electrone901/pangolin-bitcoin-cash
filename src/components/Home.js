import { Link, useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();

    return (
      <div className="container">
          <h1 className="mt-2">Welcome to Pangolin:</h1>
          <h2 className="mb-4">Extra motivation for online education</h2>
          <div className="header-sub mb-4">
            <p>
                Let Pangolin follow your progress online
            </p>
            <p>
                Earn PangoPoints with each completed lesson
            </p>
          </div>

          <div className="w-50 m-auto home-content">
                <p>Use PangoPoints to: </p>
                <p>- purchase cryptocurrency </p>
                <p>- shop the Internet </p>
                <p>- pay bills online </p>
                <p className="text-right">...or get cash back!</p>
          </div>
          <div className="d-flex flex-column align-items-end justify-content-end">
              <div>
                <button className="btn btn-primary btn-lg mb-1" onClick={() => history.push('/dashboard')}>
                    Get started for free
                </button>
                <p className="mb-3">Already a member? Log in</p>
              </div>
            <img className="d-block" src="/images/pangloin2.png" alt="Pangloin"/>
          </div>
    </div>
          
    );
  }
  
  export default Home;
  