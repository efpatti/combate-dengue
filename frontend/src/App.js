import Proliferacao from "./sections/Proliferacao";
import Dengue from "./sections/Dengue";
import Saude from "./sections/SaudePublica/index";
import NavBarComp from "./components/NavBar"
import Conscientizacao from "./sections/Conscientização"
import Sucata from "./sections/Sucata"
function App() {
  return (
    <>
      <NavBarComp />
      <Dengue />
      <Proliferacao />
      <Sucata />
      <Saude />
      <Conscientizacao />
    </>
  );
}
export default App;
