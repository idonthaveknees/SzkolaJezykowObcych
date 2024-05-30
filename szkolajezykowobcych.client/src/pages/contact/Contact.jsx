import { Row, Col, Container } from 'react-bootstrap';
import { Form } from './../../components/Form.jsx';
import './Contact.css';

const Contact = () => {
    return (
        <div id='contact'>
            <Container flex>
                <Row className='contact-description'>
                    <h1 className='contact-h1'>Contact</h1>
                    <p>
                        Have any questions? Want to enroll but don&apos;t know your level?
                        <br />
                    </p>
                    <p>
                        Send us an email via the form below or call!
                        <br />
                    </p>
                    <p>
                        <b className='grey'>Foreign Language School</b>
                        <br />
                    </p>
                    <p>
                        <b className='grey'>E-mail: </b>
                        foreign-language-school@example.com
                        <br />
                    </p>
                    <p>
                        <b className='grey'>Telefon: </b>
                        111 111 111
                        <br />
                    </p>
                    <p>
                        <b className='grey'>Our office: </b>
                        2012 Hyperion Avenue, Los Angeles, California, United States
                    </p>
                </Row>

                <Row>
                    <Col>
                        <h1 className='contact-h1'>Write us a message</h1>
                        <p>We&apos;ll happily answer your questions, give any additional information about our courses, and advise.</p>
                    </Col>
                    <Col>
                        <Form />
                    </Col>
                </Row>

                <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2012%20Hyperion%20Avenue,%20Los%20Angeles,%20California,%20United%20States+(Foreign%20Language%20School)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

            </Container>
        </div>
    )
};

export default Contact;