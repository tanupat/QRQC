import React, { Component } from "react";
import {
  Table,
  Badge,
  Menu,
  Dropdown,
  Icon,
  Card,
  Button,
  Modal,
  DatePicker,
  Input,
  Upload,
  Select,
  Form,
  Col,
  Row,
  message
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

class CorrectiveAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  OnShowModal = () => {
    this.setState({ visible: true });
  };
  OnCancelModel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const columns = [
      {
        title: "Corrective Action Plan",
        dataIndex: "CorrectiveActionPlan",
        key: "CorrectiveActionPlan"
      },
      { title: "Who", dataIndex: "Who", key: "Who" },
      { title: "Target", dataIndex: "Target", key: "Target" },
      {
        title: "Evidence",
        dataIndex: "Evidence",
        key: "Evidence",
        render: (text, redord) => {
          return (
            <Button size="small" type="primary">
              <Icon type="download"></Icon>
            </Button>
          );
        }
      },
      { title: "Closed date", dataIndex: "ClosedDate", key: "ClosedDate" },
      {
        tite: "Edit/Delete",
        dataIndex: "edit_delete",
        key: "edit_delete",
        render: (text, record) => {
          return (
            <div>
              <Button type="primary" size="small" onClick={this.OnShowModal}>
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

    const data = [];
    for (let i = 0; i < 1; ++i) {
      data.push({
        key: i,
        CorrectiveActionPlan: "2014-12-24 23:12:00",
        Target: "20-Jan-2020",
        Who: "Tanupat Jampurk",
        ClosedDate: "20-Jan-2020"
      });
    }

    return (
      <div>
        <Button type="primary" size="small" onClick={this.OnShowModal}>
          <Icon type="plus"></Icon>
        </Button>
        <Table columns={columns} dataSource={data} pagination={false} />
        <Modal
          visible={this.state.visible}
          onCancel={this.OnCancelModel}
          onOk={this.OnCancelModel}
          width={900}
        >
          <Form>
            <Row>
              <Col {...set_col}>
                <FormItem {...formItemLayout} label="CorrectiveActionPlan">
                  {getFieldDecorator("CorrectiveActionPlan", {
                    rules: [
                      {
                        required: true,
                        message: "Please Input Corrective Action Plan"
                      }
                    ]
                  })(
                    <TextArea
                      placeholder="Corrective Action Plan  "
                      autoSize={{ minRows: 2, maxRows: 6 }}
                    />
                  )}
                </FormItem>
              </Col>
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
            </Row>
            <Row>
              <Col {...set_col}>
                <FormItem {...formItemLayout} label="Target date">
                  {getFieldDecorator("TargetDate", {
                    rules: [
                      {
                        required: true,
                        message: "Please select Target Date"
                      }
                    ]
                  })(<DatePicker format="DD-MMM-YYYY" />)}
                </FormItem>
              </Col>
              <Col {...set_col}>
                <FormItem {...formItemLayout} label="Evidence">
                  {getFieldDecorator("evident")(
                    <Upload {...dataAcctachFile}>
                      <Button>
                        <Icon type="upload" /> Attached Evidence
                      </Button>
                    </Upload>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col {...set_col}>
                <FormItem {...formItemLayout} label="Closed Date">
                  {getFieldDecorator("closedate")(
                    <DatePicker format="DD-MMM-YYYY" />
                  )}
                </FormItem>
              </Col>
              <Col {...set_col}></Col>
            </Row>
          </Form>
        </Modal>
      </div>
    );
  }
}

const FormCorrectActionPlan = Form.create({ name: "formCorrectActionPlan" })(
  CorrectiveAction
);

class RootCause extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form>
          <Row>
            <Col {...set_col}>
              <FormItem {...formItemLayout} label="Root Cause">
                {getFieldDecorator("RootCause", {
                  rules: [
                    {
                      required: true,
                      message: "Please Selete "
                    }
                  ]
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
            <Col {...set_col}>
              <FormItem {...formItemLayout} label={"Root cause description"}>
                {getFieldDecorator("RootCauseDescription", {
                  rules: [
                    {
                      required: true,
                      message: "Please input Root cause description"
                    }
                  ]
                })(
                  <TextArea
                    placeholder="Root cause description"
                    autoSize={{ minRows: 2, maxRows: 6 }}
                  />
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col {...set_col}>
              <FormItem {...formItemLayout} label="Root cause confirmation">
                {getFieldDecorator("RootCauseConfirmation", {
                  rules: [
                    {
                      required: true,
                      message: "please select Root cause confirmation"
                    }
                  ]
                })(
                  <Select showSearch>
                    <Option value="Suspecting">Suspecting</Option>
                    <Option value="Confirmation">Confirmation</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col {...set_col}></Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const FormRootCause = Form.create({ name: "formrootcause" })(RootCause);

class TableRootCause extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible_root_cause: false
    };
  }

  showModal = () => {
    this.setState({
      visible_root_cause: true
    });
  };
  handleOk = e => {
    this.setState({
      visible_root_cause: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible_root_cause: false
    });
  };

  render() {
    const columns = [
      { title: "Root Cause", dataIndex: "RootCause", key: "RootCause" },
      {
        title: "Root cause description",
        dataIndex: "RootCauseDescription",
        key: "RootCauseDescription"
      },
      {
        title: "Root cause confirmation",
        dataIndex: "RootCauseConfirmation",
        key: "RootCauseConfirmation"
      },
      {
        title: "Edit/Delete",
        dataIndex: "edit_delete",
        key: "edit_delete",
        render: (text, recodr) => {
          return (
            <div>
              <Button type="primary" size="small">
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

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        RootCause: "xxxxx",
        RootCauseDescription: "xxxxx",
        RootCauseConfirmation: "xxxxx"
      });
    }

    return (
      <div>
        <Card>
          <Button type="primary" size="small" onClick={this.showModal}>
            <Icon type="plus"></Icon>Add new
          </Button>
          <Table
            className="components-table-demo-nested"
            columns={columns}
            expandedRowRender={record => <FormCorrectActionPlan />}
            dataSource={data}
          />
          <Modal
            title="Root cause"
            visible={this.state.visible_root_cause}
            width={1200}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <FormRootCause />
          </Modal>
        </Card>
      </div>
    );
  }
}

export default TableRootCause;
