import React from 'react';
import { Button, Row } from 'react-materialize';

class AddBlogForm extends React.Component {
	constructor() {
		super();
		this.renderBlogs = this.renderBlogs.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e, key) {
		const blog = this.props.blogs[key];

		const updatedBlog = {
			...blog,
			[e.target.title]: e.target.value
		}
		console.log("key = ",  key)
		this.props.updateBlog(key, updatedBlog);
	}

	renderBlogs(key) {
		const blog = this.props.blogs[key];
		return(
			<div className="blog-edit" key={key}>
				<input type="text" name="title" value={blog.title} placeholder="Blog Title"
							 onChange={(e) => this.handleChange(e, key)}/>
				<input type="text" name="desc" value={blog.desc} placeholder="Blog Description"/>
				<input type="text" name="image" value={blog.image} placeholder="Blog Image"/>
			</div>
		)
	}
	createBlog(event) {
		event.preventDefault();
		console.log("Blog Created!");
		const blog = {
			title: this.title.value,
			desc: this.desc.value,
			image: this.image.value,
		}
		console.log("the blog", blog)
		this.props.addBlog(blog);
		this.blogForm.reset();
	}

	render() {
		return (

			<div className="add-blog-border">
        {Object.keys(this.props.blogs).map(this.renderBlogs)}
			<form ref={(input) => this.blogForm = input} className="blog-edit" onSubmit={(e) => this.createBlog(e)}>
			<Row>
				<input ref={(input) => this.title = input} type="text" placeholder="Blog Title" required/>
				<input ref={(input) => this.desc = input} type="text" placeholder="Blog Description" required/>
				<input ref={(input) => this.image = input} type="text" placeholder="Blog Image" required/>
				<Button waves='light' type="submit">Add Blog</Button>
			</Row>
			</form>
			</div>
		)
	}
}

export default AddBlogForm;