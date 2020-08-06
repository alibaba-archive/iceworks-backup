import React, { Component } from 'react';
import { Icon } from '@alifd/next';
import './index.scss';

class Notice extends Component {
  state = {
    hidden: false,
  };

  handleClose = () => {
    this.setState({
      hidden: true,
    });
  }

  render() {
    return !this.state.hidden && (
    <div className="component-notice">
      <a href="https://ice.work/iceworks">
        Iceworks GUI 已停止维护，请使用最新的版本 >>>
      </a>
      <Icon type="close" size="xs" onClick={this.handleClose} />
    </div>
    );
  }
}

export default Notice;
