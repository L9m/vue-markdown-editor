# Mermaid 图表测试

此文件用于测试 Markdown 编辑器对 Mermaid 图表的处理，包括各种图表类型、语法和边界情况，如流程图、序列图、类图、在 HTML 中嵌入、无效语法、空图表等。

## 简单流程图

```mermaid
graph TD
    A[开始] --> B[过程]
    B --> C[结束]
```

## 序列图

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>Bob: Hello Bob!
    Bob->>Alice: Hi Alice!
```

## 类图

```mermaid
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal: +int age
    Animal: +String gender
    Animal: +isMammal()
    Animal: +mate()
```

## Gantt 图

```mermaid
gantt
    title 项目甘特图
    dateFormat  YYYY-MM-DD
    section 部分1
    任务1           :a1, 2023-01-01, 30d
    任务2     :after a1  , 20d
```

## 饼图

```mermaid
pie title 宠物领养
    "狗" : 386
    "猫" : 85
    "鼠" : 15
```

## 在 HTML 中的 Mermaid

<div>
```mermaid
graph LR
    A --> B
```
</div>

## 无效语法

```mermaid
graph TD
    A -- > B  // 无效箭头
```

## 空图表

```mermaid

```

## 多图表在同一文档

```mermaid
flowchart TD
    Start --> End
```

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
```

## 其他边界情况

嵌套在列表中：

- ```mermaid
  graph TD
      X --> Y
  ```

转义或特殊字符：

```mermaid
graph TD
    A["特殊字符: \" & < >"] --> B
```

大图表（多行）：

```mermaid
graph TB
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
    c1-->a2
```
