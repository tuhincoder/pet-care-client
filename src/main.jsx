import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route.jsx'

import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify'


const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div><Toaster /></div>
      <ToastContainer theme='dark' />
      <HelmetProvider>
        <AuthProvider>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router}></RouterProvider>
          </div>

        </AuthProvider>
      </HelmetProvider>
<<<<<<< HEAD

    </QueryClientProvider>

=======
<<<<<<< HEAD

    </QueryClientProvider>

=======
    </QueryClientProvider>
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
  </React.StrictMode>,
)
