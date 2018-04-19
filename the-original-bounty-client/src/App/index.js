import React,{Component} from "react";
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            errMsg: '',
            loading: true

        }
    }
    componentDidMount() {
        axios.get("/bounties").then(response => {
            console.log(response.data);
            this.setState({   //prev
                
            })

        })
        .catch(err => {
            this.setState({
                errMsg: err.message,
                loading: false
            
            })})}
    render() {
        return (
            <div></div>
        )
    }
}




//     render() {
//         const { people, errMsg, loading } = this.state;
//         console.log(this.state);
//         if (loading) {
//             return <div>...loading</div>
//         } else {
//             if (errMsg) {
//                 return <p>Sorry, your data is not available</p>
//             } else {
//                 return (
//                     <DataList people={people}></DataList>
//                 )

//             }
//         }

//     }
// }

    export default App;