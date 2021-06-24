    import React, {Component } from 'react';&#xD;&#xA;    import ReactDOM from 'react-dom';&#xD;&#xA;    import YTSearch from 'youtube-api-search';&#xD;&#xA;    import SearchBar from './components/searchbar';&#xD;&#xA;    import VideoList from './components/video_list';&#xD;&#xA;    import VideoDetail from './components/video_detail';&#xD;&#xA;    const API_KEY = 'AIzaSyAi1CzVpifuFUDVQf3dzrTu3mwJDP2n8r8';&#xD;&#xA;    class App extends Component {&#xD;&#xA;    	constructor(props){&#xD;&#xA;    		super(props);&#xD;&#xA;    		//Do i expect this component to play any type of state? aka pass props&#xD;&#xA;    		this.state= { videos: []};&#xD;&#xA;    				  //  ^proper name can be anything&#xD;&#xA;    		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {&#xD;&#xA;    //	console.log(data);&#xD;&#xA;    		this.setState({ videos });&#xD;&#xA;    });		// this.setState({videos : vidoos});  &#xD;&#xA;    	}&#xD;&#xA;    	render (){&#xD;&#xA;    	return (&#xD;&#xA;    	<div>&#xD;&#xA;    		<SearchBar />&#xD;&#xA;    		<VideoDetail video={this.state.video[0]} />&#xD;&#xA;    		<VideoList videos={this.state.videos} /> &#xD;&#xA;                &#xD;&#xA;    	</div>&#xD;&#xA;    	 ); &#xD;&#xA;    	}&#xD;&#xA;    }&#xD;&#xA;    ReactDOM.render(<App />, document.querySelector('.container'));