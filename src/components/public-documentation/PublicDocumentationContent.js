import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import SideBar from "../Sidebar";
import Logo from '../Logo';
import Footer from '../Footer';

import "../css/PublicDocumentationContent.css";

const PublicDocumentationContent = () => {
        const { title_name } = useParams();
        const history = useHistory();
        const [sidebarOpen, setSideBarOpen] = useState(false);
        const [content, setContent] = useState(null);
        const [documentationData, setDocumentationData] = useState(null);

        const handleViewSidebar = () => {
                setSideBarOpen(!sidebarOpen);
        };

        const handleSelectDocumentation = (doc) => {
                history.push(`/public_documentation/${encodeURIComponent(doc.title_name)}`);
                setSideBarOpen(false);
        };

  useEffect(() => {
    // Fetch documentation based on the title_name
    fetch(`http://localhost:8000/public_documentation/${encodeURIComponent(title_name)}/`)
      .then((response) => response.json())
      .then((data) => {
        setContent(data.content);
        setDocumentationData(data);
      })
      .catch((error) => {
        console.error("Error fetching documentation content:", error);
      });
  }, [title_name]);

  useEffect(() => {
    const container = document.getElementById('documentation-container');
    if (container) {
      // Apply custom styling to HTML elements inside the container
      const paragraphs = container.querySelectorAll('p');
      paragraphs.forEach((paragraph) => {
        paragraph.classList.add('p-body-medium');
      });
      const headers3 = container.querySelectorAll('h3');
      headers3.forEach((header) => { header.classList.add('PublicDocumentationContent__h3') });
      const headers4 = container.querySelectorAll('h4');
      headers4.forEach((header) => { header.classList.add('PublicDocumentationContent__h4') });
      const unorderedLists = container.querySelectorAll("ul");
      unorderedLists.forEach((unorderedList) => {
        unorderedList.classList.add("list-small");
      });
      const orderedLists = container.querySelectorAll("ol");
      orderedLists.forEach((orderedList) => {
        orderedList.classList.add("list-medium");
      });
      const anchors = container.querySelectorAll("a");
      anchors.forEach((anchor) => {
        anchor.classList.add("anchor");
      });
      const codeBlocks = container.querySelectorAll("code");
      codeBlocks.forEach((block) => {
        block.classList.add("language-javascript");
        block.classList.add("p-body-medium");
      });
    }
  }, [content]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

        return (
                <div>

                        <Logo />

                        <div className="bodyDiv">
                                <h2 style={{ paddingBottom: "25px" }}>Public Documentation</h2>
                        </div>

                        <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} onSelectDocumentation={handleSelectDocumentation} />

                        <div id="documentation-container" className="documentation-content aboutBodyDiv">
                                <h2 style={{ color: "#1b2b44", paddingTop: "25px", paddingBottom: "40px", fontWeight: "800" }}>{decodeURIComponent(title_name)}</h2>
                                {documentationData ? (
                                        <>
                                                <p className='p-body-xsmall'><i>Created on: {formatDate(documentationData.created_at)}</i></p>
                                                <p className='p-body-xsmall' style={{ paddingBottom: "30px" }}><i>Last Updated: {formatDate(documentationData.updated_at)}</i></p>
                                        </>
                                ) : (
                                        <p className="p-body-medium">Loading dates...</p>
                                )}
                                        {content ? (
                                        <div dangerouslySetInnerHTML={{ __html: content }} />
                                ) : (
                                        <p className="p-body-medium">Loading content...</p>
                                )}
                        </div>

                        <Footer />

                </div>
        );
};

export default PublicDocumentationContent;