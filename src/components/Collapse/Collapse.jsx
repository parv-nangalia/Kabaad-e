import React, { useState } from "react";

import "./Collapse.css";

const Collapse = ({ index, component }) => {
  const [isCollapsed, setIsCollapsed] = useState({});

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div className="collapsible-header" key={index} onClick={toggleCollapse}>
        <span>Click to expand/collapse</span>
        <div className={`arrow ${isCollapsed ? "collapsed" : ""}`}>▶️</div>
      </div>
      <div className={`collapsible-content ${isCollapsed ? "collapsed" : ""}`}>
        {component}
        {/* <Itemdetails
            index={index}
            item={item.key}
            //savedetails={() => savedetails(index)}.  onClick={decrement(item.key)}
            // displayForm={displayform}               onClick={increment(item.key)}
            inputValues={inputValues[item.key]}
            onFormSubmit={handleFormSubmit}
        /> */}
      </div>
    </div>
  );
};

export default Collapse;
