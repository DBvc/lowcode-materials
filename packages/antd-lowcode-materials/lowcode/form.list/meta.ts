import snippets from './snippets';

export default {
  componentName: 'Form.List',
  title: '表单列表',
  category: '表单',
  snippets,
  props: [
    {
      name: 'name',
      title: { label: '字段名', tip: '字段名' },
      isRequired: true,
      propType: 'string',
    },
    {
      name: 'initialValue',
      title: {
        label: '默认值',
        tip: '设置子元素默认值，如果与 Form 的 initialValues 冲突则以 Form 为准',
      },
      propType: 'object',
      setter: 'JsonSetter',
    },
    {
      name: 'children',
      title: {
        label: 'children',
        tip: 'fuck',
      },
      propType: 'func',
      setter: [
        {
          componentName: 'FunctionSetter',
          props: {
            template: 'renderItem(item,${extParams}){\n// 自定义渲染列表项\nreturn `item`;\n}',
          },
        },
      ]
    },
    {
      name: 'renderChildren',
      title: {
        label: 'renderChildren',
        tip: 'fuck',
      },
      propType: 'func',
      setter: [
        {
          componentName: 'FunctionSetter',
          props: {
            template: 'renderItem(item,${extParams}){\n// 自定义渲染列表项\nreturn `item`;\n}',
          },
        },
      ]
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    supports: { className: true, style: true },
  },
};
