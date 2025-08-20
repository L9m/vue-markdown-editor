# 数学公式测试

此文件用于测试 markdown-it-katex 插件对各种数学公式格式的解析能力，旨在实现对 `src/utils/markdown-it-katex.js` 代码的 **100% 测试覆盖率**。

## 行内数学公式测试 ($...$)

### 基本功能测试

这是一个简单的行内公式：$E = mc^2$，它应该被正确渲染。

更复杂的行内公式：$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

### 边界条件测试

**有效分隔符测试：**

- 正常行内公式：$\alpha + \beta = \gamma$
- 数学符号：$\sum_{i=1}^{n} x_i = x_1 + x_2 + \cdots + x_n$
- 希腊字母：$\phi, \psi, \omega, \Phi, \Psi, \Omega$

**无效分隔符测试：**

- 后跟空格（应不解析）：$E = mc^2 $
- 前有字母紧贴（应不解析）：a$E = mc^2$
- 后有字母紧贴（应不解析）：$E = mc^2$a

**转义测试：**

- 转义的分隔符：\$E = mc^2\$（应显示为普通文本）
- 公式内转义：$E = \$5.00$（包含美元符号）

**空内容测试：**

- 空公式：\$\$（应不解析为行内公式）

**嵌套和连续测试：**

- 连续公式：$a$ 和 $b$ 都是变量
- 行内多个公式：设 $x = 1$，$y = 2$，则 $z = x + y = 3$

## 块级数学公式测试 ($$...$$)

### 单行块级公式

$$E = mc^2$$

### 多行块级公式

$$
\begin{aligned}
E &= mc^2 \\
F &= ma \\
P &= \frac{F}{A}
\end{aligned}
$$

### 复杂数学表达式

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

### 矩阵和方程组

$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
x \\
y
\end{pmatrix}
=
\begin{pmatrix}
ax + by \\
cx + dy
\end{pmatrix}
$$

### 边界条件测试

**转义测试：**
转义的块级公式：\$$E = mc^2\$$（应显示为普通文本）

**空内容测试：**
空块级公式：\$$\$$（应不解析）

**在列表中的块级公式：**

- 列表项 1
- $$\lim_{x \to 0} \frac{\sin x}{x} = 1$$
- 列表项 3

## 括号行内公式测试 (\(...\))

### 基本测试

括号行内公式：\(x^2 + y^2 = z^2\)

复杂括号公式：\(\frac{d}{dx}\left(\int_0^x f(t)dt\right) = f(x)\)

### 边界条件测试

**空括号测试：**
空括号公式：\(\)（应不解析）

**转义测试：**
转义括号：\\(formula\\)（应解析并显示）

**嵌套测试：**
文本中的括号公式：这是一个积分 \(\int_a^b f(x)dx\) 的例子。

## 括号块级公式测试 (\[...\])

### 单行括号块级

\[E = mc^2\]

### 多行括号块级

\[
\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}
\]

### 复杂块级括号公式

\[
\lim\_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e
\]

### 微分方程

\[
\frac{d^2y}{dx^2} + p(x)\frac{dy}{dx} + q(x)y = r(x)
\]

## 裸块公式测试 (\begin...\end)

### align 环境测试

\begin{align}
a &= b + c \\
d &= e + f \\
g &= h + i
\end{align}

### equation 环境测试

\begin{equation}
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}
\end{equation}

### cases 环境测试

\begin{cases}
f(x) = x^2 & \text{if } x \geq 0 \\
f(x) = -x^2 & \text{if } x < 0
\end{cases}

### 嵌套环境测试

\begin{align}
\begin{cases}
a &= b + c \\
d &= e + f
\end{cases} \\
g &= h + i
\end{align}

### gather 环境测试

\begin{gather}
a = b + c \\
d = e + f \\
g = h + i
\end{gather}

### 边界条件测试

**前一行非空测试：**
这一行不为空
\begin{align}
x &= y + z
\end{align}

**无效裸块（未关闭）：**
\begin{align}
x = y + z
（注意：这个没有结束标签，应该不被解析）

## HTML 中的数学公式测试

### HTML 行内数学公式

<div>这里有一个行内公式：$E = mc^2$</div>

<p>段落中的公式：$\pi = 3.14159...$</p>

<span>Span 中的公式：$\sqrt{2} \approx 1.414$</span>

### HTML 块级数学公式

<div>
$$
\int_0^1 x^2 dx = \frac{1}{3}
$$
</div>

<article>
$$
\lim_{x \to \infty} \frac{1}{x} = 0
$$
</article>

### HTML 中的多个公式

<div>第一个公式：$a = b$，第二个公式：$$c = d$$</div>

### HTML 中的括号公式

<p>括号行内：\(\sin^2 x + \cos^2 x = 1\)</p>

<div>
括号块级：
\[
\frac{d}{dx}[\sin x] = \cos x
\]
</div>

### 复杂 HTML 嵌套

<div class="math-container">
  <p>这是一个包含公式的段落：$f(x) = ax^2 + bx + c$</p>
  <blockquote>
    引用中的块级公式：
    $$
    \sum_{k=0}^{n} \binom{n}{k} = 2^n
    $$
  </blockquote>
</div>

## 边界条件和错误处理测试

### 转义字符测试

- 转义的美元符号：这个商品价格是 \$100
- 公式中的转义：$price = \$50 + tax$
- 反斜杠转义：$\\alpha \\beta \\gamma$

### 特殊字符测试

- Unicode 字符：$α + β = γ$
- 特殊符号：$∑_{i=1}^{n} xᵢ$
- 混合字符：$测试_{中文} = test_{english}$

### 行为边界测试

- 文档开头的公式：$start = true$
- 文档结尾的公式：$end = true$
- 单独一行的行内公式：$standalone = formula$

### 性能测试用例

大型公式：

$$
\sum_{n=1}^{\infty} \frac{1}{n^s} = \prod_{p \text{ prime}} \frac{1}{1-p^{-s}} = \zeta(s)
$$

长公式链：$a_1 = b_1$, $a_2 = b_2$, $a_3 = b_3$, $a_4 = b_4$, $a_5 = b_5$

### 错误恢复测试

未完成的公式：\$x = y +
正常文本继续

嵌套错误：$a = $b = c\$$ d$

## 实际数学内容测试

### 微积分

导数定义：

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

积分：

$$
\int_a^b f(x)dx = F(b) - F(a)
$$

### 线性代数

矩阵乘法：

$$
(AB)_{ij} = \sum_{k=1}^{n} A_{ik}B_{kj}
$$

特征值方程：

$$
A\mathbf{v} = \lambda\mathbf{v}
$$

### 概率论

贝叶斯定理：

$$
P(A|B) = \frac{P(B|A)P(A)}{P(B)}
$$

正态分布：

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$

### 数论

费马大定理：

$$
x^n + y^n = z^n \text{ 当 } n > 2 \text{ 时无正整数解}
$$

欧拉恒等式：

$$
e^{i\pi} + 1 = 0
$$

---

**注意：** 本文件包含了各种数学公式格式的测试用例，用于验证 markdown-it-katex 插件的解析功能。每个测试用例都设计用来覆盖代码中的特定路径和边界条件。
\begin{align}
\begin{cases}
a &= b \\
c &= d
\end{cases}
\end{align}

✅ 无效裸块：\begin{align} 未关闭
✅ 前一行非空：直接\begin{align}E=mc^2\end{align}

````

#### HTML 中公式测试用例

```html
✅ HTML行内：
<div>$E=mc^2$</div>
✅ HTML块级：
<div>$$E=mc^2$$</div>
✅ 嵌套HTML：
<p>公式在p中：\(formula\)</p>
✅ 多公式HTML：
<div>$a$ 和 $$b$$</div>
✅ 无效HTML：
<div>$a $</div>
````

## 覆盖率验证方法

### 使用 Jest 覆盖率报告

```bash
npm run test:coverage -- --collectCoverageFrom="src/utils/markdown-it-katex.js"
```

### 覆盖率阈值配置

```javascript
// jest.config.js
coverageThreshold: {
  './src/utils/markdown-it-katex.js': {
    branches: 100,
    functions: 100,
    lines: 100,
    statements: 100
  }
}
```

### 覆盖率门控检查

- ✅ CI/CD 流程中强制执行 100% 覆盖率
- ✅ PR 合并前必须通过覆盖率检查
- ✅ 任何代码变更必须维持 100% 覆盖率
- ✅ 未覆盖代码必须在 PR 中明确说明

## 测试实施步骤

1. **函数级测试**：为每个函数创建独立的测试文件
2. **集成测试**：测试函数间的交互和依赖
3. **边界测试**：测试所有边界条件和异常情况
4. **性能测试**：验证大文档处理性能
5. **回归测试**：确保重构不影响现有功能

## 测试文档化要求

每个测试必须包含：

- 测试目的说明
- 输入数据描述
- 预期行为详细描述
- 实际结果验证方法
- 覆盖率贡献说明

---

**注意：此文件定义的测试规范是强制性的，所有 `markdown-it-katex.js` 的测试实现必须严格按照此规范执行，确保达到并维持 100% 代码覆盖率。**

## 行内公式 ($...$)

这是一个行内公式：$E = mc^2$。

无效结束分隔符：$E = mc^2 $ （后跟空格）。

转义分隔符：\$E = mc^2\$ （应不解析）。

空公式：\$\$ （应不解析为行内）。

紧贴数字：2$formula$ （应不作为结束）。

紧贴$：$$formula$\$ （应作为块级）。

## 块级公式 ($$...$$)

单行块级公式：$$E = mc^2$$。

多行块级公式：

$$
E = mc^2
a = b + c
$$

无效：\$$E = mc^2$ （缺少结束\$\$）。

空块级：\$\$\$\$ （应不解析）。

转义：\$$E = mc^2\$$ （应不解析）。

在列表中：

- $$E = mc^2$$

## 括号行内公式 (\(...\))

行内括号：\(x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\)。

空：\(\) （应不解析）。

转义：\\(formula\\) （应解析）。

## 括号块级公式 (\[...\])

单行：\[E = mc^2\]。

多行：

\[
E = mc^2
a = b
\]

无效：\[E = mc^2\ （缺少]）。

## 裸块公式 (\begin...\end)

裸块：

\begin{align}
a &= b + c \\
d &= e + f
\end{align}

嵌套裸块：

\begin{align}
\begin{cases}
a &= b \\
c &= d
\end{cases}
\end{align}

在行内裸块（如果支持）：

这是一个 \begin{equation} E = mc^2 \end{equation} 公式。

无效裸块：\begin{align} 未关闭。

前一行非空：直接\begin{align}E=mc^2\end{align} （检查是否要求前空行）。

## 在 HTML 中的数学公式

<div>HTML中的行内：$E=mc^2$</div>

<div>HTML中的块级：$$E=mc^2$$</div>

嵌套 HTML 和公式：<p>公式在 p 中：\(formula\)</p>

多公式在 HTML：<div>$a$ 和 $$b$$</div>

无效在 HTML：<div>$a $ （后空格）</div>

## 其他边界情况

转义分隔符在公式内：$E = \$mc^2$ （应解析）。

公式后紧贴字符：$formula$2 （应作为结束）。

负缩进块级：（在代码中检查，但 MD 中模拟）。

单行多公式：$a$ $b$。

块级后非空行。

注释或特殊字符在公式中。
