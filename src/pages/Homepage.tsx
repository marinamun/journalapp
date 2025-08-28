import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <h1>Welcome to journalie</h1>
      <Link to="/login">Sign in with google</Link>
    </>
  );
};
export default Homepage;
