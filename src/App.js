import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/.netlify/functions/submit-waitlist', {
        method: 'POST',
        body: JSON.stringify({ name, email }),
      });
      const data = await response.json();
      alert(data.message);
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Helmet>
        <title>ResumateV0</title>
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Craft the Perfect Resume with AI</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-80">Tailor-made, ATS-proof resumes in seconds. No more generic templates.</p>
          <img src="/Preview.png" alt="Resumate Interface Mockup" className="max-w-full h-auto mb-8" />
          <p className="text-xl font-bold mb-4">Coming Soon</p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded text-lg transition duration-300">
            Join the Waiting List
          </button>
        </section>
        
        <section className="bg-gray-800 p-8 rounded-lg mt-16">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="p-3 rounded bg-gray-700 text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="p-3 rounded bg-gray-700 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded text-lg transition duration-300">
              Join the Waiting List
            </button>
          </form>
          <p className="text-center mt-4 opacity-80">Be the first to get access when we launch!</p>
        </section>
        
        <footer className="text-center py-8 mt-16">
          <a href="#" className="text-white opacity-80 hover:opacity-100">Privacy Policy</a>
        </footer>
      </div>
    </div>
  );
};

export default App;