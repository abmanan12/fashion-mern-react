import React from 'react';

import { Link } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const { Header, Content, Footer, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {

    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 2 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});

const Home = () => {

    const year = new Date().getFullYear();
    const { user } = useSelector(state => state.AuthReducer?.authData)
    const { token: { colorBgContainer }, } = theme.useToken();

    return (
        <Layout>

            <Header className='d-flex align-items-center bg-green'>
                <div className='text-light'>{user?.name}</div>
            </Header>

            <Content style={{ padding: '0 50px' }}>

                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to='/' className='ms-5 text-green footer-link'>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>

                <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
                    <Sider
                        style={{ background: colorBgContainer }} width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{
                                height: '100%',
                            }}
                            items={items2} />
                    </Sider>

                    <Content
                        style={{ padding: '0 24px', minHeight: 280 }}>Content
                    </Content>
                </Layout>
            </Content>

            <Footer
                style={{ textAlign: 'center' }}>
                Copyright ©{year}. Abdul Manan
            </Footer>

        </Layout>
    );
};


export default Home;


// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// export default function Home() {

//     const { user } = useSelector(state => state.AuthReducer?.authData)

//     return (
//         <>

//             <header className='dashboard'>

//                 <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">

//                     <div className='pt-5 text-muted'>
//                         <Link to='/' className='ms-5 text-green footer-link'>Home</Link> / Dashboard
//                     </div>

//                     <div class="position-sticky">
//                         <div class="list-group list-group-flush mx-3 mt-4">
//                             <ul id="collapseExample1" class="collapse show list-group list-group-flush">
//                                 <li class="list-group-item py-3">
//                                     <a href="" class="link text-reset">List Product</a>
//                                 </li>
//                                 <li class="list-group-item py-3">
//                                     <a href="" class="link text-reset">Create Product</a>
//                                 </li>
//                                 <li class="list-group-item py-3">
//                                     <a href="" class="link text-reset">Edit Product</a>
//                                 </li>
//                             </ul>

//                             {/* <ul id="collapseExample2" class="collapse list-group list-group-flush">
//                                 <li class="list-group-item py-3">
//                                     <a href="" class="link text-reset">Link</a>
//                                 </li>
//                                 <li class="list-group-item py-3">
//                                     <a href="" class="link text-reset">Link</a>
//                                 </li>
//                                 <li class="list-group-item py-3">
//                                     <a href="" class="link text-reset">Link</a>
//                                 </li>
//                                 <li class="list-group-item py-3">
//                                     <a href="" class="link text-reset">Link</a>
//                                 </li>
//                             </ul> */}
//                         </div>
//                     </div>
//                 </nav>

//                 <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-green fixed-top">

//                     <div class="container-fluid">
//                         <div className='d-flex align-items-center'>
//                             <Link to='/' class="navbar-brand">
//                                 <img src="/assets/images/logo.png" alt="Logo" width="140" height="60" />
//                             </Link>

//                             <div className='text-start'>{user?.name}</div>
//                         </div>
//                     </div>

//                 </nav>

//             </header>

//             <main style={{ marginTop: '58px' }}>
//                 <div class="container pt-4"></div>
//             </main>

//         </>
//     )
// }
