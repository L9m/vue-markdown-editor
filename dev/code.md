# Code Block Test Document

这个文档用于测试代码块的渲染效果，包括语法高亮、行号显示、代码复制等功能。

## JavaScript 代码示例

```javascript
// 基础 JavaScript 函数
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// ES6+ 语法示例
const asyncFunction = async (data) => {
  try {
    const result = await fetch('/api/data', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    return await result.json();
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## Vue 组件示例

```vue
<template>
  <div class="component">
    <h2>{{ title }}</h2>
    <button @click="increment">Count: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const count = ref(0);
const title = computed(() => `Current count is ${count.value}`);

const increment = () => {
  count.value++;
};
</script>

<style scoped>
.component {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
```

## Python 代码示例

```python
# Python 类和装饰器示例
from typing import List, Optional
import asyncio

class DataProcessor:
    def __init__(self, name: str):
        self.name = name
        self.data: List[dict] = []

    @property
    def data_count(self) -> int:
        return len(self.data)

    async def process_data(self, items: List[dict]) -> Optional[dict]:
        """异步处理数据"""
        results = []
        for item in items:
            await asyncio.sleep(0.1)  # 模拟异步操作
            processed = {
                'id': item.get('id'),
                'value': item.get('value', 0) * 2,
                'timestamp': time.time()
            }
            results.append(processed)

        return {
            'processor': self.name,
            'count': len(results),
            'data': results
        }
```

## CSS 样式示例

```css
/* 现代 CSS 特性 */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: clamp(1rem, 5vw, 3rem);
}

.card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* CSS 自定义属性 */
:root {
  --primary-color: #3498db;
  --secondary-color: #e74c3c;
  --font-size-base: 16px;
  --spacing-unit: 8px;
}
```

## 行高亮测试

```javascript{2,5-7,10}
function highlightTest() {
  console.log('这行应该被高亮');
  const data = [1, 2, 3, 4, 5];

  // 这几行应该被高亮
  const result = data.map((item) => item * 2);
  console.log('结果:', result);

  return result.filter((item) => item > 5);
  console.log('这行也应该被高亮');
}
```

## Shell 命令示例

```bash
#!/bin/bash

# Git 常用命令
git status
git add .
git commit -m "feat: add new feature"
git push origin main

# NPM 命令
npm install
npm run build
npm run test

# Docker 命令
docker build -t my-app .
docker run -p 3000:3000 my-app
docker-compose up -d
```

## SQL 查询示例

```sql
-- 复杂 SQL 查询示例
WITH user_stats AS (
  SELECT
    u.id,
    u.name,
    COUNT(o.id) as order_count,
    SUM(o.total_amount) as total_spent
  FROM users u
  LEFT JOIN orders o ON u.id = o.user_id
  WHERE u.created_at >= '2023-01-01'
  GROUP BY u.id, u.name
),
top_users AS (
  SELECT *
  FROM user_stats
  WHERE order_count > 5
  ORDER BY total_spent DESC
  LIMIT 10
)
SELECT
  tu.*,
  RANK() OVER (ORDER BY tu.total_spent DESC) as spending_rank
FROM top_users tu;
```

## JSON 数据示例

```json
{
  "name": "vue-markdown-editor",
  "version": "1.0.0",
  "description": "A powerful markdown editor for Vue.js",
  "main": "dist/index.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest",
    "lint": "eslint src",
    "format": "prettier --write src"
  },
  "dependencies": {
    "vue": "^3.3.0",
    "markdown-it": "^13.0.0",
    "highlight.js": "^11.8.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.2.0",
    "vite": "^4.3.0",
    "vitest": "^0.32.0",
    "eslint": "^8.42.0",
    "prettier": "^2.8.0"
  }
}
```

## 无语言标识的代码块

```
这是一个没有指定语言的代码块
应该显示为纯文本
不会有语法高亮
但仍然会有行号和复制功能
```

## 长代码测试

```typescript
// TypeScript 接口和泛型示例
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  roles: Role[];
  settings: UserSettings;
  createdAt: Date;
  updatedAt: Date;
}

interface Role {
  id: number;
  name: string;
  permissions: Permission[];
}

interface Permission {
  id: number;
  name: string;
  resource: string;
  action: string;
}

interface UserSettings {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  privacy: {
    profileVisible: boolean;
    showEmail: boolean;
    showPhone: boolean;
  };
}

// 泛型服务类
class ApiService<T> {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<R = T>(endpoint: string): Promise<ApiResponse<R>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.getToken()}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async post<R = T>(endpoint: string, data: Partial<T>): Promise<ApiResponse<R>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.getToken()}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  private getToken(): string {
    return localStorage.getItem('authToken') || '';
  }
}

// 使用示例
const userService = new ApiService<User>('/api/users');
const roleService = new ApiService<Role>('/api/roles');

// 异步函数示例
async function getUserWithRoles(userId: number): Promise<User | null> {
  try {
    const userResponse = await userService.get<User>(`/${userId}`);

    if (!userResponse.success) {
      console.error('Failed to fetch user:', userResponse.message);
      return null;
    }

    const user = userResponse.data;

    // 获取用户角色详情
    const rolePromises = user.roles.map((role) => roleService.get<Role>(`/${role.id}`));

    const roleResponses = await Promise.all(rolePromises);
    const roles = roleResponses
      .filter((response) => response.success)
      .map((response) => response.data);

    return {
      ...user,
      roles,
    };
  } catch (error) {
    console.error('Error fetching user with roles:', error);
    return null;
  }
}
```

## 测试说明

这个文档包含了多种编程语言的代码示例，用于测试：

1. **语法高亮** - 每种语言都有对应的语法高亮
2. **行号显示** - 所有代码块都应该显示行号
3. **代码复制** - 鼠标悬停时显示复制按钮
4. **行高亮功能** - JavaScript 示例中包含行高亮测试
5. **长代码滚动** - TypeScript 示例测试长代码的显示效果
6. **响应式布局** - 在不同屏幕尺寸下的显示效果

请确保所有功能都能正常工作！
