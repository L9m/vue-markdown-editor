**有效分隔符：**

- 正常行内公式：$\alpha + \beta = \gamma$
- 数学符号：$\sum_{i=1}^{n} x_i = x_1 + x_2 + \cdots + x_n$
- 希腊字母：$\phi, \psi, \omega, \Phi, \Psi, \Omega$

**无效分隔符：**

- 前有字母紧贴（应不解析）：a$E = mc^2$
- 后有字母紧贴（应不解析）：$E = mc^2$a

**转义：**

- 转义的分隔符：\$E = mc^2\$（应显示为普通文本）
- 公式内转义：$E = \$5.00$（包含美元符号）

**空内容：**

- 空公式：\$\$（应不解析为行内公式）

**嵌套和连续：**

- 连续公式：$a$ 和 $b$ 都是变量
- 行内多个公式：设 $x = 1$，$y = 2$，则 $z = x + y = 3$

## 块级数学公式 ($$...$$)

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

### 数学表达式

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

### 边界条件

**转义：**
转义的块级公式：\$$E = mc^2\$$（应显示为普通文本）

**空内容：**
空块级公式：\$$\$$（应不解析）

**在列表中的块级公式：**

- 列表项 1
- $$\lim_{x \to 0} \frac{\sin x}{x} = 1$$
- 列表项 3

## 括号行内公式 (\(...\))

### 基本

括号行内公式：\(x^2 + y^2 = z^2\)

复杂括号公式：\(\frac{d}{dx}\left(\int_0^x f(t)dt\right) = f(x)\)

### 边界条件

**空括号：**
空括号公式：\(\)（应不解析）

**嵌套：**
文本中的括号公式：这是一个积分 \(\int_a^b f(x)dx\) 的例子。

## 括号块级公式 (\[...\])

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

## 裸块公式 (\begin...\end)

### align 环境

\begin{align}
a &= b + c \\
d &= e + f \\
g &= h + i
\end{align}

### equation 环境

\begin{equation}
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}
\end{equation}

### cases 环境

\begin{cases}
f(x) = x^2 & \text{if } x \geq 0 \\
f(x) = -x^2 & \text{if } x < 0
\end{cases}

### 嵌套环境

\begin{align}
\begin{cases}
a &= b + c \\
d &= e + f
\end{cases} \\
g &= h + i
\end{align}

### gather 环境

\begin{gather}
a = b + c \\
d = e + f \\
g = h + i
\end{gather}

### 边界条件

**前一行非空：**
这一行不为空
\begin{align}
x &= y + z
\end{align}

**无效裸块（未关闭）：**
\begin{align}
x = y + z
（注意：这个没有结束标签，应该不被解析）

## HTML 中的数学公式

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

## 边界条件和错误处理

### 转义字符

- 转义的美元符号：这个商品价格是 \$100
- 公式中的转义：$price = \$50 + tax$
- 反斜杠转义：$\\alpha \\beta \\gamma$

### 特殊字符

- Unicode 字符：$α + β = γ$
- 特殊符号：$∑_{i=1}^{n} xᵢ$
- 混合字符：$测试_{中文} = test_{english}$

### 行为边界

- 文档开头的公式：$start = true$
- 文档结尾的公式：$end = true$
- 单独一行的行内公式：$standalone = formula$

### 性能用例

大型公式：

$$
\sum_{n=1}^{\infty} \frac{1}{n^s} = \prod_{p \text{ prime}} \frac{1}{1-p^{-s}} = \zeta(s)
$$

长公式链：$a_1 = b_1$, $a_2 = b_2$, $a_3 = b_3$, $a_4 = b_4$, $a_5 = b_5$

### 错误恢复

未完成的公式：\$x = y +
正常文本继续

嵌套错误：$a = $b = c\$$ d$

## 实际数学内容

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
