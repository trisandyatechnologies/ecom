'use client';
import Image from 'next/image'
import '../globals.css'
import React from 'react';
import { SearchProps } from 'antd/es/input/Search';
import { Button, Divider, Dropdown, Flex, Input, List, Popover, Space, Typography } from 'antd';
import type { MenuProps } from 'antd';
const { Search } = Input;

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { DownOutlined, MobileOutlined, ShoppingCartOutlined, ShoppingFilled, UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { useToken } = theme;

// export default function Header() {
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
// const items1: MenuProps['items'] = ['Download App', 'Become a Supplier', 'Newsroom', 'Profile', 'Cart'].map((key) => ({
//     key,
//     label: <Space><UserOutlined /> {key}</Space>,
// }));
const items2: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    }
]
const Downloadapp: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Download From
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                <img src='https://images.meesho.com/images/pow/playstore-icon-big.png' style={{ width: "178px", height: "50px" }} />
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                <img src='https://images.meesho.com/images/pow/appstore-icon-big.png' style={{ width: "178px", height: "50px" }} />
            </a>
        ),
    },
]

const Profile: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                <h4>Hello User</h4>
                <Typography>To accesses your meesho account</Typography>
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                <Button style={{ width: "100%", background: "purple", color: "white", height: "48px", borderRadius: "5px", fontSize: "20px" }}>Sign Up</Button>
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                <Typography style={{ display: "flex", justifyContent: "center", gap: "20px" }}><ShoppingFilled />My Orders</Typography>            </a>
        ),
    },
]


const Electronics: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "25vw" }}>

                <Flex dir='column' style={{ minWidth: "5%" }}>
                    <List header="Mobile & Accessories" style={{ color: "purple" }}>
                        <List.Item> All Mobile & Accessories</List.Item>
                        <List.Item> Smart Watches</List.Item>
                        <List.Item> Mobile Holders</List.Item>
                        <List.Item> Mobile cases and covers</List.Item>
                    </List>
                </Flex>
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "45vw" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header="Appliences" style={{ color: "purple" }}>
                        <List.Item> All Appliences</List.Item>
                        <List.Item>Grooming</List.Item>
                        <List.Item> Home Appliences</List.Item>
                        <List.Item> Mobile cases and covers</List.Item>
                    </List>
                </Flex></a>
        ),
    },

]

const Jewellery: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex" }}>

                <Flex dir='column' style={{}}>
                    <List header="Jewellery" style={{ color: "purple" }}>              
                        <List.Item> Jewellery Set</List.Item>
                        <List.Item> Earrings</List.Item>
                        <List.Item>Mangalsutras</List.Item>
                        <List.Item> Studs</List.Item>
                        <List.Item> Bangles</List.Item>
                        <List.Item> Necklaces</List.Item>
                        <List.Item> Rings</List.Item>
                        <List.Item> Anklets</List.Item>
                    </List>
                </Flex>
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center" }}>

                <Flex dir='column' style={{}}>
                    <List header="Women Accessory" style={{ color: "purple" }}>
                        <List.Item> Bags</List.Item>
                        <List.Item>Watches</List.Item>
                        <List.Item> Hair Accessories</List.Item>
                        <List.Item> Sunglasses</List.Item>
                        <List.Item> Socks</List.Item>
                    </List>
                </Flex></a>
        ),
    },

]


const items: MenuProps['items'] = [
    {
        key: "Download App", label: <Flex style={{ display: "flex", gap: "10px" }}><Dropdown menu={{ items: Downloadapp }} >
            <Typography style={{ display: "flex", gap: "10px" }}><MobileOutlined />Download App</Typography></Dropdown> </Flex>
    },
    { key: "Become a Supplier", label: "Become a Supplier" },
    { key: "Newsroom", label: "Newsroom" },
    {
        key: "profile", label: <Flex style={{ display: "flex", gap: "10px" }}><Dropdown menu={{ items: Profile }} >
            <Typography style={{ display: "flex", gap: "5px", flexDirection: "column" }}><UserOutlined />Profile</Typography></Dropdown> </Flex>
    },
    {
        key: "shoppingcart", label: <Flex style={{ display: "flex", gap: "5px", flexDirection: "column", alignItems: "center" }}>
            <Typography style={{ display: "flex", gap: "5px", flexDirection: "column", alignItems: "center" }}><ShoppingCartOutlined />Cart</Typography>

        </Flex>
    }
]

const items1: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    }
]


const Beauty: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column'>
                    <List header="Make up" style={{ color: "purple" }}>
                        <List.Item> Face</List.Item>
                        <List.Item> Eyes</List.Item>
                        <List.Item> Lips</List.Item>
                        <List.Item> Nails</List.Item>
                    </List>
                </Flex>
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "" }}>
                    <List header="Wellness" style={{ color: "purple" }}>
                        <List.Item> Sanitizers</List.Item>
                        <List.Item>Oral Care</List.Item>
                        <List.Item> Feminine Hygiene</List.Item>
                    </List>
                </Flex></a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header='Skincare' style={{ color: "purple" }}>
                        <List.Item> Deodrants</List.Item>
                    </List>
                </Flex></a>
        ),
    },

]

const Bags: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column'>
                    <List header='Women Bags' style={{ color: "purple" }}>
                        <List.Item> All Women Bags</List.Item>
                        <List.Item> Handbags</List.Item>
                        <List.Item> Clutches</List.Item>
                        <List.Item> Slingbags</List.Item>
                    </List>
                </Flex>
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "" }}>
                    <List header='Men Bags' style={{ color: "purple" }}>
                        <List.Item> All Men Bags</List.Item>
                        <List.Item>Men Wallets</List.Item>
                    </List>
                </Flex></a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header='Men Footwear' style={{ color: "purple" }}>
                        <List.Item> Sports Shoes</List.Item>
                        <List.Item> Casual Shoes</List.Item>
                        <List.Item> Formal Shoes</List.Item>
                        <List.Item> Sandals</List.Item>
                    </List>
                </Flex></a>
        ),
    },
    {
        key: '4 ',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header='Women Footwear' style={{ color: "purple" }}>
                        <List.Item> Flats</List.Item>
                        <List.Item> Bellies</List.Item>
                        <List.Item> Juttis</List.Item>
                    </List>
                </Flex></a>
        ),
    },

]

const Kitchen: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column'>
                    <List header='Home Furnishing' style={{ color: "purple" }}>
                        <List.Item> Bedsheets</List.Item>
                        <List.Item> Doormats</List.Item>
                        <List.Item> Curtains & Sheers</List.Item>
                        <List.Item>Cushions & Cushion Covers</List.Item>
                        <List.Item>Mattress Protectors</List.Item>
                    </List>
                </Flex>
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "" }}>
                    <List header='Home Decor' style={{ color: "purple" }}>
                        <List.Item> All Home Decor</List.Item>
                        <List.Item>stickers</List.Item>
                        <List.Item> Clocks</List.Item>
                        <List.Item> Showpieces</List.Item>
                    </List>
                </Flex></a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header='Kitchen & Dining' style={{ color: "purple" }}>
                        <List.Item> Kitchen Storage</List.Item>
                        <List.Item> Cookware & Bakeware</List.Item>
                    </List>
                </Flex></a>
        ),
    },

]

const Kids: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column'>
                    <List header='Boys & Girls 2+ Years' style={{ color: "purple" }}>
                        <List.Item> Dresses</List.Item>

                    </List>
                </Flex>
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "" }}>
                    <List header='Infant 0-2 years' style={{ color: "purple" }}>
                        <List.Item> Rompers</List.Item>

                    </List>
                </Flex></a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header='Toys & Accessories' style={{ color: "purple" }}>
                        <List.Item> Soft Toys</List.Item>
                        <List.Item> Footwear</List.Item>
                        <List.Item> Stationery</List.Item>
                        <List.Item> Watches</List.Item>
                        <List.Item> Bags & Backpacks</List.Item>
                    </List>
                </Flex></a>
        ),
    },
    {
        key: '4 ',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header='Baby Care' style={{ color: "purple" }}>
                        <List.Item> <h6 ><b></b></h6></List.Item>
                        <List.Item> All Baby Care</List.Item>

                    </List>
                </Flex></a>
        ),
    },

]

const WomenWestern: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column'>
                    <List header='Topwear' style={{ color: "purple" }}>
                        <List.Item> Tops</List.Item>
                        <List.Item> Dresses</List.Item>
                        <List.Item> Sweaters</List.Item>
                        <List.Item> Jumpsuits</List.Item>

                    </List>
                </Flex>
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "" }}>
                    <List header='Bottomwear' style={{ color: "purple" }}>
                        <List.Item> Jeans</List.Item>
                        <List.Item> Jeggings</List.Item>
                        <List.Item> Palazzos</List.Item>
                        <List.Item> Shorts</List.Item>
                        <List.Item> Skirts</List.Item>
                    </List>
                </Flex></a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header='Innerwear' style={{ color: "purple" }}>
                        <List.Item> Bra</List.Item>
                        <List.Item> Briefs</List.Item>
                    </List>
                </Flex></a>
        ),
    },
    {
        key: '4 ',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header='Sleepwear' style={{ color: "purple" }}>
                        <List.Item> Nightsuits</List.Item>
                        <List.Item> Babydolls</List.Item>
                    </List>
                </Flex></a>
        ),
    },

]


const WomenEthnic: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column'>
                    <List header='All Women Ethnic' style={{ color: "purple" }}>
                        <List.Item> View All</List.Item>

                    </List>
                </Flex>
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "" }}>
                    <List header='Sarees' style={{ color: "purple" }}>
                        <List.Item> All Sarees</List.Item>
                        <List.Item> Silk Sarees</List.Item>
                        <List.Item> Cotton Silk Sarees</List.Item>
                        <List.Item> Cotton Sarees</List.Item>
                        <List.Item> Georgette Sarees</List.Item>
                        <List.Item> Chiffon Sarees</List.Item>
                        <List.Item> Satin Sarees</List.Item>
                        <List.Item> Embroidered Sarees</List.Item>
                    </List>
                </Flex></a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header='Kurtis' style={{ color: "purple" }}>
                        <List.Item> All Kurtis</List.Item>
                        <List.Item> Anarkali Kurtis</List.Item>
                        <List.Item> Rayon Kurtis</List.Item>
                        <List.Item> Cotton Kurtis</List.Item>
                        <List.Item> Embroidered Kurtis</List.Item>
                    </List>
                </Flex></a>
        ),
    },
    {
        key: '4 ',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header='Kurta Sets' style={{ color: "purple" }}>
                        <List.Item> All Kurta Sets</List.Item>

                    </List>
                </Flex></a>
        ),
    },
    {
        key: '5 ',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header='Suits & Dress Material' style={{ color: "purple" }}>
                        <List.Item> All Suits & Dress Material</List.Item>
                        <List.Item> Cotton Suits</List.Item>
                        <List.Item> Embroidred Suits</List.Item>
                        <List.Item> Chanderi Suits</List.Item>
                    </List>
                </Flex></a>
        ),
    },
    {
        key: '6 ',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header='Other Ethnic' style={{ color: "purple" }}>
                        <List.Item> Blouses</List.Item>
                        <List.Item> Dupattas</List.Item>
                        <List.Item> Lehanga</List.Item>
                        <List.Item> Gown</List.Item>
                        <List.Item> Ethnic Bottomwear</List.Item>
                    </List>
                </Flex></a>
        ),
    },

]

const Men: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column'>
                    <List header='Top Wear' style={{ color: "purple" }}>
                        <List.Item> All Top Wear</List.Item>
                        <List.Item> Tshirts</List.Item>
                        <List.Item> Shirts</List.Item>

                    </List>
                </Flex>
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "" }}>
                    <List header='Bottom Wear' style={{ color: "purple" }}>
                        <List.Item> Track Pants</List.Item>
                        <List.Item> Jeans</List.Item>
                        <List.Item> Trousers</List.Item>

                    </List>
                </Flex></a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header='Men Accessories' style={{ color: "purple" }}>
                        <List.Item> All Men Accessories</List.Item>
                        <List.Item> Watches</List.Item>
                        <List.Item> Belts</List.Item>
                        <List.Item> Wallets</List.Item>
                        <List.Item> Jewellery</List.Item>
                        <List.Item> Sunglasses</List.Item>
                        <List.Item> Bags</List.Item>
                    </List>
                </Flex></a>
        ),
    },
    {
        key: '4 ',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header='Men Footwear' style={{ color: "purple" }}>
                        <List.Item> Casual Shoes</List.Item>
                        <List.Item> Sports Shoes</List.Item>
                        <List.Item> Sandals</List.Item>
                        <List.Item> Formal Shoes</List.Item>
                    </List>
                </Flex></a>
        ),
    },
    {
        key: '5 ',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header='Ethnic Wear' style={{ color: "purple" }}>
                        <List.Item> Men Kurtas</List.Item>
                        <List.Item> Ethnic Jackets</List.Item>

                    </List>
                </Flex></a>
        ),
    },
    {
        key: '6 ',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{ display: "flex", width: "" }}>

                <Flex dir='column' style={{ minWidth: "1%" }}>
                    <List header='Inner & Sleep Wear' style={{ color: "purple" }}>
                        <List.Item> All Inner & Sleep Wear</List.Item>
                        <List.Item> Vests</List.Item>

                    </List>
                </Flex></a>
        ),
    },

]

const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);

const Headerr: React.FC = () => {

    const { token } = useToken();
    const contentStyle: React.CSSProperties = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
        minWidth: '850px',
    };

    const menuStyle: React.CSSProperties = {
        width: "90vw",
        display: "flex",

        // justifyContent: "space-between",

        boxShadow: 'none',
    };

    const JewelleryStyle: React.CSSProperties = {

        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        //height: " 60vh",

        //justifyContent: "space-around",

        boxShadow: 'none',
    };

    const BeautyStyle: React.CSSProperties = {

        width: "80%",
        display: "flex",
        alignItems: "flex-start",
        //height: " 60vh",
        //minWidth: "-10%",
        //justifyContent: "space-around",

        boxShadow: 'none',
    };
    const HomeKitchen: React.CSSProperties = {

        width: "80%",
        display: "flex",
        alignItems: "flex-start",
        //height: " 60vh",
        //minWidth: "-10%",
        //justifyContent: "space-around",

        boxShadow: 'none',
    };

    return (

        <main >
            <Flex justify='space-around' align='center'>


                <Header style={{ display: 'flex', alignItems: 'center', width: '100%', background: 'white' }}>
                    <svg viewBox="0 0 156 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="156" height="36" className="sc-csDkEv fVBIaS"><g clip-path="url(#meeshoLogo_svg__a)"><path fill="#fff" d="M0 0h156v36H0z"></path><path d="M56.307 23.698c.38-.29.568-.707.568-1.253 0-1.731-.237-3.288-.707-4.675-.47-1.383-1.154-2.56-2.053-3.535a8.967 8.967 0 0 0-3.235-2.232c-1.262-.515-2.685-.774-4.264-.774-2.157 0-4.08.492-5.767 1.48-1.687.99-3.007 2.35-3.969 4.08-.957 1.732-1.436 3.755-1.436 6.063 0 2.372.492 4.42 1.481 6.157.989 1.731 2.394 3.069 4.22 4.013 1.825.944 3.995 1.414 6.518 1.414 1.186 0 2.47-.161 3.852-.479 1.383-.318 2.604-.814 3.669-1.48.546-.336.935-.73 1.163-1.186.228-.457.313-.904.25-1.347a2.007 2.007 0 0 0-.523-1.119c-.29-.304-.675-.478-1.163-.523-.488-.045-1.047.112-1.687.479a9.65 9.65 0 0 1-2.805 1.024c-.989.197-1.88.295-2.667.295-2.281 0-4.004-.613-5.176-1.847-.926-.976-1.481-2.358-1.673-4.125h13.78c.707 0 1.244-.144 1.624-.43Zm-12.72-7.705c.895-.595 1.982-.89 3.262-.89 1.154 0 2.12.25 2.894.752.774.5 1.37 1.226 1.777 2.165.34.783.532 1.732.59 2.828H40.93c.107-.864.304-1.655.603-2.349.475-1.078 1.16-1.915 2.054-2.505ZM81.13 23.698c.38-.29.568-.707.568-1.253 0-1.731-.237-3.288-.707-4.675-.47-1.383-1.154-2.56-2.054-3.535a8.966 8.966 0 0 0-3.234-2.232c-1.262-.515-2.685-.774-4.264-.774-2.157 0-4.08.492-5.767 1.48-1.687.99-3.007 2.35-3.969 4.08-.957 1.732-1.436 3.755-1.436 6.063 0 2.372.492 4.42 1.48 6.157.99 1.731 2.394 3.069 4.22 4.013 1.825.944 3.995 1.414 6.519 1.414 1.185 0 2.47-.161 3.852-.479 1.383-.318 2.604-.814 3.669-1.48.546-.336.935-.73 1.163-1.186.228-.457.313-.904.25-1.347a2.008 2.008 0 0 0-.523-1.119c-.29-.304-.675-.478-1.163-.523-.488-.045-1.047.112-1.687.479a9.65 9.65 0 0 1-2.805 1.024c-.989.197-1.88.295-2.667.295-2.282 0-4.004-.613-5.176-1.847-.931-.976-1.481-2.358-1.674-4.125h13.78c.703 0 1.245-.144 1.625-.43Zm-12.72-7.705c.895-.595 1.982-.89 3.261-.89 1.155 0 2.121.25 2.895.752.774.5 1.37 1.226 1.776 2.165.34.783.533 1.732.591 2.828h-11.18c.106-.864.303-1.655.603-2.349.47-1.078 1.154-1.915 2.054-2.505ZM97.993 21.394l-4.559-.868c-.881-.152-1.535-.438-1.96-.868-.425-.425-.64-.957-.64-1.597 0-.85.358-1.535 1.07-2.054.716-.514 1.816-.774 3.306-.774.792 0 1.62.108 2.483.318.868.215 1.772.564 2.712 1.047.514.241.98.326 1.391.25a1.71 1.71 0 0 0 1.025-.595 2.47 2.47 0 0 0 .546-1.096 1.975 1.975 0 0 0-.112-1.208c-.166-.394-.479-.716-.935-.957a13.835 13.835 0 0 0-3.396-1.347c-1.173-.29-2.425-.434-3.763-.434-1.852 0-3.494.29-4.926.868-1.427.577-2.546 1.4-3.351 2.46-.805 1.066-1.208 2.327-1.208 3.786 0 1.61.492 2.926 1.48 3.942.99 1.02 2.426 1.709 4.31 2.076l4.559.867c.94.184 1.646.466 2.12.842.47.38.707.921.707 1.62 0 .818-.358 1.48-1.07 1.981-.715.501-1.798.752-3.26.752-1.034 0-2.081-.112-3.146-.34-1.065-.228-2.206-.63-3.418-1.208-.488-.242-.936-.318-1.347-.228-.412.09-.747.29-1.002.59-.26.305-.412.662-.457 1.074a2.24 2.24 0 0 0 .228 1.23c.197.412.542.77 1.025 1.07 1.154.671 2.46 1.14 3.92 1.414 1.458.273 2.84.411 4.147.411 2.886 0 5.199-.63 6.93-1.892 1.732-1.262 2.6-3.002 2.6-5.222 0-1.642-.51-2.948-1.526-3.919-1.011-.957-2.51-1.624-4.483-1.99ZM125.603 12.32c-1.155-.666-2.631-1.002-4.421-1.002-1.794 0-3.396.416-4.81 1.253a7.254 7.254 0 0 0-2.483 2.443V4.437c0-.944-.25-1.656-.751-2.143-.501-.488-1.208-.73-2.121-.73s-1.611.242-2.099.73c-.487.487-.729 1.199-.729 2.143v27.082c0 .944.242 1.664.729 2.165.488.501 1.186.752 2.099.752 1.915 0 2.872-.97 2.872-2.917v-9.986c0-1.732.492-3.123 1.481-4.17.989-1.047 2.318-1.575 3.991-1.575 1.369 0 2.38.393 3.034 1.185.653.792.979 2.054.979 3.786v10.76c0 .944.251 1.664.752 2.165.501.501 1.208.752 2.121.752s1.611-.25 2.098-.752c.488-.5.729-1.221.729-2.165V20.486c0-2.067-.29-3.777-.867-5.128-.582-1.355-1.446-2.367-2.604-3.038ZM150.618 12.642c-1.7-.944-3.709-1.413-6.018-1.413-1.731 0-3.297.268-4.698.796-1.396.532-2.599 1.306-3.601 2.326-1.003 1.02-1.772 2.233-2.305 3.647-.532 1.414-.796 3.015-.796 4.81 0 2.37.47 4.429 1.414 6.178.939 1.75 2.264 3.092 3.968 4.036 1.701.944 3.709 1.414 6.018 1.414 1.732 0 3.297-.269 4.698-.797 1.396-.532 2.599-1.306 3.602-2.326 1.002-1.02 1.771-2.242 2.304-3.669.532-1.427.796-3.038.796-4.832 0-2.371-.47-4.42-1.414-6.156-.944-1.736-2.264-3.074-3.968-4.014Zm-1.07 14.201c-.469 1.079-1.132 1.893-1.982 2.439-.85.546-1.838.818-2.961.818-1.701 0-3.07-.613-4.103-1.847-1.034-1.23-1.548-3.047-1.548-5.45 0-1.61.237-2.957.707-4.036.469-1.078 1.132-1.883 1.982-2.416.85-.532 1.839-.796 2.962-.796 1.7 0 3.069.6 4.102 1.799 1.034 1.199 1.548 3.015 1.548 5.45 0 1.614-.237 2.961-.707 4.04ZM15.512 34.431c-1.387 0-2.555-1.167-2.555-2.554V20.18c.013-2.165-1.79-3.915-3.924-3.879-2.134-.036-3.932 1.718-3.924 3.88v11.695a2.557 2.557 0 0 1-2.554 2.554C1.18 34.431 0 33.246 0 31.877V20.22a8.993 8.993 0 0 1 2.649-6.389 8.998 8.998 0 0 1 6.384-2.648 9.012 9.012 0 0 1 6.483 2.742A8.997 8.997 0 0 1 22 11.184a8.982 8.982 0 0 1 6.385 2.648 9.008 9.008 0 0 1 2.649 6.39v11.654c0 1.37-1.181 2.555-2.555 2.555a2.557 2.557 0 0 1-2.555-2.554V20.18c.014-2.165-1.79-3.915-3.924-3.879-2.134-.036-3.932 1.718-3.923 3.88v11.695c-.01 1.387-1.177 2.554-2.564 2.554Z" fill="#570D48"></path></g><defs><clipPath id="meeshoLogo_svg__a"><rect width="100%" height="100%" fill="#fff"></rect></clipPath></defs></svg>
                    <Search
                        style={{ width: '25%', paddingLeft: "15px" }}
                        placeholder="Try Saree, Kurti or Search by Product Code"
                        allowClear

                        size="large"
                        onSearch={onSearch}
                    />
                    <Menu
                        //theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={items}
                        style={{ flex: 1, minWidth: 0, justifyContent: 'space-around', alignItems: "center" }}
                    />
                </Header>

                <Dropdown
                    menu={{
                        items: items1
                    }}

                    dropdownRender={(menu) => (
                        <div
                            style=
                            {contentStyle}
                        >
                            {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
                            <Divider style={{ margin: 0 }} />
                            <Space style={{ padding: 8 }}>
                                <Button type="primary">Click me!</Button>
                            </Space>
                        </div>
                    )}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>

                        </Space>
                    </a>
                </Dropdown>




            </Flex>

            <ul className='header-list'>
                <li>
                    <Flex>
                        <Dropdown menu={{ items: WomenEthnic }}
                            dropdownRender={(menu) => (
                                <div
                                    style=
                                    {contentStyle}
                                >
                                    {React.cloneElement(menu as React.ReactElement, { style: HomeKitchen })}

                                </div>
                            )}

                        >
                            <Typography style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>Women Ethnic</Typography>

                        </Dropdown>
                    </Flex>
                </li>
                <li>
                    <Flex>
                        <Dropdown menu={{ items: WomenWestern }}
                            dropdownRender={(menu) => (
                                <div
                                    style=
                                    {contentStyle}
                                >
                                    {React.cloneElement(menu as React.ReactElement, { style: HomeKitchen })}

                                </div>
                            )}

                        >
                            <Typography style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>Women Western</Typography>

                        </Dropdown>
                    </Flex>
                </li>

                <li>
                    <Flex>
                        <Dropdown menu={{ items: Men }}
                            dropdownRender={(menu) => (
                                <div
                                    style=
                                    {contentStyle}
                                >
                                    {React.cloneElement(menu as React.ReactElement, { style: HomeKitchen })}

                                </div>
                            )}

                        >
                            <Typography style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>Men</Typography>

                        </Dropdown>
                    </Flex>
                </li>

                <li>
                    <Flex>
                        <Dropdown menu={{ items: Kids }}
                            dropdownRender={(menu) => (
                                <div
                                    style=
                                    {contentStyle}
                                >
                                    {React.cloneElement(menu as React.ReactElement, { style: HomeKitchen })}

                                </div>
                            )}

                        >
                            <Typography style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>Kids</Typography>

                        </Dropdown>
                    </Flex>
                </li>
                {/* <li>
                    <Popover content={items} title="Title" >
                        <Button type="primary">Hover me</Button>
                    </Popover>
                </li> */}

                <li>
                    <Flex>
                        <Dropdown menu={{ items: Kitchen }}
                            dropdownRender={(menu) => (
                                <div
                                    style=
                                    {contentStyle}
                                >
                                    {React.cloneElement(menu as React.ReactElement, { style: HomeKitchen })}

                                </div>
                            )}

                        >
                            <Typography style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>Home & Kitchen</Typography>

                        </Dropdown>
                    </Flex>
                </li>

                <li>
                    <Flex>
                        <Dropdown menu={{ items: Beauty }}
                            dropdownRender={(menu) => (
                                <div
                                    style=
                                    {contentStyle}
                                >
                                    {React.cloneElement(menu as React.ReactElement, { style: BeautyStyle })}

                                </div>
                            )}

                        >
                            <Typography style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>Beauty & Health</Typography>

                        </Dropdown>
                    </Flex>
                </li>

                <li>
                    <Flex>
                        <Dropdown menu={{ items: Jewellery }}
                            dropdownRender={(menu) => (
                                <div
                                    style=
                                    {contentStyle}
                                >
                                    {React.cloneElement(menu as React.ReactElement, { style: JewelleryStyle })}
                                    {/* <Divider style={{ margin: 0 }} />
                                    <Space style={{ padding: 8 }}>
                                    
                                    </Space> */}
                                </div>
                            )}

                        >
                            <Typography style={{ display: "flex", gap: "5px", flexDirection: "row", alignItems: "center" }}>Jewellery & Accessories</Typography>

                        </Dropdown>
                    </Flex>
                </li>

                <li>
                    <Flex>
                        <Dropdown menu={{ items: Bags }}
                            dropdownRender={(menu) => (
                                <div
                                    style=
                                    {contentStyle}
                                >
                                    {React.cloneElement(menu as React.ReactElement, { style: BeautyStyle })}

                                </div>
                            )}

                        >
                            <Typography style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>Bags & Footwear</Typography>

                        </Dropdown>
                    </Flex>
                </li>

                <li>
                    <Flex>
                        <Dropdown menu={{ items: Electronics }}
                            dropdownRender={(menu) => (
                                <div
                                    style=
                                    {contentStyle}
                                >
                                    {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
                                    {/* <Divider style={{ margin: 0 }} />
                                    <Space style={{ padding: 8 }}>
                                    
                                    </Space> */}
                                </div>
                            )}

                        >
                            <Typography style={{ display: "flex", gap: "5px", flexDirection: "row", alignItems: "center" }}>Electronics</Typography>

                        </Dropdown>
                    </Flex>
                </li>


            </ul>
        </main >
    );
}

export default Headerr;