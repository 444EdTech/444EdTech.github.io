import image1 from './images/b2.jpeg';
import image2 from './images/b1.jpeg';
const Founders = () => {
    return ( 
        <div id="Founders" style={{ paddingTop: '65px' }}>
            <div className="container p-5">
                <h1 className="text-center mb-4">Founders</h1>
                <div className="row row-cols-1 row-cols-sm-2 g-4">
                {/* Yaswanth Pallapothu Card */}
                <div className="col">
                    <div className="card h-100 shadow">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img
                            src={image1}
                            alt="Yaswanth"
                            className="img-fluid rounded-start"
                        />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">
                            Yaswanth Pallapothu <br />
                            (Co-Founder)
                            </h3>
                            <p className="card-text">Product</p>
                            <p className="card-text">Khatabook</p>
                            <div className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/yaswanth-pallapothu/"
                                target="_blank"
                                className="text-decoration-none"
                            >
                                <i className="fa-brands fa-linkedin fa-lg" />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Sai Ram Charan Card */}
                <div className="col">
                    <div className="card h-100 shadow">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img
                            src={image2}
                            alt="Sai Ram Charan"
                            className="img-fluid rounded-start"
                        />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">
                            Sai Ram Charan <br />
                            (Co-Founder)
                            </h3>
                            <p className="card-text">SDE-1</p>
                            <p className="card-text">Digital Trust Technologies</p>
                            <div className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/sai-ram-charan-t/"
                                target="_blank"
                                className="text-decoration-none"
                            >
                                <i className="fa-brands fa-linkedin fa-lg" />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

     );
}
 
export default Founders;