import React from "react";
import axios from "axios";
import Hospital from "../componets/Hospital";

const url = "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=Z9mbbFwKgOSX8VwnG8n2CsB1JA4yxzgH5F1Ptmr2jqbkzlTeHLTAUM%2BKuYcGf%2F7lBBqQXJAdN9hg0cFwenzBbg%3D%3D";
class Menu3 extends React.Component{
    state = {
        isLoading : true,
        data : []
    }

    getData = async()=>{
      const {data:{data}} = await axios.get(url);
      this.setState({data, isLoading : false});
    };

    componentDidMount(){
        this.getData();
    };
    render(){
        const {isLoading, data} = this.state;
        console.log(data);
        return (
            <scction className="container">
                {
                    isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                    ):(
                    <div className="">
                        {data.map(hospital => (
                         <Hospital
                             address = {hospital.address}
                             centerName = {hospital.centerName}
                             centerType = {hospital.centerType}
                             createdAt = {hospital.createdAt}
                             facilityName = {hospital.facilityName}
                             id = {hospital.id}
                             lat = {hospital.lat}
                             lng = {hospital.lng}
                             org = {hospital.org}
                             phoneNumber = {hospital.phoneNumber}
                             sido = {hospital.sido}
                             updatedAt = {hospital.updatedAt}
                             zipCode = {hospital.zipCode}
                         />
                        ))}
                     </div>
                    )}
            </scction>
        );
    }
}

export default Menu3;


