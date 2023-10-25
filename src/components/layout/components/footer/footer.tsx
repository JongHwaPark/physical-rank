import { MailOutlined } from '@ant-design/icons';
import { FaRankingStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import { Layout, Menu } from 'antd';
import './footer.scss'

const Footer = () => {
    return (
        <Layout.Footer className={'footer'}>
            <Menu mode="horizontal" className={'menu'}>
                <Menu.Item key={1} icon={<FaRankingStar />}>
                    <NavLink
                        to="/rank"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Rank
                    </NavLink>
                </Menu.Item>
                <Menu.Item key={2} icon={<MailOutlined />}>

                    <NavLink
                        to="/result"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Result
                    </NavLink>
                </Menu.Item>
                <Menu.Item key={3} icon={<MailOutlined />}>asd</Menu.Item>
                <Menu.Item key={4} icon={<MailOutlined />}>asd</Menu.Item>
            </Menu>
        </Layout.Footer>
    )
};

export default Footer;