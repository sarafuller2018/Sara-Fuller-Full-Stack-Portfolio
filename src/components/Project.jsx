/* eslint-disable react/prop-types */
function Project(props) {
  console.log(props);

  return (
      <div className={"card card"+props.id}>
          <div className="card-body text-center hidden">
            <a href={props.deployedApp} className="stretched-link">{props.title}</a>
            <p>{props.description}</p>
            <a href={props.GitHub}><img src="/GitHub-Mark.png" className="portfolio-card-img"/></a>
        </div>
      </div>
  )
}

export default Project;