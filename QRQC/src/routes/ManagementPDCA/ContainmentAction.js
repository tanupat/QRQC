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
const { TextArea } = Input;
const { Option } = Select;
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

class AddContainment extends Component {
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
      <Form>
        <Row>
          <Col {...set_col}>
            <FormItem {...formItemLayout} label={"Who"}>
              {getFieldDecorator("Who", {
                rules: [
                  {
                    required: true,
                    message: "Who"
                  }
                ]
              })(
                <Select showSearch>
                  <Option value="1">employee 1 </Option>
                  <Option value="2">employee 2 </Option>
                  <Option value="3">employee 3 </Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col {...set_col}></Col>
        </Row>
        <Row>
          <Col {...set_col}>
            <FormItem {...formItemLayout} label={"Target date"}>
              {getFieldDecorator("TargetDate", {
                rules: [
                  {
                    required: true,
                    message: "Please enter Target date"
                  }
                ]
              })(<DatePicker format="DD-MMM-YYYY" />)}
            </FormItem>
          </Col>
          <Col {...set_col}>
            <FormItem {...formItemLayout} label={"Completed date"}>
              {getFieldDecorator("completed_date")(
                <DatePicker format="DD-MMM-YYYY" />
              )}
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
            <FormItem {...formItemLayout} label={"Containment Action"}>
              {getFieldDecorator("ContainmentAction", {
                rules: [
                  {
                    required: true,
                    message: "Containment Action"
                  }
                ]
              })(
                <TextArea
                  rows={4}
                  style={{ width: 300 }}
                  placeholder="Please input Model"
                />
              )}
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

const FormAddContainment = Form.create({ name: "formContainment" })(
  AddContainment
);

class ContainmentAction extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
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
        title: "Containment Action (Yes / No)",
        dataIndex: "ContainmentAction",
        key: "ContainmentAction"
      },
      {
        title: "Who",
        dataIndex: "Who",
        key: "Who"
      },
      {
        title: "Due Date",
        dataIndex: "DueDate",
        key: "DueDate"
      },
      {
        title: "Done Date",
        dataIndex: "DoneDate",
        key: "DoneDate"
      },
      {
        title: "Evidence",
        dataIndex: "Evidence",
        key: "Evidence",
        render: (text, record) => {
          return (
            <Button type="primary" size="small">
              <Icon type="download"></Icon> Dowload
            </Button>
          );
        }
      },
      {
        title: "Edit/Delete",
        dataIndex: "edit_delete",
        key: "edit_delete",
        render: (text, record) => {
          return (
            <div>
              <Button type="primary" size="small" onClick={this.showModal}>
                <Icon type="edit"></Icon> Edit
              </Button>
              <Button type="danger" size="small">
                <Icon type="delete"></Icon> Delete
              </Button>
            </div>
          );
        }
      }
    ];

    const data = [
      {
        ContainmentAction: "Containment Test",
        Who: "Tanupat Jampurk",
        DueDate: "20-Jan-2020",
        DoneDate: "-",
        Evidence: "dowload"
      }
    ];
    return (
      <div>
        <Card className="gx-card" title={"Containment Action (Yes / No)"}>
          <Button type="primary" size="small" onClick={this.showModal}>
            <Icon type="plus"></Icon> Add new{" "}
          </Button>
          <Table columns={columns} dataSource={data} />
          <Modal
            title="Containment Action"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            width={1200}
          >
            <FormAddContainment />
          </Modal>
        </Card>
      </div>
    );
  }
}

export default ContainmentAction;
