import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faCircle, faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./css/Sidebar.css";

const SideBar = (props) => {
  const [documentationTitles, setDocumentationTitles] = useState([]);
  const [expandedItems, setExpandedItems] = useState({}); // Track expanded state of items
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";

  useEffect(() => {
    fetch("http://localhost:8000/public_documentation/")
      .then((response) => response.json())
      .then((data) => {
        setDocumentationTitles(data);
      })
      .catch((error) => {
        console.error("Error fetching documentation details:", error);
      });
  }, []);

  // Function to toggle expanded state
  const toggleExpand = (titleName, event) => {
    event.stopPropagation(); // Prevents the click event from triggering other actions
    setExpandedItems((prevState) => ({
      ...prevState,
      [titleName]: !prevState[titleName],
    }));
  };

  const handleSelect = (title, event) => {
    event.stopPropagation(); // Prevents the click event from triggering other actions
    props.onSelectDocumentation(title); // Call the callback with the selected documentation
  };

  // Function to get immediate children based on order, stopping when a gap in order is found
  const getImmediateChildren = (parentTitle, parentOrder) => {
    // Sort titles by order to ensure the correct sequence
    const sortedTitles = documentationTitles.sort((a, b) => a.order - b.order);

    const children = [];
    for (const sub of sortedTitles) {
      if (sub.is_child && sub.title === parentTitle && sub.order > parentOrder) {
        // Check if this child's order is directly after the last added child (or parent)
        const lastChildOrder = children.length > 0 ? children[children.length - 1].order : parentOrder;
        if (sub.order === lastChildOrder + 1) {
          children.push(sub);
        } else {
          // Stop processing children when there's a gap in the order
          break;
        }
      }
    }
    return children;
  };

  // Rendering titles and children
  const renderTitles = (titles) => {
    return titles
      .sort((a, b) => a.order - b.order) // Ensure the titles are ordered
      .filter((title) => !title.is_child) // Filter out child titles
      .map((title, index) => (
        <div key={index} className="sidebar-item">
          <div className="sidebar-title">
            {/* Render caret for items with children, and bullet for items without children */}
            {title.has_children ? (
              <span onClick={(e) => toggleExpand(title.title_name, e)} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon
                  icon={expandedItems[title.title_name] ? faCaretDown : faCaretRight}
                  className="sidebar-icon"
                  style={{ fontSize: '10px' }}
                />
              </span>
            ) : (
              <FontAwesomeIcon
                icon={faCircle}
                className="sidebar-icon"
                style={{ fontSize: '5px' }} // Bullet is smaller
              />
            )}

            {/* Clickable Title */}
            <span
              className="sidebar-title-text"
              onClick={(e) => handleSelect(title, e)} // Click to navigate
              style={{ cursor: 'pointer', marginLeft: '10px' }} // Space out the title from the caret or bullet
            >
              {title.title_name}
            </span>
          </div>

          {/* Render sub-titles if expanded and has children */}
          {title.has_children && expandedItems[title.title_name] && (
            <div className="sub-titles">
              {getImmediateChildren(title.title, title.order)
                .map((sub, subIndex) => (
                  <div key={subIndex} className="sidebar-sub-item" onClick={(e) => handleSelect(sub, e)}>
                    <FontAwesomeIcon
                      icon={sub.has_children ? faCaretRight : faCircle}
                      className="sidebar-icon"
                      style={!sub.has_children ? { fontSize: '5px' } : { fontSize: '10px' }} // Smaller bullet for sub-items
                    />
                    {sub.title_name}
                  </div>
                ))}
            </div>
          )}
        </div>
      ));
  };

  return (
    <div className={sidebarClass}>
      <button onClick={props.toggleSidebar} className="sidebar-toggle">
        <FontAwesomeIcon icon={props.isOpen ? faTimes : faBars} style={{ color: "white" }} />
      </button>
      <div className="sidebar-content">{renderTitles(documentationTitles)}</div>
    </div>
  );
};

export default SideBar;