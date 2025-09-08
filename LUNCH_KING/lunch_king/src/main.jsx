import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
// PAGES
import ListProductsMap from './pages/ListProductsMap.jsx'
import { ListCommandsMap } from './pages/ListCommandsMap.jsx'
import Products from './pages/Products.jsx'
import Commands from './pages/Commands.jsx'
import Home from './pages/Home.jsx'
import ProductsFilter from './pages/ProductsFilter.jsx'
// CONTEXT - PROVIDER
import { FilterProdProvider } from './Context/FilterProductsContext.jsx'

const routes = createBrowserRouter([ // Mapeamento de rotas***
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/", // Página principal
        element: <Home/>
      },
      {
        path: "/listproducts", // Lista de Produtos -- footer
        element: <ListProductsMap/>
      },
      {
        path: "/products", // tela de Produtos -- nav
        element: <Products/>
      },
      {
        path: "/productsfilter", // tela de Produtos no cardápio rápido
        element: <ProductsFilter/>
      },
      {
        path: "/listcommands", // Lista de comandas -- footer
        element: <ListCommandsMap/>
      },
      {
        path: "/commands", // tela de Comandas -- nav
        element: <Commands/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterProdProvider>
    <RouterProvider router={routes}/>
    </FilterProdProvider>
  </StrictMode>,
)
