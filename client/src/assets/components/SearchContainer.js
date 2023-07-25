import { FormRow, FormRowSelect } from "."
import { useAppContext } from "../../context/appContext"
import Wrapper from "../../assets/wrappers/SearchContainer"

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    handleChange,
    clearFilters,
  } = useAppContext()

  const handleSearch = (e) => {
    if (isLoading) return
    handleChange({ 
      name: e.target.name, 
      value: e.target.value 
    })

  }

  function handleSelect(event) {
    const name = event.target.name
    const value = event.target.value
    handleChange({ name, value })
    // console.log(name , value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    clearFilters()
  }
  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            type='text'
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          <div className="form-group">
            <span className="form-label">Event Type</span>

            <select 
              className="form-select" 
              name='searchType' 
              value={searchType}
              onChange={handleSelect}
            >
              <option value="all">  all  </option>
              <option value="bDayParty">  Birthday Party  </option>
              <option value="corporate">  Corporate Event </option>
              <option value="gReveal">    Gender Reveal   </option>
              <option value="baptismal">  Baptismal Event </option>
              <option value="kiddieParty">Kiddie Party    </option>
              <option value="debut">      Debut           </option>
              <option value="wedding">    Wedding         </option>
            </select>
            {/* <span className="select-arrow"></span> */}
          </div>

          <FormRowSelect
            labelText="Status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", "accepted", "pending", "cancelled"]}
          />

          <FormRowSelect
            labelText="sort"
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger" 
            disabled={isLoading} 
            onClick={handleSubmit}>
              clear Values
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer