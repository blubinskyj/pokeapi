import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../componemts/Header/Header"
import NotFound from "../componemts/NotFound/NotFount"
import Home from "../pages/Home/Home"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />

          <Route
            path="/pokemon/:number"
            element={<div>Pokemons Details</div>}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
