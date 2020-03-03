import React, { Component } from "react";
import {
  Card,
  Select,
  Row,
  Col,
  Form,
  Button,
  Input,
  Radio,
  DatePicker,
  Upload,
  message,
  Icon
} from "antd";

const { Option } = Select;
const { TextArea } = Input;
const FormItem = Form.Item;
const set_col = {
  lg: 12,
  md: 12,
  sm: 12,
  xs: 24
};
const formItemLayout = {
  labelCol: { span: 9 },
  wrapperCol: { span: 12 }
};

class PDCA_Closed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card
          className="gx-card"
          title="PDCA Closed by BU Leader/ QA Manager/Customer"
        >
          <Form>
            <Row>
              <Col {...set_col}>
                <FormItem {...formItemLayout} label="Closed Date">
                  {getFieldDecorator("CloseDate", {
                    rules: [
                      {
                        required: true,
                        message: "Please Select Closed date"
                      }
                    ]
                  })(<DatePicker format="DD-MMM-YYYY" />)}
                </FormItem>
              </Col>
              <Col {...set_col}>
                <FormItem {...formItemLayout} label={"Who (QE)"}>
                  {getFieldDecorator("WhoQE", {
                    rules: [
                      {
                        required: true,
                        message: "Please select QE"
                      }
                    ]
                  })(
                    <Select showSearch>
                      <Option value="employee1">employee1</Option>
                      <Option value="employee2">employee2</Option>
                      <Option value="employee3">employee3</Option>
                      <Option value="employee4">employee4</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col {...set_col}>
                <FormItem {...formItemLayout} label="Result">
                  {getFieldDecorator("ClosedAndEscalate", {
                    rules: [
                      {
                        required: true,
                        message: "Please Select "
                      }
                    ]
                  })(
                    <Radio.Group>
                      <Radio value="Acceptable">Acceptable</Radio>
                      <Radio value="AcceptableWithAssignment">
                        Acceptable with assignment
                      </Radio>
                      <Radio value=" Not acceptable, see comment below">
                        {" "}
                        Not acceptable, see comment below
                      </Radio>
                    </Radio.Group>
                  )}
                </FormItem>
              </Col>
              <Col {...set_col}>
                <FormItem {...formItemLayout} label="Status">
                  {getFieldDecorator("Status", {
                    rules: [
                      {
                        required: true,
                        message: "Please Select Status"
                      }
                    ]
                  })(
                    <Select>
                      <Option value="Closed">Closed</Option>
                      <Option value="Pending">Pending</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col {...set_col}>
                <Button type="primary">Save</Button>
              </Col>
              <Col {...set_col}></Col>
            </Row>
          </Form>
        </Card>
      </div>
    );
  }
}

const FormPDCA_Closed = Form.create({ name: "FormPDCA_Closed" })(PDCA_Closed);
export default FormPDCA_Closed;
