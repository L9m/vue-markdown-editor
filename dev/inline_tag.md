# HTML 内联标签测试

## 基本测试

<u>基本下划线</u>

## 嵌套测试

<u><b>加粗的下划线</b></u>

<u><b>加粗的下划线$aaa$中文的非常的好<span style="color: red">233</span></b></u>

## 多层嵌套

<u><b><i>斜体加粗下划线</i></b></u>

## 不匹配测试

<u>没有结束标签

<span>结束标签不匹配</u>

## 自闭合标签测试

这是一个换行<br/>标签

## 混合内容测试

<u>这是**markdown 加粗**的内容</u>

<span class="test">带属性的标签内容</span>

## 数学公式混合测试

<span style="color:red">span 标签$a$</span>

## 更多测试用例

### 相同标签嵌套

<div><div>内层div</div></div>

### 复杂嵌套

<div class="outer"><span>外层<strong>强调<em>斜体</em>文本</strong>内容</span></div>

### 多个独立标签

<mark>高亮 1</mark> 和 <mark>高亮 2</mark> 在同一行

### 链接和强调

<a href="#test">链接中的<strong>强调文本</strong></a>

### 空标签

<span></span>这是空标签测试

### 单独的开始标签

<div>只有开始标签

### 单独的结束标签

只有结束标签</div>

### 交错标签（错误格式）

<b><i>交错</b>标签</i>

### 包含特殊字符的属性

<span data-test="value with spaces" class="test-class">属性测试</span>

### 内容中包含 HTML 实体

<span>&lt;这是 HTML 实体&gt;</span>

### 自定义标签

<custom-tag>自定义标签内容</custom-tag>

## 布尔属性测试

### 表单元素布尔属性

<input type="text" disabled>
<option selected>选中选项</option>
<input type="checkbox" checked>

### 其他布尔属性

<div hidden>隐藏内容</div>
<script defer>console.log('defer')</script>
<details open>
  <summary>展开的详情</summary>
  内容
</details>
