import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import React from 'react'
import { Link } from 'react-router-dom';
import FormPage from './FormPage';
const phed = () => {
    return (
        <Container className="px-lg-5">
            <Row className="row my-5 main-row" style={{ borderRadius: "25px" }}>
                <Col sm={6} className="py-3">
                    <h4 className="text-center font-weight-bold text-white mx-lg-5 px-lg-5 pb-4 pt-3">MUKHYAMANTRI GRAMIN PEYJAL NISCHAY YOJNA</h4>
                    <h3 className="text-center font-weight-bold text-white mx-lg-5 px-lg-5 pb-3 pt-2">PHED - BIHAR</h3>
                    <h1 className="text-center font-weight-bold text-white mx-lg-5 px-lg-5 pb-1 pt-2" style={{ letterSpacing: "10px" }}>AYNIC</h1>
                    <p className="text-center font-weight-bold text-white">In collaboration with</p>
                    <Row className="mx-auto">
                        <Image src="img3.png" className=" mx-auto" />
                    </Row>
                </Col>
                <Col sm={6} >
                    <Col style={{ backgroundColor: 'white', borderRadius: "25px" }} className="mr-1 mt-3 my-3">
                        <Row className="mx-auto">
                            <Image src="img2.png" className="mt-1 mx-auto" />
                        </Row>
                        <h4 className="text-center font-weight-bold h4 pt-2">Signin</h4>
                        <hr className="hr hr2" />
                        <FormPage />

                    </Col>
                </Col>
            </Row>
        </Container>
    );
}


export default phed;