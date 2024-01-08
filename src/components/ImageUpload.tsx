"use client";

import { Button, Card, Flex } from "antd";
import { CldUploadWidget } from "next-cloudinary";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ImageUploadProps {
  disabled?: boolean;
  onChange?: (value: string[]) => void;
  value?: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled = false,
  onChange,
  value = [],
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [images, setImages] = useState(value);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    const newImages = [...images, result.info.secure_url];
    setImages(newImages);
    onChange?.(newImages);
  };

  const onRemove = (i: number, url: string) => {
    const newImages = [...images.slice(0, i), ...images.slice(i + 1)];
    setImages(newImages);
    onChange?.(newImages);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Flex>
        {images.map((url, i) => (
          <Card
            key={url}
            hoverable
            style={{ width: 240 }}
            cover={
              <Image fill className="object-cover" alt="Image" src={url} />
            }
            actions={[
              <Button
                key="delete"
                icon={<DeleteOutlined />}
                onClick={() => onRemove(i, url)}
              ></Button>,
            ]}
          ></Card>
        ))}
      </Flex>
      <CldUploadWidget onUpload={onUpload} uploadPreset="cazyiuln">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button disabled={disabled} onClick={onClick}>
              <Button icon={<UploadOutlined />} onClick={() => open()}>
                Upload Image
              </Button>
            </Button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default ImageUpload;
