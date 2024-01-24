"use client";
import React, { useEffect, useState } from "react";
import { Select, Space, Typography } from "antd";
import { getcategories } from "@/lib/api";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const SelectCategory: React.FC = () => {
  const [options, setOptions] = useState();
  useEffect(() => {
    getcategories().then((catagories) => {
      const optionss = catagories.map((category: any) => ({
        label: category.name,
      }));

      setOptions(optionss);
    });
  }, []);

  return (
    <Space wrap>
      <Select
        defaultValue="Select category"
        style={{ width: 120 }}
        onChange={handleChange}
        options={options}
      />


    </Space>
    
  );
};

export default SelectCategory;
