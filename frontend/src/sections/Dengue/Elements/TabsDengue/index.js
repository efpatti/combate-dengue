import React from "react";
import { Tabs, Tab } from "../../../../components/Tabs"
import Api from "./Api"
import Sintomas from "./Sintomas"
import OqueE from "./OqueE";

function TabsDengue() {
  return (
    <Tabs className="bg-d">
      <Tab label="O que é dengue">
        <OqueE />
      </Tab>
      <Tab label="Sintomas">
        <Sintomas />
      </Tab>
      <Tab label="Casos">
        <Api />
      </Tab>
    </Tabs>
  );
}

export default TabsDengue;
