import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Calender extends React.Component {
state = {
startDate: new Date(),
endDate: new Date(),
Difference_In_Days:"",
// total:6,
// neww:""

};

handleChange = date => {
this.setState({
startDate: date
});
};
handleChangeto = date => {
    this.setState({
    endDate: date
    });
    var Difference_In_Time = this.state.endDate.getTime()-this.state.startDate.getTime() ; 
    this.setState({
        Difference_In_Days: Difference_In_Time / (1000* 3600* 24)
        });
        };


        // handlesubmit(){
        //     this.setState({
        //         neww:this.state.total-this.state.Difference_In_Days
        //         });
        // }
        // different= date =>{
        //     this.setState({
        //         Difference_In_Days: date
        //         });
        // }

render() {
    

return (
    
<div><DatePicker
selected={this.state.startDate}
onChange={this.handleChange}
/>
<DatePicker
selected={this.state.endDate}
onChange={this.handleChangeto}
/>
<p>{this.state.Difference_In_Days}</p>
{/* <button onClick={this.handlesubmit()}>hai</button> */}
{/* <p>{this.state.total-this.state.Difference_In_Days}</p> */}
</div>


);
}
}
export default Calender;








// var React = require('react');
// var Component = React.Component;
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// class App extends Component {
// 	render() {
// 		const options = {
// 			animationEnabled: true,
// 			theme: "light2",
// 			title:{
// 				text: "Most Popular Social Networking Sites"
// 			},
// 			axisX: {
// 				title: "Social Network",
// 				reversed: true,
// 			},
// 			axisY: {
// 				title: "Monthly Active Users",
// 				labelFormatter: this.addSymbols
// 			},
// 			data: [{
// 				type: "bar",
// 				dataPoints: [
// 					{ y:  2200000000, label: "Facebook" },
// 					{ y:  1800000000, label: "YouTube" },
// 					{ y:  800000000, label: "Instagram" },
// 					{ y:  563000000, label: "Qzone" },
// 					{ y:  376000000, label: "Weibo" },
// 					{ y:  336000000, label: "Twitter" },
// 					{ y:  330000000, label: "Reddit" }
// 				]
// 			}]
// 		}
// 		return (
// 		<div>
// 			<CanvasJSChart options = {options}
// 				/* onRef={ref => this.chart = ref} */
// 			/>
// 			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 		</div>
// 		);
// 	}
// 	addSymbols(e){
// 		var suffixes = ["", "K", "M", "B"];
// 		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
// 		if(order > suffixes.length - 1)
// 			order = suffixes.length - 1;
// 		var suffix = suffixes[order];
// 		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
// 	}
// }
// module.exports = App;

