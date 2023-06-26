import { Component } from "react";
import "./Box.css"

class Box extends Component {
    static defaultProps = {
        colors: [
            "red",
            "green",
            "aqua",
            "blueviolet",
            "crimson",
            "DarkGoldenRod",
            "DarkSeaGreen", 
            "DodgerBlue", 
            "Gold",
            "GhostWhite",
            "Fuchsia",
            "IndianRed",
            "Indigo",
            "LawnGreen",
            "MediumPurple",
            "Orange",
            "Olive",
            "Pink"
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            color: "black"
        }
        this.pickColor = this.pickColor.bind(this);
    }

    pickColor() {
        let newColor;
        do {
            newColor = this.props.colors[Math.floor(Math.random() * (this.props.colors.length))];
        } while (this.state.color === newColor);
        this.setState({ color:  newColor});
    }

    render() {
        return(
            <div onClick={this.pickColor} style={{backgroundColor: this.state.color.toLowerCase()}} className="box"></div>
        );
    }
}

export default Box;