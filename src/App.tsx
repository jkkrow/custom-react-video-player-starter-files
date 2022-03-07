import VideoPlayer from './components/Player/VideoPlayer';
import './App.css';

function App() {
  return (
    <div className="App">
      <VideoPlayer src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
    </div>
  );
}

export default App;
