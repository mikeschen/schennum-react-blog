import React from 'react';
import AddBlogForm from './AddBlogForm';
import Blog from './Blog';
import base from '../base';

class Home extends React.Component {

    constructor() {
        super();
        this.addBlog = this.addBlog.bind(this);
        this.updateBlog = this.updateBlog.bind(this);
        this.removeBlog = this.removeBlog.bind(this);
        //initial state
        this.state = {
            blogs: {}
        };
    }

    componentWillMount() {
        this.ref = base.syncState(`/blogs`
            , {
                context: this,
                state: 'blogs'
            });
    }

    addBlog(blog) {
        //update state
        const blogs = {...this.state.blogs};
        //add blog post
        const timestamp = Date.now();
        blogs[`blog-${timestamp}`] = blog;
        //set state
        this.setState({ blogs });
    }

    updateBlog(key, updatedBlog) {
        const blogs = {...this.state.blogs};
        console.log("blogs = ",  updatedBlog)
        blogs[key] = updatedBlog;
        this.setState({ blogs });
    }

    removeBlog(key){
        const blogs = {...this.state.blogs};
        blogs[key] = null;
        this.setState({ blogs });
    }

    render() {
        return (

                <div className="row">
                    <div className="collection">
                        <a href="#!" className="collection-item"><span className="new badge">4</span>Posts</a>
                    </div>
                    <div className="col s6">
                        <ul className="list-of-blogs">
                            {Object
                                .keys(this.state.blogs)
                                .reverse()
                                .map(key => <Blog key={key} details={this.state.blogs[key]}/>)
                            }
                        </ul>
                    </div>
                    <div className="col s6">
                        <AddBlogForm
                            addBlog={this.addBlog}
                            blogs={this.state.blogs}
                            updateBlog={this.updateBlog}
                            removeBlog={this.removeBlog}
                        />
                    </div>
                    <ul className="pagination">
                        <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                        <li className="active"><a href="#!">1</a></li>
                        <li className="waves-effect"><a href="#!">2</a></li>
                        <li className="waves-effect"><a href="#!">3</a></li>
                        <li className="waves-effect"><a href="#!">4</a></li>
                        <li className="waves-effect"><a href="#!">5</a></li>
                        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                    </ul>
                </div>
            )
        }
    }

export default Home;