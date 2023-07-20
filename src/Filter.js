export default function Filter({ filter, setFilter }) {
  const handleThemeChange = (e) => {
    const { name, checked } = e.target
    setFilter((prev) => ({
      ...prev,
      theme: {
        ...prev.theme,
        [name]: checked,
      },
    }))
  }

  const handleFillingChange = (e) => {
    const { name, checked } = e.target
    setFilter((prev) => ({
      ...prev,
      filling: {
        ...prev.filling,
        [name]: checked,
      },
    }))
  }

  const handleAllergensChange = (e) => {
    const { name, checked } = e.target
    setFilter((prev) => ({
      ...prev,
      allergens: {
        ...prev.allergens,
        [name]: checked,
      },
    }))
  }
  const handleMaxPriceChange = (e) => {
    const { value } = e.target
    setFilter((prev) => ({
      ...prev,
      maxPrice: value,
    }))
  }
  

  

  

  return (
    <div id="filter-card" className="card">
      <div className="filter-card-wrapper">
        <div className="card-body filter-body">
          <h2 className="card-title">Filter</h2>
          <p className="filter-names">Theme</p>
          <div className="options">
            <div className="form-check">
              <input
                onChange={handleThemeChange}
                type="checkbox"
                name="wedding"
                className="form-check-input"
                value=""
                id="wedding"
              />
              <label className="form-check-label" htmlFor="wedding">
                Wedding
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={handleThemeChange}
                name="birthday"
                type="checkbox"
                className="form-check-input"
                value=""
                id="birthday"
              />
              <label className="form-check-label" htmlFor="birthday">
                Birthday
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={handleThemeChange}
                name="anniversary"
                type="checkbox"
                className="form-check-input"
                value=""
                id="anniversary"
              />
              <label className="form-check-label" htmlFor="anniversary">
                Anniversary
              </label>
            </div>
          </div>
          <p className="filter-names">Filling</p>
          <div className="options">
            <div className="form-check">
              <input
                name="chocolate"
                onChange={handleFillingChange}
                type="checkbox"
                className="form-check-input"
                value=""
                id="chocolate"
              />
              <label className="form-check-label" htmlFor="chocolate">
                Chocolate
              </label>
            </div>
            <div className="form-check">
              <input
                name="vanilla"
                onChange={handleFillingChange}
                type="checkbox"
                className="form-check-input"
                value=""
                id="vanilla"
              />
              <label className="form-check-label" htmlFor="vanilla">
                Vanilla
              </label>
            </div>
            <div className="form-check">
              <input
                name="strawberry"
                onChange={handleFillingChange}
                type="checkbox"
                className="form-check-input"
                value=""
                id="strawberry"
              />
              <label className="form-check-label" htmlFor="strawberry">
                Strawberry
              </label>
            </div>
          </div>

          <p className="filter-names">Allergens</p>
          <div className="options">
            <div className="form-check">
              <input
                name="gluten"
                onChange={handleAllergensChange}
                type="checkbox"
                className="form-check-input"
                value=""
                id="gluten"
              />
              <label className="form-check-label" htmlFor="gluten">
                Gluten
              </label>
            </div>
            <div className="form-check">
              <input
                name="nuts"
                onChange={handleAllergensChange}
                type="checkbox"
                className="form-check-input"
                value=""
                id="nuts"
              />
              <label className="form-check-label" htmlFor="nuts">
                Nuts
              </label>
            </div>
            <div className="form-check">
              <input
                name="dairy"
                onChange={handleAllergensChange}
                type="checkbox"
                className="form-check-input"
                value=""
                id="dairy"
              />
              <label className="form-check-label" htmlFor="dairy">
                Dairy
              </label>
            </div>
          </div>

          <label htmlFor="customRange2" className="form-label price-label">
            Price Limit
          </label>
          <input
            onChange={handleMaxPriceChange}
            value={filter.maxPrice}
            type="range"
            className="form-range"
            min="100"
            max="700"
            id="customRange2"
          />

          <div className="row price-inputs justify-content-center">

            
          

          <div className="col-6">
          <input
            onChange={handleMaxPriceChange}
            value={filter.maxPrice}
            type="number"
            className="form-control"
            min="100"
            max="900"
            id="maxPriceInput"
            placeholder="Maximum Price"
          />

          </div>

          

          </div>

          

          

          

          
        </div>
      </div>
    </div>
  )
}
