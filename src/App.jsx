import "./App.css";
import BlockFourData from "./components/BlockFourData";
import BlockOneData from "./components/BlockOneData";
import BlockThreeData from "./components/BlockThreeData";
import BlockTwoData from "./components/BlockTwoData";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BlockOneData />
      <BlockTwoData />
      <BlockThreeData />
      <BlockFourData />
      <Footer />
    </div>
  );
};

export default App;
