import React from 'react';
import youtube from '../Apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';


class App extends React.Component{
    state={videos:[],selectedVideo:null}

componentDidMount(){
    this.onSearchSubmit('buildings');
}
    

    onSearchSubmit = async term =>{
        console.log(term)
        const response = await youtube.get('/search',{
            params:{q:term,type:'video'}
        });
        console.log(response);
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        }
        )                           
    }
    onVideoSelect = (video) => {
    this.setState({selectedVideo:video})
}
    



    render(){
        return(
            <div className='ui container'>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetails video={this.state.selectedVideo}/>
                        </div>
                        <div className ='five wide column'>
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default App;