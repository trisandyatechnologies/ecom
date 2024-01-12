"use client";
import {
  DoubleRightOutlined,
  InfoCircleOutlined,
  PlaySquareTwoTone,
  RocketTwoTone,
  ShoppingCartOutlined,
  StarFilled,
  StarOutlined,
  TabletTwoTone,
  ThunderboltTwoTone,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Flex,
  Menu,
  MenuProps,
  Rate,
  Row,
  Space,
  Tabs,
  TabsProps,
  Typography,
} from "antd";
import "../.././globals.css";
import { MOCK_DATA } from "@/utils/mock";
import Link from "next/link";

// const productPageData: MenuProps["items"] = MOCK_DATA.map(
//     ({ label, key }) => ({
//       key,
//       label: (
//         <Link rel="noopener noreferrer" href={`/prducts/${key}`}>
//           {label}
//         </Link>
//       ),
//     })
//   );

const productPageData = MOCK_DATA;

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/61-zRoFrfqL.AC_SL240_.jpg"
        style={{ height: "40px", width: "40px" }}
      />
    ),
    children: (
      <img src="https://images-eu.ssl-images-amazon.com/images/I/61-zRoFrfqL.AC_SL240_.jpg" />
    ),
  },
  {
    key: "2",
    label: (
      <img src="https://images.meesho.com/images/products/33133883/5is5o_64.webp" />
    ),
    children: (
      <img src="https://images.meesho.com/images/products/33133883/5is5o_64.webp" />
    ),
  },
  {
    key: "3",
    label: (
      <img src="https://images.meesho.com/images/products/33133883/zhzlo_64.webp" />
    ),
    children: (
      <img src="https://images.meesho.com/images/products/33133883/zhzlo_64.webp" />
    ),
  },
];

const ProductPage: React.FC = () => {
  const product = {
    name: "TATA salt",
    price: "30",
    discount: "5",
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/61-zRoFrfqL.AC_SL240_.jpg",
    ],
    quantity: 1,
    details: { size: 1 },
    category: "Rice_Atta_And_Dals",
  };

  return (
    <main className="meesho-promotion" style={{ background: "white" }}>
      <Row justify={"space-around"}>
        <Col span={2}></Col>
        <Col span={1} style={{ marginTop: "30px" }}>
          <Flex
            id="sideImages"
            style={{ flexDirection: "column", gap: "10px" }}
          >
            {/* <img src="https://images.meesho.com/images/products/33133883/qqsw2_64.webp" />
            <img src="https://images.meesho.com/images/products/33133883/5is5o_64.webp" />
            <img src="https://images.meesho.com/images/products/33133883/zhzlo_64.webp" />
            <img src="https://images.meesho.com/images/products/33133883/srxov_64.webp" /> */}
          </Flex>
        </Col>

        <Col lg={6} xs={24} style={{ maxWidth: "100%", margin: "30px" }}>
          <Space>
            <Tabs
              defaultActiveKey="1"
              items={items}
              onChange={onChange}
              tabPosition="left"
            />
            {/* <img src={product.images[0]} /> */}
            {/* <img src="https://images.meesho.com/images/products/21914499/83fac_512.webp" style={{ width: "100%" }} /> */}
            <Typography>
              {productPageData.map((product) => (
                <div key={`/products/${product.id}`} className="card card-deck">
                  {/* <div className="product_image"> */}
                  {/* <a href={`/products/${product.id}`}> */}
                  {/* <img
                    className="image"
                    src={product.image}
                    alt={product.name}
                    style={{ textAlign: "center" }}
                  /> */}
                  {/* </a> */}
                </div>
                // </div>
              ))}
            </Typography>
          </Space>
          <Flex
            justify="center"
            style={{
              width: "100%",
              marginTop: "30px",
              margin: "30px 50px 0px 50px",
            }}
          >
            <Button
              style={{
                color: "purple",
                width: "200px",
                borderRadius: "5px",
                border: "1px solid purple",
                fontSize: "18px",
                height: "50px",
              }}
            >
              <ShoppingCartOutlined />
              Add to Cart
            </Button>
            {/* <Button
              style={{
                background: "purple",
                width: "200px",
                borderRadius: "5px",
                color: "white",
                fontSize: "18px",
                height: "50px",
              }}
            >
              <DoubleRightOutlined />
              Buy Now
            </Button> */}
          </Flex>
        </Col>

        <Col lg={8} xs={24} style={{ margin: "30px" }} id="product_details">
          <Flex
            id="first_column"
            style={{
              flexDirection: "column",
              border: "0.5px solid gray",
              background: "white",
              borderRadius: "5px",
              gap: "10px",
              padding: "30px",
            }}
          >
            <Typography>
              {/* STLYZ Polyresin Baby Hat Monk Buddha Idols Standard Multicolour, 4
              Pieces-Home Decor */}
              TATA salt
            </Typography>
            <Typography style={{ display: "flex", gap: "5px" }} id="rate">
              <Typography style={{ fontSize: "24px" }}>₹ 278 </Typography>
              <InfoCircleOutlined />
            </Typography>
            {/* <Typography style={{ display: "flex", gap: "10px" }} id="rating">
              <Typography
                style={{
                  display: "flex",
                  borderRadius: "25px",
                  width: "50px",
                  background: "rgb(3, 141, 99)",
                  color: "white",
                  justifyContent: "center",
                  gap: "4px",
                }}
              >
                4.2 <StarFilled />{" "}
              </Typography>
              5402 Ratings, 1295 Reviews
            </Typography> */}
            <Typography
              id="free_delivery"
              style={{
                display: "flex",
                marginTop: "10px",
                justifyContent: "center",
                borderRadius: "10px",
                // maxWidth: "220px",
                background: "rgb(245 245 245)",
                color: "black",
                gap: "4px",
              }}
            >
              <b>Free Delivery on orders above 500</b>{" "}
            </Typography>
          </Flex>
          {/* <Flex
            flex={1}
            className="secoend_column"
            style={{
              flexDirection: "column",
              border: "0.5px solid gray",
              background: "white",
              borderRadius: "5px",
              gap: "10px",
              padding: "30px",
              margin: "15px auto",
            }}
          >
            <Typography style={{ fontSize: "24px" }}>Select Size</Typography>

            <Typography
              style={{
                display: "flex",
                marginTop: "10px",
                border: "1px solid rgb(159, 32, 137)",
                borderRadius: "10px",
                width: "100px",
                justifyContent: "center",
                background: "rgb(255, 231, 251)",
                color: "rgb(159, 32, 137)",
                gap: "4px",
              }}
            >
              Free Size{" "}
            </Typography>
          </Flex> */}
          <Flex
            className="third_column"
            style={{
              flexDirection: "column",
              border: "0.8px solid gray",
              background: "white",
              borderRadius: "5px",
              gap: "10px",
              padding: "30px",
              margin: "10px auto",
            }}
          >
            <Typography>
              Name : STLYZ Polyresin Baby Hat Monk Buddha Idols Standard
              Multicolour, 4 Pieces-Home Decor
            </Typography>
            <Typography style={{ fontSize: "12px" }}>
              Material : Poly Resin{" "}
            </Typography>
            <Typography style={{ fontSize: "12px" }}>Type : Car </Typography>
            <Typography style={{ fontSize: "12px" }}>
              Net Quantity (N) : 4{" "}
            </Typography>

            <Typography style={{ fontSize: "12px" }}>
              4 Cute Buddha Monk Set.This buddah figure is having detailed hand
              work,have beautiful hand work of skilled indian artist.Ideal for
              show cases in homes or chidren room/table décor/car dashboards. A
              nice gift.
            </Typography>

            <Typography style={{ fontSize: "12px" }}>
              Country of Origin : India{" "}
            </Typography>
            <Typography
              style={{
                fontSize: "12px",
                borderBottom: "0.8px dashed rgb(97, 97, 115)",
                width: "100px",
              }}
            >
              More Information{" "}
            </Typography>
          </Flex>
        </Col>
        <Col span={2}></Col>
      </Row>
    </main>
  );
};
export default ProductPage;
