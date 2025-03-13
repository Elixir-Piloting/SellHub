import './App.css'
import { Navbar } from './assets/components/Navbar'
import ProductCard from './assets/components/productCard'

import { SearchBar } from './assets/components/searchBar'


function App() {
  return (
    <div>
    <Navbar/>
    <SearchBar/>
    <div className='flex flex-wrap justify-center gap-10 mt-10'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>

    </div>
  )
}

export default App
