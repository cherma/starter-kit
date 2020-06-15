import React from 'react';
import { Card,Button, Row, Col, CardBody, Label, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Select from 'react-select';

const changeHandler = (value) => {
  // eslint-disable-next-line no-console
  console.log(value);
};

const PathOne = () =>
  <Row>
    <Card>
      Content One
      <CardBody>
        <Row>
          <Col md={6}>
            <Col xs={12} md={4}>
              <Label>Section</Label>
              <Select
                className="success"
                placeholder={'Section'}
                name="testSectionList"
                multi={true}
                closeOnSelect={false}
                options={[{value: 'One', label: 'One'},{value: 'Two', label: 'Two'}]}
                onChange={(value) => changeHandler(value)}
              />
            </Col>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={12} md={6} sm={3} lg={4}>
                <UncontrolledDropdown>
                  <DropdownToggle color="info" className="btn-round btn-block" caret>
                                                            Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
              <Col xs={12} md={6} sm={3} lg={4}>
                <UncontrolledDropdown dropup>
                  <DropdownToggle color="primary" className="btn-round btn-block" caret>
                                                            Dropup
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Button color="primary">
                Click
            </Button>
          </Col>
          <Col md={6}>
            <input type="file" id="myfile" name="myfile" />
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Row>
  ;

export default PathOne;