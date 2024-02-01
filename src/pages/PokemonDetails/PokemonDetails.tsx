import { useParams } from "react-router-dom"

const PokemonDetails = () => {
  const { name } = useParams()
  return (
    <div className="item-page">
      <h1>{name}</h1>
      {/*<img src={} alt={name} />*/}
      {/*<div>*/}
      {/*  <h2>Вміння:</h2>*/}
      {/*  <ul>*/}
      {/*    {itemData.abilities.map((ability, index) => (*/}
      {/*      <li key={index}>{ability}</li>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <h2>Типи:</h2>*/}
      {/*  <ul>*/}
      {/*    {itemData.types.map((type, index) => (*/}
      {/*      <li key={index}>{type}</li>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </div>
  )
}

export default PokemonDetails
