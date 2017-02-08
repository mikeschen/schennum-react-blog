import React from 'react';
import AddBlogForm from './AddBlogForm';
import Blog from './Blog';
import base from '../base';

class App extends React.Component {

	constructor() {
		super();
		this.addBlog = this.addBlog.bind(this);
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

	render() {
		return (
			<div className="schennum-blog">
				<div className="blog-title">
					<h1>BLOG</h1>
				</div>
				<ul className="list-of-blogs">
				{Object
					.keys(this.state.blogs)
					.map(key => <Blog key={key} details={this.state.blogs[key]}/>)
				}
				</ul>
				<AddBlogForm addBlog={this.addBlog}/>
			</div>
		)
	}
}

export default App;