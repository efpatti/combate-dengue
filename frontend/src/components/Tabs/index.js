import React, { useState } from "react";
import "./Tabs.css"
function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  let content;

  React.Children.forEach(children, (child) => {
    if (child.props.label === activeTab) {
      content = child.props.children;
    }
  });

  return (
    <div>
      <TabButtons activeTab={activeTab} changeTab={changeTab}>
        {children}
      </TabButtons>
      <div className="tab-content">{content}</div>
    </div>
  );
}

function TabButtons({ children, activeTab, changeTab }) {
  return (
    <div className="tab-buttons">
      {React.Children.map(children, (child) => (
        <button
          className={child.props.label === activeTab ? "active" : ""}
          onClick={() => changeTab(child.props.label)}
        >
          {child.props.label}
        </button>
      ))}
    </div>
  );
}

function Tab(props) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

export { Tabs, Tab };
