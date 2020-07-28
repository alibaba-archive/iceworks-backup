// http://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=568722&keyword=

// 使用 custom 生成自定义 ICON 组件

import React, { Component } from 'react';
import { Icon } from '@icedesign/base';
import './index.scss';

class Notice extends Component {
  state = {
    hidden: false,
  };
  handleClose = () => {
    this.setState({
      hidden: true 
    });
  }
  render() {
    return !this.state.hidden && <div className="component-notice">
      <a href="https://ice.work/iceworks">
        Iceworks 客户端已停止维护，请使用最新的 Iceworks 套件 >>>
      </a>
      <Icon type="close" size="xs" onClick={this.handleClose} />
    </div>;
  }
}

export default Notice;
