import React from 'react';

interface propsType {
  children: any;
}

export default class ErrorBoundary extends React.Component<propsType> {
  state = {
    error: false,
  };

  static getDerivedStateFromError() {
    // 更新 state，下次渲染可以展示错误相关的 UI
    return { error: true };
  }

  render() {
    if (this.state.error) {
      // 渲染出错时的 UI
      return <h1>Something broke</h1>;
    }
    return this.props.children;
  }
}
