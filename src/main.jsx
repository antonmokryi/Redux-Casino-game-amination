import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {router} from "./router.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import {Provider} from "react-redux";
import {store} from "./store.js";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}>
                <MainLayout/>
            </RouterProvider>
        </Provider>
    </StrictMode>,
)
