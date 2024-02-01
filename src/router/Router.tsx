import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../componemts/Header/Header"
import NotFound from "../componemts/NotFound/NotFount"
import Home from "../pages/Home/Home"
import PokemonDetails from "../pages/PokemonDetails/PokemonDetails"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
