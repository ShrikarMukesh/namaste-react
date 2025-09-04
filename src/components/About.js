import User from "./User"
import UserClass from "./UserClass"
import {Component} from "react";

class About extends Component {
    constructor() {
        super();
        //console.log('Parent Constructor called')
    }
    componentDidMount() {
        //console.log('Parent componentDidMount called')
    }
    render() {
        //console.log('Parent render called')
        return(
            <div>
                <h1>About component</h1>
                {/* <User name={"Shrikar Mukesh coming as prop class based component"}/>*/}
                <UserClass
                    name={"Shrikar Mukesh coming as prop function based component"}
                    location={"Kalaburgi"}
                />
            </div>
        );
    };
}
export default About;