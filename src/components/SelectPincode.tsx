"use client";
import React, { useEffect, useState } from "react";
import { Select, SelectProps, Space, Typography } from "antd";
import { getPincode } from "@/lib/api";
import { DefaultOptionType } from "antd/es/select";



const SelectPincode: React.FC = ({onChange}: Partial<SelectProps>) => {
  const [options, setOptions] = useState<DefaultOptionType[]>([]);
  useEffect(() => {
    getPincode().then((pincodes) => {
      const optionsOpt = pincodes.map((pincode) => ({
        label: pincode.name,
        value: pincode.id
      }));

      setOptions(optionsOpt);
    });
  }, []);
  

  return (
    <Space wrap>
      <Select
        defaultValue="Select pincode"
        style={{ width: 200 }}
        onChange={onChange}
        options={options}
        
      />
    </Space>
  );
};

export default SelectPincode;