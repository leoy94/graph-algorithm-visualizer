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
  CardBody, CardTitle, CardFooter, Card,
} from "reactstrap";


export default function Index(props) {
  return (
    <>
      <div style={{ width: "100%", height: "100%"}}>
        <Card className="bg-default" style={{minHeight: "50vh", width: "fit-content"}}>
          <CardBody>
            <h6 className="category-social">
              <i className="tim-icons icon-app mr-1" />
              Graph
            </h6>
            <CardTitle tag="h4">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Welcome to Graph Search Visualizer
              </a>
            </CardTitle>
            <p className="card-description">
              Please use the right panel to create graphs, view searching animations, and learn
              about this application's user actions.
            </p>
            <div>
              {props.createRows(props.size)}
            </div>
            <CardFooter className="text-center">
              {/*<Button*/}
              {/*    className="btn-round"*/}
              {/*    color="primary"*/}
              {/*    href="#pablo"*/}
              {/*    onClick={(e) => e.preventDefault()}*/}
              {/*>*/}
              {/*  Clear*/}
              {/*</Button>*/}
            </CardFooter>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
