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
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col, CardBody, Card, Button, ButtonGroup, Badge,
} from "reactstrap";

import Slider from "nouislider";
import Select from "react-select";

export default function Pills(props) {
  const slider1 = React.useRef(null);
  const [slider1Value, setSlider1Value] = React.useState("20");

  const slider2 = React.useRef(null);
  const [slider2Value, setSlider2Value] = React.useState("20");


  const [vTabs, setvTabs] = React.useState(1);

  React.useEffect(() => {
    try{
    Slider.create(slider1.current, {
      start: [20],
      connect: [true, false],
      step: 1,
      range: { min: 5, max: 30 },
    }).on("update", function (values, handle) {
        setSlider1Value(parseInt(values[0]));
    });
    Slider.create(slider2.current, {
      start: [20],
      connect: [true, false],
      step: 1,
      range: { min: 5, max: 30},
    }).on("update", function (values, handle) {
      setSlider2Value(parseInt(values[0]));
    });
    } catch (e){
      console.log(e);
    }
  }, []);

  React.useEffect(() => {
    props.handleSizeChange({width: slider1Value, height: slider2Value});
  }, [slider1Value, slider2Value])

  const toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    switch (stateName) {
      case "vTabs":
        setvTabs(index);
        break;
      default:
    }
  };

  return (
    <>
      <div className="section section-pills" style={{padding: "0"}}>
        <Container>
          <div id="navigation-pills">
            <div className="title">
              {/*<h4>Graph Search Visualizer</h4>*/}
            </div>
            <Row >
              <Col xs="12" style={{display: "flex", justifyContent: "center"}}>
                {/*<p className="category">Control Panel</p>*/}
                <Row>
                  <Col md="8" style={{paddingTop: "0"}}>
                    <TabContent activeTab={"vTabs" + vTabs}>
                      <TabPane tabId="vTabs1">
                        <Card data-background-color="red" style={{margin: "0"}}>
                          <CardBody>
                            <h6 className="category-social">
                              <i className="fa fa-fire mr-1" />
                              User Actions
                            </h6>
                            <div className="card-description">
                              <ol style={{
                                // display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: "15px"
                              }}>
                                <li>Set Start:
                                  <div style={{color: "rgba(255, 255, 255, 0.6)"}}>-Left Click on a Cell</div>
                                </li>

                                <li>Set End:
                                  <div style={{color: "rgba(255, 255, 255, 0.6)"}}>-Right Click on a Cell</div>
                                </li>
                                <li>Block Cells</li>
                                <div style={{color: "rgba(255, 255, 255, 0.6)"}}>-Hold CTRL + Click</div>
                                <div style={{color: "rgba(255, 255, 255, 0.6)"}}>-Hold CTRL + Hold Left Click + Hover</div>
                              </ol>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="vTabs2" style={{ padding: "0 20px"}} >

                        <div>
                          <div style={{display: "flex", flexDirection: "column", marginBottom: "15px"}}>
                            <h6 className="category-social" style={{marginBottom: "10px"}}>
                              <i className="fa fa-fire mr-1" />
                              Dimensions
                            </h6>
                            <form onSubmit={props.submitSizeChange}>
                            <div style={{marginBottom: "5px"}}>
                              <div style={{marginBottom: "15px"}}>
                                <div className='text-success' style={{display: "flex", alignItems:"center", marginBottom: "15px"}}>
                                  <span style={{marginRight: "5px"}}>Width</span>
                                {/*<label>{slider1}</label>*/}
                                  <Badge color="info" className="ml-1" style={{margin: 0}}>{slider1Value}</Badge>
                                </div>
                                <div className="slider" ref={slider1}/>
                              </div>
                              <div style={{marginBottom: "10px"}}>
                                <div className='text-success' style={{display: "flex", alignItems:"center", marginBottom: "15px"}}>
                                  <span style={{marginRight: "5px"}}>Height</span>
                                  <Badge color="info" className="ml-1" style={{margin: 0}}>{slider2Value}</Badge>
                                </div>
                                <div className="slider" ref={slider2} />
                              </div>
                            </div>
                              <Button size="sm" style={{width: "100%"}} color="primary" type="submit">Generate</Button>
                            </form>

                          </div>
                          <div style={{marginBottom: "10px"}}>
                            <h6 className="category-social" style={{marginBottom: "10px"}}>
                              <i className="fa fa-fire mr-1" />
                              Algorithm
                            </h6>
                          <Select
                              className="react-select react-select-primary mb-2"
                              classNamePrefix="react-select"
                              name="singleSelect"
                              defaultValue={ {label: "breadth-first search", value: "bfs" }}
                              value={props.alg}
                              onChange={(value) => props.setAlg(value.value)}
                              isSearchable={false}
                              options={[
                                {
                                  value: "bfs",
                                  label: "breadth-first search",
                                  // isDisabled: true,
                                },
                                { value: "dfs", label: "depth-first search" },
                                // { value: "biDir", label: "bi-directional search" },
                              ]}
                              placeholder="Single Select"
                          />
                          </div>
                          <ButtonGroup style={{display: "flex", justifyContent: "center", width: "100%", fontSize: "10px"}}>
                            {props.isPaused?
                                <Button size={"sm"}  color={"success"} disabled={!props.isPaused} onClick={props.handlePlay}>Play</Button>:
                                <Button size={"sm"} color={"warning"} disabled={props.isPaused} onClick={props.handlePause}>Pause</Button>
                            }
                            <Button size={"sm"} color={"primary"} onClick={props.handleReset}>Reset</Button>
                          </ButtonGroup>
                          </div>
                      </TabPane>
                      <TabPane tabId="vTabs3" style={{}}>
                        Developed by Layth Leo Yousif - 2021 <br /> <br />
                        This application explores the different behaviors of {"\n"} introductory graph algorithms.
                        <br /><br />
                        Build Using:
                        <br />
                        <ul style={{}}>
                          <li style={{color: "rgba(255, 255, 255, 0.6)"}}>
                            reactJS
                          </li>
                          <li style={{color: "rgba(255, 255, 255, 0.6)"}}>
                            typescript
                          </li >
                          <li style={{color: "rgba(255, 255, 255, 0.6)"}}>
                            redux
                          </li>
                          <li style={{color: "rgba(255, 255, 255, 0.6)"}}>
                            blk-design-system-pro
                          </li>


                        </ul>

                      </TabPane>
                    </TabContent>
                  </Col>
                  <Col md="4" style={{marginTop: "20px"}}>
                    <Nav
                        className="nav-pills-primary flex-column"
                        pills
                        role="tablist"
                    >
                      <NavItem>
                        <NavLink
                            className={classnames({
                              active: vTabs === 1,
                            })}
                            onClick={(e) => toggleTabs(e, "vTabs", 1)}
                            href="#pablo"
                        >
                          Actions
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                            className={classnames({
                              active: vTabs === 2,
                            })}
                            onClick={(e) => toggleTabs(e, "vTabs", 2)}
                            href="#pablo"
                        >
                          Visualizer
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                            className={classnames({
                              active: vTabs === 3,
                            })}
                            onClick={(e) => toggleTabs(e, "vTabs", 3)}
                            href="#pablo"
                        >
                          About
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* end nav pills */}
          </div>
        </Container>
      </div>
    </>
  );
}
