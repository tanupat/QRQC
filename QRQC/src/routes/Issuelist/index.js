import React, { Component } from "react";
import { Col, Row, Table, Card, Button, Icon } from "antd";
class Issuelist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columns = [
      {
        title: "issue list",
        dataIndex: "issueNumber",
        key: "issueNumber"
      },
      {
        title: "issue date",
        dataIndex: "issue_date",
        key: "issue_date"
      },
      {
        title: "status",
        dataIndex: "status",
        key: "status"
      },
      {
        title: "view",
        dataindex: "view",
        key: "view",
        render: (text, record) => {
          return (
            <Button type="primary" size="small">
              view
            </Button>
          );
        }
      }
    ];
    const data = [
      {
        issueNumber: "IS-001",
        issue_date: "20-Jan-2020",
        status: "Pending"
      },
      {
        issueNumber: "IS-002",
        issue_date: "20-Jan-2020",
        status: "Closed"
      }
    ];
    return (
      <div>
        <Card className="gx-card" title={"Issue list"}>
          <Button type="primary">
            <Icon type="plus"></Icon> Add new{" "}
          </Button>
          <Table columns={columns} dataSource={data} />
        </Card>
      </div>
    );
  }
}
export default Issuelist;
