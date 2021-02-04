import React from "react";
import { Layout, Icon, Avatar, Popover } from "antd";
import { inject, observer } from "mobx-react";
//import "./Header.scss";

import "../../../Assets/css/style.css";
import "../../../Assets/css/icons.css";
import "../../../Assets/css/spacing.css";
import "../../../Assets/css/owlcarousel.css";
import "../../../Assets/css/utilities.css";

import search from "../../../Assets/images/haeder/search.svg";

const { Header } = Layout;

const MainHeader = ({ globals }) => {
  const logout = () => {
    globals.setLogin(false)
  }
  const content = (
    <div>
      <span style={{ cursor: "pointer" }} onClick={logout}>
        Logout
      </span>
    </div>
  );
  return (
  // <Header collapsible collapsed={globals.collapsed} className="header" >
  //   <Icon
  //    className="trigger"
  //    type={globals.collapsed ? "menu-unfold" : "menu-fold"}
  //    onClick={globals.toggle}
  //   />
  //   <div className="user-avt">
  //     <Popover placement="bottom" content={content} trigger="click">
  //       <Avatar icon="user" />
  //     </Popover>
  //   </div>
  // </Header>

  <div class="bg-white rounded-pill d-flex p-3">
  <div class="input-group-overlay w-100">
     <div class="input-group-append-overlay"><span class="input-group-text"><img src={search} alt=""/></span></div>
     <input class="form-control appended-form-control rounded-pill" type="text" placeholder="Name, Specialization or Invite Code"/>
  </div>
  <ul class="navbar-nav flex-row ml-auto top-profile align-items-center">
     <li class="nav-item">
        <a class="nav-link notifiction" href="javscript:void(0)">
           <img src="images/haeder/notifiction-show.svg" alt=""/>
        </a>
     </li>
     <li class="nav-item dropdown profile-condition">
        <a class="nav-link dropdown-toggle d-flex align-items-center" href="javscript:void(0)" id="profile-tabs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           <div class="profile-pic">
              <img class="rounded-circle" src="images/haeder/profile_pic.png" alt=""/>
           </div>
           <h4 class="profile-name">WishyWave Clinic</h4>
        </a>
        <div class="dropdown-menu" aria-labelledby="profile-tabs">
           <a class="dropdown-item" href="javscript:void(0)">Action</a>
           <a class="dropdown-item" href="javscript:void(0)">Another action</a>
           <a class="dropdown-item" href="javscript:void(0)">Something else here</a>
        </div>
     </li>
  </ul>
</div>
  );
};

export default inject('globals')(observer(MainHeader));
