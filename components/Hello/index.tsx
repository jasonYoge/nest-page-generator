import * as React from 'react';
import './index.scss';

interface HelloProps {
  message: string
}

export default class Hello extends React.Component<HelloProps, Object> {
  render () {
    return (
      <div>{this.props.message}123</div>
    );
  }
}