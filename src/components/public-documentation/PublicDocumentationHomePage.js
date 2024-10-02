import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Use useHistory for React Router v5
import SideBar from "../Sidebar";
import Logo from '../Logo';
import Footer from '../Footer';
import "../css/PublicDocumentationHomePage.css";

function PublicDocumentationHomePage() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const history = useHistory(); // useHistory for programmatic navigation in v5

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  const handleSelectDocumentation = (doc) => {
    // Programmatically navigate to the new URL based on the selected doc's title
    history.push(`/public_documentation/${encodeURIComponent(doc.title_name)}`);
    setSideBarOpen(false); // Optionally close the sidebar
  };

  return (
    <div>
      <Logo />

      <div className="bodyDiv">
        <h2 style={{ paddingBottom: "25px" }}>Public Documentation</h2>
      </div>

      <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} onSelectDocumentation={handleSelectDocumentation} />

      <div className={`aboutBodyDiv ${sidebarOpen ? "blurred" : ""}`}>
        {/* Render default content if no documentation is selected */}
        <p className="p-body">
          This is a space for public documentation.
        </p>
        <p className="p-body">
          Initially, this will house documentation on web development, but it might expand to include other content.
        </p>
        <p className="p-body-small">
          <strong>Have an account with us?</strong> We'll soon be adding a feature to allow our users to create their own documentation; offering 
          a free alternative to Confluence.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default PublicDocumentationHomePage;