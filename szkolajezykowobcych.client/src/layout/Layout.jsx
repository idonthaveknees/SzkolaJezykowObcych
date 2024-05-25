import { Outlet, Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Offcanvas,  Image } from 'react-bootstrap';
import './Layout.css';

function Layout() {
    return (
        <div>
            <Navbar expand="lg" className="mb-3">
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            <Image src="/japan_flag.png" className="logo" alt="Logo" />
                            Foreign Language School
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand"
                        aria-labelledby="offcanvasNavbarLabel-expand"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand">
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link>
                                    <Link to="/" className="d-block">Home</Link>
                                </Nav.Link>
                                <NavDropdown
                                    title="Courses"
                                    id="kursy"
                                >
                                    <NavDropdown.Item>
                                        <Link to="/courses" className="d-block">List of courses</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <Link to="/teachers" className="d-block">Teachers</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <div className="px-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
        </div>
    );
}

export default Layout;