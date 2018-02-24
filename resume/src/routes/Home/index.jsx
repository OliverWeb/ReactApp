import React from 'react';
import ReactDOM from 'react-dom';
import { enquireScreen } from 'enquire-js';
import ScrollAnim from 'rc-scroll-anim';

import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
import Content6 from './Content6';
import Content7 from './Content7';
import Content8 from './Content8';
import Point from './Point';

import './less/antMotion_style.less';

const scrollScreen = ScrollAnim.scrollScreen;

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      show: !location.port,
    };
  }

  componentDidMount() {
    // 实现整屏滚动
    const docHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
    scrollScreen.init({ docHeight });
    // 实现整屏滚动
    const docHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
    scrollScreen.init({ docHeight });
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }

  render() {
    const children = [
      <Content0 id="content_0_0" key="content_0_0" isMode={this.state.isMode}/>,
      <Content1 id="content_3_0" key="content_3_0" isMode={this.state.isMode}/>,
      <Content2 id="content_4_0" key="content_4_0" isMode={this.state.isMode}/>,
      <Content3 id="content_9_0" key="content_9_0" isMode={this.state.isMode}/>,
      <Content4 id="content_9_1" key="content_9_1" isMode={this.state.isMode}/>,
      <Content5 id="content_6_0" key="content_6_0" isMode={this.state.isMode}/>,
      <Content6 id="content_6_1" key="content_6_1" isMode={this.state.isMode}/>,
      <Content7 id="content_5_0" key="content_5_0" isMode={this.state.isMode}/>,
      <Content8 id="content_5_1" key="content_5_1" isMode={this.state.isMode}/>,
      // 导航和页尾不进入锚点区，如果需要，自行添加;
      <Point key="list" ref="list" data={['content_0_0', 'content_3_0', 'content_4_0', 'content_9_0', 'content_9_1', 'content_6_0', 'content_6_1', 'content_5_0', 'content_5_1']} />,
    ];
    return (
      <div className="templates-wrapper">
        {this.state.show && children}
      </div>
    );
  }
}
