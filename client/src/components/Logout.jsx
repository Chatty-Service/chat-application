import { useNavigate } from "react-router-dom";
import "../styles/Logout.scss";

function Logout() {
  const navigate = useNavigate();
//remove everything from the localStorage data that we were using ang go to sign up
  const logoutHandle = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="logout-btn-container">
      <button className="logout-btn" onClick={logoutHandle}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
