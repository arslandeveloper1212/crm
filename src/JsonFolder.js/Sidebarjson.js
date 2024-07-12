const data = {
  top: {
    logo: {
      leftText: "Broker",
      rightText: "Unknown",
      link: "https://example.com/logo.png"
    }
  },

  home: {
    folders: [
      {

        children:[
          {
            name: "Home",
            link: "/" // Link to the home page
          }
        ]
       
      },
      {
        // name: "Client Management",
        children: [
          { name: "Manage Client", link: "/dashboard-customer" }
        ]
      },
      {
        // name: "Policy Management",
        children: [
          { name: "Policies", link: "/policy-dashboard" },
          // { name: "Manage Policy", link: "/manage-policy" }
        ]
      },
      {
        // name: "Billing Management",
        children: [
          { name: "Billing history", link: "/billing-dashboard" },
          // { name: "Manage Invoice", link: "#" }
        ]
      },
      {
        // name: "Support & Communication",
        children: [
          { name: "Support ticket", link: "/support-dashboard" },
          { name: "Knowledge Base", link: "/knowledge-base-faq" },
          { name: "FAQ", link: "/knowledge-base-accordion" }
        ]
      },
      {
        // name: "Audit & Log Management",
        children: [
          { name: "Activity Log", link: "/activity-log" }
        ]
      },
      {
        // name: "Others",
        children: [
          { name: "Notification", link: "#" },
          { name: "How to use", link: "/create-customer" },
          { name: "Logout", link: "#" }
        ]
      }
    ]
  }
};

export default data;
