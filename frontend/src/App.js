import Proliferacao from "./sections/Proliferacao";
import Dengue from "./sections/Dengue";
import Saude from "./sections/SaudePublica/index";
import Sucata from "./sections/Sucata/index";

function App() {
  return (
    <>
      <Dengue />
      <Proliferacao />
      <Sucata />
      <Saude />
    </>
  );
}
export default App;
