import { Link } from "react-router-dom";
const AwarenessPrograms = () => {
    return ( 
        <div id="AwarenessPrograms" style={{ paddingTop: '65px' }}>
            <div className="container p-5">
                <h1 className="text-center mb-4">Awareness Programs</h1>
                <div className="row justify-content-center" style={{ width: "auto" }}>
                {/* Career Awareness Program Card */}
                <div className="col-md-6 mb-4">
                    {/* <Link to="/CareerAwarenessProgram" className="text-decoration-none"> */}

                    <Link to="/ITIndustryCoursePage" className="text-decoration-none">                    <div
                        className="card h-100 shadow-lg border-0"
                        style={{ minHeight: 300 }}
                    >
                        <div className="card-body text-center d-flex flex-column justify-content-center">
                        <h2 className="card-title text-primary">
                            Career Awareness Program
                        </h2>
                        <br />
                        <p className="card-text">
                            Get to know about various career opportunities present{" "}
                            <i className="fa-solid fa-arrow-up-right-from-square" />
                        </p>
                        </div>
                        <div
                        className="card-footer text-end"
                        style={{ background: "none" }}
                        >
                        <i className="fas fa-code fa-2x" />
                        </div>
                    </div>
                    </Link>
                </div>
                {/* Personalized Career Workshops Card */}
                <div className="col-md-6 mb-4">
                    <Link to="/PersonalizedCareerWorkshops" className="text-decoration-none">
                    <div
                        className="card h-100 shadow-lg border-0"
                        style={{ minHeight: 300 }}
                    >
                        <div className="card-body text-center d-flex flex-column justify-content-center">
                        <h2 className="card-title text-primary">
                            Personalized Career Workshops
                        </h2>
                        <br />
                        <p className="card-text">
                            Start evolving in your chosen path{" "}
                            <i className="fa-solid fa-arrow-up-right-from-square" />
                        </p>
                        </div>
                        <div
                        className="card-footer text-end"
                        style={{ background: "none" }}
                        >
                        <i className="fas fa-globe fa-2x" />
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>

     );
}
 
export default AwarenessPrograms;