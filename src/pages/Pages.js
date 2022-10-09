import {Routes, Route} from "react-router-dom"
import HomePage from "./HomePage"
import Movie from "./Movie"
import SearchResults from "./SearchResults"
import FilteredResults from "./FilteredResults"

const Pages = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:title" element={<Movie />} />
            <Route path="/search/:title" element={<SearchResults />} />
            <Route path="/filtered/:filters" element={<FilteredResults />} />
        </Routes>
    </div>
  )
}

export default Pages