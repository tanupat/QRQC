import React, { Component } from "react";
import IntlMessages from "../../util/IntlMessages";
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
import { connect } from "react-redux";
const { Option } = Select;
const { TextArea } = Input;
const FormItem = Form.Item;
const set_col = {
  lg: 12,
  md: 12,
  sm: 12,
  xs: 24
};

const dataAcctachFile = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text"
  },

  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      console.log(info);
      message.success(`${info.file.name} file uploaded successfully`);
      let reader = new FileReader();
      reader.onload = e => {
        console.log(e.target.result);
      };
      reader.readAsText(info.file.originFileObj);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

class InputPCDA extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card className="gx-card" titel="MANAGEMENT PDCA">
        <Form>
          <Row>
            <Col {...set_col}>
              <FormItem label="Issue Type">
                {getFieldDecorator("issueType", {
                  rules: [
                    {
                      required: true,
                      message: "Please  select  an issue type"
                    }
                  ]
                })(
                  <Select style={{ width: 300 }}>
                    <Option value="Type1">Type1</Option>
                    <Option value="Type2">Type2</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col {...set_col}></Col>
          </Row>
          <Row>
            <Col {...set_col}>
              <FormItem label="Customer">
                {getFieldDecorator("Customer", {
                  rules: [
                    { required: true, message: "Please Select Customer!" }
                  ]
                })(
                  <Select
                    showSearch
                    placeholder="Select Customer"
                    style={{ width: 300 }}
                  >
                    <Option value="CustomerA">CustomerA</Option>
                    <Option value="CustomerB">CustomerB</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col {...set_col}>
              <FormItem label="PDCA No">
                {getFieldDecorator("PDCANO")(
                  <Input disabled={true} style={{ width: 300 }} />
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col {...set_col}>
              <FormItem label="Part Name">
                {getFieldDecorator("PartName", {
                  rules: [
                    { required: true, message: "Please input Part Name!" }
                  ]
                })(<Input style={{ width: 300 }} />)}
              </FormItem>
            </Col>
            <Col {...set_col}>
              <FormItem label="Issued Date">
                {getFieldDecorator("IssuedDate", {
                  rules: [
                    {
                      required: true,
                      message: "Please select Issued Date"
                    }
                  ]
                })(<DatePicker format="DD-MMM-YYYY" style={{ width: 260 }} />)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col {...set_col}>
              <FormItem label="Part No">
                {getFieldDecorator("PartNo", {
                  rules: [{ required: true, message: "Please input Part No!" }]
                })(<Input style={{ width: "100%" }} />)}
              </FormItem>
            </Col>
            <Col {...set_col}>
              <FormItem label="Leader">
                {getFieldDecorator("Leader", {
                  rules: [{ required: true, message: "Please input Leader!" }]
                })(<Input style={{ width: 300 }} />)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col {...set_col}>
              <FormItem label="Problem">
                {getFieldDecorator("Problem", {
                  rules: [{ required: true, message: "Please input Problem!" }]
                })(<TextArea rows={4} style={{ width: 300 }} />)}
              </FormItem>
            </Col>
            <Col {...set_col}>
              <FormItem label="Attached">
                {getFieldDecorator("AttachedInlinePDCA", {
                  rules: [
                    { required: true, message: "Attached Inline PDCA sheet" }
                  ]
                })(
                  <Upload {...dataAcctachFile}>
                    <Button>
                      <Icon type="upload" /> Attached Inline PDCA sheet
                    </Button>
                  </Upload>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col {...set_col}>
              <FormItem>
                <Button
                  type="primary"
                  onClick={this.handleSubmit}
                  htmlType="submit"
                >
                  Save
                </Button>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
    );
  }
}
const InputPCDAFrom = Form.create({ name: "InputPCDA" })(InputPCDA);

export default InputPCDAFrom;
