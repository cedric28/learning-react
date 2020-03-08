import React, { Component } from 'react';
import LogComponent from '../concerns/LogComponent';

class Profile extends Component {

    componentDidMount() {
       
    }

    render() {
        return (
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id animi pariatur, aliquid earum quam perferendis minus reiciendis quo corrupti possimus voluptatem iure perspiciatis repellendus dicta non doloribus, nobis natus nostrum.</p>
            </div>
        );
    }
}

export default LogComponent(Profile);