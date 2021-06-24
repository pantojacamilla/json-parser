    import axios from 'axios';&#xD;&#xA;    import { FETCH_POSTS, SEND_POST, FETCH_POST } from './types';&#xD;&#xA;    const ROOT_URL = 'http://reduxblog.herokuapp.com/api';&#xD;&#xA;    const API_KEY = '?key=qwerty';&#xD;&#xA;    export function fetchPosts() {&#xD;&#xA;    	const req = axios.get(`${ROOT_URL}/posts${API_KEY}`);&#xD;&#xA;    	return {&#xD;&#xA;    		type: FETCH_POSTS,&#xD;&#xA;    		payload: req&#xD;&#xA;    	}&#xD;&#xA;    }&#xD;&#xA;    export function sendPost(props) {&#xD;&#xA;    	const req = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);&#xD;&#xA;    	return {&#xD;&#xA;    		type: SEND_POST,&#xD;&#xA;    		payload: req&#xD;&#xA;    	}&#xD;&#xA;    }&#xD;&#xA;    export function getPost(id) {&#xD;&#xA;    	console.log('action triggered');&#xD;&#xA;    	const req = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);&#xD;&#xA;    	return {&#xD;&#xA;    		type: FETCH_POST,&#xD;&#xA;    		payload: req&#xD;&#xA;    	}&#xD;&#xA;    }