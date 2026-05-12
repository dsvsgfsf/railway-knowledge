/* knowledge-practical-operations.js v3.0
   铁路实操演示知识库 — 五步闸/一次乘务/机车检查
   黑龙江交通职业技术学院 铁路知识智能查询系统
   创建日期：2026年5月7日
   更新日期：2026年5月7日 v2.0 - 修复视频加载
   更新日期：2026年5月7日 v3.0 - 优化视频展示，直接跳转
*/
(function(){
  'use strict';
  if(!window.KNOWLEDGE_BASE) return;

/* ══════════════════════════════════════════════════════════
   铁路实操演示知识库
   ══════════════════════════════════════════════════════════ */
window.KNOWLEDGE_BASE.practicalOperations = {

  // ══════════════════════════════════════════════════════════
  // 一、五步闸操作演示
  // ══════════════════════════════════════════════════════════
  fiveStepBrake: {
    title: "🚂 五步闸操作（制动机性能试验）",
    description: "五步闸是机车乘务员每次出乘前必须完成的制动机性能检查试验，用于确认制动系统工作正常。",
    importance: "五步闸试验是确保列车安全运行的重要检查项目，机车乘务员必须熟练掌握。",
    types: [
      {
        name: "CCBⅡ型制动机五步闸",
        applicable: "HXD1/2/3系列电力机车",
        videoEmbed: "https://player.bilibili.com/player.html?bvid=BV14z4y1X7qX&page=1",
        videoLabel: "CCBⅡ制动机五步闸教学视频",
        videoLink: "https://www.bilibili.com/video/BV14z4y1X7qX/",
        steps: [
          { step: 1, name: "制动缸压力试验", content: "将制动缸压力调整至均衡风缸压力相同，确认制动缸压力上升和下降正常。", keyPoints: ["观察制动缸压力表指示","确认压力值符合规定（300±15kPa）","检查制动缸缓解时间（2-3秒）"] },
          { step: 2, name: "列车管泄漏试验", content: "在制动状态下，关闭列车管折角塞门，观察列车管压力是否泄漏。", keyPoints: ["列车管泄漏每分钟不超过20kPa","超过规定值需查找泄漏点","检查各管路接头和塞门"] },
          { step: 3, name: "制动和缓解感度试验", content: "实施常用制动和缓解，检查制动系统对制动指令的响应。", keyPoints: ["常用制动减压50kPa","确认制动缸压力正确上升","缓解后制动缸压力归零"] },
          { step: 4, name: "紧急制动试验", content: "实施紧急制动，检查制动系统最大制动能力。", keyPoints: ["列车管压力降至0","制动缸压力达到最高值（450kPa）","确认制动缸在3-5秒内上升到规定压力"] },
          { step: 5, name: "阶段缓解试验", content: "在制动状态下，实施阶段缓解，检查缓解功能是否正常。", keyPoints: ["阶段缓解每次减压20-30kPa","确认制动缸压力阶段下降","运转位制动缸压力最终降为0"] }
        ]
      },
      {
        name: "DK-1型电空制动机五步闸",
        applicable: "SS4G/SS7/SS8/SS9型电力机车",
        videoEmbed: null,
        videoLabel: "DK-1型制动机五步闸视频",
        videoLink: "https://www.bilibili.com/search?q=DK-1%E5%88%B6%E5%8A%A8%E6%9C%BA%E4%BA%94%E6%AD%A5%E9%97%B8",
        steps: [
          { step: 1, name: "总风缸压力试验", content: "检查总风缸压力是否达到规定值（700-900kPa）。", keyPoints: ["总风缸压力不低于700kPa","空压机启动压力800kPa","空压机停止压力900kPa"] },
          { step: 2, name: "均衡风缸与列车管压力试验", content: "确认均衡风缸和列车管压力一致（600kPa）。", keyPoints: ["均衡风缸压力600kPa","列车管压力600kPa","两者压力差不超过10kPa"] },
          { step: 3, name: "制动与缓解试验", content: "操作制动阀实施制动和缓解。", keyPoints: ["常用制动减压50-140kPa","确认制动缸压力与减压量成正比","缓解后制动缸压力归零"] },
          { step: 4, name: "紧急制动试验", content: "拉紧急制动阀，检查紧急制动性能。", keyPoints: ["列车管压力在3秒内降至0","制动缸压力达到最高值","确认自动停车装置动作"] },
          { step: 5, name: "中继阀试验", content: "检查中继阀的充风和排风作用。", keyPoints: ["中继阀充风快","中继阀排风彻底","确认列车管压力稳定"] }
        ]
      }
    ],
    keyNotes: ["五步闸试验必须在机车静止状态下进行","试验前需确认机车处于制动状态（手柄零位，换向手柄中立位）","试验过程中如有异常应立即报告并停止试验","五步闸试验合格后方可进行牵引作业","每一步都要认真观察仪表显示和设备动作"],
    examStandard: "五步闸考试要求操作规范、步骤完整、观察仔细、时间控制得当。操作不当或遗漏步骤均为不合格。",
    // 视频跳转链接
    videoLinks: [
      { name: "CCBⅡ五步闸完整演示", platform: "B站", url: "https://www.bilibili.com/video/BV14z4y1X7qX/", desc: "CCBⅡ型电空制动机五步闸试验" },
      { name: "DK-1五步闸演示", platform: "抖音", url: "https://www.douyin.com/video/7230800383650860300", desc: "DK-1电空制动机五步闸试验" },
      { name: "五步闸考试练习", platform: "好看视频", url: "https://haokan.baidu.com/v?pd=wisenatural&vid=16521124317833330824", desc: "JZ-7型制动机五步闸性能试验" }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // 二、一次乘务作业标准
  // ══════════════════════════════════════════════════════════
  oneTripDuty: {
    title: "🚄 一次乘务作业标准",
    description: "一次乘务作业是指机车乘务员从出勤到退勤的完整工作过程，包括出勤、接车、出库、挂车、运行、交班等环节。",
    importance: "标准化的一次乘务作业是确保铁路运输安全正点的基础，乘务员必须严格按标准执行。",
    standardProcess: [
      { stage: "一、出勤", icon: "📋", duration: "约20-30分钟", tasks: ["认真听取指导员传达运行揭示","核对IC卡数据与运行揭示是否一致","填写司机报单","检查备品（手信号旗、响墩、火炬等）","酒精检测","确认健康状态"], keyPoints: ["运行揭示必须逐一确认","IC卡数据必须与揭示内容相符","发现错误及时纠正"] },
      { stage: "二、接车（整备）", icon: "🔍", duration: "约30-45分钟", tasks: ["检查机车技术状态","进行制动机五步闸试验","进行低压电器试验","检查机车走行部","检查机车前端状态","检查机车行车安全设备（LKJ、6A系统）"], keyPoints: ["按检查路线逐项检查，不得漏检","发现问题及时报修","试验项目必须全部合格"] },
      { stage: "三、出库", icon: "🚂", duration: "约15-30分钟", tasks: ["确认出库信号","机车出库运行至发车线","在规定位置停车等待挂车","确认停留股道和信号显示"], keyPoints: ["严守限速规定","认真确认信号","呼唤应答规范"] },
      { stage: "四、挂车", icon: "🔗", duration: "约10-20分钟", tasks: ["确认挂车信号","调整机车距车辆1-2米处停车","连接制动软管","安装防溜设备","进行列车制动机试验","简略试验"], keyPoints: ["挂车前确认脱轨器状态","连挂时控制速度不超过5km/h","确认车钩处于开锁位"] },
      { stage: "五、发车", icon: "🎯", duration: "约5分钟", tasks: ["确认发车信号","进行发车前的最后确认","司机确认发车条件具备","鸣笛起车","缓解制动","后部瞭望"], keyPoints: ["发车信号确认要彻底","起动要平稳，避免冲动","后部瞭望确认列车完整"] },
      { stage: "六、途中运行", icon: "🛤️", duration: "全程", tasks: ["按信号显示要求运行","执行呼唤应答制度","按规定进行巡检","执行车机联控","LKJ监控装置监控","注意线路和接触网状态"], keyPoints: ["彻底瞭望、确认信号","高声呼唤、手比眼看","呼唤应答要准确及时"] },
      { stage: "七、终点站作业", icon: "🏁", duration: "约15-20分钟", tasks: ["确认到达信号","进站后按规定速度运行","到达指定位置停车","追加减压至100kPa以上","单独缓解","分离制动软管","解除防溜措施"], keyPoints: ["到达停车要准确","下车检查机车与车辆连挂状态","及时设置防溜"] },
      { stage: "八、退勤", icon: "📝", duration: "约15-20分钟", tasks: ["填写司机报单","汇报本次运行情况","交接备品和工具","办理退勤手续","如有运行问题填写临修单"], keyPoints: ["如实填写运行记录","异常情况详细汇报","交接清楚"] }
    ],
    keyRules: ["「彻底瞭望、确认信号、高声呼唤、手比眼看」是乘务作业的基本要求","呼唤应答要做到「清晰及时、准确完整」","运行中发生异常要「宁可错停、不可盲行」","LKJ监控必须全程投入，不得擅自退出"],
    // 视频跳转链接
    videoLinks: [
      { name: "一次乘务作业标准化课程", platform: "学习通", url: "https://mooc1.chaoxing.com/course/220416313.html", desc: "出勤到退勤完整流程" },
      { name: "乘务一次标准化作业", platform: "学银在线", url: "https://xueyinonline.com/detail/241677564", desc: "辽宁铁道职业技术学院" },
      { name: "一次乘务作业模拟演练", platform: "全国高校微课", url: "https://weike.enetedu.com/video/48/200769", desc: "终点站乘务员工作流程" }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // 三、机车一次检查流程
  // ══════════════════════════════════════════════════════════
  locomotiveInspection: {
    title: "🔧 机车一次检查流程",
    description: "机车一次检查是机车乘务员对机车技术状态进行全面检查的重要工作，包括静态检查和动态检查两部分。",
    importance: "一次检查是确保机车状态良好的关键环节，必须按检查路线逐项进行，不得漏检任何项目。",
    checkMethods: [
      { method: "目视法", desc: "用眼睛观察部件状态", icon: "👁️" },
      { method: "锤检法", desc: "用检查锤敲击部件判断状态", icon: "🔨" },
      { method: "手检法", desc: "用手触摸或拉拨检查部件", icon: "✋" },
      { method: "测量法", desc: "使用量具测量部件尺寸", icon: "📏" },
      { method: "耳听法", desc: "通过听声判断设备运行", icon: "👂" },
      { method: "鼻嗅法", desc: "通过嗅觉判断有无异味", icon: "👃" }
    ],
    checkSequence: [
      { section: "一、机车前部检查", icon: "🚂", items: [
        { name: "排障器（扫石器）", check: "安装牢固，无变形破损，距轨面高度30-50mm" },
        { name: "前照灯", check: "安装牢固，灯罩无破损，灯泡正常" },
        { name: "车钩及缓冲器", check: "车钩三态作用良好，钩舌无裂纹" }
      ]},
      { section: "二、机车顶部检查", icon: "⚡", items: [
        { name: "受电弓", check: "滑板厚度≥5mm，滑板无裂纹、掉块不超过3处", warning: "⚠️ 检查时必须降弓断电！" }
      ], safetyNote: "【安全提示】上车顶前必须确认接触网已停电，并挂好接地线！"},
      { section: "三、机车侧部检查", icon: "📐", items: [
        { name: "走行部（转向架）", check: "轮对无裂纹，踏面无剥离，闸瓦厚度≥10mm" },
        { name: "基础制动装置", check: "闸瓦插销完好，制动缸推杆作用良好" }
      ]},
      { section: "四、机车后部检查", icon: "🔍", items: [
        { name: "标志灯", check: "白灯（前）红灯（后）显示正确" },
        { name: "后车钩", check: "同前车钩检查方法" }
      ]},
      { section: "五、司机室检查", icon: "🖥️", items: [
        { name: "司机控制器", check: "换向手柄、调速手柄位置正确" },
        { name: "LKJ监控装置", check: "显示屏正常，键盘按钮作用良好" }
      ]},
      { section: "六、机械间检查", icon: "⚙️", items: [
        { name: "主变压器", check: "油位正常，无渗漏油" },
        { name: "空压机", check: "油位正常，无异音，干燥器工作正常" }
      ]}
    ],
    commonDefects: ["轮对踏面剥离：剥离长度超过30mm需扣车","闸瓦磨耗到限：厚度小于10mm必须更换","受电弓滑板磨耗到限：厚度小于5mm必须更换","车钩钩舌磨耗：厚度小于68mm需更换"],
    inspectionStandard: "一次检查发现的问题必须记录在检查记录簿上，能处理的及时处理，不能处理的报修并填写临修单。",
    // 视频跳转链接
    videoLinks: [
      { name: "电力机车总体及走行部检查", platform: "智慧树", url: "https://coursehome.zhihuishu.com/courseHome/1000079390", desc: "铁路院校精品课程" },
      { name: "HXD3D走行部检查详解", platform: "腾讯视频", url: "https://v.qq.com/x/page/t0520mnz3lv.html", desc: "和谐电力机车检查演示" },
      { name: "机车检查实操视频", platform: "B站", url: "https://www.bilibili.com/search?q=HXD%E6%9C%BA%E8%BD%A6%E6%A3%80%E6%9F%A5%E5%AE%9E%E6%93%8D", desc: "B站搜索更多检查视频" }
    ]
  }
};

// ══════════════════════════════════════════════════════════
// 辅助函数：在知识库中展示实操内容
// ══════════════════════════════════════════════════════════

// 显示五步闸操作详情
window.showFiveStepBrake = function(type) {
  const data = KNOWLEDGE_BASE.practicalOperations.fiveStepBrake;
  const typeData = type ? data.types.find(t => t.name.includes(type)) : data.types[0];
  
  let html = `
    <div style="background:linear-gradient(135deg,#e74c3c 0%,#c0392b 100%);color:#fff;padding:20px;border-radius:16px 16px 0 0;">
      <div style="font-size:18px;font-weight:700;margin-bottom:4px;">🚂 ${data.title}</div>
      <div style="font-size:13px;opacity:0.9;">${data.description}</div>
    </div>
    <div style="background:#fff;border:1px solid #e0e0e0;border-top:none;padding:20px;">
      <div style="background:#fff3e0;border-radius:8px;padding:12px;margin-bottom:16px;">
        <strong style="color:#e65100;">⚠️ 重要提示：</strong>${data.importance}
      </div>
  `;

  // 选择类型
  if(data.types.length > 1) {
    html += `<div style="margin-bottom:16px;">`;
    data.types.forEach((t, i) => {
      html += `<span onclick="showFiveStepBrakeDetail(${i})" style="display:inline-block;padding:6px 14px;margin-right:8px;border-radius:20px;cursor:pointer;font-size:13px;background:${i===0?'#e74c3c':'#f0f0f0'};color:${i===0?'#fff':'#333'};border:1px solid ${i===0?'#e74c3c':'#ddd'};">${t.name}</span>`;
    });
    html += `</div>`;
  }

  const currentType = typeData || data.types[0];
  
  // 视频跳转区域
  html += `
    <div style="margin-bottom:16px;padding:12px;background:#f5f5f5;border-radius:8px;">
      <span style="background:#e74c3c;color:#fff;padding:2px 8px;border-radius:4px;font-size:12px;">适用车型</span>
      <span style="margin-left:8px;font-size:13px;">${currentType.applicable}</span>
    </div>
    
    <!-- 视频学习区域 -->
    <div style="margin-bottom:20px;">
      <div style="font-size:14px;font-weight:700;color:#333;margin-bottom:12px;">📺 视频学习（点击直接跳转观看）</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;">
  `;
  
  data.videoLinks.forEach(v => {
    const platformColor = v.platform === 'B站' ? '#00a1d6' : v.platform === '抖音' ? '#fe2c55' : '#4a90d9';
    html += `
      <a href="${v.url}" target="_blank" style="display:block;background:#fff;border:1px solid #e0e0e0;border-radius:10px;padding:16px;text-decoration:none;color:#333;transition:all 0.2s;" onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.boxShadow='none'">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <span style="font-size:24px;">▶️</span>
          <div style="flex:1;">
            <div style="font-size:14px;font-weight:600;">${v.name}</div>
            <div style="font-size:11px;color:#888;margin-top:2px;">${v.desc}</div>
          </div>
        </div>
        <span style="display:inline-block;background:${platformColor};color:#fff;padding:3px 10px;border-radius:12px;font-size:11px;">${v.platform}</span>
      </a>
    `;
  });
  
  html += `</div></div>`;

  // 步骤展示
  html += `<div style="font-size:14px;font-weight:700;color:#333;margin-bottom:12px;">📋 操作步骤</div>`;
  currentType.steps.forEach((step, i) => {
    const colors = ['#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#e74c3c'];
    const color = colors[i] || '#666';
    html += `
      <div style="margin-bottom:16px;border-left:4px solid ${color};padding-left:16px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <span style="background:${color};color:#fff;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;">${step.step}</span>
          <span style="font-size:15px;font-weight:600;color:#333;">${step.name}</span>
        </div>
        <div style="font-size:13px;color:#555;line-height:1.8;margin-bottom:8px;">${step.content}</div>
        <div style="background:#f8f9fc;padding:10px;border-radius:6px;">
          <div style="font-size:12px;font-weight:600;color:#666;margin-bottom:4px;">📌 关键要点：</div>
          ${step.keyPoints.map(p => `<div style="font-size:12px;color:#555;padding:2px 0;">• ${p}</div>`).join('')}
        </div>
      </div>
    `;
  });

  // 注意事项
  html += `
    <div style="background:#fff3cd;border:1px solid #ffc107;border-radius:8px;padding:16px;margin-top:16px;">
      <div style="font-size:14px;font-weight:700;color:#856404;margin-bottom:8px;">📋 考试要点</div>
      ${data.keyNotes.map(n => `<div style="font-size:13px;color:#856404;padding:3px 0;">• ${n}</div>`).join('')}
    </div>
  `;

  html += `</div>`;
  return html;
};

// 显示一次乘务作业
window.showOneTripDuty = function() {
  const data = KNOWLEDGE_BASE.practicalOperations.oneTripDuty;
  const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22', '#34495e'];
  
  let html = `
    <div style="background:linear-gradient(135deg,#2ecc71 0%,#27ae60 100%);color:#fff;padding:20px;border-radius:16px 16px 0 0;">
      <div style="font-size:18px;font-weight:700;margin-bottom:4px;">🚄 ${data.title}</div>
      <div style="font-size:13px;opacity:0.9;">${data.description}</div>
    </div>
    <div style="background:#fff;border:1px solid #e0e0e0;border-top:none;padding:20px;">
      <div style="background:#e8f5e9;border-radius:8px;padding:12px;margin-bottom:16px;">
        <strong style="color:#2e7d32;">⚠️ 重要提示：</strong>${data.importance}
      </div>
      
      <!-- 视频学习区域 -->
      <div style="margin-bottom:20px;">
        <div style="font-size:14px;font-weight:700;color:#333;margin-bottom:12px;">📺 视频学习（点击直接跳转观看）</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;">
  `;
  
  data.videoLinks.forEach(v => {
    const platformColor = v.platform === '学习通' ? '#e74c3c' : v.platform === '学银在线' ? '#3498db' : '#4a90d9';
    html += `
      <a href="${v.url}" target="_blank" style="display:block;background:#fff;border:1px solid #e0e0e0;border-radius:10px;padding:16px;text-decoration:none;color:#333;transition:all 0.2s;" onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.boxShadow='none'">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <span style="font-size:24px;">▶️</span>
          <div style="flex:1;">
            <div style="font-size:14px;font-weight:600;">${v.name}</div>
            <div style="font-size:11px;color:#888;margin-top:2px;">${v.desc}</div>
          </div>
        </div>
        <span style="display:inline-block;background:${platformColor};color:#fff;padding:3px 10px;border-radius:12px;font-size:11px;">${v.platform}</span>
      </a>
    `;
  });
  
  html += `</div></div>`;
  
  // 核心规则
  html += `
      <div style="margin-bottom:20px;">
        <div style="font-size:14px;font-weight:700;color:#333;margin-bottom:12px;">🎯 乘务作业核心规则</div>
        ${data.keyRules.map(r => `
          <div style="background:#f8f9fc;padding:10px 12px;border-radius:6px;margin-bottom:8px;font-size:13px;color:#333;">
            <span style="color:#2ecc71;font-weight:700;">✓</span> ${r}
          </div>
        `).join('')}
      </div>
      <div style="font-size:14px;font-weight:700;color:#333;margin-bottom:12px;">📋 作业流程</div>
  `;

  // 时间轴展示
  html += `<div style="position:relative;padding-left:30px;">`;
  data.standardProcess.forEach((stage, i) => {
    const color = colors[i % colors.length];
    html += `
      <div style="position:relative;margin-bottom:20px;">
        <div style="position:absolute;left:-30px;width:20px;height:20px;background:${color};border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700;">${i+1}</div>
        <div style="position:absolute;left:-21px;top:20px;width:2px;height:calc(100% + 8px);background:#e0e0e0;"></div>
        <div style="background:#f8f9fc;border-radius:8px;padding:14px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
            <span style="font-size:18px;">${stage.icon}</span>
            <span style="font-size:15px;font-weight:700;color:#333;">${stage.stage}</span>
            <span style="margin-left:auto;font-size:11px;color:#888;background:#eee;padding:2px 8px;border-radius:10px;">⏱️ ${stage.duration}</span>
          </div>
          <div style="font-size:12px;color:#666;margin-bottom:6px;">主要任务：</div>
          ${stage.tasks.map(t => `<div style="font-size:12px;color:#555;padding:1px 0;padding-left:8px;">• ${t}</div>`).join('')}
          <div style="margin-top:8px;padding:8px;background:#fff;border-radius:4px;font-size:12px;color:#e74c3c;">
            <strong>关键点：</strong>${stage.keyPoints.join('；')}
          </div>
        </div>
      </div>
    `;
  });
  html += `</div></div>`;

  return html;
};

// 显示机车一次检查
window.showLocomotiveInspection = function() {
  const data = KNOWLEDGE_BASE.practicalOperations.locomotiveInspection;
  
  let html = `
    <div style="background:linear-gradient(135deg,#3498db 0%,#2980b9 100%);color:#fff;padding:20px;border-radius:16px 16px 0 0;">
      <div style="font-size:18px;font-weight:700;margin-bottom:4px;">🔧 ${data.title}</div>
      <div style="font-size:13px;opacity:0.9;">${data.description}</div>
    </div>
    <div style="background:#fff;border:1px solid #e0e0e0;border-top:none;padding:20px;">
      <div style="background:#e3f2fd;border-radius:8px;padding:12px;margin-bottom:16px;">
        <strong style="color:#1565c0;">⚠️ 重要提示：</strong>${data.importance}
      </div>
      
      <!-- 视频学习区域 -->
      <div style="margin-bottom:20px;">
        <div style="font-size:14px;font-weight:700;color:#333;margin-bottom:12px;">📺 视频学习（点击直接跳转观看）</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;">
  `;
  
  data.videoLinks.forEach(v => {
    const platformColor = v.platform === 'B站' ? '#00a1d6' : v.platform === '腾讯视频' ? '#ff6633' : '#4a90d9';
    html += `
      <a href="${v.url}" target="_blank" style="display:block;background:#fff;border:1px solid #e0e0e0;border-radius:10px;padding:16px;text-decoration:none;color:#333;transition:all 0.2s;" onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.boxShadow='none'">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <span style="font-size:24px;">▶️</span>
          <div style="flex:1;">
            <div style="font-size:14px;font-weight:600;">${v.name}</div>
            <div style="font-size:11px;color:#888;margin-top:2px;">${v.desc}</div>
          </div>
        </div>
        <span style="display:inline-block;background:${platformColor};color:#fff;padding:3px 10px;border-radius:12px;font-size:11px;">${v.platform}</span>
      </a>
    `;
  });
  
  html += `</div></div>`;
      
  // 检查方法
  html += `
      <div style="margin-bottom:20px;">
        <div style="font-size:14px;font-weight:700;color:#333;margin-bottom:10px;">🔍 检查方法</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
          ${data.checkMethods.map(m => `
            <div style="background:#f8f9fc;padding:10px;border-radius:8px;text-align:center;">
              <div style="font-size:24px;margin-bottom:4px;">${m.icon}</div>
              <div style="font-size:12px;font-weight:600;color:#333;">${m.method}</div>
              <div style="font-size:11px;color:#666;margin-top:2px;">${m.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
  `;

  // 检查项目
  data.checkSequence.forEach((section, si) => {
    const sectionColors = ['#e74c3c', '#f39c12', '#2ecc71', '#3498db', '#9b59b6', '#1abc9c'];
    const color = sectionColors[si] || '#666';
    html += `
      <div style="margin-bottom:16px;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
        <div style="background:${color};color:#fff;padding:12px 16px;display:flex;align-items:center;gap:8px;">
          <span style="font-size:18px;">${section.icon}</span>
          <span style="font-weight:600;">${section.section}</span>
        </div>
        ${section.safetyNote ? `
          <div style="background:#fff3cd;padding:10px 16px;font-size:12px;color:#856404;border-bottom:1px solid #ffc107;">
            ${section.safetyNote}
          </div>
        ` : ''}
        <div style="padding:12px 16px;">
          ${section.items.map((item, ii) => `
            <div style="${ii > 0 ? 'border-top:1px solid #f0f0f0;padding-top:10px;margin-top:10px;' : ''}">
              <div style="font-size:13px;font-weight:600;color:#333;">📌 ${item.name}</div>
              <div style="font-size:12px;color:#555;margin-top:4px;padding-left:12px;">检查内容：${item.check}</div>
              ${item.warning ? `<div style="font-size:12px;color:#e74c3c;margin-top:4px;padding-left:12px;">${item.warning}</div>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  // 常见缺陷
  html += `
    <div style="background:#ffebee;border:1px solid #ef5350;border-radius:8px;padding:16px;margin-top:16px;">
      <div style="font-size:14px;font-weight:700;color:#c62828;margin-bottom:10px;">🚨 常见缺陷识别</div>
      ${data.commonDefects.map(d => `
        <div style="font-size:13px;color:#c62828;padding:4px 0;">• ${d}</div>
      `).join('')}
    </div>
    <div style="background:#f5f5f5;border-radius:8px;padding:12px;margin-top:12px;font-size:12px;color:#666;">
      <strong>📋 检查标准：</strong>${data.inspectionStandard}
    </div>
  `;

  html += `</div>`;
  return html;
};

// 显示实操总览
window.showPracticalOperationsOverview = function() {
  const po = KNOWLEDGE_BASE.practicalOperations;
  const cards = [
    { icon: '🚂', title: po.fiveStepBrake.title, desc: 'CCBⅡ型/DK-1型制动机五步闸操作演示与考试要点', color: '#e74c3c', onclick: "showContent", params: {type: 'fiveStepBrake'} },
    { icon: '🚄', title: po.oneTripDuty.title, desc: '从出勤到退勤的完整乘务作业流程详解', color: '#2ecc71', onclick: "showContent", params: {type: 'oneTripDuty'} },
    { icon: '🔧', title: po.locomotiveInspection.title, desc: '机车一次检查的完整路线、方法和常见缺陷识别', color: '#3498db', onclick: "showContent", params: {type: 'locomotiveInspection'} }
  ];

  let html = `
    <div style="margin-bottom:20px;">
      <div style="font-size:18px;font-weight:700;color:var(--primary);margin-bottom:8px;">📚 铁路实操演示中心</div>
      <div style="font-size:13px;color:var(--text-sub);">系统学习机车乘务员必备实操技能 · 点击卡片开始学习</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;">
  `;

  cards.forEach(card => {
    html += `
      <div onclick="updateMainContent(${JSON.stringify(card.params).replace(/"/g, "'")})" style="background:#fff;border-radius:12px;overflow:hidden;cursor:pointer;transition:transform 0.2s;box-shadow:0 2px 8px rgba(0,0,0,0.08);" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
        <div style="height:8px;background:${card.color};"></div>
        <div style="padding:20px;">
          <div style="font-size:32px;margin-bottom:12px;">${card.icon}</div>
          <div style="font-size:15px;font-weight:600;color:#333;margin-bottom:8px;">${card.title}</div>
          <div style="font-size:12px;color:#666;line-height:1.6;">${card.desc}</div>
        </div>
      </div>
    `;
  });

  html += `</div></div>`;
  return html;
};

// 导出模块信息
console.log('✅ 铁路实操演示知识库已加载 v3.0 - 直接跳转视频链接');

})();
