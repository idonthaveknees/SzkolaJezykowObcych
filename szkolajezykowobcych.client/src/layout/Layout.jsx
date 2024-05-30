import { Outlet, Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Offcanvas,  Image } from 'react-bootstrap';
import './Layout.css';

function Layout() {
    return (
        <div>
            <Navbar expand="lg" className="mb-3">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className="d-block link">
                            <Image src="/japan_flag.png" className="logo" alt="Logo" />
                            Foreign Language School
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand"
                        placement="start"
                    >
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link>
                                    <Link to="/" className="d-block link">Home</Link>
                                </Nav.Link>
                                <NavDropdown
                                    title="Courses"
                                    id="kursy"
                                    className="link"
                                >
                                    <NavDropdown.Item>
                                        <Link to="/courses" className="d-block link">List of courses</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <Link to="/teachers" className="d-block link">Teachers</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <Link to="/calendar" className="d-block link">Calendar</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link>
                                    <Link to="/contact" className="d-block link">Contact</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/enroll" className="d-block link">Enroll</Link>
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <div className="px-3 background">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
        </div>
    );
}

export default Layout;