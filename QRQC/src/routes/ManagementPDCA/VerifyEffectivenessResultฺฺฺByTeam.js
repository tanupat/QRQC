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

class VerifyEffectivenessResultฺฺฺByTeam extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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

    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card className="gx-card" title="Verify EffectivenessResult ฺฺฺBy Team">
          <Form>
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
                      <Radio value="Closed">Closed</Radio>
                      <Radio value="Escalate">Escalate</Radio>
                    </Radio.Group>
                  )}
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
                <FormItem {...formItemLayout} label="Evidence">
                  {getFieldDecorator("Evidence")(
                    <Upload {...dataAcctachFile}>
                      <Button>
                        <Icon type="upload" /> Attached Evidence
                      </Button>
                    </Upload>
                  )}
                </FormItem>
              </Col>
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

const Form_VerifyEffectivenessResultฺฺฺByTeam = Form.create({
  name: "VerifyEffectivenessResultฺฺฺByTeam"
})(VerifyEffectivenessResultฺฺฺByTeam);

export default Form_VerifyEffectivenessResultฺฺฺByTeam;
