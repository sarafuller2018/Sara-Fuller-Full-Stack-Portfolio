import "../styles/Portfolio.css";
import Project from "../components/Project";

const projects = [
  {
    id: 1,
    title: "Vet-Tech",
    deployedApp: "https://vet-tech-app-57f56dec96cd.herokuapp.com/",
    GitHub: "https://github.com/Efren96/vet-tech-app"
  },
  {
    id: 2,
    title: "Employee-Tracker",
    deployedApp: "https://drive.google.com/file/d/1OaVzTpA6xZdGNphXx4MUI1wYgx4VOcwv/view?usp=sharing",
    GitHub: "https://github.com/sarafuller2018/Employee-Tracker"
  },
  {
    id: 3,
    title: "High-Performance-E-Commerce-Backend-Solution",
    deployedApp: "https://drive.google.com/file/d/1NENq3m8nHM0rbGeBEqDb0APXqDxPvvIq/view",
    GitHub: "https://github.com/sarafuller2018/High-Performance-E-Commerce-Backend-Solution"
  },
  {
    id: 4,
    title: "Social-Network-API",
    deployedApp: "https://drive.google.com/file/d/1MMpPViNRW_zSNo4pUTZn19f5TBLZMg-8/view?usp=sharing",
    GitHub: "https://github.com/sarafuller2018/Social-Network-API"
  },
  {
    id: 5,
    title: "Text-Editor-App",
    deployedApp: "https://text-editor-app-7ozz.onrender.com/",
    GitHub: "https://github.com/sarafuller2018/Text-Editor-App"
  },
  {
    id: 6,
    title: "Weather-Dashboard",
    deployedApp: "https://sarafuller2018.github.io/Weather-Dashboard/",
    GitHub: "https://github.com/sarafuller2018/Weather-Dashboard"
  }
];

export default function Portfolio() {
  return (
    <div className="portfolio-div">
      <h1>Portfolio</h1>
      <div className="row">
        {projects.map((item) =>
          <Project title={item.title} id={item.id} key={item.id} GitHub={item.GitHub} deployedApp={item.deployedApp} />
        )}
      </div>
    </div>
  );
}
