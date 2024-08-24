import React from 'react';

function App() {
  return (
    <div className="flex flex-col h-screen bg-pink-200">
      <div className="bg-yellow-100 p-4 flex-grow">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-pink-500"></div>
            <h1 className="text-lg font-bold">My App</h1>
          </div>
          <div className="flex space-x-4">
            <button className="w-10 h-10 rounded-full bg-pink-500"></button>
            <button className="w-10 h-10 rounded-full bg-pink-500"></button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <button className="bg-yellow-200 rounded-lg p-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10 -5z" />
              <path d="M12 12l-2 2 2 2z" />
            </svg>
          </button>
          <button className="bg-yellow-200 rounded-lg p-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20.354c-1.103 0-2.052-.448-2.811-1.188-.759-.74-.813-1.872-.116-2.638l.818-.818c.76-.76.813-1.872.116-2.638-.759-.74-1.708-.812-2.469-.115-1.103 1.103-.448 2.052-1.188 2.811l-.818.818c-.76.76-.813 1.872-.116 2.638.759.74.813 1.872.116 2.638 1.103 1.103 2.052.448 2.811 1.188l.818.818c.76.76.813 1.872.116 2.638.759.74 1.708.812 2.469.115 1.103-1.103.448-2.052 1.188-2.811l.818-.818c.76-.76.813-1.872.116-2.638-.759-.74-.813-1.872-.116-2.638z" />
            </svg>
          </button>
          <button className="bg-yellow-200 rounded-lg p-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20.354c-1.103 0-2.052-.448-2.811-1.188-.759-.74-.813-1.872-.116-2.638l.818-.818c.76-.76.813-1.872.116-2.638-.759-.74-1.708-.812-2.469-.115-1.103 1.103-.448 2.052-1.188 2.811l-.818.818c-.76.76-.813 1.872-.116 2.638.759.74.813 1.872.116 2.638 1.103 1.103 2.052.448 2.811 1.188l.818.818c.76.76.813 1.872.116 2.638.759.74 1.708.812 2.469.115 1.103-1.103.448-2.052 1.188-2.811l.818-.818c.76-.76.813-1.872.116-2.638-.759-.74-.813-1.872-.116-2.638z" />
            </svg>
          </button>
          <button className="bg-yellow-200 rounded-lg p-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20.354c-1.103 0-2.052-.448-2.811-1.188-.759-.74-.813-1.872-.116-2.638l.818-.818c.76-.76.813-1.872.116-2.638-.759-.74-1.708-.812-2.469-.115-1.103 1.103-.448 2.052-1.188 2.811l-.818.818c-.76.76-.813 1.872-.116 2.638.759.74.813 1.872.116 2.638 1.103 1.103 2.052.448 2.811 1.188l.818.818c.76.76.813 1.872.116 2.638.759.74 1.708.812 2.469.115 1.103-1.103.448-2.052 1.188-2.811l.818-.818c.76-.76.813-1.872.116-2.638-.759-.74-.813-1.872-.116-2.638z" />
            </svg>
          </button>
          <button className="bg-yellow-200 rounded-lg p-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20.354c-1.103 0-2.052-.448-2.811-1.188-.759-.74-.813-1.872-.116-2.638l.818-.818c.76-.76.813-1.872.116-2.638-.759-.74-1.708-.812-2.469-.115-1.103 1.103-.448 2.052-1.188 2.811l-.818.818c-.76.76-.813 1.872-.116 2.638.759.74.813 1.872.116 2.638 1.103 1.103 2.052.448 2.811 1.188l.818.818c.76.76.813 1.872.116 2.638.759.74 1.708.812 2.469.115 1.103-1.103.448-2.052 1.188-2.811l.818-.818c.76-.76.813-1.872.116-2.638-.759-.74-.813-1.872-.116-2.638z" />
            </svg>
          </button>
          <button className="bg-yellow-200 rounded-lg p-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20.354c-1.103 0-2.052-.448-2.811-1.188-.759-.74-.813-1.872-.116-2.638l.818-.818c.76-.76.813-1.872.116-2.638-.759-.74-1.708-.812-2.469-.115-1.103 1.103-.448 2.052-1.188 2.811l-.818.818c-.76.76-.813 1.872-.116 2.638.759.74.813 1.872.116 2.638 1.103 1.103 2.052.448 2.811 1.188l.818.818c.76.76.813 1.872.116 2.638.759.74 1.708.812 2.469.115 1.103-1.103.448-2.052 1.188-2.811l.818-.818c.76-.76.813-1.872.116-2.638-.759-.74-.813-1.872-.116-2.638z" />
            </svg>
          </button>
        </div>
        <div className="h-full">
          {/* Content goes here */}
        </div>
      </div>
      <div className="bg-yellow-200 p-4 flex items-center justify-between">
        <div className="flex space-x-4">
          <button className="w-10 h-10 rounded-full bg-pink-500"></button>
          <button className="w-10 h-10 rounded-full bg-pink-500"></button>
          <button className="w-10 h-10 rounded-full bg-pink-500"></button>
          <button className="w-10 h-10 rounded-full bg-pink-500"></button>
          <button className="w-10 h-10 rounded-full bg-pink-500"></button>
          <button className="w-10 h-10 rounded-full bg-pink-500"></button>
        </div>
        <div className="flex space-x-4">
          <button className="w-10 h-10 rounded-full bg-pink-500"></button>
        </div>
      </div>
    </div>
  );
}

export default App;

