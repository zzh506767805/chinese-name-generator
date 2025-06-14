# 🧪 Stripe 测试模式设置指南

## 当前状态
已创建 `.env.local` 文件用于覆盖生产环境配置，切换到测试模式。

## 📋 设置步骤

### 1. 获取 Stripe 测试密钥
1. 访问 [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
2. 确保左上角显示 "测试数据" 模式
3. 复制以下密钥：
   - **Secret key** (以 `sk_test_` 开头)
   - **Publishable key** (以 `pk_test_` 开头)

### 2. 更新测试密钥
编辑 `.env.local` 文件，将以下占位符替换为你的实际测试密钥：

```bash
# 将这些替换为你的实际Stripe测试密钥
STRIPE_SECRET_KEY="sk_test_YOUR_ACTUAL_TEST_SECRET_KEY"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_YOUR_ACTUAL_TEST_PUBLISHABLE_KEY"
```

### 3. 重启开发服务器
```bash
npm run dev
```

## 🧪 测试用信用卡号码

Stripe 提供以下测试信用卡：

### ✅ 成功支付
- **卡号**: `4242 4242 4242 4242`
- **到期日**: 任何未来日期 (如: 12/34)
- **CVC**: 任何3位数字 (如: 123)
- **邮编**: 任何5位数字 (如: 12345)

### ❌ 失败支付测试
- **卡号**: `4000 0000 0000 0002` (卡被拒绝)
- **卡号**: `4000 0000 0000 9995` (余额不足)

## 🔍 测试流程

1. **启动应用**: `npm run dev`
2. **访问**: http://localhost:3000
3. **填写姓名表单**
4. **点击生成按钮**
5. **使用测试信用卡完成支付**
6. **验证积分是否正确增加**

## 📊 验证测试结果

### 在 Stripe Dashboard 查看
1. 访问 [Stripe Test Payments](https://dashboard.stripe.com/test/payments)
2. 查看测试支付记录
3. 确认金额和状态

### 在应用中验证
1. 检查用户积分余额
2. 测试姓名生成功能
3. 验证积分扣除机制

## ⚠️ 重要提醒

- 🔴 **测试模式不会产生真实费用**
- 🔴 **测试数据不会影响生产环境**
- 🔴 **完成测试后记得切换回生产环境**

## 🔄 环境切换

### 切换到测试环境
```bash
# 如果有测试备份，恢复它
mv .env.local.test_backup .env.local

# 或者重新创建测试配置
echo 'STRIPE_SECRET_KEY="sk_test_YOUR_TEST_SECRET_KEY"' > .env.local
echo 'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_YOUR_TEST_PUBLISHABLE_KEY"' >> .env.local
echo 'NEXT_PUBLIC_BASE_URL="http://localhost:3000"' >> .env.local
```

### 切换回生产环境 ✅ (当前状态)
```bash
# 备份测试配置并切换到生产环境
mv .env.local .env.local.test_backup
```

### 验证当前环境
```bash
# 查看当前使用的Stripe密钥类型
grep "STRIPE_SECRET_KEY" .env
# 如果看到 sk_live_ 开头，说明是生产环境
# 如果看到 sk_test_ 开头，说明是测试环境
```

## ⚠️ 重要提醒

- 🔴 **生产环境会产生真实费用**
- 🔴 **确保在生产环境中使用真实信用卡测试**
- 🔴 **测试时建议使用小额金额** 