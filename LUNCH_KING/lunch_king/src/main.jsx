import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import ListProductsMap from './pages/ListProductsMap.jsx'
import Products from './pages/Products.jsx'
import Home from './pages/Home.jsx'
import ProductsFilter from './pages/ProductsFilter.jsx'
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
        path: "/productsfilter", // tela de Produtos no cardápio rápido-- nav
        element: <ProductsFilter/>
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
