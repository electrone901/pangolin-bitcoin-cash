import { Link } from 'react-router-dom';

function Dashboard() {
    return (
      <div className="container">
          <h1 className="mt-2">Good afternoon, User!</h1>
          <p className="h5 mb-4">Congratulations! You passed your Geography class with a final grade of 70</p>
          <img className="d-block m-auto" src="/images/gradeprogressgeography.png" alt="Graph"/>
          <p className="h5 my-4">You have earned 3.5 PangoPoints, added to your balance of 12,400</p>

          <div className="d-flex justify-content-around">
              <div>
                <p>Get Bitcoin Cash</p>
                <Link to="/getbitcoincash">
                    <img className="d-block m-auto" src="/images/bitcoinimage.png" alt="Bitcoin"/>
                </Link>
              </div>
              <div>
                <p>Redeem online</p>
                <img className="d-block m-auto" src="/images/designerbag.png" alt="Bag"/>
              </div>
              <div>
                <p>Support a cause</p>
                <Link to="/supportacause">
                  <img className="d-block m-auto" src="/images/pangloin.png" alt="Pangloin"/>
                </Link>
              </div>
          </div>
      </div>
    );
  }
  
  export default Dashboard;
  