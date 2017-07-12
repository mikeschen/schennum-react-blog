import React from 'react';
import { Button, Card, Input, Row, Col } from 'react-materialize';

class AddBlogForm extends React.Component {

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
			<form ref={(input) => this.blogForm = input} className="blog-edit" onSubmit={(e) => this.createBlog(e)}>
			<Row>
				<input ref={(input) => this.title = input}type="text" placeholder="Blog Title" />
				<input ref={(input) => this.desc = input}type="text" placeholder="Blog Description" />
				<input ref={(input) => this.image = input}type="text" placeholder="Blog Image" />

				<Button waves='light' type="submit">Add Blog</Button>
			</Row>
			</form>
			</div>
		)
	}
}

export default AddBlogForm;