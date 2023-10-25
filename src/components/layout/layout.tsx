import { Layout } from 'antd';
import Footer from './components/footer';
import MainRoutes from './components/mainRoutes';
import styles from './layout.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const { Header, Content } = Layout;

const LayoutPage = () => {
    return (
        <div className={cx("layout-root")} >
            <Header className={cx('header')}  >Header</Header>
            <Content className={cx('content')} >
                <div>
                    <MainRoutes />
                </div>
            </Content>
            <Footer />
        </div>
    )
};

export default LayoutPage;