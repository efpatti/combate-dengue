import TabsDengue from "./Elements/TabsDengue"
import Banner from "./Elements/Banner"
import "./Dengue.css";
function Dengue() {
  return (
    <div className="bg-semi bg-d" id="home">
      <Banner />
      <TabsDengue />
    </div>
  )
}

export default Dengue