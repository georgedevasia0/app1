import "bootstrap/dist/css/bootstrap.css"
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container className="px-lg-5">
            <Row className="row my-5 main-row" style={{ borderRadius: "25px" }}>
                <Col className="py-3">
                    <Row className="mx-auto">
                        <Image src="img1.png" className="mt-5 mx-auto" />
                    </Row>
                    <h4 className="text-center font-weight-bold text-white mx-lg-5 px-lg-5 pb-5">MUKHYAMANTRI GRAMIN PEYJAL NISCHAY YOJNA</h4>
                </Col>
                <Col >
                    <Col style={{ backgroundColor: 'white', borderRadius: "25px" }} className="mr-1 mt-3 my-3">
                        <Row className="mx-auto">
                            <Image src="img2.png" className="mt-5 mx-auto" />
                        </Row>
                        <h4 className="text-center font-weight-bold h4 pt-4">Welcome User</h4>
                        <hr className="hr hr1" />
                        <h4 className="text-center font-weight-bold h4">Select a dashboard</h4>
                        <div className="row py-5">
                            <div className="mx-auto">
                                <Link to="/phed"><button className="btn btn-primary font-weight-bold mx-2 px-5">PHED</button></Link>
                                <Link to="/prd"><button className="btn btn-primary font-weight-bold mx-2 px-5">PRD</button></Link>
                            </div>
                        </div>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}
export default Home;