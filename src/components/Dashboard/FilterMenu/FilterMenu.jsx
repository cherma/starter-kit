import React, { useState } from 'react';
import { Card, Row, Col, CardBody, Label } from 'reactstrap';
import Select from 'react-select';

const testTypeArray = [{
  value: false,
  label: 'Practice'
}, {
  value: true,
  label: 'Full Test'
}];

class FilterMenu extends React.Component {

  constructor(props){
    super(props);
    this.state = { isFullTest: false, categoryId: '', practiceId: '', subCategoryList: [],
      testSessionId: '', testSectionList: [] };
  }

  setStateAndCallBack = (isFullTest, practiceId, categoryId, subCategoryList, testSessionId, testSectionList, field) => {
    const {updateData} = this.props;
    this.setState({ isFullTest, categoryId, practiceId, subCategoryList, testSessionId, testSectionList },
      ()=> updateData(this.state, field));
  }

  changeHandler = (value, field) => {
    const { isFullTest, practiceId, categoryId, testSessionId  } = this.state;
    const targetValue = value && value.value;
    switch(field) {
      case 'testType': {
        this.setStateAndCallBack(targetValue, '', '', [], '', [], field);
        break;
      }

      case 'practice': {
        this.setStateAndCallBack(isFullTest, targetValue, '', [], '', [], field);
        break;
      }

      case 'category': {
        this.setStateAndCallBack(isFullTest, practiceId, targetValue, [], '', [], field);
        break;
      }

      case 'subCategory': {
        const sectionChapterList = value && value.map(userValue => userValue.value);
        this.setStateAndCallBack(isFullTest, practiceId, categoryId, sectionChapterList, '', [], field);
        break;
      }

      case 'testSession': {
        this.setStateAndCallBack(isFullTest, '', '', [], targetValue, [], field);
        break;
      }

      case 'testSectionList': {
        const testSectionList = value && value.map(userValue => userValue.value);
        this.setStateAndCallBack(isFullTest, '', '', [], testSessionId, testSectionList, field);
        break;
      }
    }
  }

  renderPracticeFilter = (practiceId, practiceOptions) => {
    const gridSize = this.isFullTest ? 4 : 3;
    return(
      <Col xs={12} md={gridSize}>
        <Label>Practice</Label>
        <Select
          className="success"
          placeholder={'Practice'}
          name="practice"
          value={practiceId}
          options={practiceOptions}
          onChange={(value) => this.changeHandler(value, 'practice')}
        />
      </Col>
    );
  }

  renderCategoryFilter = (categoryId, categoryOptions) => {
    const gridSize = this.isFullTest ? 4 : 3;
    return(
      <Col xs={12} md={gridSize}>
        <Label>Category</Label>
        <Select
          className="success"
          placeholder={'Category'}
          name="category"
          value={categoryId}
          options={categoryOptions}
          onChange={(value) => this.changeHandler(value, 'category')}
        />
      </Col>
    );
  }

  renderSubCategoryFilter = (subCategoryList, subCategoryOptions) => {
    const gridSize = this.isFullTest ? 4 : 3;
    return(
      <Col xs={12} md={gridSize}>
        <Label>Section</Label>
        <Select
          className="success"
          placeholder={'Test'}
          name="subCategory"
          value={subCategoryList}
          options={subCategoryOptions}
          onChange={(value) => this.changeHandler(value, 'subCategory')}
        />
      </Col>
    );
  }

  renderTestFilter = (testSessionId, testOptions) => {
    const gridSize = this.isFullTest ? 4 : 3;
    return(
      <Col xs={12} md={gridSize}>
        <Label>Test</Label>
        <Select
          className="success"
          placeholder={'Test'}
          name="testSession"
          value={testSessionId}
          options={testOptions}
          onChange={(value) => this.changeHandler(value, 'testSession')}
        />
      </Col>
    );
  }

  renderTestSectionFilter = (testSectionList, testSectionOptions) => {
    const gridSize = this.isFullTest ? 4 : 3;
    return(
      <Col xs={12} md={gridSize}>
        <Label>Section</Label>
        <Select
          className="success"
          placeholder={'Section'}
          name="testSectionList"
          multi={true}
          closeOnSelect={false}
          value={testSectionList}
          options={testSectionOptions}
          onChange={(value) => this.changeHandler(value, 'testSectionList')}
        />
      </Col>
    );
  }

  render(){
    const { isFullTest, practiceId, categoryId, subCategoryList, testSessionId, testSectionList} = this.state;
    const { practiceOptions, categoryOptions, subCategoryOptions,testOptions, testSectionOptions } = this.props;
    const gridSize = isFullTest ? 4 : 3;
    return(
      <Row>
        <Col md={12}>
          <Card>
            <CardBody>
              <Row>
                <Col xs={12} md={gridSize}>
                  <Label>Test Type</Label>
                  <Select
                    className="success"
                    name="testType"
                    value={isFullTest}
                    options={testTypeArray}
                    onChange={(value) => this.changeHandler(value, 'testType')}
                  />
                </Col>
                { typeof(isFullTest) === 'boolean' && !isFullTest ? this.renderPracticeFilter(practiceId, practiceOptions) : null }
                { practiceId ? this.renderCategoryFilter(categoryId, categoryOptions) : null }
                { categoryId ? this.renderSubCategoryFilter(subCategoryList, subCategoryOptions) : null }

                { typeof(isFullTest) === 'boolean' && isFullTest ? this.renderTestFilter(testSessionId, testOptions) : null}
                { testSessionId ? this.renderTestSectionFilter(testSectionList, testSectionOptions) : null}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}


export default FilterMenu;