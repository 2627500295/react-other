# React Redux Study

> Redux 学习

[demo](https://codesandbox.io/s/github/2627500295/react-redux-study/tree/master)

## 完成

* [x] 动作分离
* [x] 数据分离
* [x] 路由分离
* [x] 模块分离
* [x] 页面分离

## 技术栈

* React
* Redux
* Router

## Redux 流程

> [Provider](./src/components/Root/Root.jsx#L15-L22) 数据提供商
>
> &nbsp; &nbsp; |
>
> [connect](./src/components/Counter/Counter.jsx#L38-L44) 获取并传递数据
>
> > [获取数据](./src/components/Counter/Counter.jsx#L38-L42)
> >
> > > [获取 state.counter.count 值, 把值传给 state.value](./src/components/Counter/Counter.jsx#L40)
> > >
> > > > [初始化 count 值](./src/redux/reducers/counter.js#L6-L8)  
> > > > [将初始化 count 的值，设置为 reducer 方法 state 参数的默认值](./src/redux/reducers/counter.js#L13)  
> > > > [switch 输出 reducer 方法 state 参数的默认值](./src/redux/reducers/counter.js#L34-L35)
> >
> > [传递数据](./src/components/Counter/Counter.jsx#L44)
> >
> > > 把获取到的 state.counter.count 值, 通过 props 方法传递给 Counter 类
>
> &nbsp; &nbsp; |
>
> [渲染](./src/components/Counter/Counter.jsx#L23-L26)
>
> > [获取 props.value](./src/components/Counter/Counter.jsx#L23)  
> > [渲染 value](./src/components/Counter/Counter.jsx#L26)
