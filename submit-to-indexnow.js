const https = require('https');

// IndexNow API请求配置
const data = JSON.stringify({
  "host": "chinesenamegenerate.com",
  "key": "7ab0a6a876de4a249bc7b1ec58f685a0",
  "keyLocation": "https://chinesenamegenerate.com/7ab0a6a876de4a249bc7b1ec58f685a0.txt",
  "urlList": [
    // 主页(多语言版本)
    "https://chinesenamegenerate.com/en",
    "https://chinesenamegenerate.com/zh",
    "https://chinesenamegenerate.com/ja",
    "https://chinesenamegenerate.com/ko",
    
    // 关键词落地页(英文版本)
    "https://chinesenamegenerate.com/en/chinese-names-for-boys",
    "https://chinesenamegenerate.com/en/list-of-chinese-names",
    "https://chinesenamegenerate.com/en/chinese-names-for-girls-generator",
    "https://chinesenamegenerate.com/en/chinese-names",
    "https://chinesenamegenerate.com/en/chinese-girl-names",
    "https://chinesenamegenerate.com/en/chinese-surnames",
    "https://chinesenamegenerate.com/en/chinese-names-for-girls",
    "https://chinesenamegenerate.com/en/chinese-last-names",
    "https://chinesenamegenerate.com/en/chinese-name-generator",
    
    // 关键词落地页(中文版本)
    "https://chinesenamegenerate.com/zh/chinese-names-for-boys",
    "https://chinesenamegenerate.com/zh/list-of-chinese-names",
    "https://chinesenamegenerate.com/zh/chinese-names-for-girls-generator",
    "https://chinesenamegenerate.com/zh/chinese-names",
    "https://chinesenamegenerate.com/zh/chinese-girl-names",
    "https://chinesenamegenerate.com/zh/chinese-surnames",
    "https://chinesenamegenerate.com/zh/chinese-names-for-girls",
    "https://chinesenamegenerate.com/zh/chinese-last-names",
    "https://chinesenamegenerate.com/zh/chinese-name-generator",
    
    // 其他语言关键词页面示例
    "https://chinesenamegenerate.com/ja/chinese-names-for-boys",
    "https://chinesenamegenerate.com/ja/chinese-names",
    "https://chinesenamegenerate.com/ja/chinese-name-generator",
    "https://chinesenamegenerate.com/ko/chinese-names-for-boys",
    "https://chinesenamegenerate.com/ko/chinese-names",
    "https://chinesenamegenerate.com/ko/chinese-name-generator",
    
    // 博客页面(英文版本示例)
    "https://chinesenamegenerate.com/en/blog/chinese-names-complete-guide",
    "https://chinesenamegenerate.com/en/blog/chinese-names-for-girls",
    "https://chinesenamegenerate.com/en/blog/chinese-names-for-boys",
    "https://chinesenamegenerate.com/en/blog/chinese-last-names-guide",
    "https://chinesenamegenerate.com/en/blog/chinese-names-meaning-and-significance",
    
    // 博客页面(中文版本示例)
    "https://chinesenamegenerate.com/zh/blog/chinese-names-complete-guide",
    "https://chinesenamegenerate.com/zh/blog/chinese-names-for-girls",
    "https://chinesenamegenerate.com/zh/blog/chinese-names-for-boys",
    
    // 其他重要页面
    "https://chinesenamegenerate.com/en/how-it-works",
    "https://chinesenamegenerate.com/en/faq",
    "https://chinesenamegenerate.com/zh/how-it-works",
    "https://chinesenamegenerate.com/zh/faq"
  ]
});

const options = {
  hostname: 'api.indexnow.org',
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length
  }
};

// 发送请求
const req = https.request(options, (res) => {
  console.log(`状态码: ${res.statusCode}`);
  
  let responseData = '';
  res.on('data', (chunk) => {
    responseData += chunk;
  });
  
  res.on('end', () => {
    console.log('响应结束');
    try {
      if (responseData) {
        console.log('响应数据:', JSON.parse(responseData));
      } else {
        console.log('无响应数据 (这可能是正常的，如果状态码为200或202)');
      }
    } catch (e) {
      console.log('原始响应:', responseData);
    }
  });
});

req.on('error', (e) => {
  console.error('发送请求时出错:', e);
});

// 发送数据
req.write(data);
req.end();

console.log('IndexNow URL提交请求已发送，请查看响应...'); 