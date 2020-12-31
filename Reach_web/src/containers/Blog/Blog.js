import React, { Component } from 'react';
import axios from 'axios';

import {Route }from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";
import './Blog.css';


class Blog extends Component {


    




    render() {
        
        return (
            <div className = "Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href = "/">Home</a>
                            </li>
                            <li>
                                <a href = "/new-post">New Posts</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Posts /> */}
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/"  render={() => <h1>Home 2</h1>}/> */}
                <Route path="/" exact component={ Posts}/>
                <Route path="/new-post" exact component={ NewPost}/>
            </div>
        );
    }
}

export default Blog;