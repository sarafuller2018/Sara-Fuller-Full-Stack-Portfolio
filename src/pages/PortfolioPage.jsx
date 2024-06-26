import "../styles/Portfolio.css";
import Project from "../components/Project";

const projects = [
  {
    id: 1,
    title: "Vet-Tech",
    deployedApp: "https://vet-tech-app-57f56dec96cd.herokuapp.com/",
    GitHub: "https://github.com/Efren96/vet-tech-app",
    description: "The Vet-Tech application allows users (vets) to securely store and maintain pet and owner information. Demo username is user@vettech.com and demo password is BarkMeow123"
  },
  {
    id: 2,
    title: "Employee-Tracker",
    deployedApp: "https://drive.google.com/file/d/1OaVzTpA6xZdGNphXx4MUI1wYgx4VOcwv/view?usp=sharing",
    GitHub: "https://github.com/sarafuller2018/Employee-Tracker",
    description: "This is an application designed to allow users view and/or edit the departments, roles, and employees within their company."
  },
  {
    id: 3,
    title: "High-Performance-E-Commerce-Backend-Solution",
    deployedApp: "https://drive.google.com/file/d/1NENq3m8nHM0rbGeBEqDb0APXqDxPvvIq/view",
    GitHub: "https://github.com/sarafuller2018/High-Performance-E-Commerce-Backend-Solution",
    description: "This is an application designed to allow an internet retailer to persist their data and organize and query the data using sequelize."
  },
  {
    id: 4,
    title: "Social-Network-API",
    deployedApp: "https://drive.google.com/file/d/1MMpPViNRW_zSNo4pUTZn19f5TBLZMg-8/view?usp=sharing",
    GitHub: "https://github.com/sarafuller2018/Social-Network-API",
    description: "This is an application designed to create an API that allows data to persist on a social media network. The API allows CRUD operations for users, friends, thoughts, and reactions. It stores the information as it is edited."
  },
  {
    id: 5,
    title: "codeCave",
    deployedApp: "https://codecave.onrender.com/",
    GitHub: "https://github.com/sarafuller2018/codeCave",
    description: "codeCave is a niche social website for web developers who are actively working on projects. It is designed with collaboration in mind and focuses on allowing developers of all fields and interests to complete projects togther for mutual benefit. Developers can sign-up to create new projects or find work from other users. They will then be able to comment and/or contribute on other users' projects."
  },
  {
    id: 6,
    title: "Weather-Dashboard",
    deployedApp: "https://sarafuller2018.github.io/Weather-Dashboard/",
    GitHub: "https://github.com/sarafuller2018/Weather-Dashboard",
    description: "This is a website designed to pull current and future weather conditions for a given city."
  }
];

export default function Portfolio() {
  return (
    <div className="portfolio-div d-flex">
      <div className="row">
      <h1>Work Samples</h1>
        {projects.map((item) =>
          <Project title={item.title} id={item.id} key={item.id} GitHub={item.GitHub} deployedApp={item.deployedApp} description={item.description}/>
        )}
      </div>
      </div>
  );
}
