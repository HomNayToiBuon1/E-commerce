import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ListProd from './components/ListProd.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// ReactDOM.createRoot(document.getElementById('list-prod')!).render(
//   <React.StrictMode>
//      <ListProd />
//   </React.StrictMode>,
//  )
