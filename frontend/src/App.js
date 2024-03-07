import Proliferacao from "./sections/Proliferacao";
import Dengue from "./sections/Dengue";
import Saude from "./sections/SaudePublica/index";
function App() {
  return (
    <>
      <NavBarComp />
      <Dengue />
      <Proliferacao />
      <Saude />
    </>
  );
}
export default App;
