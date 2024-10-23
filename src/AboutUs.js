import image1 from './images/work-29.png';
import image2 from './images/work-44.png';

const AboutUs = () => {
    return ( 
        <div id="AboutUs">
            <div className="container px-5">
                <div
                className="row bg-info align-items-center justify-content-center"
                style={{ minHeight: "10vh" }}
                >
                <div className="col-sm-12 text-center attractive-text">
                    <b>
                    <p>
                        " What We{" "}
                        <s>
                        <span className="text-danger text-decoration-line-through custom-font">
                            Do
                        </span>
                        </s>
                        <span className="highlight">Don't</span> "
                    </p>
                    </b>
                    <p>We don't let you sacrifice your dreams</p>
                    <p>We don't believe in your fear of loss</p>
                </div>
                </div>
            </div>
            <div className="container p-5">
                <div className="row">
                <div className="col-sm-4">
                    <img
                        src={image1}
                        alt="User pic"
                        className="img-fluid"
                    />
                </div>
                <div className="col-sm-8">
                    <h1 className="text-primary">Why we are doing this?</h1>
                    <br />
                    <p>
                    As fellow engineering graduates, we understand the challenges and
                    hurdles students face in securing their dream placements. The intense
                    competition, the evolving tech landscape, and the pressure to excel
                    can be overwhelming.
                    </p>
                </div>
                </div>
            </div>
            <div className="container px-5 py-3">
                <div className="row">
                <div className="col-sm-8">
                    <h1 className="text-primary">What We Do</h1>
                    <h2>Your Future, Our Guidance</h2>
                    <br />
                    <p>
                    We will help you to add value in your Life's by trying to solve the
                    problem of dedication.
                    </p>
                    <br />
                    <p>
                    Securing a dream job in the tech industry is a daunting task for many
                    engineering students. The rapidly evolving landscape, fierce
                    competition, and uncertainty about career paths can be overwhelming.
                    </p>
                    <br />
                    <p>
                    We at <b>Z444</b> understand these challenges firsthand. With our deep
                    industry experience and passion for student success, we're committed
                    to guiding you towards a fulfilling tech career.
                    </p>
                    <br />
                    <p>
                    Our awareness programs will equip you with the knowledge and insights
                    needed to make informed decisions about your career path. We'll help
                    you understand the latest industry trends, explore various job roles,
                    and develop a roadmap for your professional journey.
                    </p>
                </div>
                <div className="col-sm-4 d-flex align-items-center">
                    <img
                    src={image2}
                    alt="User pic"
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
                </div>
            </div>
            <div className="container px-5 py-3">
                <h1 className="text-center mb-4 text-primary">What we are for!!</h1>
                <div className="row">
                {/* Card 1 */}
                <div className="col-md-4 mb-3 d-flex">
                    <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title text-center">
                        <b>Dedication Coaching</b>
                        </h5>
                        <p className="card-text">
                        Our experienced coaches will work with you one-on-one to help you
                        develop a strong sense of commitment and perseverance. Together,
                        we'll create a personalized plan to keep you motivated and on
                        track.
                        </p>
                    </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="col-md-4 mb-3 d-flex">
                    <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title text-center">
                        <b>Career Awareness Workshops</b>
                        </h5>
                        <p className="card-text">
                        Our interactive workshops will provide you with valuable insights
                        into various career options, helping you discover your true
                        passions and strengths. Gain a clear understanding of the
                        opportunities available to you after graduation.
                        </p>
                    </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="col-md-4 mb-3 d-flex">
                    <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title text-center">
                        <b>Career Awareness Workshops</b>
                        </h5>
                        <p className="card-text">
                        Our comprehensive guidance program will equip you with the skills
                        and knowledge needed to thrive in the job market. From resume
                        building to interview preparation, we'll ensure you're ready to
                        take on your dream job.
                        </p>
                    </div>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="col-md-4 mb-3 d-flex">
                    <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title text-center">
                        <b>Personalized Career Coaching</b>
                        </h5>
                        <p className="card-text">
                        Our personalized coaching sessions will help you define your goals
                        and create a clear path to success. Whether you're looking to
                        change careers or advance in your current field, our experts will
                        provide you with the tools and support you need to make informed
                        decisions.
                        </p>
                    </div>
                    </div>
                </div>
                {/* Card 5 */}
                <div className="col-md-4 mb-3 d-flex">
                    <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title text-center">
                        <b>Dream Job Preparation</b>
                        </h5>
                        <p className="card-text">
                        Our comprehensive training program will help you develop the
                        skills and knowledge needed to stand out in the job market. From
                        networking to personal branding, we'll equip you with the tools to
                        land your dream job.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

     );
}
 
export default AboutUs;