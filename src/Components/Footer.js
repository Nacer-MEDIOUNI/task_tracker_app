import { Link } from "react-router-dom";

const Footer = () => {
  var today = new Date();
  var thisYear = today.getFullYear();

  return (
    <footer>
      <p>Copyright &copy; {thisYear}</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
