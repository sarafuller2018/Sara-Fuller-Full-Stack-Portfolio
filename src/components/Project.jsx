/* eslint-disable react/prop-types */
function Project(props) {
  console.log(props);

  return (
      <div className={"card card"+props.id}>
        <div >
          <div className="card-body">
            <h5><a href={props.deployedApp} className="stretched-link">{props.title}</a></h5>
            <a href={props.GitHub}><img src="/GitHub-Mark.png" className="portfolio-card-img"/></a>
          </div>
        </div>
      </div>
  )
}

export default Project;