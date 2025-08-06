高亮第 2 行：

```javascript{2}
function hello() {
  console.log('这行会被高亮');
  return 'world';
}
```

高亮第 1,3 行：

```python{1,3}
def greet(name):
    message = f"Hello, {name}!"
    print(message)
    return message
```

高亮第 2-4 行：

```vue{2-4}
<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>
```

高亮多个范围：

```javascript{1,3-5,8}
const data = [1, 2, 3];
let result = 0;
for (let i = 0; i < data.length; i++) {
  result += data[i];
  console.log(`Step ${i}: ${result}`);
}
// 最终结果
console.log('Final result:', result);
```

```
import { h3 } from '@/utils/constants/command';

export default {
  modifier: 'ctrl',
  key: '3',
  action(editor) {
    editor.execCommand(h3);
  },
};

```

行内`ctrl+shift`

行内`ctrl+shift`行内
