import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { auth } from 'firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Login {

    const navigate = useNavigate();

    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }


    return (
        <Container>
            <Row>
                <Col>
                <Form onSubmit={(e) => { e.preventDefault(); }}>
                    <Form.Control value={email} type='text' onChange={}></Form.Control>
                    <Form.Control value={password} type='passwprd' onChange={}></Form.Control>
                    <Button></Button>

                </Form>
                </Col>
            </Row>
        </Container>
    );
}