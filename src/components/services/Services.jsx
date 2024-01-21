import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on learning and growing
          <br /> and moving forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/tech.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Tech </motion.b>Geek
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Full Stack</motion.b>{" "}
            Developer
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>B.Tech CSE Student</h2>
          <p>
            As a third-year Computer Science and Engineering student at IIIT
            Nagpur, I blend logic and creativity to navigate the tech landscape.
            Passionate about coding, I seek innovative solutions to real-world
            challenges, aiming to make a meaningful impact.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Developer</h2>
          <p>
            I am a budding web developer with proficiency in HTML, CSS, and
            JavaScript, and I have ventured into the realms of React, Node.js,
            MongoDB, and Express. Currently honing my skills, I am passionate
            about crafting dynamic and responsive web applications.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Computer Science Enthusias</h2>
          <p>
            A dedicated learner with a foundation in programming languages such
            as C++, proficiency in data structures and algorithms (DSA), and
            understanding of object-oriented programming (OOP). Committed to
            exploring the intricacies of computer science, I aim to leverage my
            skills to contribute meaningfully in various domains.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
