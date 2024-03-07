import Proliferacao from "./sections/Proliferacao";
import Dengue from "./sections/Dengue";
import Saude from "./sections/SaudePublica/index";
import Conscientização from "./sections/Conscientização";
function App() {
  return (
    <>
      <Dengue />
      <Proliferacao />
      <Saude />
      <Conscientização />
    </>
  );
}
export default App;
