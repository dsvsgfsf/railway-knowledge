/* knowledge-tools-navigation.js v1.0
   实用工具导航知识库 — 豆包/DeepSeek/学习通
   黑龙江交通职业技术学院 铁路知识智能查询系统
   创建日期：2026年5月7日
*/
(function(){
  'use strict';
  if(!window.KNOWLEDGE_BASE) return;

/* ══════════════════════════════════════════════════════════
   实用工具导航 — 智能识别学生需求并提供推荐工具
   ══════════════════════════════════════════════════════════ */
window.KNOWLEDGE_BASE.toolNavigation = {

  // 工具信息库
  tools: {
    doubao: {
      name: "豆包AI",
      url: "https://www.doubao.com/",
      logo: "🎯",
      tagline: "字节跳动AI助手",
      strengths: [
        "🎨 PPT制作能力强，支持一键生成精美演示文稿",
        "🎭 模板丰富，涵盖教育、商务、学术等多种场景",
        "📊 自动美化排版，视觉效果专业",
        "💬 交互友好，操作简单易上手",
        "🖼️ 支持图片生成，可为PPT配图"
      ],
      bestFor: ["制作PPT演示文稿", "课件PPT制作", "铁路知识PPT", "汇报演示"],
      guide: "访问 https://www.doubao.com/ → 注册登录 → 选择「PPT生成」或「文档生成」功能 → 输入主题内容 → 选择模板 → 自动生成精美PPT"
    },
    deepseek: {
      name: "DeepSeek",
      url: "https://www.deepseek.com/",
      logo: "🔮",
      tagline: "深度求索AI",
      strengths: [
        "✍️ 文本创作能力强，擅长专业文案写作",
        "📝 逻辑清晰，文章结构严谨",
        "🎓 学术写作规范，参考文献格式标准",
        "📋 公文、报告、总结等文案均可驾驭",
        "💡 创意文案、营销文案专业出色"
      ],
      bestFor: ["撰写专业文案", "文章写作", "报告总结", "学术论文", "创意写作"],
      guide: "访问 https://www.deepseek.com/ → 注册登录 → 选择「深度写作」模式 → 输入写作需求 → 调整风格/长度参数 → 生成高质量文案"
    },
    chaoxing: {
      name: "学习通",
      url: "https://passport2.chaoxing.com/",
      logo: "📚",
      tagline: "超星尔雅网络学习平台",
      strengths: [
        "📖 海量课程资源，涵盖各专业领域",
        "🎬 支持视频课程学习，可倍速播放",
        "📝 在线作业和考试功能完善",
        "📁 课程资料下载，离线学习",
        "📊 学习进度追踪，学习数据可视化"
      ],
      bestFor: ["在线课程学习", "专业课程视频", "期末复习", "技能培训", "职业认证"],
      guide: "访问 https://passport2.chaoxing.com/ → 输入学校/学号登录 → 进入「我的课程」→ 选择铁路专业相关课程 → 开始视频学习或下载资料"
    },
    mooc: {
      name: "中国大学MOOC",
      url: "https://www.icourse163.org/",
      logo: "🎓",
      tagline: "国家精品课程平台",
      strengths: [
        "🏆 国家精品课程，质量有保障",
        "👨‍🏫 名校名师授课，师资力量雄厚",
        "📜 课程认证证书，求职加分项",
        "🔄 定期开课，可与在校课程同步",
        "💯 作业考试严谨，学习效果可量化"
      ],
      bestFor: ["系统学习专业知识", "备考复习", "跨校选修", "获取证书"],
      guide: "访问 https://www.icourse163.org/ → 注册账号 → 搜索铁路相关课程（如「电力机车」「列车运行控制」）→ 加入课程 → 按计划学习"
    },
    zhihuishu: {
      name: "智慧职教",
      url: "https://www.icve.com.cn/",
      logo: "🏭",
      tagline: "职业教育数字化平台",
      strengths: [
        "🎯 职业教育专业课程，贴近岗位需求",
        "🔧 实操技能课程丰富，配套仿真软件",
        "📜 职业技能等级证书培训",
        "🏢 校企合作课程，对接企业需求",
        "📊 职业技能测评，科学评估能力"
      ],
      bestFor: ["职业技能提升", "实操技能学习", "考证培训", "岗位技能对接"],
      guide: "访问 https://www.icve.com.cn/ → 登录后选择铁路相关专业课 → 学习理论知识 + 虚拟仿真实训 → 参加技能考核"
    }
  },

  // 关键词匹配规则
  intentRules: [
    // PPT制作 → 豆包
    {
      keywords: ["PPT", "ppt", "演示文稿", "演示", "课件制作", "幻灯片", "做PPT", "制作PPT"],
      tool: "doubao",
      reason: "豆包AI的PPT制作功能非常强大，可以一键生成精美演示文稿"
    },
    // 文案写作 → DeepSeek
    {
      keywords: ["文案", "写作", "文章", "报告", "总结", "论文", "征文", "演讲稿", "发言稿", "心得", "感想"],
      tool: "deepseek",
      reason: "DeepSeek的文本创作能力强，擅长各类专业文案写作"
    },
    // 在线学习 → 学习通/智慧职教
    {
      keywords: ["学习", "课程", "上课", "网课", "视频课", "mooc", "MOOC", "在线学习", "慕课", "尔雅"],
      tool: "chaoxing",
      reason: "学习通和智慧职教提供丰富的在线课程资源"
    },
    // 大学MOOC → 中国大学MOOC
    {
      keywords: ["大学MOOC", "icourse", "ICourse", "精品课程", "名校课程", "系统学习"],
      tool: "mooc",
      reason: "中国大学MOOC汇聚国家精品课程，名校名师授课"
    }
  ],

  // 识别用户意图并返回推荐工具
  identifyIntent: function(query) {
    for(const rule of this.intentRules) {
      for(const keyword of rule.keywords) {
        if(query.includes(keyword)) {
          return {
            tool: rule.tool,
            reason: rule.reason
          };
        }
      }
    }
    return null;
  },

  // 生成工具推荐HTML
  generateRecommendationHTML: function(intent) {
    const tool = this.tools[intent.tool];
    if(!tool) return '';

    let html = `
      <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:16px;padding:24px;margin:16px 0;color:#fff;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <span style="font-size:32px">${tool.logo}</span>
          <div>
            <div style="font-size:18px;font-weight:700">${tool.name}</div>
            <div style="font-size:12px;opacity:0.8">${tool.tagline}</div>
          </div>
        </div>
        <div style="background:rgba(255,255,255,0.15);border-radius:8px;padding:12px;margin-bottom:16px;">
          <div style="font-size:13px;font-weight:600;margin-bottom:8px;">💡 推荐理由</div>
          <div style="font-size:13px;opacity:0.9">${intent.reason}</div>
        </div>
        <div style="font-size:13px;font-weight:600;margin-bottom:8px;">✨ 核心优势</div>
        <div style="font-size:12px;line-height:1.8;opacity:0.9;margin-bottom:16px;">
          ${tool.strengths.map(s => `<div>• ${s}</div>`).join('')}
        </div>
        <a href="${tool.url}" target="_blank" style="display:inline-block;background:#fff;color:#667eea;padding:10px 20px;border-radius:8px;font-weight:600;text-decoration:none;font-size:13px;">
          🚀 立即前往使用
        </a>
      </div>
    `;
    return html;
  },

  // 生成使用指南HTML
  generateGuideHTML: function(toolKey) {
    const tool = this.tools[toolKey];
    if(!tool) return '';

    let html = `
      <div style="background:#f8f9fc;border-radius:12px;padding:20px;margin:16px 0;">
        <div style="font-size:16px;font-weight:700;color:var(--primary);margin-bottom:12px;">
          ${tool.logo} ${tool.name} 使用指南
        </div>
        <div style="background:#fff;border-radius:8px;padding:16px;margin-bottom:12px;">
          <div style="font-size:13px;color:#666;margin-bottom:8px;">📍 访问地址</div>
          <a href="${tool.url}" target="_blank" style="color:#3498db;font-size:14px;word-break:break-all;">${tool.url}</a>
        </div>
        <div style="background:#fff;border-radius:8px;padding:16px;">
          <div style="font-size:13px;color:#666;margin-bottom:8px;">📖 使用步骤</div>
          <div style="font-size:13px;line-height:1.8;color:#333;">${tool.guide}</div>
        </div>
      </div>
    `;
    return html;
  },

  // 快捷入口HTML（用于侧边栏）
  generateQuickLinksHTML: function() {
    const tools = this.tools;
    let html = `
      <div style="margin-top:16px;">
        <div style="font-size:13px;font-weight:600;color:var(--primary);margin-bottom:10px;">🛠️ 学习工具导航</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <a href="${tools.doubao.url}" target="_blank" class="tool-link" style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:#fff;border-radius:8px;text-decoration:none;color:#333;font-size:12px;transition:all 0.2s;" onmouseover="this.style.transform='translateX(4px)';this.style.boxShadow='0 2px 8px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateX(0)';this.style.boxShadow='none'">
            <span style="font-size:18px">${tools.doubao.logo}</span>
            <div>
              <div style="font-weight:600">${tools.doubao.name}</div>
              <div style="color:#888;font-size:11px">PPT制作 · 演示文稿</div>
            </div>
          </a>
          <a href="${tools.deepseek.url}" target="_blank" class="tool-link" style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:#fff;border-radius:8px;text-decoration:none;color:#333;font-size:12px;transition:all 0.2s;" onmouseover="this.style.transform='translateX(4px)';this.style.boxShadow='0 2px 8px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateX(0)';this.style.boxShadow='none'">
            <span style="font-size:18px">${tools.deepseek.logo}</span>
            <div>
              <div style="font-weight:600">${tools.deepseek.name}</div>
              <div style="color:#888;font-size:11px">文案写作 · 文章生成</div>
            </div>
          </a>
          <a href="${tools.chaoxing.url}" target="_blank" class="tool-link" style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:#fff;border-radius:8px;text-decoration:none;color:#333;font-size:12px;transition:all 0.2s;" onmouseover="this.style.transform='translateX(4px)';this.style.boxShadow='0 2px 8px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateX(0)';this.style.boxShadow='none'">
            <span style="font-size:18px">${tools.chaoxing.logo}</span>
            <div>
              <div style="font-weight:600">${tools.chaoxing.name}</div>
              <div style="color:#888;font-size:11px">在线课程 · 视频学习</div>
            </div>
          </a>
          <a href="${tools.mooc.url}" target="_blank" class="tool-link" style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:#fff;border-radius:8px;text-decoration:none;color:#333;font-size:12px;transition:all 0.2s;" onmouseover="this.style.transform='translateX(4px)';this.style.boxShadow='0 2px 8px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateX(0)';this.style.boxShadow='none'">
            <span style="font-size:18px">${tools.mooc.logo}</span>
            <div>
              <div style="font-weight:600">${tools.mooc.name}</div>
              <div style="color:#888;font-size:11px">精品课程 · 名校MOOC</div>
            </div>
          </a>
        </div>
      </div>
      <div style="margin-top:16px;">
        <div style="font-size:13px;font-weight:600;color:#e74c3c;margin-bottom:10px;">🚄 铁路资讯</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <a href="public/realtime-news.html" target="_blank" class="tool-link" style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:linear-gradient(135deg,#e74c3c 0%,#c0392b 100%);border-radius:8px;text-decoration:none;color:#fff;font-size:12px;transition:all 0.2s;" onmouseover="this.style.transform='translateX(4px)';this.style.boxShadow='0 4px 12px rgba(231,76,60,0.4)'" onmouseout="this.style.transform='translateX(0)';this.style.boxShadow='none'">
            <span style="font-size:18px">📡</span>
            <div>
              <div style="font-weight:600">实时铁路消息</div>
              <div style="opacity:0.8;font-size:11px;">最新招聘 · 政策动态</div>
            </div>
          </a>
          <a href="https://rczp.china-railway.com.cn/" target="_blank" class="tool-link" style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:#fff;border-radius:8px;text-decoration:none;color:#333;font-size:12px;transition:all 0.2s;" onmouseover="this.style.transform='translateX(4px)';this.style.boxShadow='0 2px 8px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateX(0)';this.style.boxShadow='none'">
            <span style="font-size:18px">📋</span>
            <div>
              <div style="font-weight:600">铁路人才招聘网</div>
              <div style="color:#888;font-size:11px">官方报名入口</div>
            </div>
          </a>
        </div>
      </div>
    `;
    return html;
  }
};

// 导出模块信息
console.log('✅ 实用工具导航模块已加载 - 支持豆包/DeepSeek/学习通智能推荐');

})();
