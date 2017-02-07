import React from 'react';
import AddBlogForm from './AddBlogForm';
import Blog from './Blog';

class App extends React.Component {

	constructor() {
		super();
		this.addBlog = this.addBlog.bind(this);
		//initial state
		this.state = {
			blogs: {}
		}
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
				<h1>Blog</h1>
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

					// {Object
					// 	.keys(this.state.blogs)
					// 	.map(key => <Blog key={key} details={this.state.blogs[key]}/>)
					// }

export default App;