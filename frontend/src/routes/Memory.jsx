import axios from "../axios-config.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Memory.modules.css";
import { toast } from "react-toastify";
const Memory = () => {
  const { id } = useParams();
  const [memory, setMemory] = useState(null);
  const [comments, setComments] = useState([]);

  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const getMemory = async () => {
      try {
        const res = await axios.get(`/memories/${id}`);
        setMemory(res.data);
        setComments(res.data.comments);
      } catch (error) {
        console.error("Failed to fetch memory:", error);
      }
    };
    getMemory();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const comment = { name, text };
      const res = await axios.patch(
        `/memories/${memory._id}/comment/`,
        comment
      );
      const lastComment = res.data.memory.comments.pop();
      setComments((comments) => [...comments, lastComment]);

      setName("");
      setText("");
      toast.success(res.data.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
  };
  if (!memory) <p>Carregando...</p>;
  return (
    <div className="memory_page">
      {memory && (
        <>
          <img
            src={`${axios.defaults.baseURL}${memory.src}`}
            alt={memory.title}
          />
          <h2>{memory.title}</h2>
          <p>{memory.description}</p>
          <div className="comment_form">
            <h3>Envie um Comentário:</h3>
            <form onClick={handleSubmit}>
              <label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <textarea
                  placeholder="Escreva seu comentario"
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                ></textarea>
              </label>
              <input type="submit" value="Enviar" className="btn" />
            </form>
          </div>
          <div className="comments_container">
            <h3>Comentarios({comments.length})</h3>
            {comments.length === 0 && <p>Não há comentarios...</p>}
            {comments.length > 0 &&
              comments.map((comment) => (
                <div className="commnet" key={comment.id}>
                  <p className="comment_name">{comment.name}</p>
                  <p className="comment_text">{comment.text}</p>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Memory;
