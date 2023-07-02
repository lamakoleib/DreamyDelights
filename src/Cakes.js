import Card from "./Card"
import Filter from "./Filter"

import { cakeData } from "./cakeData"

import { useState } from "react"
import { useEffect } from "react"

export default function Cakes() {
  const cakes = cakeData.cakes
  const [filteredCakes, setFilteredCakes] = useState([])
  const [filter, setFilter] = useState({
    theme: {
      wedding: false,
      birthday: false,
      anniversary: false,
    },
    filling: {
      chocolate: false,
      vanilla: false,
      strawberry: false,
    },
    allergens: {
      gluten: false,
      nuts: false,
      dairy: false,
    },
    maxPrice: 1000,
  })

  useEffect(() => {
    setFilteredCakes(cakes)
  }, [cakes])

  useEffect(() => {
    const { wedding, birthday, anniversary } = filter.theme
    const filterCategory =
      (wedding ? "wedding" : "") +
      (birthday ? "birthday" : "") +
      (anniversary ? "anniversary" : "")

    const { chocolate, vanilla, strawberry } = filter.filling
    const fillingFilter =
      (chocolate ? "chocolate" : "") +
      (vanilla ? "vanilla" : "") +
      (strawberry ? "strawberry" : "")

    const { gluten, nuts, dairy } = filter.allergens

    var allergensFilter =
      (gluten ? "gluten," : "") + (nuts ? "nuts," : "") + (dairy ? "dairy" : "")

    if (allergensFilter.length <= 1) {
      allergensFilter = []
    } else {
      allergensFilter = allergensFilter.split(",")
    }
    const filtered = cakes.filter((cake) => {
      return (
        (filterCategory.length <= 1
          ? true
          : filterCategory.includes(cake.category)) &&
        (fillingFilter.length <= 1
          ? true
          : fillingFilter.includes(cake.filling)) &&
        (allergensFilter.length === 0
          ? true
          : !cake.allergens.some((allergen) =>
              allergensFilter.includes(allergen)
            )) &&
        cake.price <= filter.maxPrice
      )
    })
    setFilteredCakes(filtered)
  }, [filter, cakes])

  return (
    <div className="cake-content">
      <div className="container text-center">
        <h1>Explore Sweet Creations</h1>
        <h6>
          Choose a base model and request to get it customized to your liking!
        </h6>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 filter-wrapper">
            <Filter filter={filter} setFilter={setFilter} />
          </div>
          <div className="col-lg-1 space-wrapper"></div>
          <div className="col-lg-7 cards-wrapper text-center">
            {filteredCakes.map((cake) => {
              const cakeImage = require(`./cakegallery/${cake.img}`)
              return (
                <Card
                  key={cake.id}
                  img={cakeImage}
                  title={cake.title}
                  desc={cake.description}
                  price={cake.price}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
