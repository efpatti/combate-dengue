import Proliferacao from "./sections/Proliferacao";
import Dengue from "./sections/Dengue";
import Saude from "./sections/SaudePublica/index";
import Conscientização from "./sections/Conscientização";
import NavBarComp from "./components/NavBar";
function App() {
  return (
    <>
      <NavBarComp />
      <Dengue />
      <Proliferacao />
      <Saude />
      <Conscientização />
    </>
  );
}
export default App;
