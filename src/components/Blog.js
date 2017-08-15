import React from 'react';
import { Card, CardTitle } from 'react-materialize';

class Blog extends React.Component {
	render() {

		const  { details } = this.props;
    let imageStyle = {
			width: '400px'
    };
		return (
			<div className="row">
			<div className="col s6">
			<Card className='small'
				header={<CardTitle image={this.props.details.image}>
					{details.title}
					</CardTitle>}>
				{details.desc}
			</Card>
			</div>
			</div>
		)
	}
}

export default Blog;