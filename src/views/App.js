/*!

=========================================================
* BLK Design System PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import {
  Container,
  Row,
  Col
} from "reactstrap";

export default function Index(props) {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("index-page");
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  }, []);
  const {SideBar, Graph} = props;
  return (
    <>
      {/*<ColorNavbar />*/}
      <div className="wrapper" ref={wrapper} style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <Container  style={{margin: "0", minWidth: "100%", marginBottom: "20px"}}>
            <Row xs={12} style={{padding: "0", display: "flex", justifyContent: "center", alignItems:"center"}}>
              <Col xs={12} sm={12} md={6} lg={7} xl={6} style={{padding: "0"}}>
                  <Container style={{margin: "0", width: "100%", height: "100%", maxWidth: "1500px", display:"flex", justifyContent: "center"}}>
                    <Row style={{padding: "0", width: "100%", height: "100%"}}>
                      <Graph/>
                    </Row>
                  </Container>
              </Col>
              <Col xs={12} sm={12} md={6} lg={5} xl={3} style={{padding: "0"}}>
                <SideBar />
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
}
