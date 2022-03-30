import { Nav } from "react-bootstrap";

function BaseNavBar(props) {
  return (
    <Nav className="base-nav" variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link eventKey="link-0" onClick={props.getAllNews}>Top Pics</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={props.getSportsNews}>Sports</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" onClick={props.getBussinessNews}>Bussiness</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" onClick={props.getTechNews}>Technology</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BaseNavBar;
