import React, { Component } from "react";
import { Transfer, Button, Card } from "antd";

class Attendants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mockData: [],
      targetKeys: []
    };
  }
  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `employee${i + 1}`
      };

      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  handleChange = targetKeys => {
    this.setState({ targetKeys });
  };

  render() {
    return (
      <div>
        <Card className="gx-card" titel="Attendants">
          <Transfer
            dataSource={this.state.mockData}
            showSearch
            listStyle={{
              width: 250,
              height: 300
            }}
            operations={["to right", "to left"]}
            targetKeys={this.state.targetKeys}
            onChange={this.handleChange}
            render={item => `${item.title}`}
          />
          <Button type="primary">Save</Button>
        </Card>
      </div>
    );
  }
}
export default Attendants;
