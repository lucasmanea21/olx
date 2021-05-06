import CategoriesSection from '../components/Categories/CategoriesSection';
import Footer from '../components/Footer/Footer';
import CautariInfo from '../components/InfoSections/CautariInfo';
import InfoSection from '../components/InfoSections/OlxAfaceri';
import OlxInfo from '../components/InfoSections/OlxInfo';
import Navbar from '../components/Navbar/Navbar'
import ProductSection from '../components/Products/ProductSection';
import SearchbarSection from '../components/SearchBar/SearchbarSection';

function Home() {
  return (
    <>
      <Navbar />
      <SearchbarSection />
      <CategoriesSection />
      <ProductSection />
      <InfoSection />
      <OlxInfo />
      <CautariInfo />
      <Footer />
    </>
  );
}

export default Home;