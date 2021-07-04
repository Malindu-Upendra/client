import {Component} from "react";
import './workshop.css'
import axios from "axios";

export class Workshop extends Component{

    state = {
        workshops:[]
    }

    componentDidMount = () => {

            axios.get('http://localhost:5000/homepage/getWorkshops').then(res => {
                if(res.data.success) {
                    this.setState({workshops: res.data.data})
                }
            })

    }

    render() {
        return (
            <div style={{width:'90%' , marginLeft:'5%' ,marginRight:'5%'}}>
               <div className='HeadingWorkshop' style={{marginBottom:'20px'}}>
                   WORKSHOPS
               </div>
                <h4>Following is the list of workshops, which will be organized as a part of ICAF 2022. </h4>
                <h4>Register via following link: <a href={"/registrationPage"}>click here</a></h4>
                {this.state.workshops.map(item => (
                    <div style={{marginTop:'30px'}}>
                <hr/>
                            <h3 style={{marginTop:'30px'}}><b>{item.title}</b></h3>
                            <p></p>
                            <p style={{marginTop:'30px'}}>{item.description}</p>
                             <p></p>
                            <h5 style={{marginTop:'30px'}}>Workshop Conductors : {item.wconductors}</h5>
                            <p></p>
                            <h5 style={{marginTop:'30px'}}>Email : {item.email}</h5>
                            <p></p>
                            <h5 style={{marginTop:'30px'}}>Flyer : <a href={item.flyer}>Click to See the flyer</a></h5></div>
                    ))}
            </div>
        )
    }
}

export default Workshop;