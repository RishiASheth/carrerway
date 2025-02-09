import React, { useState } from "react";
import "./VoiceBot.css";

const VoiceBot = () => {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState("");
  const [audioURL, setAudioURL] = useState("");

  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser. Use Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    if (!isListening) {
      recognition.start();
      setIsListening(true);

      recognition.onresult = (event) => {
        setText(event.results[0][0].transcript);
        recognition.stop();
        setIsListening(false);
      };

      recognition.onerror = (error) => {
        console.error("Speech Recognition error:", error);
        if (error.error === 'network') {
          console.log("Check your internet connection or the status of the API service.");
        }
        recognition.stop();
        setIsListening(false);
      };
      
    } else {
      recognition.stop();
      setIsListening(false);
    }
  };

  const handleTextToSpeech = async () => {
    if (!text.trim()) return;
  
    try {
      const response = await fetch("http://localhost:3000/api/text-to-speech", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, voice: "aura-asteria-en" }),
      });
  
      if (!response.ok) throw new Error("Failed to convert text to speech");
  
      const audioBlob = await response.blob();
      setAudioURL(URL.createObjectURL(audioBlob));
    } catch (error) {
      console.error("Error with Text-to-Speech:", error.message);
    }
  };
  
  return (
    <div className="voice-bot">
      <h1>Live Voice-to-Text and Text-to-Speech Bot</h1>

      <section>
        <h2>Live Voice-to-Text</h2>
        <button onClick={handleVoiceInput}>
          {isListening ? "Stop Listening" : "Start Listening"}
        </button>
        {text && <p>Transcribed Text: {text}</p>}
      </section>

      <section>
        <h2>Text-to-Speech</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text here..."
        />
        <button onClick={handleTextToSpeech}>Convert to Speech</button>
        {audioURL && <audio controls src={audioURL}></audio>}
      </section>
    </div>
  );
};

export default VoiceBot;
