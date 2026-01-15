/* eslint-disable */

export default `<h3 style="text-align: center; font-weight: bold; color: black; margin-bottom: 24px; font-family: 'KaiTi', 'STKaiti', 'KaiTi_GB2312', 'SimKai', serif;">
    导数的四则运算法则·总结提升
</h3>
<div style="background: linear-gradient(to right, #3f51b5, #5c6bc0); color: white; font-weight: bold; padding: 10px 16px; border-radius: 4px; margin-bottom: 18px;">
    <span style="font-size: 16px;">[学习目标]</span>
    <ul style="margin: 8px 0 0 1.5em; line-height: 1.7;">
        <li>理解函数的和、差、积、商的求导法则。</li>
        <li>理解求导法则的证明过程，能够综合运用导数公式和导数四则运算法则求简单函数的导数。</li>
    </ul>
</div>

<p style="color: #1976d2; font-weight: bold; margin-bottom: 8px;">导语</p>
<p style="text-indent:2em;">
    同学们，上节课我们学习了基本初等函数的导数，实际上，它是我们整个导数的基础，而且我们也只会幂函数、指数函数、对数函数、三角函数这四类函数的求导法则。我们知道，可以对基本初等函数进行加减乘除等多种形式的组合，组合后的函数，又如何求导，将是我们本节课要解决的内容。
</p>

<h4 style="background: linear-gradient(to right, #20b2aa, #66cdaa); color: white; font-weight: bold; padding: 10px 16px; border-radius: 4px; margin-bottom: 10px;">
    一、$f(x)\pm g(x)$的导数
</h4>

![这是图片](https://qm-cloud.oss-cn-chengdu.aliyuncs.com/test/img/test/5fd8c22a33f352fb5ac2009ab785d85a_3.jpg)

![这是图片](https://qm-cloud.oss-cn-chengdu.aliyuncs.com/test/img/test/5fd8c22a33f352fb5ac2009ab785d85a_3.jpg)

<b>问题1</b>　设$f(x)=x^3$，$g(x)=x$，计算$[f(x)+g(x)]'$与$[f(x)-g(x)]'$，它们与$f'(x)$和$g'(x)$有什么关系？<br>
<b>提示</b>
<div style="margin-left:1.5em;">
    设$y=f(x)+g(x)=x^3+x$，<br>
    $\Delta y=(x+\Delta x)^3+(x+\Delta x)-(x^3+x)=3x^2\Delta x+3x(\Delta x)^2+(\Delta x)^3+\Delta x$<br>
    $\Delta y/\Delta x=3x^2+1+3x\Delta x+(\Delta x)^2$<br>
    $y'=\lim_{\Delta x\to 0} \Delta y/\Delta x=3x^2+1$<br>
    而$f'(x)=3x^2$，$g'(x)=1$，所以$[f(x)+g(x)]'=f'(x)+g'(x)$。<br>
    <br>
    设$y=f(x)-g(x)=x^3-x$，<br>
    $\Delta y=(x+\Delta x)^3-(x+\Delta x)-(x^3-x)=3x^2\Delta x+3x(\Delta x)^2+(\Delta x)^3-\Delta x$<br>
    $\Delta y/\Delta x=3x^2-1+3x\Delta x+(\Delta x)^2$<br>
    $y'=\lim_{\Delta x\to 0} \Delta y/\Delta x=3x^2-1$<br>
    所以$[f(x)-g(x)]'=f'(x)-g'(x)$。
</div>

<div style="background: #f5fff5; border-left: 5px solid #81c784; padding: 10px 18px; margin-bottom: 18px;">
    <b>【知识梳理】</b><br>
    两个函数和或差的导数：$[f(x)\pm g(x)]'=f'(x)\pm g'(x)$。<br>
    <span style="color:#888;">
        注意点：推广到多个函数，$[f_1(x)\pm f_2(x)\pm \cdots \pm f_n(x)]'=f_1'(x)\pm f_2'(x)\pm \cdots \pm f_n'(x)$。
    </span>
</div>

<b>例1</b>　求下列函数的导数：
<ol style="margin-left:1.5em;">
    <li>$y=x^5-x^3+\cos x$；</li>
    <li>$y=\lg x-e^x$。</li>
</ol>
<b>解</b>
<ol style="margin-left:1.5em;">
    <li>$y'=(x^5)'-(x^3)'+(\cos x)'=5x^4-3x^2-\sin x$。</li>
    <li>$y'=(\lg x-e^x)'=(\lg x)'- (e^x)'= \dfrac{1}{x\ln 10} - e^x$。</li>
</ol>

<div style="background: #fffde7; border-left: 5px solid #ffeb3b; padding: 10px 18px; margin-bottom: 18px;">
    <b>反思感悟</b>
    <ul style="margin-left:1.5em;">
        <li>两个函数和（或差）的导数，等于这两个函数的导数的和（或差），对于每一项分别利用导数的运算法则即可。</li>
    </ul>
</div>

<b>跟踪训练1</b>　求下列函数的导数：
<ol style="margin-left:1.5em;">
    <li>$f(x)=x^2+\sin x$；</li>
    <li>$g(x)=x^3-x^2-x+2$。</li>
</ol>
<b>解</b>
<ol style="margin-left:1.5em;">
    <li>$f'(x)=2x+\cos x$。</li>
    <li>$g'(x)=3x^2-2x-1$。</li>
</ol>

<h4 style="background: linear-gradient(to right, #20b2aa, #66cdaa); color: white; font-weight: bold; padding: 10px 16px; border-radius: 4px; margin-bottom: 10px;">
    二、$f(x)g(x)$和$\dfrac{f(x)}{g(x)}$的导数
</h4>

![这是图片](https://qm-cloud.oss-cn-chengdu.aliyuncs.com/test/img/test/5fd8c22a33f352fb5ac2009ab785d85a_3.jpg)

<b>问题2</b>　设$f(x)=x^3$，$g(x)=x$，计算$[f(x)g(x)]'$与$f'(x)g'(x)$，它们是否相等？$[(f(x))/(g(x))]'$与$\dfrac{f'(x)}{g'(x)}$是否相等？<br>
<b>提示</b>
<div style="margin-left:1.5em;">
    $[f(x)g(x)]'=(x^4)'=4x^3$，<br>
    $f'(x)g'(x)=3x^2\cdot 1=3x^2$，<br>
    $[(f(x))/(g(x))]'=(x^2)'=2x$，<br>
    $\dfrac{f'(x)}{g'(x)}=\dfrac{3x^2}{1}=3x^2$，<br>
    所以$[f(x)g(x)]'\neq f'(x)g'(x)$，$[(f(x))/(g(x))]'\neq \dfrac{f'(x)}{g'(x)}$。
</div>

![这是图片](https://qm-cloud.oss-cn-chengdu.aliyuncs.com/test/img/test/5fd8c22a33f352fb5ac2009ab785d85a_3.jpg)

<div style="background: #f5fff5; border-left: 5px solid #81c784; padding: 10px 18px; margin-bottom: 18px;">
    <b>【知识梳理】</b><br>
    <ol style="margin-left:1.5em;">
        <li>$[f(x)g(x)]'=f'(x)g(x)+f(x)g'(x)$，特别地，$[cf(x)]'=cf'(x)$。</li>
        <li>$\left[\dfrac{f(x)}{g(x)}\right]'=\dfrac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}$（$g(x)\neq 0$）。</li>
    </ol>
    <span style="color:#888;">
        注意点：对于$(\log_a x)'=\dfrac{1}{x\ln a}$，可以先换底再求导：$(\log_a x)'=(\ln x/\ln a)'=\dfrac{1}{\ln a}\cdot (\ln x)'=\dfrac{1}{x\ln a}$。
    </span>
</div>

<b>例2</b>　求下列函数的导数：
<ol style="margin-left:1.5em;">
    <li>$y=x^2+x\ln x$；</li>
    <li>$y=\dfrac{\ln x}{x^2}$；</li>
    <li>$y=\dfrac{e^x}{x}$；</li>
    <li>$y=(2x^2-1)(3x+1)$。</li>
</ol>
<b>解</b>
<ol style="margin-left:1.5em;">
    <li>$y'=(x^2)' + (x\ln x)' = 2x + (x)' \ln x + x(\ln x)' = 2x + \ln x + 1$。</li>
    <li>$y'=\left(\dfrac{\ln x}{x^2}\right)' = \dfrac{(\ln x)'x^2 - \ln x (x^2)'}{x^4} = \dfrac{1/x \cdot x^2 - 2x\ln x}{x^4} = \dfrac{1-2\ln x}{x^3}$。</li>
    <li>$y'=\left(\dfrac{e^x}{x}\right)' = \dfrac{(e^x)'x - e^x(x)'}{x^2} = \dfrac{e^x x - e^x}{x^2}$。</li>
    <li>
        方法一：$y'=[(2x^2-1)(3x+1)]' = (2x^2-1)'(3x+1) + (2x^2-1)(3x+1)' = 4x(3x+1) + (2x^2-1)\cdot 3 = 12x^2+4x+6x^2-3 = 18x^2+4x-3$。<br>
        方法二：先展开$y=6x^3+2x^2-3x-1$，再逐项求导，$y'=18x^2+4x-3$。
    </li>
</ol>

<div style="background: #fffde7; border-left: 5px solid #ffeb3b; padding: 10px 18px; margin-bottom: 18px;">
    <b>反思感悟</b>
    <ul style="margin-left:1.5em;">
        <li>（1）分析待求导式子符合哪种求导法则，每一部分式子是由哪种基本初等函数组合成的，确定所需的求导法则和基本公式。</li>
        <li>（2）如果求导式子比较复杂，则需要对式子先变形再求导，常用的变形有乘积式展开变为和式求导，商式变乘积式求导，三角函数恒等变换后求导等。</li>
        <li>（3）利用导数运算法则求导的原则是尽可能化为和、差，能利用和差的求导法则求导的，尽量少用积、商的求导法则求导。</li>
    </ul>
</div>

<b>跟踪训练2</b>　求下列函数的导数：
<ol style="margin-left:1.5em;">
    <li>$y=(x^2+1)(x-1)$；</li>
    <li>$y=x^2+\tan x$；</li>
    <li>$y=\dfrac{e^x}{x+1}$。</li>
</ol>
<b>解</b>
<ol style="margin-left:1.5em;">
    <li>先展开$y=(x^2+1)(x-1)=x^3-x^2+x-1$，$y'=3x^2-2x+1$。</li>
    <li>$y=x^2+\dfrac{\sin x}{\cos x}$，$y'=2x+\dfrac{\cos^2 x+\sin^2 x}{\cos^2 x}=2x+\dfrac{1}{\cos^2 x}$。</li>
    <li>$y'=\dfrac{(e^x)'(x+1)-e^x(x+1)'}{(x+1)^2} = \dfrac{e^x(x+1)-e^x}{(x+1)^2} = \dfrac{x e^x}{(x+1)^2}$。</li>
</ol>

<h4 style="background: linear-gradient(to right, #20b2aa, #66cdaa); color: white; font-weight: bold; padding: 10px 16px; border-radius: 4px; margin-bottom: 10px;">
    三、导数四则运算法则的应用
</h4>

<b>例3</b>
<ol style="margin-left:1.5em;">
    <li>
        日常生活中的饮用水通常都是经过净化的，随着水纯净度的提高，所需净化费用不断增加。已知1 t水净化到纯净度为$x\%$时所需费用（单位：元）为$c(x)=\dfrac{4000}{100-x}$（$80<x<100$）。那么净化到纯净度为$90\%$时所需净化费用的瞬时变化率是（　　）<br>
        A.$-40$元/t　B.$-10$元/t　C.$10$元/t　D.$40$元/t<br>
        <b>答案</b>　D<br>
        <b>解析</b>　净化费用的瞬时变化率就是净化费用函数的导数，$c'(x)=\dfrac{4000}{(100-x)^2}$，$c'(90)=\dfrac{4000}{(10)^2}=40$。
    </li>
    <li>
        曲线$y=x\ln x$上的点到直线$x-y-2=0$的最短距离是（　　）<br>
        A.$\sqrt{2}$　B.$\dfrac{\sqrt{2}}{2}$　C.$1$　D.$2$<br>
        <b>答案</b>　B<br>
        <b>解析</b>　设切线与直线平行，$y'= \ln x+1=1$，$x=1$，$y=0$，点$(1,0)$到直线距离$d=\dfrac{|1-0-2|}{\sqrt{1^2+(-1)^2}}=\dfrac{1}{\sqrt{2}}=\dfrac{\sqrt{2}}{2}$。
    </li>
</ol>

<div style="background: #fffde7; border-left: 5px solid #ffeb3b; padding: 10px 18px; margin-bottom: 18px;">
    <b>反思感悟</b>
    <ul style="margin-left:1.5em;">
        <li>（1）此类问题往往涉及切点、切点处的导数、切线方程三个主要元素，其他的条件可以进行转化，从而转化为这三个要素间的关系。</li>
        <li>（2）准确利用求导法则求出导函数是解决此类问题的第一步，也是解题的关键，务必做到准确。</li>
        <li>（3）分清“在某点”和“过某点”导数的不同。</li>
    </ul>
</div>

<b>跟踪训练3</b>
<ol style="margin-left:1.5em;">
    <li>
        记函数$f(x)$的导函数为$f'(x)$，且$f(x)=3x f'(2)-2\ln x$，则$f(1)$等于（　　）<br>
        A.$1$　B.$2$　C.$\dfrac{1}{2}$　D.$\dfrac{3}{2}$<br>
        <b>答案</b>　D<br>
        <b>解析</b>　$f'(x)=3f'(2)-2/x$，$f'(2)=3f'(2)-1$，$f'(2)=1/2$，$f(x)=\dfrac{3}{2}x-2\ln x$，$f(1)=\dfrac{3}{2}$。
    </li>
    <li>
        曲线$y=\dfrac{2}{e}(x-1)e^x$在点$(1,0)$处的切线与坐标轴围成的面积为　　　　。<br>
        <b>答案</b>　1<br>
        <b>解析</b>　$y'=\dfrac{2}{e}e^x$，$y'|_{x=1}=2$，切线方程$y=2(x-1)$，与$x$轴交于$(1,0)$，与$y$轴交于$(0,-2)$，所围成的三角形面积$S=\dfrac{1}{2}\times 1 \times 2=1$。
</div>

<h4 style="background: linear-gradient(to right, #3f51b5, #5c6bc0); color: white; font-weight: bold; padding: 10px 16px; border-radius: 4px; margin-bottom: 18px;">
    课程小结
</h4>
<div style="border-left: 5px solid #3f51b5; background: #f5f7fa; padding: 10px 18px; margin-bottom: 18px;">
    <ol style="margin: 8px 0 0 1.5em; line-height: 1.7;">
        <li>知识清单：<br>
            (1) 导数的四则运算法则。<br>
            (2) 综合运用导数公式和导数四则运算法则求简单函数的导数。
        </li>
        <li>方法归纳：<br>
            转化法。
        </li>
        <li>常见误区：<br>
            对于函数求导，一般要遵循先化简、变形，再求导的基本原则。
        </li>
    </ol>
</div>
`;