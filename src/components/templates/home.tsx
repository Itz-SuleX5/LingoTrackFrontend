import React, { useState } from "react";
import { Volume2, House, ChartColumn } from 'lucide-react';
import { useSubmitForm } from "../../hooks/feedback";
import { useUserProfile } from '../../hooks/useUserProfile';
import { useRandomWord } from '../../hooks/useRandomWord';
import { useMarkWord } from '../../hooks/useMarkWord';
import Progress from "./Progress";
import { motion } from 'framer-motion';

const Home = () => {
  const [formData, setFormData] = useState({
    simplePresent: '',
    presentProgressive: '',
    simplePast: ''
  });

  const { profile, loading, showModal, level, setLevel, registerUser } = useUserProfile();
  const { submitForm, isLoading, response } = useSubmitForm();
  const { word, loading: wordLoading, refetch } = useRandomWord();
  const { markWord } = useMarkWord();
  const [selectedSection, setSelectedSection] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    await submitForm(formData);
  };

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const handleMark = async (status: 'known' | 'used') => {
    if (!word?.id) return;
    await markWord(word.id, status);
    refetch();
  };

  const handleSkip = () => {
    refetch();
  };

  return (
    <div className="min-h-screen justify-between flex flex-col mx-auto overflow-y-auto relative">
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 max-w-md flex flex-col gap-4">
            <h1 className="text-xl font-semibold text-center">Selecciona tu nivel para comenzar</h1>
            <select value={level} onChange={(e) => setLevel(e.target.value)} className="border p-2 rounded-md">
              <option value="B0">B0</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="B3">B3</option>
              <option value="B4">B4</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <button onClick={registerUser} className="bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition">
              Crear usuario
            </button>
          </div>
        </div>
      )}

      {!showModal && (
        <>
          {selectedSection === 0 && word && (
            <div className="w-11/12 md:w-4/12 bg-white mx-auto mt-4 mb-24 py-6 px-4 flex flex-col items-center gap-2 min-h-[90vh] rounded-xl">
              <div className="flex items-center gap-4">
                <h1 className="font-bold text-5xl">{word.base}</h1>
                <button className="hover:bg-orange-50 p-2 rounded-md mt-2 cursor-pointer" onClick={() => speak(word.base)}>
                  <Volume2 color="orange" size={22} />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-gray-600 text-xl">{word.past}</h1>
                <button className="hover:bg-orange-50 p-2 rounded-md cursor-pointer" onClick={() => speak(word.past)}>
                  <Volume2 color="orange" size={16} />
                </button>
                <h1 className="text-gray-700">/</h1>
                <h1 className="text-gray-600 text-xl">{word.progressive}</h1>
                <button className="hover:bg-orange-50 p-2 rounded-md cursor-pointer" onClick={() => speak(word.progressive)}>
                  <Volume2 color="orange" size={16} />
                </button>
              </div>
              <h1 className="italic text-xl">{word.translation}</h1>
              <div className="flex items-center gap-2">
                <h1 className="text-amber-500">"{word.example}"</h1>
                <button className="hover:bg-orange-50 p-2 rounded-md cursor-pointer" onClick={() => speak(word.example)}>
                  <Volume2 color="orange" size={16} />
                </button>
              </div>
              <div className="bg-gray-50 text-gray-500 p-2 rounded-md">{word.group_count} personas de {word.level} conocen esta palabra</div>
              <div className="w-11/12 gap-2 flex flex-col">
                <h1 className="text-left">Simple Present</h1>
                <input type="text" name="simplePresent" value={formData.simplePresent} placeholder="Example: I run every day" className="border w-full p-2 rounded-md" onChange={handleChange} />
                <h1 className="text-left">Present Progressive</h1>
                <input type="text" name="presentProgressive" value={formData.presentProgressive} placeholder="Example: I'm running right now" className="border w-full p-2 rounded-md" onChange={handleChange} />
                <h1 className="text-left">Simple Past</h1>
                <input type="text" name="simplePast" value={formData.simplePast} placeholder="Example: I ran yesterday" className="border w-full p-2 rounded-md" onChange={handleChange} />
                {response && (
                  <div className="flex flex-col gap-2 mt-2">
                    {response.choices[0].message.content.split('|').map((feedback, index) => {
                      const isOk = feedback.trim().startsWith('OK');
                      const parts = feedback.trim().split('→');
                      if (parts.length > 1) {
                        const correction = parts[1].split('(')[0].trim();
                        const explanation = `(${parts[1].split('(')[1]}`;
                        return (
                          <div key={index} className={`p-3 rounded-md ${isOk ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                            {parts[0]} → <span className="text-green-600">{correction}</span> {explanation}
                          </div>
                        );
                      }
                      return (
                        <div key={index} className={`p-3 rounded-md ${isOk ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                          {feedback.trim()}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <motion.button className="bg-amber-500 text-white p-3 rounded-md my-2 cursor-pointer" whileHover={{ scale: 1.1, rotate: 1.2, transition: { duration: 0.2 } }} whileTap={{ scale: 1.1, rotate: -10, transition: { duration: 0.2 } }} onClick={handleSubmit} disabled={isLoading}>
                Hacer revision con IA
              </motion.button>
              <div className="flex text-white grid grid-cols-3 gap-2 w-full">
                <motion.button className="bg-gray-700 py-3 rounded-md cursor-pointer" whileHover={{ scale: 1.1, rotate: 1.2, transition: { duration: 0.2 } }} whileTap={{ scale: 1.1, rotate: -10, transition: { duration: 0.2 } }} onClick={handleSkip}>
                  Saltar
                </motion.button>
                <motion.button className="bg-amber-600 py-3 rounded-md cursor-pointer" whileHover={{ scale: 1.1, rotate: 1.2, transition: { duration: 0.2 } }} whileTap={{ scale: 1.1, rotate: -10, transition: { duration: 0.2 } }} onClick={() => handleMark('used')}>
                  Usar
                </motion.button>
                <motion.button className="bg-green-600 py-3 rounded-md cursor-pointer" whileHover={{ scale: 1.1, rotate: 1.2, transition: { duration: 0.2 } }} whileTap={{ scale: 1.1, rotate: -10, transition: { duration: 0.2 } }} onClick={() => handleMark('known')}>
                  Ya la conozco
                </motion.button>
              </div>
            </div>
          )}
                    {selectedSection === 1 && <Progress profile={profile} />}
        </>
      )}

      <div className="bg-white flex w-full justify-center py-2 gap-16 fixed bottom-0 z-10">
        <button
          className={`flex flex-col items-center text-sm cursor-pointer hover:bg-orange-50 p-2 rounded-md ${
            selectedSection === 0 ? 'text-amber-600' : 'text-gray-600'
          }`}
          onClick={() => setSelectedSection(0)}
        >
          <House size={16} />
          <h1>Tarjetas</h1>
        </button>
        <button
          className={`flex flex-col items-center text-sm cursor-pointer hover:bg-orange-50 p-2 rounded-md ${
            selectedSection === 1 ? 'text-amber-600' : 'text-gray-600'
          }`}
          onClick={() => setSelectedSection(1)}
        >
          <ChartColumn size={16} />
          <h1>Progreso</h1>
        </button>
      </div>
    </div>
  );
};

export default Home;
