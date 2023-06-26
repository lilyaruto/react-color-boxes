import { Component } from "react";
import Box from "./Box";
import "./BoxContainer.css"

class BoxContainer extends Component {
    static defaultProps = {
        num: 18
    }
    
    constructor(props) {
        super(props);
        this.state = {
            boxes: Array.from({length: this.props.num})
        }
        this.pickColor = this.pickColor.bind(this);
    }

    pickColor() {
        //todo
    }

    render() {
        return(
            <div className="container">
                {this.state.boxes.map(box => <Box />)}
            </div>
        );
    }
}

export default BoxContainer;