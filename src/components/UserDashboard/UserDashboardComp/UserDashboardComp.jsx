import React from 'react';
import {render} from 'react-dom';

import EditInfoModal from '../EditInfoModal/EditInfoModal.jsx';
import './UserDashboardComp.css';
import {getCustomerInfo} from '../../../services/dashboardService.js';



class UserDashboardComp extends React.Component{

    componentWillMount() {
        getCustomerInfo().then(res => {
            res = res[0]
            this.setState({
              name: res.name,
              email: res.email,
              phone: res.phone,
              fb: res.fb
            })
        })
    }

  constructor(props) {
    super(props)
    this.state = {
        updateModal: false
    }
    this.updateClick = this.updateClick.bind(this);
    this.handleUpdateClose = this.handleUpdateClose.bind(this);
  }


  updateClick() {
      this.setState({
          updateModal: true
      })
  }

  handleUpdateClose() {
      this.setState({
          updateModal: false
      })
  }




    render(){
        return (
            <div className="userdash-wrapper">

                <div className="userdash-sideanduser-container">
                    <section className="userdash-sidebar-container">

                        <div className="userdash-sidebar-innerbox">
                            <div className="userdash-user-pic-container">
                                    <img src="./img/userdash/screaming-kid1.jpg"/>
                                <div className="userdash-sidebar-item-container">
                                    <div className="userdash-sidebar-item">
                                        <i className="material-icons userdash-icons">nature_people</i><span>User</span>
                                    </div>
                                    <div className="userdash-sidebar-item">
                                        <i className="material-icons userdash-icons">help_outline</i><a href="#">Help</a>
                                    </div>
                                </div>
                            </div>

                            <h4 className="userdash-welcome">Welcome {this.state.fb}!</h4>
                        </div>
                    </section>


                    <section className="userdash-user-container">
                        <div className="userdash-user-innerbox">
                            <div className="userdash-user-title"><i className="material-icons userdash-icons-title">blur_on</i>User Dashboard</div>
                            <div className="userdash-user-infobox">
                                <div className="userdash-icon-box">

                                    <i className="material-icons userdash-icons">portrait</i>
                                </div>
                                <div className="userdash-user-info">{this.state.name}</div>
                            </div>
                            <div className="userdash-user-infobox">
                                <div className="userdash-icon-box">
                                    <i className="material-icons userdash-icons">phone_iphone</i>
                                </div>
                                <div className="userdash-user-info">{this.state.phone}</div>
                            </div>
                            <div className="userdash-user-infobox">
                                <div className="userdash-icon-box">
                                    <i className="material-icons userdash-icons">mail_outline</i>
                                </div>
                                <div className="userdash-user-info">{this.state.email}</div>
                            </div>


                            <div className="userdash-user-ridesrequest-box">
                                <div className="userdash-user-rides">
                                    <div className="userdash-icon-box">
                                        <i className="material-icons userdash-icons">directions_car</i>
                                    </div>
                                    <span className="userdash-ridenumber"> 5</span>
                                </div>
                                <div className="userdash-user-comments">
                                    <div className="userdash-icon-box">
                                        <i className="material-icons userdash-icons">subject</i>
                                    </div>
                                    <textarea className="userdash-textarea" placeholder="Comments"></textarea>
                                </div>

                            </div>
                            <div>
                                <button className="userdash-updateinfo-btn btn btn-primary" onClick={this.updateClick}>Update Info</button>
                            </div>
                            {this.state.updateModal ? <EditInfoModal handleUpdateClose={this.handleUpdateClose}/> : null}

                        </div>
                    </section>

                </div>

            </div>
        );
    }
};

export default UserDashboardComp;
