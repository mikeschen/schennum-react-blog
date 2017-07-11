import React from 'react';

class Blog extends React.Component {
	render() {

		const  { details } = this.props;
    let imageStyle = {
			width: '400px'
    };
		return (
			<li className="list-blog">
				<h3 className="blog-title">
					{details.title}
				</h3>
				<p>{details.desc}</p>
				<img src={this.props.details.image} alt={this.props.details.name} style={imageStyle}/>
			</li>
		)
	}
}

export default Blog;