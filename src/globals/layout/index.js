import React from "react";
import { observer } from "mobx-react";
import { Layout } from "antd";
import Header from "./header";
import Sider from "./sider";
import FilamentSection from "./FilamentSection";
import AppoinmentSection from "./AppoinmentsSection";
import "./MainLayout.scss";

const { Content } = Layout;

const MainLayout = ({ children }) => {
    return (
        <div class="dashboard-full">
            <Sider />
            <div class="content-wrapper">
            <Header />
            <FilamentSection />
            <AppoinmentSection />
            </div>
       </div>
    );
};

export default observer(MainLayout);