import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import PokemonList from "./pages/PokemonList/PokemonList"
import PokemonDetails from "./pages/PokemonDetails/PokemonDetails"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon" element={<Outlet />}>
          <Route index element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="*" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
