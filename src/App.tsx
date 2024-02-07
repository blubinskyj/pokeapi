import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import PokemonList from "./pages/PokemonList/PokemonList"
import PokemonDetails from "./pages/PokemonDetails/PokemonDetails"
import NotFound from "./components/NotFound/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon" element={<Outlet />}>
          <Route index element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
