import React from 'react';
import { Card, CardTitle } from 'react-materialize';

class Blog extends React.Component {

    constructor(props){
        super(props);
        this.state={ count: 0}
    }

    onclick(type){
        this.setState(prevState => {
            return {count: prevState.count + 1}
        });
    }

	render() {
		
	const  { details } = this.props;

	return (
			<div className="row">
				<div className="col s6">
					<Card className='medium'
						header={
							<CardTitle image={details.image}>
								{details.title}
							</CardTitle>}>
						{details.dateBlog} - {details.desc}
						<div style={{marginTop: '15px'}}>
							<button onClick={this.onclick.bind(this, 'add')}>&hearts; {this.state.count}</button>
						</div>
					</Card>
				</div>
			</div>
		)
	}
}

export default Blog;