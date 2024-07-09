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
            {name: "Home"},
          ]
        },
        {
          name: "Client Management",
          children: [
            { name: "Clients" },
            { name: "Manage Client" }
          ]
        },
        {
          name: "Policy Management",
          children: [
            { name: "Policies" },
            { name: "Manage Policy" }
          ]
        },
        {
          name: "Billing Management",
          children: [
            { name: "Billing history" },
            { name: "Manage Invoice" }
          ]
        },
        {
          name: "Support & Communication",
          children: [
            { name: "Support ticket" },
            { name: "Knowledge Base" },
            { name: "FAQ" }
          ]
        },
        {
          name: "Audit & Log Management",
          children: [
            { name: "Activity Log" }
          ]
        },
        {
          name: "Others",
          children: [
            { name: "Notification" },
            { name: "How to use" },
            { name: "Logout" }
          ]
        }
      ]
    }
  };
  
  export default data;
  