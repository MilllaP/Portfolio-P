const projects = [
  {
    title: "Control of Electric Boiler",
    overview: "Controls an electric boiler via a Shelly device",
    description:
      "This project focuses on optimizing the control of electric boiler heating elements by selecting the most cost-effective electricity hours. The heating schedule is adjusted based on real-time temperature and weather data. Initially, the system will simulate control and later integrate real-time data to improve efficiency.",
    for: "Karelia University of Applied Sciences & Botania",
    by: "Group assignment; Developer",
    technologies: [
      "JavaScript ",
      "Node.js",
      "React.js",
      "Vite",
      "Express.js",
      "TypeScript",
      "ESLint",
      "SQLite",
      "CORS",
      "Node-cron",
      "APIs",
      "Shelly",
    ],
    img: "src/assets/images/BoilerControl.png",
    video: "src/assets/videos/BoilerControl.mp4",
  },
  {
    title: "TiimiTaikuri App",
    overview: "Helps lecturers create project groups",
    description:
      "This tool was designed to help lecturers automate the process of forming project groups. It creates groups based on student preferences and predefined role criteria. The application supports customizable questionnaires for gathering student data, auto-generates project groups, and allows teachers to make adjustments as needed, ensuring an optimal grouping process.",
    for: "Karelia University of Applied Sciences",
    by: "Group assignment; Scrum Master",
    technologies: ["C#", ".NET 8", "WPF", "Open XML", "WebView2"],
    img: "src/assets/images/TiimiTaikuri.png",
    video: "src/assets/videos/TiimiTaikuri.mp4",
  },
  {
    title: "Invoice App",
    overview: "App for managing invoices",
    description:
      "Key features include the ability to create multi-line item invoices where users can specify products, their quantities, and prices. It also supports logging time spent on work and its associated costs, with automatic total calculation based on line items. Each invoice includes a unique identifier, billing and payer address details, date, due date, and optional notes, all of which are editable to accommodate changes (e.g., updating recipient information).",
    for: "Assignment project",
    by: "Individual project for learning purposes",
    technologies: ["C#", ".NET 6.", "WPF", "MySQL"],
    img: "src/assets/images/InvoiceApp.png",
    video: "src/assets/videos/InvoiceApp.mp4",
  },
  {
    title: "Weather App",
    overview: "Android app for weather forecasts",
    description:
      "The app fetches weather forecasts from the Open-Meteo service and locates city coordinates using the Nominatim service. Users can search for a weather forecast by entering a city name in the search field. The application displays the current weather and the forecast for the next 48 hours, with the time automatically converted to the local time in the Open-Meteo request.",
    for: "Assignment project",
    by: "Individual project for learning purposes",
    technologies: [
      "Kotlin",
      "Android SDK",
      "Jetpack Compose",
      "Retrofit",
      "Open-Meteo API",
      "Nominatim API",
    ],
    img: "src/assets/images/WeatherApp.png",
    video: "src/assets/videos/WeatherApp.mp4",
  },
];

export default projects;
