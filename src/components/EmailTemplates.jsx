import React from "react";
import { Link } from "react-router-dom";

function EmailTemplates() {
  const templates = [
    {
      name: "Welcome Email",
      link: "/templates/welcome-email.html",
      previewPath: "/preview/welcome",
    },
    {
      name: "Product Launch",
      link: "/templates/product_launch.html",
      previewPath: "/preview/product_launch",
    },
    {
      name: "Invitation",
      link: "/templates/invitation.html",
      previewPath: "/preview/invitation",
    },
    {
      name: "Password Reset Launch",
      link: "/templates/password_reset.html",
      previewPath: "/preview/password_reset",
    },
    {
      name: "Product offer",
      link: "/templates/product_offer.html",
      previewPath: "/preview/product_offer",
    },
    {
      name: "Reports",
      link: "/templates/report.html",
      previewPath: "/preview/report",
    },
  ];

  return (
    <div>
      <h1>Downloadable Email Templates</h1>
      <ul>
        {templates.map((template, index) => (
          <li key={index}>
            <Link to={template.previewPath}>Preview {template.name}</Link> |
            <a href={template.link} download>
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmailTemplates;
