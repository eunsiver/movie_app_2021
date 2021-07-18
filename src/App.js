
import React from 'react';
import axios from "axios";


//import PropTypes from "prop-types";
//import { render } from '@testing-library/react';
//
// function Food({ name, picture, rating }) {
//   return <div><h2> I Iike {name}</h2>
//     <h4>{rating}/5.0</h4>
//     <img src={picture} alt={name} />
//   </div>
// }
// //가져올 변수
// const foodILike = [
//   {
//     id: "1",
//     name: "1",
//     image: "logo192.png",
//     rating: 5
//   },
//   {
//     id: "2",
//     name: "2",
//     image: "logo192.png",
//     rating: 4.9
//   },
//   {
//     id: "3",
//     name: "3",
//     image: "logo192.png",
//     rating: 4.8
//   }
// ]
// //propTypes
// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }
//Food 전달 함수
// function App() {
//   return (
//     <div >
//       {foodILike.map(dish =>
//         <Food key={dish.name} name={dish.name} picture={dish.image} rating={dish.rating} />)}
//     </div>
//   );
// }
// class App extends React.Component {
//   state = {
//     count: 0
//   };
//   add = () => {
//     this.setState(current => ({ count: current.count + 1 }));
//   };
//   minus = () => {
//     this.setState(current => ({ count: current.count - 1 }));
//   };
//   render() {
//     return (
//       <div>
//         <h1>The number is {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>minus</button>
//       </div>
//     )
//   }
// }
class App extends React.Component {
  state = {
    isLoading: true
  };
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>
  }
}
export default App;
