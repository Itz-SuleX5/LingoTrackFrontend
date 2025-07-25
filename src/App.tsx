import { useState } from 'react'
import reactLogo from './assets/react.svg'
import tailwindLogo from './assets/tailwind.svg'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gray-900 text-gray-100">
      <div className="flex items-center justify-center space-x-8">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react h-24 w-24" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src={typescriptLogo} className="logo h-24 w-24" alt="TypeScript logo" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img src={tailwindLogo} className="logo h-24 w-24" alt="Tailwind logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold mt-8">Vite + React + TypeScript + Tailwind 4</h1>
      <div className="card bg-gray-800 p-6 rounded-lg shadow-md mt-8">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus://ring-blue-400 focus:ring-opacity-75"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-400">
          Edit <code className="bg-gray-700 px-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs mt-8 text-gray-500">
        Click on the logos to learn more
      </p>
    </div>
  )
}

export default App
