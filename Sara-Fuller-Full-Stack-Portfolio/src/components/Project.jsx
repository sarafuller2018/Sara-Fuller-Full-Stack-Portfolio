/* eslint-disable react/prop-types */
function Project(props) {
  console.log(props);

  return (
    <>
    
      <div className="card media position-relative">
        <div className={"card" + props.id}>
          <div className="card-body">
            <h5><a href={props.deployedApp} className="stretched-link">{props.title}</a></h5>
            <a href={props.GitHub}><img src="../src/assets/GitHub-Mark.png" className="portfolio-card-img"/></a>
          </div>
        </div>
      </div>
  
    </>
  );
}

export default Project;