import { Component } from "react";
import User from "./User";
import Userclass from "./Userclass";
class About extends Component{
    constructor(props){
        super(props);
        console.log("parenet construtor");
    }
    render(){
        console.log("parent render")
        return(
            <div> 
                <h1>About Us for the userclass</h1>
                <h1>this is about us page</h1>
                {/* <User name={"praveen(fn)"} location={"cheanni fn"}/> */}
                <Userclass  name={"praveen(class)"} location={"cheanni (class compoenets)"} />
                {/* <Userclass  name={"praveen second (class)"} location={"cheanni second (class compoenets)"} /> */}
            </div>
        );
    };
};

export default About;