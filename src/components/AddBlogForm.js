import React from 'react';
import { Button, Input, Card, Row, Col } from 'react-materialize';

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

			<form ref={(input) => this.blogForm = input} className="blog-edit" onSubmit={(e) => this.createBlog(e)}>
				<Row>
				<Input s={12} ref={(input) => this.title = input}type="text" label="Blog Title" />
				<Input s={12} ref={(input) => this.desc = input}type="text" label="Blog Description"></Input>
				<Input s={12} ref={(input) => this.image = input}type="text" label="Blog Image" />
				<Button waves='light' type="submit">Add Blog</Button>
				</Row>
			</form>
		)
	}
}

export default AddBlogForm;