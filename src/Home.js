import image from './images/img22.png';

const Home = () => {
    return ( 
        <>
            <div className="container-fluid pt-5">
                <div className="row align-items-center" style={{ minHeight: "95vh" }}>
                <div className="col-sm-8 d-flex justify-content-center">
                    <h4>
                    Your Future Starts Here
                    <br />
                    <span>We bridge the gap between your potential and success...</span>
                    <br />
                    <span>
                        We do more than just guide you - We inspire and energize you!
                    </span>
                    </h4>
                </div>
                <div className="col-sm-4 d-flex justify-content-center">
                    <img
                    src={image}
                    alt={444}
                    className="img-fluid"
                    style={{ width: 300, height: 300 }}
                    />
                </div>
                </div>
            </div>
        </>
     );
}
 
export default Home;