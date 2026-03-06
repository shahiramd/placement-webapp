export const dashboardData = {
  user: {
    name: "Team",
    greeting: "Good morning",
    message: "Ready to master Java & OS today?"
  },
  widgets: [
    {
      id: 1,
      title: "Java OOPS",
      value: "85%",
      footer: "Polymorphism",
      color: "#fce991"
    },
    {
      id: 2,
      title: "DSA Summary",
      type: "chart",
      footer: "HashMaps",
      color: "#fbcfe8"
    },
    {
      id: 3,
      title: "OS Status",
      type: "bars",
      footer: "Memory",
      color: "#dcfce7",
      stats: [100, 60, 85]
    },
    {
      id: 4,
      title: "Sessions",
      value: "03:45 h",
      footer: "Mock Practice",
      color: "#dbeafe"
    }
  ],
  upcoming: [
    { id: 1, time: "10:00 AM", title: "Java Mock Interview" }
  ]
};