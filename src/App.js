import Navbar from './components/Navbar'
import Header from './components/Header'
import ItemsFilter from './components/itemsFilter/ItemsFilter'
import Sidebar from './components/cart/sidebar/Sidebar'
import { discount } from './components/assets/data'
import { popular } from './components/assets/data'
import Footer from './components/Footer'
import Popular from './components/popular/Popular'
import Special from './components/Special'

const App = () => {

  return (
    <>
      <Navbar />
      <Sidebar data={discount} />
      <Header />
      <ItemsFilter />
      <Special />
      <Popular data={popular} />
      <Footer />

    </>
  )

}


export default App;