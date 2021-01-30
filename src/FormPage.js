import { Form, Button } from 'react-bootstrap';
const FormPage = () => {
    return (
        <Form className="px-4">
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Username" className="border1" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="pt-2">
                <Form.Control type="password" placeholder="Enter Password" className="border1" />
            </Form.Group>
            <div className="row pb-5">
                <div className="mx-auto">
                    <Button className="btn btn-primary font-weight-bold mx-2 px-5" type="submit">LOGIN</Button>
                </div>
            </div>
        </Form>
    );
};
export default FormPage;