import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import React from 'react'
import FormPage from './FormPage';

const prd = () => {
    return (
        <Container className="px-lg-5">
            <Row className="row my-5 main-row" style={{ borderRadius: "25px" }}>
                <Col sm={6} className="py-3">
                    <h5 className="text-center font-weight-bold text-white mx-lg-5 px-lg-5 pb-4 pt-3">MUKHYAMANTRI GRAMIN PEYJAL NISCHAY YOJNA</h5>
                    <h3 className="text-center font-weight-bold text-white mx-lg-5 px-lg-5 pb-1 pt-2">PRD - BIHAR</h3>
                    <Row className="mx-auto">
                        <Image src="img3.png" className=" mx-auto" />
                    </Row>
                    <h6 className="text-center font-weight-bold text-white">Formerly known as</h6>
                    <h4 className="text-center font-weight-bold text-white mx-lg-5 px-lg-5 pb-4">NANDIKONDA INFRATECH PVT.LTD</h4>
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

export default prd;