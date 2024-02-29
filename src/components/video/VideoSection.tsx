import videoSource from './CharterVideo.mp4'; // Importing the video file

const VideoSection = () => {
  return (
    <div className="bg-black h-96 flex justify-center items-center">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSource} type="video/mp4" />
        {/* Add more source tags for different video formats if needed */}
      </video>
    </div>
  );
};

export default VideoSection;
