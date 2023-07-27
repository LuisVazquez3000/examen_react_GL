
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root,{loader as rootLoader,action as rootAction} from './routes/root';
import ErrorPage from "./error-page";
import Contact,{loader as contactLoader, action as contactAction } from "./routes/contact";
import EditContact, {action as EditAction} from './routes/edit'
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      errorElement:<ErrorPage/>,
      loader:rootLoader,
      action:rootAction,
      children:[
        { index: true, element: <Index /> },
        {
          path:"contacts/:contactId",
          element:<Contact/>,
          loader:contactLoader,
          action:contactAction
        },
        
        {
          path:"contacts/:contactId/edit",
          element:<EditContact/>,
          loader:contactLoader,
          action:EditAction
        },
        {
          path: "contacts/:contactId/destroy",
          action: destroyAction,
          errorElement:<div>Oops!! there was an error. </div>
        },
      ]
      
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>    
    </>
  )
}

export default App
