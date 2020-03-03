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
  Icon,
  Table,
  Divider,
  Tag,
  Modal
} from "antd";
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
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

class FormFactorTreeAnalysisForOccurrence extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
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
    return (
      <div>
        <Form>
          <Row>
            <Col {...set_col}>
              <FormItem label="4M" {...formItemLayout}>
                {getFieldDecorator("4M", {
                  rules: [{ required: true, message: "Please 4M" }]
                })(
                  <Select showSearch>
                    <Option value="Man">Man</Option>
                    <Option value="Machine">Machine</Option>
                    <Option value="Material">Material</Option>
                    <Option value="Method">Method</Option>
                    <Option value="Environment">Environment</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col {...set_col}></Col>
          </Row>
          <Row>
            <Col {...set_col}>
              <FormItem {...formItemLayout} label="Who">
                {getFieldDecorator("Who", {
                  rules: [
                    {
                      required: true,
                      message: "Please select  Who"
                    }
                  ]
                })(
                  <Select showSearch>
                    <Option value="employee1">employee1</Option>
                    <Option value="employee2">employee2</Option>
                    <Option value="employee3">employee3</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col {...set_col}>
              <FormItem {...formItemLayout} label="Target Date">
                {getFieldDecorator("TargetDate", {
                  rules: [{ required: true, message: "Please TargetDate" }]
                })(<DatePicker format="DD-MMM-YYYY" />)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col {...set_col}>
              <FormItem {...formItemLayout} label={"Evidence"}>
                {getFieldDecorator("evidence")(
                  <Upload {...dataAcctachFile}>
                    <Button>
                      <Icon type="upload" /> Attached Evidence
                    </Button>
                  </Upload>
                )}
              </FormItem>
            </Col>
            <Col {...set_col}>
              <FormItem {...formItemLayout} label="Related(Y/N)">
                {getFieldDecorator("related", {
                  rules: [{ required: true, message: "Please input a related" }]
                })(
                  <Select showSearch>
                    <Option value="Yes">Yes</Option>
                    <Option value="No">No</Option>
                    <Option value="Doubt">Doubt</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col {...set_col}>
              <FormItem {...formItemLayout} label="Completed date">
                {getFieldDecorator("completed_date")(
                  <DatePicker format="DD-MMM-YYYY" />
                )}
              </FormItem>
            </Col>
            <Col {...set_col}>
              <FormItem {...formItemLayout} label="Assignments">
                {getFieldDecorator("Assignments", {
                  rules: [
                    {
                      required: true,
                      message: "Please input Assignments"
                    }
                  ]
                })(
                  <TextArea
                    rows={4}
                    style={{ width: 300 }}
                    placeholder="Please input Assignments"
                  />
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const _FormFactorTreeAnalysisForOccurrence = Form.create({
  name: "FormFactorTreeAnalysisForOccurrence"
})(FormFactorTreeAnalysisForOccurrence);

class FactorTreeAnalysisForOccurrence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    const columns = [
      {
        title: "4M",
        dataIndex: "M4",
        key: "M4"
      },
      {
        title: "Assignments",
        dataIndex: "Assignments",
        key: "Assignments"
      },
      {
        title: "Who",
        dataIndex: "Who",
        key: "Who"
      },
      {
        title: "Target Date",
        dataIndex: "TargetDate",
        key: "TargetDate"
      },
      {
        title: "Evidence",
        dataIndex: "Evidence",
        key: "Evidence",
        render: (text, record) => {
          return (
            <Button type="primary" size="small">
              <Icon type="download"></Icon>
            </Button>
          );
        }
      },
      {
        title: "Related (Y/N)",
        dataIndex: "related",
        key: "related"
      },
      {
        title: "Closed date",
        dataIndex: "Closed_date",
        key: "Closed_date"
      },
      {
        title: "Edit/Delete",
        dataIndex: "edit_delete",
        key: "edit_delete",
        render: (text, redord) => {
          return (
            <div>
              <Button type="primary" size="small" onClick={this.showModal}>
                <Icon type="edit"></Icon>
              </Button>
              <Button type="danger" size="small">
                <Icon type="delete"></Icon>
              </Button>
            </div>
          );
        }
      }
    ];
    const data = [
      {
        M4: "Machine",
        Assignments: "Assignments Test",
        Who: "employee 1",
        TargetDate: "20-Jan-2020",
        related: "Yes",
        Closed_date: "21-Jan-2020"
      }
    ];
    return (
      <div>
        <Card className="gx-card" title=" Factor Tree Analysis for Occurrence">
          <Button type="primary" size="small" onClick={this.showModal}>
            <Icon type="plus"></Icon> Add new{" "}
          </Button>
          <Table columns={columns} dataSource={data}></Table>
          <Modal
            title=" Factor Tree Analysis for Occurrence"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            width={1200}
          >
            <_FormFactorTreeAnalysisForOccurrence />
          </Modal>
        </Card>
      </div>
    );
  }
}

export default FactorTreeAnalysisForOccurrence;
