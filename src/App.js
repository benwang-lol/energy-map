import './App.css';
import MapChart from './map/map';
import ColorBar from './color-legend/color_legend';

const colors = [
  "#ffedea",
  "#ffcec5",
  "#ffad9f",
  "#ff8a75",
  "#ff5533",
  "#e2492d",
  "#be3d26",
  "#9a311f",
  "#782618"
];

function App() {
  return (
    <div className="App">
      <ColorBar 
        colors={colors}
        leftTitle="Left side"
        rightTitle="Right side"
      />
      <MapChart/>
    </div>
  );
}

export default App;
