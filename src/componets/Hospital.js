import React from "react"
import PropTypes from "prop-types";

function Hospital( {address, centerName,centerType,createdAt,facilityName,id,lat,lng,org,phoneNumber,sido,updatedAt,zipCode}){

    return(
        <div>
            <h3>{address}</h3>
            <h3>{centerName}</h3>
            <h3>{centerType}</h3>
            <h3>{createdAt}</h3>
            <h3>{facilityName}</h3>
            <h3>{id}</h3>
            <h3>{lat}</h3>
            <h3>{lng}</h3>
            <h3>{org}</h3>
            <h3>{phoneNumber}</h3>
            <h3>{sido}</h3>
            <h3>{updatedAt}</h3>
            <h3>{zipCode}</h3>
                <br/><br/>
        </div>
    );
}
Hospital.prototype = {
        address : PropTypes.string.isRequired,
        centerName : PropTypes.string.isRequired,
        createdAt : PropTypes.string.isRequired,
        facilityName : PropTypes.string.isRequired,
        id : PropTypes.string.isRequired,
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
        org: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        sido: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
        zipCode: PropTypes.string.isRequired,
};

export default Hospital;
