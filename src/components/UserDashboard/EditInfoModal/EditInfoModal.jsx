import React from 'react';
import './EditInfoModal.css';

class EditInfoModal extends React.Component{

    handleUpdateClose(){
        var self = this;
        self.props.handleUpdateClose()
    }

    render(){
        return (
            <div>
                <div className="editinfo-modal">
                    <div className="editinfo-info-container">
                        <div className="editinfo-logo-container">
                            <img className="editinfo-logo" src="./img/LYFT_LOGO/SVG/lyft_pixel.svg"/>
                        </div>
                        <div className="editinfo-update-container">
                            <form>
                                <div className="editinfo-update-content">
                                    <input type="text" value="Update Name"/>
                                </div>
                                <div className="editinfo-update-content">
                                    <input type="text" value="Update Name"/>
                                </div>
                                <div className="editinfo-update-content">
                                    <input type="text" value="Update Name"/>
                                </div>
                                <div className="editinfo-update-btn-container">
                                    <input className="editinfo-update-btn" type="submit" value="Update" onClick={this.handleUpdateClose.bind(this)}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default EditInfoModal;
