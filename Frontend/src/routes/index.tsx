import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import App from "../App"
import PrivateRoutes from "../utils/privateRoutes"
import LandingPage from "../pages/LandingPage"
import Login from "../pages/users/Login"


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route index={true} path='/' element={<LandingPage user={"Amal"} />} />
        <Route path="" element={<PrivateRoutes />}>
          <Route path='/login' element={<Login />} />
        </Route>
      </Route>
    </>
  )
)