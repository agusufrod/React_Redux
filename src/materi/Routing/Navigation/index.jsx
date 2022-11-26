import './index.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <i className="fa fa-fw fa-home"></i> Home
      </Link>
      <Link to="/service">
        <i className="fa fa-fw fa-wrech"></i> Service
      </Link>
      <Link to="/client">
        <i className="fa fa-fw fa-user"></i> Clients
      </Link>
      <Link to="/contact">
        <i className="fa fa-fw fa-envelop"></i> Contact
      </Link>
    </div>
  );
};

export default Navigation;
