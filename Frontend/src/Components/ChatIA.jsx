import React, { useState } from 'react';
import axios from 'axios';
import "./DOCSS/ChatIA.css";
import logo from '../ImagenesP/ImagenesLogin/logoMiAgro.png';
import { useNavigate } from 'react-router-dom'; 
import Coney from '../ImagenesP/ROBOT.png'; 

function ChatAI() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSend = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3000/auth/chat', { prompt });
      setResponse(res.data.response);
    } catch (err) {
      console.error(err);
      setResponse('Hubo un error al contactar con el chat.');
    }
    setLoading(false);
  };

  return (
    <div className="full-screen-chat">
  <div className="chat-content-wrapper">
    <div className="chat-container">
      <div className="header-chat">
        <img src={logo} alt="Logo" className="logo-en-header" />
        <h2 className="chat-title">Si tienes una pregunta, ¡me puedes consultar!</h2>
      </div>
      
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Pregúntame sobre agronomía..."
        rows={5}
        cols={50}
      />
      <button className="chat-ai-btn-enviar" onClick={handleSend} disabled={loading}>
        {loading ? 'Cargando...' : 'Enviar'}
      </button>

      <div className="chat-response">
        {response}
      </div>

      <button className="chat-ai-btn-volver" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
    <img src={Coney} alt="Coney" className='ConeyInicio2' />
  </div>
</div>

  );
}

export default ChatAI;
