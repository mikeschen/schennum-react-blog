import React from 'react';

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
				<input ref={(input) => this.title = input}type="text" placeholder="Blog Title" />
				<textarea ref={(input) => this.desc = input}type="text" placeholder="Blog Desc"></textarea>
				<input ref={(input) => this.image = input}type="text" placeholder="Blog Image" />
				<button type="submit">Add Blog</button>
			</form>
		)
	}
}

export default AddBlogForm;