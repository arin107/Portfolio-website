import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          arin.s()
        </motion.span>
        <div className="social">
          <a href="https://www.instagram.com/arin__srivastava/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/arin107">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/arin-srivastava-31a21223a/">
            <img src="/linkedin.webp" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
