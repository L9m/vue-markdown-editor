# HTML 标签测试

此文件用于测试 Markdown 编辑器对 HTML 标签的处理，包括各种边界情况，如嵌套、交错、缺少标签、自闭合标签、属性处理、公式嵌入等。

## 简单 HTML 标签

<p>这是一个段落。</p>

<div>这是一个div。</div>

## 自闭合标签 (Void Elements)

<img src="example.jpg" alt="示例图片">

<br>

<hr>

## 嵌套标签

<div>
  <p>外层div内的段落。</p>
  <ul>
    <li>列表项1</li>
    <li>列表项2</li>
  </ul>
</div>

## 交错标签 (Mismatched Tags)

<div>
  <p>交错标签测试</span>  <!-- 缺少关闭p，使用span关闭 -->
</div>

<span>另一个交错</div> <!-- 缺少关闭span，使用div关闭 -->

## 缺少关闭标签

<div>
  <p>这个段落缺少关闭标签。

## HTML 中嵌入公式 (Katex)

<div>
  $$ E = mc^2 $$
  <p>公式在div内。</p>
</div>

<span>\( x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \)</span>

## 属性测试

<div id="test" class="example" style="color: red;" data-custom="value">带属性的div。</div>

<input type="text" disabled> <!-- 布尔属性 -->

<img src="image.jpg" alt="alt" onerror="alert('error')"> <!-- 事件属性，应被过滤 -->

## 媒体标签

<video src="video.mp4" controls></video>

<audio src="audio.mp3" controls></audio>

## HTML Block vs Inline

这是一个 inline <span>span</span> 在文本中。

<div>这是一个block级HTML。</div>

## 其他边界情况

<!-- 注释 -->

空标签: <div></div>

自闭合非 void: <div /> <!-- 应作为打开标签处理？ -->

多属性: <img src="img.jpg" alt="alt" width="100" height="100">

无效属性名: <div invalid@attr="value">无效属性</div>

转义: <div>&lt;script&gt;alert(1)&lt;/script&gt;</div>

## 表格中的 HTML

| 列 1                     | 列 2                |
| ------------------------ | ------------------- |
| <div>HTML in table</div> | <span>inline</span> |

## 列表中的 HTML

- <div>Item with div</div>
- Item with <span>span</span>
