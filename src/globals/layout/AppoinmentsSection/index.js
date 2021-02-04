import React from "react";
import { Layout} from "antd";
import { inject, observer } from "mobx-react";
//import "./Header.scss";

import ImagePatient1 from "../../../Assets/images/dashboard/patient_1.png";
import ImagePatient2 from "../../../Assets/images/dashboard/patient_2.png";
import ImagePatient3 from "../../../Assets/images/dashboard/patient_3.png";
import ImagePatient4 from "../../../Assets/images/dashboard/patient_4.png";

import ImageDoctor1 from "../../../Assets/images/dashboard/doctor_1.png";
import ImageDoctor2 from "../../../Assets/images/dashboard/doctor_1.png";
import ImageDoctor3 from "../../../Assets/images/dashboard/doctor_1.png";
import ImageDoctor4 from "../../../Assets/images/dashboard/doctor_1.png";

import "../../../Assets/css/style.css";
import "../../../Assets/css/icons.css";
import "../../../Assets/css/spacing.css";
import "../../../Assets/css/owlcarousel.css";
import "../../../Assets/css/utilities.css";

import Carcel1 from "../../../Assets/Svg/carcel1";
import Carcel2 from "../../../Assets/Svg/carcel2";


const { Header } = Layout;

const AppoinmentSection = ({ globals }) => {
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


  <div class="appointments-full-section container-fluid mt-xl-5">
     <div class="row">
        
        <div class="col-xl-6">
           <div class="d-flex justify-content-between align-items-center px-0 py-4 border-bottom border-gray-7">
              <h2 class="title fw-700 text-accent mb-0">Upcoming Appointments</h2>
              <button type="button" class="btn more-btn">
                <Carcel1 />
              </button>
           </div>
           <div class="row">
            
              <div class="col-md-6">
                 <div class="bg-white bg-patient-list box-shadow-1x d-flex align-items-center mt-4">
                    <div class="patient-pic"><img src={ImagePatient1} alt=""/></div>
                    <div class="patient-content">
                       <h3 class="text-sky-bluedd fw-600 mb-0">Heidi Hansen</h3>
                       <p class="patient-id text-accent fw-500 my-1"><span class="text-muted">ID:</span> APP0258781001</p>
                       <div class="d-flex align-items-center">
                          <div class="patient-date d-flex align-items-center fw-500 text-muted">
                             <img src="im" alt=""/>
                             20th Feb 2020
                          </div>
                          <div class="patient-times d-flex align-items-center fw-500 text-accent">
                             <div class="time-icon"></div>
                             11:10 AM
                          </div>
                       </div>
                    </div>
                 </div>
                 <div class="bg-white bg-patient-list box-shadow-1x d-flex align-items-center mt-4">
                    <div class="patient-pic"><img src={ImagePatient2} alt=""/></div>
                    <div class="patient-content">
                       <h3 class="text-sky-bluedd fw-600 mb-0">Ricardo Garza</h3>
                       <p class="patient-id text-accent fw-500 my-1"><span class="text-muted">ID:</span> APP0258781001</p>
                       <div class="d-flex align-items-center">
                          <div class="patient-date d-flex align-items-center fw-500 text-muted">
                             <img src="im" alt=""/>
                             20th Feb 2020
                          </div>
                          <div class="patient-times d-flex align-items-center fw-500 text-accent">
                             <div class="time-icon"></div>
                             11:10 AM
                          </div>
                       </div>
                    </div>
                 </div>
                 <div class="bg-white bg-patient-list box-shadow-1x d-flex align-items-center mt-4">
                    <div class="patient-pic"><img src={ImagePatient3} alt=""/></div>
                    <div class="patient-content">
                       <h3 class="text-sky-bluedd fw-600 mb-0">Jannit Nguyen</h3>
                       <p class="patient-id text-accent fw-500 my-1"><span class="text-muted">ID:</span> APP0258781001</p>
                       <div class="d-flex align-items-center">
                          <div class="patient-date d-flex align-items-center fw-500 text-muted">
                             <img src="im" alt=""/>
                             20th Feb 2020
                          </div>
                          <div class="patient-times d-flex align-items-center fw-500 text-accent">
                             <div class="time-icon"></div>
                             11:10 AM
                          </div>
                       </div>
                    </div>
                 </div>
                 <div class="bg-white bg-patient-list box-shadow-1x d-flex align-items-center mt-4">
                    <div class="patient-pic"><img src={ImagePatient4} alt=""/></div>
                    <div class="patient-content">
                       <h3 class="text-sky-bluedd fw-600 mb-0">James Nguyen</h3>
                       <p class="patient-id text-accent fw-500 my-1"><span class="text-muted">ID:</span> APP0258781001</p>
                       <div class="d-flex align-items-center">
                          <div class="patient-date d-flex align-items-center fw-500 text-muted">
                             <img src="im" alt=""/>
                             20th Feb 2020
                          </div>
                          <div class="patient-times d-flex align-items-center fw-500 text-accent">
                             <div class="time-icon"></div>
                             11:10 AM
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
             
              <div class="col-md-6">
                 <div class="bg-white bg-patient-list box-shadow-1x d-flex align-items-center mt-4">
                    <div class="patient-pic"><img src={ImageDoctor1} alt=""/></div>
                    <div class="patient-content">
                       <h3 class="text-sky-bluedd fw-600 mb-0">Dr. Nathaniel James</h3>
                       <p class="patient-id text-accent fw-500 my-1"><span class="text-muted">ID:</span> APP0258781001</p>
                       <div class="d-flex align-items-center">
                          <div class="patient-date d-flex align-items-center fw-500 text-muted">
                             <img src="im" alt=""/>
                             20th Feb 2020
                          </div>
                          <div class="patient-times d-flex align-items-center fw-500 text-accent">
                             <div class="time-icon"></div>
                             11:10 AM
                          </div>
                       </div>
                    </div>
                 </div>
                 <div class="bg-white bg-patient-list box-shadow-1x d-flex align-items-center mt-4">
                    <div class="patient-pic"><img src={ImageDoctor2} alt=""/></div>
                    <div class="patient-content">
                       <h3 class="text-sky-bluedd fw-600 mb-0">Dr. Melanie Dixon</h3>
                       <p class="patient-id text-accent fw-500 my-1"><span class="text-muted">ID:</span> APP0258781001</p>
                       <div class="d-flex align-items-center">
                          <div class="patient-date d-flex align-items-center fw-500 text-muted">
                             <img src="im" alt=""/>
                             20th Feb 2020
                          </div>
                          <div class="patient-times d-flex align-items-center fw-500 text-accent">
                             <div class="time-icon"></div>
                             11:10 AM
                          </div>
                       </div>
                    </div>
                 </div>
                 <div class="bg-white bg-patient-list box-shadow-1x d-flex align-items-center mt-4">
                    <div class="patient-pic"><img src={ImageDoctor3} alt=""/></div>
                    <div class="patient-content">
                       <h3 class="text-sky-bluedd fw-600 mb-0">Dr. Jacob Curtis</h3>
                       <p class="patient-id text-accent fw-500 my-1"><span class="text-muted">ID:</span> APP0258781001</p>
                       <div class="d-flex align-items-center">
                          <div class="patient-date d-flex align-items-center fw-500 text-muted">
                             <img src="im" alt=""/>
                             20th Feb 2020
                          </div>
                          <div class="patient-times d-flex align-items-center fw-500 text-accent">
                             <div class="time-icon"></div>
                             11:10 AM
                          </div>
                       </div>
                    </div>
                 </div>
                 <div class="bg-white bg-patient-list box-shadow-1x d-flex align-items-center mt-4">
                    <div class="patient-pic"><img src={ImageDoctor4} alt=""/></div>
                    <div class="patient-content">
                       <h3 class="text-sky-bluedd fw-600 mb-0">Dr. Eileen Richards</h3>
                       <p class="patient-id text-accent fw-500 my-1"><span class="text-muted">ID:</span> APP0258781001</p>
                       <div class="d-flex align-items-center">
                          <div class="patient-date d-flex align-items-center fw-500 text-muted">
                             <img src="im" alt=""/>
                             20th Feb 2020
                          </div>
                          <div class="patient-times d-flex align-items-center fw-500 text-accent">
                             <div class="time-icon"></div>
                             11:10 AM
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
       
        <div class="col-xl-6">
           <div class="bg-white earning-section">
              <div class="d-flex justify-content-between align-items-center p-4 border-bottom border-gray-7">
                 <h2 class="title fw-700 text-accent mb-0">Total Earnings</h2>
                 <button type="button" class="btn more-btn">
                 <Carcel2 />
                 </button>
              </div>
              <img class="w-100 mb-4" src="images/dashboard/graph.png" alt=""/>
           </div>
        </div>
     </div>
  </div>
  );
};

export default inject('globals')(observer(AppoinmentSection));
