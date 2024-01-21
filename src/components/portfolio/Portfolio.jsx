import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "E-Commerce",
    img: "/ecommerce.png",
    desc: "Built a feature-rich E-commerce platform with a MERN stack, including a powerful admin dashboard and secure payment gateway integration. This scalable solution ensures a seamless and secure shopping experience for users, combining efficient product management with smooth transaction processing.",
    href:"#"
  },
  {
    id: 2,
    title: "AlgorythmPlay",
    img: "/algo.png",
    desc: "AlgorythmPlay is an interactive platform that includes an algorithm visualizer and games for sorting algorithms, Sudoku, N-Queens, and the Sieve of Eratosthenes. Users can explore and understand algorithms visually and enhance problem-solving skills through interactive games. This project provides an engaging and educational experience for learning and practicing various algorithms.",
    href:"https://arin107.github.io/AlgorythmPlay/"
  },
  {
    id: 3,
    title: "Linkedin Clone",
    img: "/linkedin-clone.jpg",
    desc: "Built a compact Linkedin Clone using the MERN stack, enabling users to sign up, post images, and engage with content. Leveraged MongoDB for data storage, Express.js for the backend, and React for a responsive frontend. The project showcases proficiency in MERN stack development, delivering core Instagram functionalities in a compact implementation.",
    href:"https://arin107.github.io/linkedin-clone/"
  },
  {
    id: 4,
    title: "Image-Gallery",
    img: "/image-gallery.png",
    desc: "Created a sleek Image Gallery using React, Tailwind CSS, and API calls. The project seamlessly presents a curated collection of images, ensuring a responsive and visually appealing user experience.",
    href:"https://arin107.github.io/image-gallery-react-and-tailwindcss/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.href}>See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
