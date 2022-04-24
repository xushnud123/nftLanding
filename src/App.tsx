import Cards from "./components/cards/cards";
import Comp from "./components/comp/comp";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import NftCard from "./components/nft-card/nft-card";


function App() {
  return (
    <>
      <Header head={false}/>
      <NftCard />
      <Comp />
      <Cards />
      <Header head={true} />
      <Footer />
    </>
  );
}

export default App;
