

function Project(props) {
  console.log(props);

    return (
    <>
    <div className={"card"+props.id}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </>
    );
}

export default Project;