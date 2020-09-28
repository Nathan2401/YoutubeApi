import React from 'react';
import VideoItems from './VideoItems';
const VideoList = ({videos,onVideoSelect}) =>{
    const videolist = videos.map(video => <VideoItems key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>);
    return(
        <div className='ui relaxed divided list'>
           {videolist} 
        </div>
    )
}
export default VideoList