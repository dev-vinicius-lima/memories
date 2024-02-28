import "./AddMemory.modules.css";

const AddMemory = () => {
  return (
    <div className="add_memory_page">
      <h2>Crie uma nova memória</h2>
      <form>
        <label>
          <p>Título:</p>
          <input type="text" placeholder="Defina um título" name="title" />
        </label>
        <label>
          <p>Descrição:</p>
          <textarea
            placeholder="Explique oque aconteceu..."
            name="description"
          ></textarea>
        </label>
        <label>
          <p>Foto:</p>
          <input type="file" name="image" />
        </label>
        <input type="submit" value="Enviar" className="btn" />
      </form>
    </div>
  );
};

export default AddMemory;
