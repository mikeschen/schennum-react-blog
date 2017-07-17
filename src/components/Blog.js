import React from 'react';
import { Button, Card, CardTitle } from 'react-materialize';

class Blog extends React.Component {
	render() {

		const  { details } = this.props;
    let imageStyle = {
			width: '400px'
    };
		return (
			<Card className='small'
				header={<CardTitle image={this.props.details.image}>
					{details.title}
					</CardTitle>}>
				{details.desc}
				{/*<Button waves='light' className='red' onClick={() => this.props.removeBlog(key)}>Delete Blog</Button>*/}
			</Card>
		)
	}
}

export default Blog;