"use client";
import React, { useEffect, useState } from "react";
import { Select, Space, Typography } from "antd";
import { getCategories } from "@/lib/api";


const SelectCategory: React.FC = () => {
  const [options, setOptions] = useState();
  useEffect(() => {
    getCategories().then((catagories) => {
      const optionss = catagories.map((category: any) => ({
        label: category.name,
        value:category.name
      }));

      setOptions(optionss);
    });
  }, []);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  

  return (
    <Space wrap>
      <Select
        defaultValue="Select category"
        style={{ width: 200 }}
        onChange={handleChange}
        options={options}
        
      />
    </Space>
  );
};

export default SelectCategory;
