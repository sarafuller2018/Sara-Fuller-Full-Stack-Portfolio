import "../styles/Resume.css"

export default function Resume() {
  return (
    <div className="resume-div">
      <h1>Resume</h1>
      <p>
        You can find a PDF version of my resume <a href="/files/Sara-Fuller-Resume-2024.pdf">here</a>.
      </p>

      <div className="d-inline-flex justify-content-center w-100">
        <div className="card p-2 mx-2">
          <div className="card-body">
            <h2>Frontend Proficiencies</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>

        <div className="card p-2 mx-2">
          <div className="card-body">
            <h2>Backend Proficiencies</h2>
            <ul>
              <li>APIs</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>mySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>Progressive Web Applications (PWAs)</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
