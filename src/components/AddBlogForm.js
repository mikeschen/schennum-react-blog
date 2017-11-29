import React from 'react';
import { Button, Card } from 'react-materialize';
import { getTime } from '../helpers';

class AddBlogForm extends React.Component {
	constructor() {
		super();
		this.renderBlogs = this.renderBlogs.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e, key) {
		const blog = this.props.blogs[key];
		console.log(e.target.name, e.target.value)

		const updatedBlog = {
			...blog,
			[e.target.name]: e.target.value
		}
		console.log("key = ",  key)
		this.props.updateBlog(key, updatedBlog);
	}

	renderBlogs(key) {
        console.log("key!!!Here", key);
        const blog = this.props.blogs[key];
		return(
			<Card className="blog-edit" key={key}>
				<input type="text" name="title" value={blog.title} placeholder="Blog Title"
							 onChange={(e) => this.handleChange(e, key)} />
				<input type="text" name="desc" value={blog.desc} placeholder="Blog Description"
							 onChange={(e) => this.handleChange(e, key)} />
				<input type="text" name="image" value={blog.image} placeholder="Blog Image"
							 onChange={(e) => this.handleChange(e, key)} />
				{<Button className='waves-effect waves-light red' onClick={() => this.props.removeBlog(key)}>Delete Blog</Button>}
			</Card>
		)
	}
	createBlog(event) {
		event.preventDefault();
		console.log("Blog Created!");
		const blog = {
			title: this.title.value,
			desc: this.desc.value,
			image: this.image.value,
			dateBlog: getTime()
		}
		console.log("the blog", blog)
		this.props.addBlog(blog);
		this.blogForm.reset();
	}

	render() {
		return (

			<div>
				<form ref={(input) => this.blogForm = input} className="blog-edit" onSubmit={(e) => this.createBlog(e)}>
				<Card>
					<input ref={(input) => this.title = input} type="text" placeholder="Blog Title" required/>
					<input ref={(input) => this.desc = input} type="text" placeholder="Blog Description" required/>
					<input ref={(input) => this.image = input} type="text" placeholder="Blog Image" required/>
					<Button className='waves-effect waves-light' type="submit">Add Blog</Button>
				</Card>
				</form>
	        {Object.keys(this.props.blogs).map(this.renderBlogs)}
			</div>
		)
	}
}

export default AddBlogForm;