import { DoubleRightOutlined, InfoCircleOutlined, PlaySquareTwoTone, RocketTwoTone, ShoppingCartOutlined, StarFilled, StarOutlined, TabletTwoTone, ThunderboltTwoTone } from "@ant-design/icons";
import { Button, Col, Flex, Rate, Row, Space, Typography } from "antd";

const ProductPage: React.FC = () => {
    return (
        <main className="meesho-promotion" style={{ background: "white" }} >
            <Row justify={"space-around"}>
                <Col span={3}></Col>
                <Col span={1} style={{ marginTop: "30px" }}>
                    <Flex style={{ flexDirection: "column", gap: "10px" }}>
                        <img src="https://images.meesho.com/images/products/33133883/qqsw2_64.webp" />
                        <img src="https://images.meesho.com/images/products/33133883/5is5o_64.webp" />
                        <img src="https://images.meesho.com/images/products/33133883/zhzlo_64.webp" />
                        <img src="https://images.meesho.com/images/products/33133883/srxov_64.webp" />
                    </Flex>
                </Col>

                <Col span={6} style={{ maxWidth: "100%", margin: "30px" }}>
                    <Space>
                        <img src="https://images.meesho.com/images/products/21914499/83fac_512.webp" style={{ width: "100%" }} />
                    </Space>
                    <Flex justify="center" style={{ width: "100%", marginTop:"20px",padding: "0 30px", gap: "10px" }}>
                        <Button style={{ color: "purple", width: "200px", borderRadius: "5px", border: "1px solid purple", fontSize: "18px", height: "50px" }}><ShoppingCartOutlined />Add to Cart</Button>
                        <Button style={{ background: "purple", width: "200px", borderRadius: "5px", color: "white", fontSize: "18px", height: "50px" }}><DoubleRightOutlined />Buy Now</Button>
                    </Flex>
                </Col>
                
                <Col span={8} style={{ margin: "30px" }}>
                    <Flex style={{ flexDirection: "column", border: "0.5px solid gray", background: "white", borderRadius: "5px", gap: "10px", padding: "30px" }}>
                        <Typography>STLYZ Polyresin Baby Hat Monk Buddha Idols Standard Multicolour, 4 Pieces-Home Decor</Typography>
                        <Typography style={{ display: "flex", gap: "5px" }}><Typography style={{ fontSize: "24px" }}>₹ 278 </Typography><InfoCircleOutlined /></Typography>
                        <Typography style={{ display: "flex", gap: "10px" }}>
                            <Typography style={{ display: "flex", borderRadius: "25px", width: "50px", background: "rgb(3, 141, 99)", color: "white", justifyContent: "center", gap: "4px" }}>4.2 <StarFilled /> </Typography>
                            5402 Ratings, 1295 Reviews
                        </Typography>
                        <Typography style={{ display: "flex", marginTop: "10px", justifyContent:"center",borderRadius: "10px", width: "110px", background: "rgb(245 245 245)", color: "black", gap: "4px" }}>Free Delivery  </Typography>

                    </Flex>
                    <Flex style={{ flexDirection: "column", border: "0.5px solid gray", background: "white", borderRadius: "5px", gap: "10px", padding: "30px", margin: "15px auto" }}>
                        <Typography style={{ fontSize: "24px" }}>Select Size</Typography>

                        <Typography style={{ display: "flex", marginTop: "10px", border: "1px solid rgb(159, 32, 137)", borderRadius: "10px", width: "100px", justifyContent: "center", background: "rgb(255, 231, 251)", color: "rgb(159, 32, 137)", gap: "4px" }}>Free Size  </Typography>

                    </Flex>
                    <Flex style={{ flexDirection: "column", border: "0.8px solid gray", background: "white", borderRadius: "5px", gap: "10px", padding: "30px" }}>
                        <Typography>Name : STLYZ Polyresin Baby Hat Monk Buddha Idols Standard Multicolour, 4 Pieces-Home Decor</Typography>
                        <Typography style={{ fontSize: "12px" }}>Material : Poly Resin </Typography>
                        <Typography style={{ fontSize: "12px" }}>Type : Car </Typography>
                        <Typography style={{ fontSize: "12px" }}>Net Quantity (N) : 4 </Typography>

                        <Typography style={{ fontSize: "12px" }}>4 Cute Buddha Monk Set.This buddah figure is having detailed hand work,have beautiful hand work of skilled indian artist.Ideal for show cases in homes or chidren room/table décor/car dashboards. A nice gift.</Typography>

                        <Typography style={{ fontSize: "12px" }}>Country of Origin : India </Typography>
                        <Typography style={{ fontSize: "12px", borderBottom: "0.8px dashed rgb(97, 97, 115)", width: "100px" }}>More Information </Typography>




                    </Flex>
                </Col>
                <Col span={2}></Col>
            </Row>



        </main>
    )
}
export default ProductPage;