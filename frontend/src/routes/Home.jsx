import axios from "../axios-config.js";
import { useState, useEffect } from "react";
import "./Home.modules.css";
import { Link } from "react-router-dom";
const Home = () => {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const getMemories = async () => {
      const res = await axios.get("/memories");

      setMemories(res.data);
    };
    getMemories();
  }, []);
  return (
    <div className="home">
      <h2>Confira as ultimas memórias</h2>
      <div className="memories_container">
        {memories.length > 0 &&
          memories.map((memory) => (
            <div key={memory._id} className="memory">
              <img
                src={`${axios.defaults.baseURL}${memory.src}`}
                alt={memory.title}
              />
              <p>{memory.title}</p>
              <Link className="btn" to={`/memories/${memory._id}`}>
                Comentar
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
