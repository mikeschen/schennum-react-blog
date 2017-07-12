import React from 'react';
import { Button, Card, CardTitle, Input, Row, Col } from 'react-materialize';

class Blog extends React.Component {
	render() {

		const  { details } = this.props;
    let imageStyle = {
			width: '400px'
    };
		return (
			<Card className='small'
				header={<CardTitle image={this.props.details.image}>{details.title}</CardTitle>}>
				{details.desc}
				{/*<button className="btn btn-warning" onClick={() => this.props.removeBlog(key)}>Delete Blog</button>*/}
			</Card>
		)
	}
}

export default Blog;