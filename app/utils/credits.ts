/**
 * 用户积分/次数管理工具
 * 管理用户剩余的起名次数
 */

const CREDITS_KEY = 'chinese_name_credits';
const CREDITS_PER_PURCHASE = 10; // 每次购买获得10个名字
const PRICE_PER_PACKAGE = 2.00; // 每包价格2美元

/**
 * 获取用户剩余次数
 */
export function getUserCredits(): number {
  if (typeof window === 'undefined') return 0;
  
  try {
    const credits = localStorage.getItem(CREDITS_KEY);
    return credits ? parseInt(credits, 10) : 0;
  } catch (error) {
    console.error('Error getting user credits:', error);
    return 0;
  }
}

/**
 * 设置用户剩余次数
 */
export function setUserCredits(credits: number): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(CREDITS_KEY, credits.toString());
  } catch (error) {
    console.error('Error setting user credits:', error);
  }
}

/**
 * 使用一个积分（生成一个名字）
 * @returns 是否成功使用积分
 */
export function useCredit(): boolean {
  const currentCredits = getUserCredits();
  
  if (currentCredits <= 0) {
    return false;
  }
  
  setUserCredits(currentCredits - 1);
  
  // 触发积分更新事件
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('creditsUpdated'));
  }
  
  return true;
}

/**
 * 添加积分（购买后调用）
 */
export function addCredits(credits: number = CREDITS_PER_PURCHASE): void {
  const currentCredits = getUserCredits();
  setUserCredits(currentCredits + credits);
  
  // 触发积分更新事件
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('creditsUpdated'));
  }
}

/**
 * 检查用户是否有足够的积分
 */
export function hasCredits(): boolean {
  return getUserCredits() > 0;
}

/**
 * 获取购买配置
 */
export function getPurchaseConfig() {
  return {
    creditsPerPurchase: CREDITS_PER_PURCHASE,
    pricePerPackage: PRICE_PER_PACKAGE,
  };
}

/**
 * 生成唯一的会话ID（用于标识购买会话）
 */
export function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
} 