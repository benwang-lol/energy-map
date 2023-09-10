import './App.css';
import MapChart from './map/map';
import ColorBar from './color-legend/color_legend';
import Search from './search/search';

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

const handleOnSearchChange = (userInput) => {

}

function App() {
  return (
    <div className="App">
      <Search  />
      <ColorBar 
        colors={green_colors}
        leftTitle="Least Renewable Energy"
        rightTitle="Most Renewable Energy"
      />
      <MapChart/>
    </div>
  );
}

export default App;
