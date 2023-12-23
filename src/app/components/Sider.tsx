"use client";

import React from "react";
import {
  Button,
  Collapse,
  Divider,
  Flex,
  Select,
  Space,
  Typography,
} from "antd";

import { Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
const options = [
  { label: "Bangles & Bracelets", value: "Bangles & Bracelets" },
  { label: "Bike Covers", value: "Bike Covers" },
  { label: "Cups & Mugs", value: "Cups & Mugs" },
  { label: "Earrings & Studs", value: "Earrings & Studs" },
  { label: "Hair accessories", value: "Hair accessories" },
  { label: "Handbags", value: "Handbags" },
  { label: "Dresses", value: "Dresses" },

  { label: "Bedsheets", value: "Bedsheets" },
];

const plainOptions = ["combos", "pack of 2"];

export default function Sider() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };
  function callback() {
    // console.log(key);
  }

  const { Panel } = Collapse;
  return (
    <main className="sideresponsive">
      <h1>Products For You</h1>
      <section>
        <section>
          <Space wrap>
            <Select
              defaultValue="Sort by :"
              style={{ width: 200 }}
              onChange={handleChange}
              options={[
                { value: "Relevance", label: "Sort by: Relevance" },
                { value: "New Arrivals", label: "New Arrivals" },
                { value: "Price (High to Low)", label: "Price (High to Low)" },
                { value: "Price (Low to High)", label: "Price (Low to High)" },
                { value: "Ratings", label: "Ratings" },

                { value: "Discount", label: "Discount", disabled: true },
              ]}
            />
          </Space>
        </section>
        <section>
          <Divider />
          <Space>
            <Space>
              <Typography>FILTERS</Typography>
              <Typography>1000+ Products</Typography>
            </Space>
          </Space>
          <Divider />

          <Space>
            <Typography>Category</Typography>
          </Space>
          <Flex>
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="search"
              // defaultValue={['apple']}

              onChange={onChange}
              optionLabelProp="label"
              options={options}
            />
          </Flex>

          <Collapse
            expandIconPosition="right"
            defaultActiveKey={["1"]}
            onChange={callback}
            style={{ borderTop: "1px solid grey", borderRadius: 0 }}
            ghost
          >
            <Panel header={<Typography>color</Typography>} key="1">
              <Space style={{ flexWrap: "wrap" }}>
                <Button>Multicolor</Button>
                <Button>purple</Button>
                <Button>white</Button>
                <Button>Black</Button>
                <Button>orange</Button>
                <Button>red</Button>
                <Button>Blue</Button>
              </Space>
            </Panel>
          </Collapse>

          <Collapse
            expandIconPosition="right"
            defaultActiveKey={["1"]}
            onChange={callback}
            style={{ borderTop: "1px solid grey", borderRadius: 0 }}
            ghost
          >
            <Panel header={<Typography>Price</Typography>} key="1">
              <Space style={{ flexWrap: "wrap" }}>
                <Button>under $ 234</Button>
                <Button>under $ 111</Button>
                <Button>under $ 456</Button>
                <Button>under $ 150</Button>
              </Space>
            </Panel>
          </Collapse>

          <Collapse
            expandIconPosition="right"
            defaultActiveKey={["1"]}
            onChange={callback}
            ghost
            style={{
              borderTop: "1px solid grey",
              borderRadius: 0,
            }}
          >
            <Panel header={<Typography>Combo</Typography>} key="1">
              <Checkbox.Group
                options={plainOptions}
                defaultValue={["combos"]}
                onChange={onChange}
              />
            </Panel>
          </Collapse>
        </section>
      </section>
    </main>
  );
}
