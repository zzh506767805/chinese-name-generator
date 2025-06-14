# 🔧 重置积分工具

## 问题说明
如果你发现积分数量不正确（比如支付$2后得到了20个积分而不是10个），可以使用以下方法重置：

## 🛠️ 重置方法

### 方法1：浏览器控制台重置
1. 在浏览器中按 `F12` 打开开发者工具
2. 切换到 `Console` 标签
3. 输入以下代码并按回车：

```javascript
// 重置积分为0
localStorage.setItem('chinese_name_credits', '0');

// 清除所有session处理记录
Object.keys(sessionStorage).forEach(key => {
  if (key.startsWith('credits_processed_')) {
    sessionStorage.removeItem(key);
  }
});

// 刷新页面
location.reload();
```

### 方法2：设置特定积分数量
如果你想设置特定的积分数量（比如10个）：

```javascript
// 设置积分为10
localStorage.setItem('chinese_name_credits', '10');

// 触发更新事件
window.dispatchEvent(new Event('creditsUpdated'));

// 刷新页面
location.reload();
```

### 方法3：完全清除所有数据
如果想完全重新开始：

```javascript
// 清除所有相关数据
localStorage.removeItem('chinese_name_credits');
localStorage.removeItem('generatedNames');
sessionStorage.clear();

// 刷新页面
location.reload();
```

## 🔍 检查当前积分
要查看当前积分数量：

```javascript
console.log('当前积分:', localStorage.getItem('chinese_name_credits'));
```

## ✅ 修复说明
我已经修复了重复添加积分的问题：
- 使用 `sessionStorage` 防止同一支付会话重复添加积分
- 每个支付会话只会添加一次积分
- 即使刷新成功页面也不会重复添加

## 🧪 测试建议
1. 重置积分为0
2. 进行一次完整的支付流程
3. 验证只获得10个积分
4. 刷新成功页面，确认积分不会增加 