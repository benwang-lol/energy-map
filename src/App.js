import './App.css';
import MapChart from './map/map';
import ColorBar from './color-legend/color_legend';

// const red_colors = [
//   "#ffedea",
//   "#ffcec5",
//   "#ffad9f",
//   "#ff8a75",
//   "#ff5533",
//   "#e2492d",
//   "#be3d26",
//   "#9a311f",
//   "#782618"
// ];

const green_colors = [
  "#F0FFF0",
  "#E0EEE0",
  "#C1CDC1",
  "#98FB98",
  "#90EE90",
  "#7FFF00",
  "#76EE00",
  "#66CD00",
  "#32CD32",
  "#458B00",
  "#228B22",
  "#008000",
  "#006400",
  "#006400",
  "#004D00"
];

function App() {
  return (
    <div className="App">
      <ColorBar 
        colors={green_colors}
        leftTitle="Left side"
        rightTitle="Right side"
      />
      <MapChart/>
    </div>
  );
}

export default App;
