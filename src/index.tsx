import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, {Suspense} from "react";
import PageOne from "./pages/PageOne/PageOne";
import {LazyAbout} from "./pages/About/About.lazy";
import {LazyShop} from "./pages/Shop/Shop.lazy";

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found')
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/about',
        element: <Suspense fallback={<div>Loader...</div>}><LazyAbout /></Suspense>
      },
      {
        path: '/shop',
        element: <Suspense fallback={<div>Loader...</div>}><LazyShop /></Suspense>
      }
    ]
  },
  {
    path: "one",
    element: <PageOne />,
  }
]);

const container = createRoot(root);
container.render(<RouterProvider router={router} />)
