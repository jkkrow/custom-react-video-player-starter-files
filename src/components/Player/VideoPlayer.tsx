import './VideoPlayer.css';

interface VideoPlayerProps {
  src: string;
  autoPlay?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, autoPlay = true }) => {
  return <div></div>;
};

export default VideoPlayer;
