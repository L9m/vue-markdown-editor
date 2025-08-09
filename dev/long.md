# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 数学公式集

## 代数

1. **二次方程求根公式**:
   $$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

2. **二项式定理**:
   $$ (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k $$

3. **平方差公式**:
   $$ a^2 - b^2 = (a - b)(a + b) $$

4. **立方和公式**:
   $$ a^3 + b^3 = (a + b)(a^2 - ab + b^2) $$

5. **立方差公式**:
   $$ a^3 - b^3 = (a - b)(a^2 + ab + b^2) $$

## 微积分

6. **导数定义**:
   $$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

7. **基本积分公式**:
   $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$

8. **分部积分法**:
   $$ \int u  dv = uv - \int v  du $$

9. **牛顿-莱布尼茨公式**:
   $$ \int_a^b f'(x) dx = f(b) - f(a) $$

10. **微分形式的链式法则**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

## 几何

11. **圆的面积**:
    $$ A = \pi r^2 $$

12. **球体的体积**:
    $$ V = \frac{4}{3} \pi r^3 $$

13. **勾股定理**:
    $$ a^2 + b^2 = c^2 $$

14. **两点间距离公式**:
    $$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

15. **圆的周长**:
    $$ C = 2\pi r $$

## 三角函数

16. **正弦定理**:
    $$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

17. **余弦定理**:
    $$ c^2 = a^2 + b^2 - 2ab\cos C $$

18. **正弦加法公式**:
    $$ \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta $$

19. **余弦加法公式**:
    $$ \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta $$

20. **毕达哥拉斯恒等式**:
    $$ \sin^2\theta + \cos^2\theta = 1 $$

## 线性代数

21. **矩阵乘法**:
    $$ (AB)_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj} $$

22. **向量点积**:
    $$ \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta = \sum_{i=1}^{n} a_i b_i $$

23. **向量叉积**:
    $$ \vec{a} \times \vec{b} = |\vec{a}| |\vec{b}| \sin\theta  \hat{n} $$

24. **行列式 (2x2)**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

25. **特征值方程**:
    $$ A\vec{v} = \lambda \vec{v} $$

## 概率与统计

26. **正态分布概率密度函数**:
    $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} $$

27. **期望值 (离散)**:
    $$ E[X] = \sum_{i} x_i P(x_i) $$

28. **方差**:
    $$ \mathrm{Var}(X) = E[X^2] - (E[X])^2 $$

29. **贝叶斯定理**:
    $$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

30. **相关系数**:
    $$ \rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} $$

<div style="padding: 20px; border-left: 5px solid #3f51b5; border-radius: 5px; margin-bottom: 20px; line-height: 1.8; font-size: 16px; word-wrap: break-word;">
<h3 style="text-align: center; color: black; font-weight: bold;">利用基本不等式求最值$</h3>
<h4 style="background: linear-gradient(to right, #26a69a, #4db6ac); padding: 5px; color: white;">关键点</h4>
<p style="font-size: 14px; text-indent: 2em;">
利用基本不等式求最值的关键在于：依定值去探求最值，探求的过程中常需依据具体的问题进行合理的拆、凑、配等变换。
</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 1 配凑法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 1</p>
<p style="font-size: 14px; margin-bottom: 1em;">（1）已知 $0<x<\frac{3}{2}$ ，当 $x(3-2x)$ 取得最大值时，$x$ 的值为（ ）</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．$\frac{1}{3}$</li>
    <li>B．$\frac{1}{2}$</li>
    <li>C．$\frac{2}{3}$</li>
    <li>D．$\frac{3}{4}$</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）已知 $x<\frac{5}{4}$，则 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 ______ 。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）$\because 0<x<\frac{3}{2}, \therefore 3-2x>0$。由基本不等式得$x(3-2x) = \frac{2x(3-2x)}{2} \leqslant \frac{\left(\frac{2x+3-2x}{2}\right)^2}{2} = \frac{9}{8}$。
当且仅当 $2x=3-2x$，即 $x=\frac{3}{4}$ 时，等号成立。
故当 $x(3-2x)$ 取得最大值时，$x$ 的值为 $\frac{3}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because x<\frac{5}{4}, \therefore 5-4x>0$
$\therefore y = 4x-2+\frac{1}{4x-5} = -[(5-4x)+\frac{1}{5-4x}]+3 \leqslant -2\sqrt{(5-4x)\times\frac{1}{5-4x}}+3=1$。
当且仅当 $5-4x=\frac{1}{5-4x}$，即 $x=1$ 时，等号成立。
故 $y=4x-2+\frac{1}{4x-5}$ 的最大值为 1 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）D （2）1</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 2 拆裂项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 2 函数 $y=\frac{x^2+x+3}{x-2}(x>2)$ 的最小值为_________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$y = \frac{x^2+x+3}{x-2} = \frac{(x-2)^2+5(x-2)+9}{x-2} = x-2+\frac{9}{x-2}+5$。
$\because x>2,$ $\therefore x-2>0,$
$\therefore y \geqslant 2\sqrt{(x-2)\cdot\frac{9}{x-2}}+5=11$。
当且仅当 $x-2=\frac{9}{x-2}$，即 $x=5$ 时，等号成立。故原函数的最小值为 11 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 11</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 3 分组并项求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">例 3 若 $x, y$ 为正数，则 $\left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2$ 的最小值为 ________。</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
$\because x, y$ 为正数，$\therefore \left(x+\frac{1}{2y}\right)^2+\left(y+\frac{1}{2x}\right)^2 = \left(x^2+\frac{1}{4x^2}\right)+\left(y^2+\frac{1}{4y^2}\right)+\left(\frac{x}{y}+\frac{y}{x}\right) \geqslant 2\sqrt{x^2\cdot\frac{1}{4x^2}}+2\sqrt{y^2\cdot\frac{1}{4y^2}}+2\sqrt{\frac{x}{y}\cdot\frac{y}{x}}=4$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
当且仅当 $x^2=\frac{1}{4x^2}, y^2=\frac{1}{4y^2}, \frac{x}{y}=\frac{y}{x}$，即 $x=y=\frac{\sqrt{2}}{2}$ 时，等号成立，此时原式取得最小值 4 。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: 4</p>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 4 常数代换法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 4
（1）若 $x>0, y>0$ 且 $x+y=1$，则 $\frac{4}{x}+\frac{1}{y}$ 的最小值为( )
</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．7</li>
    <li>B．8</li>
    <li>C．9</li>
    <li>D．16</li>
</ul>
<p style="font-size: 14px; margin-bottom: 1em;">（2）若正数 $x, y$ 满足 $x+y=xy$，则 $x+2y$ 的最小值为( )</p>
<ul style="font-size: 14px; list-style-type: circle; padding-left: 20px; margin-bottom: 1em;">
    <li>A．6</li>
    <li>B．$2+3\sqrt{2}$</li>
    <li>C．$3+2\sqrt{2}$</li>
    <li>D．$2+2\sqrt{3}$</li>
</ul>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
（1）由题意，知 $\frac{4}{x}+\frac{1}{y}=\left(\frac{4}{x}+\frac{1}{y}\right)(x+y)=5+\frac{4y}{x}+\frac{x}{y} \geqslant 5+2\sqrt{\frac{4y}{x}\cdot\frac{x}{y}}=9$。
当且仅当 $\frac{4y}{x}=\frac{x}{y}$，即 $x=\frac{2}{3}, y=\frac{1}{3}$ 时，等号成立，$\therefore \frac{4}{x}+\frac{1}{y}$ 的最小值为 9 。
</p>
<p style="font-size: 14px; text-indent: 2em;">
（2）$\because$ 正数 $x, y$ 满足 $x+y=xy$，$\therefore \frac{1}{x}+\frac{1}{y}=1$，$\therefore x+2y=(x+2y)\left(\frac{1}{x}+\frac{1}{y}\right)=\frac{x}{y}+\frac{2y}{x}+3 \geqslant 2\sqrt{\frac{x}{y}\cdot\frac{2y}{x}}+3=2\sqrt{2}+3$。
当且仅当 $\frac{x}{y}=\frac{2y}{x}$，即 $x=\sqrt{2}+1, y=\frac{2+\sqrt{2}}{2}$ 时，等号成立，$\therefore x+2y$ 的最小值为 $3+2\sqrt{2}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: （1）C （2）C</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">方法提炼</h5>
<ol style="font-size: 14px;">
    <li>该类问题可归纳为以下模型：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>已知 $x>0, y>0, ax+by=c$，求 $\frac{m}{x}+\frac{n}{y}$ 的最小值；</li>
            <li>已知 $x>0, y>0, \frac{a}{x}+\frac{b}{y}=c$，求 $mx+ny$ 的最小值。</li>
        </ol>
    </li>
    <li>解题步骤如下：
        <ol style="font-size: 14px; padding-left: 20px;">
            <li>把条件中的等式变形为 "1" 的表达式；</li>
            <li>把 "1" 的表达式与所求最值的式子相乘，变形为积是定值的形式；</li>
            <li>利用基本不等式求解最值。</li>
        </ol>
    </li>
</ol>
<h4 style="background: linear-gradient(to right, #ffeb3b, #fdd835); padding: 5px; color: black;">考向 5 消元法求最值</h4>
<p style="font-size: 14px; margin-bottom: 1em;">
例 5 若正实数 $x, y$ 满足 $x^2+\frac{y^2}{2}=1$，则 $x\sqrt{1+y^2}$ 的最大值是___________。
</p>
<h5 style="font-weight: bold; margin-bottom: 1em;">解析</h5>
<p style="font-size: 14px; text-indent: 2em;">
方法 1：由 $x^2+\frac{y^2}{2}=1$ 可得 $y^2=2-2x^2$，
则 $x\sqrt{1+y^2}=x\sqrt{1+2-2x^2}=\sqrt{\frac{1}{2}\times 2x^2(3-2x^2)} \leqslant \sqrt{\frac{1}{2}\times[\frac{2x^2+(3-2x^2)}{2}]^2}=\frac{3\sqrt{2}}{4}$。
当且仅当 $2x^2=3-2x^2$，即 $x=\frac{\sqrt{3}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-size: 14px; text-indent: 2em;">
方法 2：$x\sqrt{1+y^2}=\sqrt{2} \cdot x\sqrt{\frac{1+y^2}{2}} \leqslant \sqrt{2} \cdot \frac{x^2+\frac{1+y^2}{2}}{2} = \frac{3\sqrt{2}}{4}$。
当且仅当 $x=\sqrt{\frac{1+y^2}{2}}$，即 $x=\frac{\sqrt{3}}{2}, y=\frac{\sqrt{2}}{2}$ 时，等号成立，所以 $x\sqrt{1+y^2}$ 的最大值是 $\frac{3\sqrt{2}}{4}$。
</p>
<p style="font-weight: bold; text-indent: 2em;">答案: $\frac{3\sqrt{2}}{4}$</p>
</div>

# 复杂数学公式集

本文件包含 40 个复杂的数学公式，涵盖微积分、线性代数、微分方程、复变函数、概率论、张量分析、数论、泛函分析等多个领域。

---

## 1. 多重积分变换

$$
\mathcal{F}\{f\}(\xi) = \int_{\mathbb{R}^n} f(x) e^{-2\pi i x \cdot \xi} \, dx
$$

## 2. 非线性偏微分方程 (KdV 方程)

$$
\frac{\partial u}{\partial t} + 6u\frac{\partial u}{\partial x} + \frac{\partial^3 u}{\partial x^3} = 0
$$

## 3. 黎曼曲率张量

$$
R^\rho{}_{\sigma\mu\nu} = \partial_\mu \Gamma^\rho_{\nu\sigma} - \partial_\nu \Gamma^\rho_{\mu\sigma} + \Gamma^\rho_{\mu\lambda}\Gamma^\lambda_{\nu\sigma} - \Gamma^\rho_{\nu\lambda}\Gamma^\lambda_{\mu\sigma}
$$

## 4. 薛定谔方程 (含势能项)

$$
i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \left[ -\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r},t) \right]\Psi(\mathbf{r},t)
$$

## 5. 傅里叶级数的复数形式

$$
f(x) = \sum_{n=-\infty}^{\infty} c_n e^{i n x}, \quad c_n = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) e^{-i n x} dx
$$

## 6. 拉普拉斯算子在球坐标系下的表达

$$
\nabla^2 f = \frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial f}{\partial r} \right) + \frac{1}{r^2 \sin\theta} \frac{\partial}{\partial \theta} \left( \sin\theta \frac{\partial f}{\partial \theta} \right) + \frac{1}{r^2 \sin^2\theta} \frac{\partial^2 f}{\partial \phi^2}
$$

## 7. 爱因斯坦场方程

$$
G_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}
$$

## 8. 贝塞尔函数的积分表示

$$
J_n(x) = \frac{1}{\pi} \int_0^\pi \cos(n\theta - x \sin\theta) d\theta
$$

## 9. 狄拉克 δ 函数的傅里叶变换

$$
\mathcal{F}\{\delta(x)\} = \int_{-\infty}^{\infty} \delta(x) e^{-i\omega x} dx = 1
$$

## 10. 高斯超几何函数

$$
{}_2F_1(a,b;c;z) = \sum_{n=0}^{\infty} \frac{(a)_n (b)_n}{(c)_n} \frac{z^n}{n!}
$$

## 11. 勒让德多项式递推关系

$$
(n+1)P_{n+1}(x) = (2n+1)xP_n(x) - nP_{n-1}(x)
$$

## 12. 泊松求和公式

$$
\sum_{n=-\infty}^{\infty} f(n) = \sum_{k=-\infty}^{\infty} \hat{f}(k)
$$

## 13. 斯托克斯定理

$$
\int_{\Sigma} d\omega = \int_{\partial\Sigma} \omega
$$

## 14. 变分法中的欧拉-拉格朗日方程

$$
\frac{\partial \mathcal{L}}{\partial f} - \frac{d}{dx} \left( \frac{\partial \mathcal{L}}{\partial f'} \right) = 0
$$

## 15. 哈密顿-雅可比方程

$$
\frac{\partial S}{\partial t} + H\left(q_i, \frac{\partial S}{\partial q_i}, t\right) = 0
$$

## 16. 黎曼 ζ 函数的函数方程

$$
\zeta(s) = 2^s \pi^{s-1} \sin\left(\frac{\pi s}{2}\right) \Gamma(1-s) \zeta(1-s)
$$

## 17. 路径积分表达式 (费曼路径积分)

$$
K(x_b, t_b; x_a, t_a) = \int \mathcal{D}[x(t)] e^{\frac{i}{\hbar} S[x(t)]}
$$

## 18. 黎曼-罗赫定理 (代数几何)

$$
\dim H^0(X, \mathcal{O}(D)) - \dim H^1(X, \mathcal{O}(D)) = \deg D + 1 - g
$$

## 19. 纳维-斯托克斯方程

$$
\rho \left( \frac{\partial \mathbf{v}}{\partial t} + \mathbf{v} \cdot \nabla \mathbf{v} \right) = -\nabla p + \mu \nabla^2 \mathbf{v} + \mathbf{f}
$$

## 20. 希尔伯特空间中的谱定理

$$
A = \int_{\sigma(A)} \lambda \, dE(\lambda)
$$

## 21. 伽罗瓦理论中的基本定理

$$
\text{Gal}(E/F) \leftrightarrow \{\text{中间域 } K \mid F \subseteq K \subseteq E\}
$$

## 22. 黎曼流形上的拉普拉斯-贝尔特拉米算子

$$
\Delta f = \frac{1}{\sqrt{|g|}} \partial_i \left( \sqrt{|g|} g^{ij} \partial_j f \right)
$$

## 23. 布朗运动的伊藤积分

$$
\int_0^t H_s \, dW_s = \lim_{n \to \infty} \sum_{i=1}^{n} H_{t_{i-1}} (W_{t_i} - W_{t_{i-1}})
$$

## 24. 黎曼曲面的单值化定理

$$
\text{任何单连通黎曼曲面共形等价于 } \mathbb{C}, \, \mathbb{D} \text{ 或 } \mathbb{P}^1
$$

## 25. 杨-米尔斯方程

$$
D_\mu F^{\mu\nu} = J^\nu
$$

## 26. 拓扑 K 理论中的阿蒂亚-辛格指标定理

$$
\operatorname{ind}(D) = \int_X \operatorname{ch}(E - F) \operatorname{Td}(TX)
$$

## 27. 量子场论中的威克定理

$$
\mathcal{T}\{\phi(x_1)\cdots\phi(x_n)\} = :\phi(x_1)\cdots\phi(x_n): + \text{所有收缩项}
$$

## 28. 偏微分方程的柯西-柯瓦列夫斯卡娅定理条件

$$
\frac{\partial^k u}{\partial t^k} = F\left(t, x, \frac{\partial^{|\alpha| + j} u}{\partial x^\alpha \partial t^j}\right), \quad j < k, |\alpha| + j \leq k
$$

## 29. 莫比乌斯反演公式

$$
g(n) = \sum_{d|n} f(d) \implies f(n) = \sum_{d|n} \mu(d) g\left(\frac{n}{d}\right)
$$

## 30. 非交换几何中的达布定理

$$
\omega = \sum_{i=1}^n dp_i \wedge dq^i
$$

## 31. 复分析中的柯西积分公式 (高阶导数)

$$
f^{(n)}(a) = \frac{n!}{2\pi i} \oint_\gamma \frac{f(z)}{(z-a)^{n+1}} dz
$$

## 32. 泛函分析中的哈恩-巴拿赫定理

$$
\text{若 } p \text{ 是次线性泛函，} f \text{ 是子空间 } M \text{ 上的线性泛函且 } f(x) \leq p(x) \text{ 对所有 } x \in M, \\
\text{则存在 } X \text{ 上的线性泛函 } F \text{ 使得 } F(x) = f(x) \text{ 且 } F(x) \leq p(x)
$$

## 33. 微分几何中的嘉当结构方程

$$
\Omega^i_j = d\omega^i_j + \omega^i_k \wedge \omega^k_j
$$

## 34. 数论中的类数公式

$$
h(-d) = \frac{w\sqrt{d}}{2\pi} L(1, \chi_d)
$$

## 35. 随机过程中的科尔莫戈罗夫前向方程

$$
\frac{\partial p}{\partial t} = -\sum_i \frac{\partial}{\partial x_i} (\mu_i p) + \frac{1}{2} \sum_{i,j} \frac{\partial^2}{\partial x_i \partial x_j} (a_{ij} p)
$$

## 36. 代数拓扑中的德拉姆上同调

$$
H^k_{\text{dR}}(M) = \frac{\ker(d: \Omega^k(M) \to \Omega^{k+1}(M))}{\operatorname{im}(d: \Omega^{k-1}(M) \to \Omega^k(M))}
$$

## 37. 量子力学中的不确定性原理 (算符形式)

$$
\sigma_A^2 \sigma_B^2 \geq \left| \frac{1}{2i} \langle [\hat{A},\hat{B}] \rangle \right|^2
$$

## 38. 黎曼几何中的测地线方程

$$
\frac{d^2 x^\mu}{d\tau^2} + \Gamma^\mu_{\alpha\beta} \frac{dx^\alpha}{d\tau} \frac{dx^\beta}{d\tau} = 0
$$

## 39. 复代数几何中的霍奇分解

$$
H^k(X, \mathbb{C}) = \bigoplus_{p+q=k} H^{p,q}(X)
$$

## 40. 无限维分析中的马林科夫过程生成元

$$
(\mathcal{L}f)(x) = \lim_{t \to 0} \frac{\mathbb{E}^x[f(X_t)] - f(x)}{t}
$$
