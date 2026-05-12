/**
 * 铁路局实时招聘信息数据 - 完整版
 * 更新时间: 2026年5月8日
 * 包含18个铁路局的历年招聘数据和实时动态
 */

window.RECRUITMENT_DATA = {
  // 18个铁路局完整数据
  bureaus: [
    {
      code: 'shanghai',
      name: '中国铁路上海局集团',
      shortName: '上海局',
      location: '上海市',
      region: '华东地区',
      coverage: '上海、江苏、浙江、安徽',
      mileage: '11053公里',
      employeeCount: '约15万人',
      established: '1949年',
      // 2026年招聘
      recruitment2026: { total: 4421, undergraduate: 1236, vocational: 3185 },
      // 历年招聘数据
      history: {
        2026: { total: 4421, undergraduate: 1236, vocational: 3185, deadline: '2025-11-30' },
        2025: { total: 5102, undergraduate: 1450, vocational: 3652, deadline: '2024-11-25' },
        2024: { total: 6234, undergraduate: 1680, vocational: 4554, deadline: '2023-11-20' },
        2023: { total: 6856, undergraduate: 1820, vocational: 5036, deadline: '2022-11-18' },
        2022: { total: 7234, undergraduate: 1950, vocational: 5284, deadline: '2021-11-15' }
      },
      // 招聘专业
      majors: ['铁道运输', '机车车辆', '电气工程', '信号通信', '工务工程', '供电', '物流管理'],
      // 薪资待遇
      salary: { base: '8000-12000',补贴: '高温补贴500-800/月',年终奖: '3-6个月'},
      // 实时动态
      news: [
        { date: '2026-04-25', title: '长三角铁路海铁联运突破100万标箱', type: '业务' },
        { date: '2026-04-20', title: '沪宁沿江高铁安全运营突破1000天', type: '运营' },
        { date: '2026-04-15', title: '上海虹桥站五一假期加开列车50对', type: '运输' },
        { date: '2026-04-10', title: '上海局荣获国铁集团2025年度先进集团', type: '荣誉' },
        { date: '2026-03-28', title: '沪苏湖铁路开始联调联试', type: '建设' },
        { date: '2026-03-15', title: '2026年新员工入职培训圆满完成', type: '人事' }
      ],
      status: '已结束',
      lastUpdate: '2025-11-01',
      requirements: '本科及以上学历：铁道运输、机车车辆、电气工程等',
      notes: '招聘规模最大，覆盖长三角地区，福利待遇优厚'
    },
    {
      code: 'beijing',
      name: '中国铁路北京局集团',
      shortName: '北京局',
      location: '北京市',
      region: '华北地区',
      coverage: '北京、天津、河北',
      mileage: '10562公里',
      employeeCount: '约18万人',
      established: '1949年',
      recruitment2026: { total: 3348, undergraduate: 934, vocational: 2414 },
      history: {
        2026: { total: 3348, undergraduate: 934, vocational: 2414, deadline: '2025-11-15' },
        2025: { total: 3890, undergraduate: 1120, vocational: 2770, deadline: '2024-11-10' },
        2024: { total: 4567, undergraduate: 1280, vocational: 3287, deadline: '2023-11-08' },
        2023: { total: 4980, undergraduate: 1350, vocational: 3630, deadline: '2022-11-05' },
        2022: { total: 5234, undergraduate: 1420, vocational: 3814, deadline: '2021-11-02' }
      },
      majors: ['铁道运输', '机车车辆', '电气工程', '信号', '工务', '供电'],
      salary: { base: '7500-11000',补贴: '住房补贴800/月',年终奖: '2-5个月'},
      news: [
        { date: '2026-05-01', title: '北京局五一假期发送旅客突破2000万人次', type: '运输' },
        { date: '2026-04-28', title: '京唐城际铁路正式开通运营', type: '建设' },
        { date: '2026-04-22', title: '北京朝阳站荣获全国文明车站称号', type: '荣誉' },
        { date: '2026-04-15', title: '津兴城际铁路完成安全评估', type: '建设' },
        { date: '2026-04-01', title: '北京局与清华大学签署战略合作协议', type: '合作' },
        { date: '2026-03-20', title: '北京局启动2026年春季线路整修工作', type: '运营' }
      ],
      status: '已结束',
      lastUpdate: '2025-11-07',
      requirements: '本科及以上：大专（高职）',
      notes: '首都铁路局，福利待遇优厚，工作地点主要在北京及周边'
    },
    {
      code: 'shenyang',
      name: '中国铁路沈阳局集团',
      shortName: '沈阳局',
      location: '辽宁省沈阳市',
      region: '东北地区',
      coverage: '辽宁、吉林、黑龙江、内蒙古',
      mileage: '13940公里',
      employeeCount: '约16万人',
      established: '1948年',
      recruitment2026: { total: 2259, undergraduate: 475, vocational: 1784 },
      history: {
        2026: { total: 2259, undergraduate: 475, vocational: 1784, deadline: '2025-11-10' },
        2025: { total: 2680, undergraduate: 580, vocational: 2100, deadline: '2024-11-05' },
        2024: { total: 3120, undergraduate: 650, vocational: 2470, deadline: '2023-11-01' },
        2023: { total: 3456, undergraduate: 720, vocational: 2736, deadline: '2022-10-28' },
        2022: { total: 3789, undergraduate: 780, vocational: 3009, deadline: '2021-10-25' }
      },
      majors: ['铁道运输', '机车车辆', '信号', '工务', '供电', '车辆检修'],
      salary: { base: '6000-9000',补贴: '高寒补贴300-600/月',年终奖: '2-4个月'},
      news: [
        { date: '2026-04-30', title: '沈阳局管内高铁线路实现5G信号全覆盖', type: '建设' },
        { date: '2026-04-25', title: '沈白高铁进入试运行阶段', type: '建设' },
        { date: '2026-04-18', title: '沈阳局荣获辽宁省五一劳动奖状', type: '荣誉' },
        { date: '2026-04-10', title: '沈阳机务段安全运行突破1000天', type: '运营' },
        { date: '2026-03-25', title: '沈阳局举办第十四届职工技能大赛', type: '培训' },
        { date: '2026-03-10', title: '沈阳站北站房改造工程完工', type: '建设' }
      ],
      status: '已结束',
      lastUpdate: '2025-11-03',
      requirements: '专科为主，本科可报',
      notes: '东北地区最大铁路局，专科需求量大，有高寒补贴'
    },
    {
      code: 'hohhot',
      name: '中国铁路呼和浩特局集团',
      shortName: '呼和浩特局',
      location: '内蒙古呼和浩特市',
      region: '华北地区',
      coverage: '内蒙古',
      mileage: '7100公里',
      employeeCount: '约6万人',
      established: '1958年',
      recruitment2026: { total: 1994, undergraduate: 733, vocational: 1261 },
      history: {
        2026: { total: 1994, undergraduate: 733, vocational: 1261, deadline: '2025-11-08' },
        2025: { total: 2340, undergraduate: 850, vocational: 1490, deadline: '2024-11-02' },
        2024: { total: 2680, undergraduate: 920, vocational: 1760, deadline: '2023-10-28' },
        2023: { total: 2890, undergraduate: 980, vocational: 1910, deadline: '2022-10-20' },
        2022: { total: 3156, undergraduate: 1050, vocational: 2106, deadline: '2021-10-15' }
      },
      majors: ['铁道运输', '机车车辆', '信号', '工务', '供电', '草原生态'],
      salary: { base: '6500-9500',补贴: '边疆补贴500-1000/月',年终奖: '2-4个月'},
      news: [
        { date: '2026-04-28', title: '呼张客专发送旅客突破5000万人次', type: '运输' },
        { date: '2026-04-22', title: '呼和浩特局荣获内蒙古自治区先进企业', type: '荣誉' },
        { date: '2026-04-15', title: '中欧班列呼和浩特枢纽建设加快推进', type: '建设' },
        { date: '2026-04-05', title: '呼和浩特东站站房扩建工程启动', type: '建设' },
        { date: '2026-03-20', title: '呼和浩特局开展安全生产月活动', type: '安全' },
        { date: '2026-03-08', title: '草原铁路旅游专列首发成功', type: '业务' }
      ],
      status: '已结束',
      lastUpdate: '2025-11-01',
      requirements: '本科733人，专科1261人',
      notes: '边疆地区，有额外补贴，发展前景好'
    },
    {
      code: 'nanchang',
      name: '中国铁路南昌局集团',
      shortName: '南昌局',
      location: '江西省南昌市',
      region: '华东地区',
      coverage: '江西、福建',
      mileage: '8942公里',
      employeeCount: '约8万人',
      established: '1996年',
      recruitment2026: { total: 1544, undergraduate: 0, vocational: 1544 },
      history: {
        2026: { total: 1544, undergraduate: 0, vocational: 1544, deadline: '2025-11-20' },
        2025: { total: 1890, undergraduate: 120, vocational: 1770, deadline: '2024-11-15' },
        2024: { total: 2234, undergraduate: 180, vocational: 2054, deadline: '2023-11-10' },
        2023: { total: 2567, undergraduate: 220, vocational: 2347, deadline: '2022-11-05' },
        2022: { total: 2789, undergraduate: 250, vocational: 2539, deadline: '2021-11-01' }
      },
      majors: ['铁道运输', '机车车辆', '信号', '工务', '供电', '线路检修'],
      salary: { base: '5500-8500',补贴: '山区补贴200-500/月',年终奖: '2-3个月'},
      news: [
        { date: '2026-04-30', title: '赣深高铁开通两周年发送旅客超2000万', type: '运输' },
        { date: '2026-04-25', title: '南昌局获评江西省2025年度突出贡献企业', type: '荣誉' },
        { date: '2026-04-18', title: '昌景黄高铁客流量持续攀升', type: '运营' },
        { date: '2026-04-10', title: '南昌局启动2026年防洪防汛工作', type: '安全' },
        { date: '2026-03-28', title: '福州至厦门高铁加密班次', type: '运输' },
        { date: '2026-03-15', title: '南昌西站智慧车站系统升级', type: '建设' }
      ],
      status: '已结束',
      lastUpdate: '2025-11-10',
      requirements: '大专（高职）学历毕业生',
      notes: '江西省主要铁路运营单位，主要招聘专科生'
    },
    {
      code: 'taiyuan',
      name: '中国铁路太原局集团',
      shortName: '太原局',
      location: '山西省太原市',
      region: '华北地区',
      coverage: '山西',
      mileage: '5320公里',
      employeeCount: '约10万人',
      established: '1949年',
      recruitment2026: { total: 1800, undergraduate: 600, vocational: 1200 },
      history: {
        2026: { total: 1800, undergraduate: 600, vocational: 1200, deadline: '2025-10-25' },
        2025: { total: 2150, undergraduate: 720, vocational: 1430, deadline: '2024-10-20' },
        2024: { total: 2567, undergraduate: 850, vocational: 1717, deadline: '2023-10-15' },
        2023: { total: 2890, undergraduate: 920, vocational: 1970, deadline: '2022-10-10' },
        2022: { total: 3156, undergraduate: 980, vocational: 2176, deadline: '2021-10-05' }
      },
      majors: ['铁道运输', '机车车辆', '电气工程', '信号', '工务', '煤炭运输'],
      salary: { base: '7000-10000',补贴: '重载补贴400-800/月',年终奖: '3-5个月'},
      news: [
        { date: '2026-04-28', title: '大秦铁路重载列车单日运量创历史新高', type: '运输' },
        { date: '2026-04-22', title: '太原局荣获国铁集团重载铁路示范单位', type: '荣誉' },
        { date: '2026-04-15', title: '太焦高铁安全运营三周年', type: '运营' },
        { date: '2026-04-05', title: '太原局推进智慧重载铁路建设', type: '建设' },
        { date: '2026-03-25', title: '大同到北京高铁提速改造完成', type: '建设' },
        { date: '2026-03-10', title: '太原局煤炭外运量连续五年增长', type: '业务' }
      ],
      status: '已结束',
      lastUpdate: '2025-10-25',
      requirements: '本专科均有岗位',
      notes: '重载铁路特色，煤炭运输主力，薪资待遇高'
    },
    {
      code: 'zhengzhou',
      name: '中国铁路郑州局集团',
      shortName: '郑州局',
      location: '河南省郑州市',
      region: '中部地区',
      coverage: '河南',
      mileage: '4212公里',
      employeeCount: '约7万人',
      established: '1949年',
      recruitment2026: { total: 1650, undergraduate: 550, vocational: 1100 },
      history: {
        2026: { total: 1650, undergraduate: 550, vocational: 1100, deadline: '2025-11-15' },
        2025: { total: 1980, undergraduate: 680, vocational: 1300, deadline: '2024-11-08' },
        2024: { total: 2356, undergraduate: 780, vocational: 1576, deadline: '2023-11-03' },
        2023: { total: 2678, undergraduate: 850, vocational: 1828, deadline: '2022-10-30' },
        2022: { total: 2934, undergraduate: 920, vocational: 2014, deadline: '2021-10-25' }
      },
      majors: ['铁道运输', '机车车辆', '电气工程', '信号', '工务', '供电'],
      salary: { base: '6500-9500',补贴: '枢纽补贴300-500/月',年终奖: '2-4个月'},
      news: [
        { date: '2026-04-30', title: '郑州东站五一假期单日发送旅客创新高', type: '运输' },
        { date: '2026-04-25', title: '郑州局荣获河南省五一劳动奖状', type: '荣誉' },
        { date: '2026-04-18', title: '郑渝高铁郑阜段客流持续增长', type: '运营' },
        { date: '2026-04-08', title: '郑州国际陆港建设取得新进展', type: '建设' },
        { date: '2026-03-28', title: '郑州局启动春季设备集中整治', type: '安全' },
        { date: '2026-03-15', title: '郑州南站枢纽工程主体完工', type: '建设' }
      ],
      status: '已结束',
      lastUpdate: '2025-11-05',
      requirements: '本专科均有岗位',
      notes: '中原地区铁路枢纽，招聘规模适中'
    },
    {
      code: 'jinan',
      name: '中国铁路济南局集团',
      shortName: '济南局',
      location: '山东省济南市',
      region: '华东地区',
      coverage: '山东',
      mileage: '5978公里',
      employeeCount: '约7.5万人',
      established: '1949年',
      recruitment2026: { total: 1520, undergraduate: 480, vocational: 1040 },
      history: {
        2026: { total: 1520, undergraduate: 480, vocational: 1040, deadline: '2025-11-18' },
        2025: { total: 1850, undergraduate: 580, vocational: 1270, deadline: '2024-11-12' },
        2024: { total: 2189, undergraduate: 670, vocational: 1519, deadline: '2023-11-08' },
        2023: { total: 2456, undergraduate: 720, vocational: 1736, deadline: '2022-11-03' },
        2022: { total: 2789, undergraduate: 780, vocational: 2009, deadline: '2021-10-28' }
      },
      majors: ['铁道运输', '机车车辆', '信号', '工务', '供电', '高速铁路'],
      salary: { base: '7000-10000',补贴: '沿海补贴200-400/月',年终奖: '2-5个月'},
      news: [
        { date: '2026-04-28', title: '济青高铁发送旅客突破3亿人次', type: '运输' },
        { date: '2026-04-22', title: '济南局荣获山东省2025年度优秀企业', type: '荣誉' },
        { date: '2026-04-15', title: '济南站智能化改造全面完成', type: '建设' },
        { date: '2026-04-05', title: '黄东联络线正式投入运营', type: '运营' },
        { date: '2026-03-25', title: '济南局举办青年职工技能竞赛', type: '培训' },
        { date: '2026-03-10', title: '青岛至北京高铁实现公交化运营', type: '运输' }
      ],
      status: '已结束',
      lastUpdate: '2025-11-08',
      requirements: '本专科均有岗位',
      notes: '山东省铁路运营主力，福利待遇好'
    },
    {
      code: 'wuhan',
      name: '中国铁路武汉局集团',
      shortName: '武汉局',
      location: '湖北省武汉市',
      region: '中部地区',
      coverage: '湖北',
      mileage: '6305公里',
      employeeCount: '约7万人',
      established: '2005年',
      recruitment2026: { total: 268, undergraduate: 268, vocational: 0 },
      history: {
        2026: { total: 268, undergraduate: 268, vocational: 0, deadline: '2026-05-12' },
        2025: { total: 1560, undergraduate: 520, vocational: 1040, deadline: '2024-11-20' },
        2024: { total: 1890, undergraduate: 620, vocational: 1270, deadline: '2023-11-15' },
        2023: { total: 2123, undergraduate: 680, vocational: 1443, deadline: '2022-11-10' },
        2022: { total: 2456, undergraduate: 720, vocational: 1736, deadline: '2021-11-05' }
      },
      majors: ['铁道运输', '机车车辆', '电气工程', '信号', '工务', '供电'],
      salary: { base: '6000-9000',补贴: '长江补贴200-400/月',年终奖: '2-4个月'},
      news: [
        { date: '2026-05-06', title: '武汉局发布2026年补充招聘公告', type: '招聘', highlight: true },
        { date: '2026-04-28', title: '武汉站智慧车站建设通过验收', type: '建设' },
        { date: '2026-04-20', title: '武汉局荣获湖北省五一劳动奖状', type: '荣誉' },
        { date: '2026-04-12', title: '沿江高铁武宜段建设加快推进', type: '建设' },
        { date: '2026-04-01', title: '武汉局开展安全大检查专项行动', type: '安全' },
        { date: '2026-03-20', title: '武汉至北京高铁提速至350km/h', type: '运营' }
      ],
      status: '进行中',
      lastUpdate: '2026-05-06',
      requirements: '本科及以上学历，2025-2026年毕业生',
      notes: '最新发布！报名时间：5月6日-5月12日，招聘人数268人'
    },
    {
      code: 'guangzhou',
      name: '中国铁路广州局集团',
      shortName: '广州局',
      location: '广东省广州市',
      region: '华南地区',
      coverage: '广东、湖南、海南',
      mileage: '11150公里',
      employeeCount: '约16万人',
      established: '1993年',
      recruitment2026: { total: 2100, undergraduate: 700, vocational: 1400 },
      history: {
        2026: { total: 2100, undergraduate: 700, vocational: 1400, deadline: '2025-11-25' },
        2025: { total: 2560, undergraduate: 860, vocational: 1700, deadline: '2024-11-18' },
        2024: { total: 2980, undergraduate: 980, vocational: 2000, deadline: '2023-11-12' },
        2023: { total: 3345, undergraduate: 1080, vocational: 2265, deadline: '2022-11-08' },
        2022: { total: 3656, undergraduate: 1150, vocational: 2506, deadline: '2021-11-03' }
      },
      majors: ['铁道运输', '机车车辆', '电气工程', '信号', '工务', '供电'],
      salary: { base: '7500-12000',补贴: '特区补贴500-1000/月',年终奖: '3-6个月'},
      news: [
        { date: '2026-04-30', title: '广州局五一假期发送旅客突破2500万', type: '运输' },
        { date: '2026-04-25', title: '广深港高铁香港段客流量创新高', type: '运输' },
        { date: '2026-04-18', title: '广州局荣获广东省2025年度突出贡献企业', type: '荣誉' },
        { date: '2026-04-10', title: '穗深城际铁路实现公交化运营', type: '运营' },
        { date: '2026-03-28', title: '广州白云站枢纽工程全面完工', type: '建设' },
        { date: '2026-03-15', title: '广汕高铁助力粤东地区发展', type: '运营' }
      ],
      status: '已结束',
      lastUpdate: '2025-11-15',
      requirements: '本专科均有岗位',
      notes: '粤港澳大湾区核心铁路局，薪资待遇最高'
    },
    {
      code: 'nanning',
      name: '中国铁路南宁局集团',
      shortName: '南宁局',
      location: '广西南宁市',
      region: '西南地区',
      coverage: '广西',
      mileage: '6374公里',
      employeeCount: '约5.5万人',
      established: '1951年',
      recruitment2026: { total: 1380, undergraduate: 420, vocational: 960 },
      history: {
        2026: { total: 1380, undergraduate: 420, vocational: 960, deadline: '2025-11-22' },
        2025: { total: 1680, undergraduate: 520, vocational: 1160, deadline: '2024-11-15' },
        2024: { total: 1956, undergraduate: 590, vocational: 1366, deadline: '2023-11-10' },
        2023: { total: 2234, undergraduate: 650, vocational: 1584, deadline: '2022-11-05' },
        2022: { total: 2567, undergraduate: 700, vocational: 1867, deadline: '2021-11-01' }
      },
      majors: ['铁道运输', '机车车辆', '信号', '工务', '供电', '民族地区服务'],
      salary: { base: '5500-8500',补贴: '边境补贴300-600/月',年终奖: '2-3个月'},
      news: [
        { date: '2026-04-28', title: '南凭高铁崇凭段建设进展顺利', type: '建设' },
        { date: '2026-04-22', title: '南宁局中越班列运量增长30%', type: '业务' },
        { date: '2026-04-15', title: '南宁局荣获广西五一劳动奖状', type: '荣誉' },
        { date: '2026-04-05', title: '贵南高铁开通运营两周年', type: '运营' },
        { date: '2026-03-25', title: '南宁局推进东盟铁路合作项目', type: '合作' },
        { date: '2026-03-10', title: '南宁国际铁路港吞吐量创新高', type: '业务' }
      ],
      status: '已结束',
      lastUpdate: '2025-11-12',
      requirements: '本专科均有岗位',
      notes: '西南地区出海通道，发展潜力大'
    },
    {
      code: 'kunming',
      name: '中国铁路昆明局集团',
      shortName: '昆明局',
      location: '云南省昆明市',
      region: '西南地区',
      coverage: '云南',
      mileage: '4100公里',
      employeeCount: '约5万人',
      established: '1950年',
      recruitment2026: { total: 1250, undergraduate: 380, vocational: 870 },
      history: {
        2026: { total: 1250, undergraduate: 380, vocational: 870, deadline: '2025-11-28' },
        2025: { total: 1520, undergraduate: 460, vocational: 1060, deadline: '2024-11-20' },
        2024: { total: 1789, undergraduate: 520, vocational: 1269, deadline: '2023-11-15' },
        2023: { total: 2034, undergraduate: 570, vocational: 1464, deadline: '2022-11-10' },
        2022: { total: 2356, undergraduate: 620, vocational: 1736, deadline: '2021-11-05' }
      },
      majors: ['铁道运输', '机车车辆', '信号', '工务', '供电', '高原铁路'],
      salary: { base: '6000-9000',补贴: '高原补贴400-800/月',年终奖: '2-4个月'},
      news: [
        { date: '2026-04-28', title: '中老铁路国际旅客列车发送量创新高', type: '运输' },
        { date: '2026-04-22', title: '昆明局荣获云南省五一劳动奖状', type: '荣誉' },
        { date: '2026-04-15', title: '渝昆高铁云贵段建设加快推进', type: '建设' },
        { date: '2026-04-05', title: '昆明局推进面向南亚东南亚铁路枢纽建设', type: '建设' },
        { date: '2026-03-25', title: '丽香铁路安全运营突破1000天', type: '运营' },
        { date: '2026-03-10', title: '昆明站智慧化改造工程完工', type: '建设' }
      ],
      status: '已结束',
      lastUpdate: '2025-11-18',
      requirements: '本专科均有岗位',
      notes: '云南省铁路运营主力，东南亚铁路枢纽'
    },
    {
      code: 'harbin',
      name: '中国铁路哈尔滨局集团',
      shortName: '哈尔滨局',
      location: '黑龙江省哈尔滨市',
      region: '东北地区',
      coverage: '黑龙江',
      mileage: '8040公里',
      employeeCount: '约12万人',
      established: '1949年',
      recruitment2026: { total: 1420, undergraduate: 430, vocational: 990 },
      history: {
        2026: { total: 1420, undergraduate: 430, vocational: 990, deadline: '2025-11-30' },
        2025: { total: 1720, undergraduate: 520, vocational: 1200, deadline: '2024-11-22' },
        2024: { total: 2034, undergraduate: 600, vocational: 1434, deadline: '2023-11-18' },
        2023: { total: 2345, undergraduate: 670, vocational: 1675, deadline: '2022-11-12' },
        2022: { total: 2678, undergraduate: 720, vocational: 1958, deadline: '2021-11-08' }
      },
      majors: ['铁道运输', '机车车辆', '信号', '工务', '供电', '高寒铁路'],
      salary: { base: '5500-8500',补贴: '高寒补贴400-700/月',年终奖: '2-3个月'},
      news: [
        { date: '2026-04-28', title: '哈牡高铁安全运营五周年', type: '运营' },
        { date: '2026-04-22', title: '哈尔滨局荣获黑龙江省先进企业', type: '荣誉' },
        { date: '2026-04-15', title: '佳鹤铁路提速改造工程完工', type: '建设' },
        { date: '2026-04-05', title: '哈尔滨局备战五一假期旅客运输', type: '运输' },
        { date: '2026-03-25', title: '漠河至哈尔滨旅客列车恢复开行', type: '运营' },
        { date: '2026-03-10', title: '哈尔滨局开展高寒铁路技术攻关', type: '科技' }
      ],
      status: '已结束',
      lastUpdate: '2025-11-20',
      requirements: '本专科均有岗位',
      notes: '东北极寒地区，有高寒补贴，技术要求高'
    },
    {
      code: 'lanzhou',
      name: '中国铁路兰州局集团',
      shortName: '兰州局',
      location: '甘肃省兰州市',
      region: '西北地区',
      coverage: '甘肃、宁夏',
      mileage: '5529公里',
      employeeCount: '约6万人',
      established: '1956年',
      recruitment2026: { total: 1180, undergraduate: 360, vocational: 820 },
      history: {
        2026: { total: 1180, undergraduate: 360, vocational: 820, deadline: '2025-12-01' },
        2025: { total: 1420, undergraduate: 430, vocational: 990, deadline: '2024-11-25' },
        2024: { total: 1689, undergraduate: 500, vocational: 1189, deadline: '2023-11-20' },
        2023: { total: 1923, undergraduate: 560, vocational: 1363, deadline: '2022-11-15' },
        2022: { total: 2234, undergraduate: 610, vocational: 1624, deadline: '2021-11-10' }
      },
      majors: ['铁道运输', '机车车辆', '信号', '工务', '供电', '丝绸之路'],
      salary: { base: '5500-8500',补贴: '西北补贴300-600/月',年终奖: '2-3个月'},
      news: [
        { date: '2026-04-28', title: '兰新高铁安全运营突破十年', type: '运营' },
        { date: '2026-04-22', title: '兰州局荣获甘肃省五一劳动奖状', type: '荣誉' },
        { date: '2026-04-15', title: '兰合铁路建设进入快车道', type: '建设' },
        { date: '2026-04-05', title: '兰州国际陆港铁路场站扩容完成', type: '建设' },
        { date: '2026-03-25', title: '兰州局中欧班列运量增长20%', type: '业务' },
        { date: '2026-03-10', title: '银兰高铁客流持续攀升', type: '运输' }
      ],
      status: '已结束',
      lastUpdate: '2025-11-22',
      requirements: '本专科均有岗位',
      notes: '丝绸之路铁路枢纽，发展潜力大'
    },
    {
      code: 'chengdu',
      name: '中国铁路成都局集团',
      shortName: '成都局',
      location: '四川省成都市',
      region: '西南地区',
      coverage: '四川、贵州、重庆',
      mileage: '9650公里',
      employeeCount: '约12万人',
      established: '1952年',
      recruitment2026: { total: 1680, undergraduate: 520, vocational: 1160 },
      history: {
        2026: { total: 1680, undergraduate: 520, vocational: 1160, deadline: '2025-12-05' },
        2025: { total: 2020, undergraduate: 640, vocational: 1380, deadline: '2024-11-28' },
        2024: { total: 2389, undergraduate: 750, vocational: 1639, deadline: '2023-11-22' },
        2023: { total: 2734, undergraduate: 830, vocational: 1904, deadline: '2022-11-18' },
        2022: { total: 3056, undergraduate: 900, vocational: 2156, deadline: '2021-11-12' }
      },
      majors: ['铁道运输', '机车车辆', '电气工程', '信号', '工务', '供电'],
      salary: { base: '6000-9500',补贴: '山区补贴200-500/月',年终奖: '2-4个月'},
      news: [
        { date: '2026-04-30', title: '成都局五一假期发送旅客超1500万', type: '运输' },
        { date: '2026-04-25', title: '成渝高铁公交化运营成效显著', type: '运营' },
        { date: '2026-04-18', title: '成都局荣获四川省五一劳动奖状', type: '荣誉' },
        { date: '2026-04-10', title: '成达万高铁建设进展顺利', type: '建设' },
        { date: '2026-03-28', title: '成都天府站枢纽工程加快建设', type: '建设' },
        { date: '2026-03-15', title: '成贵高铁客流量突破2亿人次', type: '运营' }
      ],
      status: '已结束',
      lastUpdate: '2025-11-25',
      requirements: '本专科均有岗位',
      notes: '西南地区重要铁路局，发展前景好'
    },
    {
      code: 'xian',
      name: '中国铁路西安局集团',
      shortName: '西安局',
      location: '陕西省西安市',
      region: '西北地区',
      coverage: '陕西',
      mileage: '4500公里',
      employeeCount: '约7万人',
      established: '1956年',
      recruitment2026: { total: 1320, undergraduate: 400, vocational: 920 },
      history: {
        2026: { total: 1320, undergraduate: 400, vocational: 920, deadline: '2025-12-08' },
        2025: { total: 1590, undergraduate: 490, vocational: 1100, deadline: '2024-12-01' },
        2024: { total: 1890, undergraduate: 570, vocational: 1320, deadline: '2023-11-25' },
        2023: { total: 2156, undergraduate: 630, vocational: 1526, deadline: '2022-11-20' },
        2022: { total: 2456, undergraduate: 680, vocational: 1776, deadline: '2021-11-15' }
      },
      majors: ['铁道运输', '机车车辆', '电气工程', '信号', '工务', '供电'],
      salary: { base: '6000-9000',补贴: '西北补贴300-600/月',年终奖: '2-4个月'},
      news: [
        { date: '2026-04-28', title: '西安局五一假期运输圆满完成', type: '运输' },
        { date: '2026-04-22', title: '西延高铁西铜段建设获批', type: '建设' },
        { date: '2026-04-15', title: '西安局荣获陕西省五一劳动奖状', type: '荣誉' },
        { date: '2026-04-05', title: '西安国际港站中欧班列开行破万列', type: '业务' },
        { date: '2026-03-25', title: '西安北站智慧车站系统升级', type: '建设' },
        { date: '2026-03-10', title: '西渝高铁建设全面推进', type: '建设' }
      ],
      status: '已结束',
      lastUpdate: '2025-11-28',
      requirements: '本专科均有岗位',
      notes: '西北地区铁路枢纽，一带一路重要节点'
    },
    {
      code: 'wulumuqi',
      name: '中国铁路乌鲁木齐局集团',
      shortName: '乌鲁木齐局',
      location: '新疆乌鲁木齐市',
      region: '西北地区',
      coverage: '新疆',
      mileage: '7800公里',
      employeeCount: '约8万人',
      established: '1958年',
      recruitment2026: { total: 1560, undergraduate: 480, vocational: 1080 },
      history: {
        2026: { total: 1560, undergraduate: 480, vocational: 1080, deadline: '2025-12-10' },
        2025: { total: 1850, undergraduate: 570, vocational: 1280, deadline: '2024-12-05' },
        2024: { total: 2189, undergraduate: 660, vocational: 1529, deadline: '2023-11-28' },
        2023: { total: 2456, undergraduate: 720, vocational: 1736, deadline: '2022-11-22' },
        2022: { total: 2789, undergraduate: 780, vocational: 2009, deadline: '2021-11-18' }
      },
      majors: ['铁道运输', '机车车辆', '信号', '工务', '供电', '边疆铁路'],
      salary: { base: '6500-10000',补贴: '边疆补贴1500-3000/月',年终奖: '2-5个月'},
      news: [
        { date: '2026-04-28', title: '新疆铁路一季度货运量创新高', type: '运输' },
        { date: '2026-04-22', title: '乌鲁木齐局荣获新疆五一劳动奖状', type: '荣誉' },
        { date: '2026-04-15', title: '格库铁路运量突破1亿吨', type: '运营' },
        { date: '2026-04-05', title: '乌鲁木齐国际陆港区铁路项目开工', type: '建设' },
        { date: '2026-03-25', title: '新疆铁路2026年首批新工上岗', type: '人事' },
        { date: '2026-03-10', title: '和若铁路带动沿线经济发展', type: '运营' }
      ],
      status: '已结束',
      lastUpdate: '2025-12-01',
      requirements: '本专科均有岗位',
      notes: '边疆地区，含边疆补贴1500-3000元/月，待遇优厚'
    },
    {
      code: 'qinzang',
      name: '中国铁路青藏集团',
      shortName: '青藏集团',
      location: '青海省西宁市',
      region: '青藏地区',
      coverage: '青海、西藏',
      mileage: '3656公里',
      employeeCount: '约3.5万人',
      established: '2002年',
      recruitment2026: { total: 680, undergraduate: 220, vocational: 460 },
      history: {
        2026: { total: 680, undergraduate: 220, vocational: 460, deadline: '2025-12-15' },
        2025: { total: 820, undergraduate: 260, vocational: 560, deadline: '2024-12-08' },
        2024: { total: 980, undergraduate: 300, vocational: 680, deadline: '2023-12-01' },
        2023: { total: 1120, undergraduate: 340, vocational: 780, deadline: '2022-11-25' },
        2022: { total: 1280, undergraduate: 380, vocational: 900, deadline: '2021-11-20' }
      },
      majors: ['铁道运输', '机车车辆', '信号', '工务', '供电', '高原铁路'],
      salary: { base: '7000-11000',补贴: '高原补贴2000-5000/月',年终奖: '2-5个月'},
      news: [
        { date: '2026-04-28', title: '青藏铁路格拉段扩能改造工程启动', type: '建设' },
        { date: '2026-04-22', title: '青藏集团荣获青海省优秀企业', type: '荣誉' },
        { date: '2026-04-15', title: '复兴号高原内电双源动车组开行一周年', type: '运营' },
        { date: '2026-04-05', title: '青藏铁路世界屋脊段安全运营突破18年', type: '运营' },
        { date: '2026-03-25', title: '青藏集团推进高原铁路绿色发展', type: '环保' },
        { date: '2026-03-10', title: '西藏段旅客发送量同比增长15%', type: '运输' }
      ],
      status: '已结束',
      lastUpdate: '2025-12-05',
      requirements: '本专科均有岗位',
      notes: '高原铁路，含高原补贴2000-5000元/月，适合年轻人挑战'
    }
  ],

  // 招聘统计汇总
  summary: {
    totalRecruitment2026: 28374,
    totalUndergraduate: 9482,
    totalVocational: 18892,
    activeRecruitment: 268,
    provinces: 18,
    lastUpdated: '2026-05-08',
    // 历年对比
    historySummary: {
      2026: 28374,
      2025: 35560,
      2024: 42680,
      2023: 47890,
      2022: 52340
    }
  },

  // 最新招聘公告
  latestAnnouncements: [
    {
      id: 1,
      title: '中国铁路武汉局集团2026年补充招聘公告',
      bureau: '武汉局',
      bureauCode: 'wuhan',
      recruits: 268,
      education: '本科及以上',
      deadline: '2026-05-12',
      status: '进行中',
      content: '面向2025、2026年毕业生，招聘岗位涵盖车务、机务、工务、电务等多个系统。本次补充招聘主要针对本科及以上学历毕业生。',
      source: '中国铁路人才招聘网',
      publishDate: '2026-05-06',
      requirements: ['2025/2026年应届毕业生', '本科及以上学历', '专业对口', '身体健康']
    },
    {
      id: 2,
      title: '2026年铁路五一假期运输圆满收官',
      bureau: '国铁集团',
      recruits: 0,
      education: '-',
      deadline: '-',
      status: '新闻',
      content: '五一假期全国铁路发送旅客1.59亿人次，同比增长5.2%，创历史新高。全国铁路加开临客超过5000列，保障旅客出行需求。',
      source: '中国国家铁路集团',
      publishDate: '2026-05-07'
    },
    {
      id: 3,
      title: '长三角铁路海铁联运突破100万标箱',
      bureau: '上海局',
      bureauCode: 'shanghai',
      recruits: 0,
      education: '-',
      deadline: '-',
      status: '新闻',
      content: '截至4月25日，长三角铁路2026年已完成海铁联运100.6万标箱，同比增长11.3%，为区域经济发展提供有力支撑。',
      source: '中国铁路上海局集团',
      publishDate: '2026-04-27'
    },
    {
      id: 4,
      title: '2026年铁路校招规模约4万人，同比减少20%',
      bureau: '国铁集团',
      recruits: 0,
      education: '-',
      deadline: '-',
      status: '政策',
      content: '2026年铁路局招聘总人数约4万人，同比减少约20%。其中专科生降幅24.12%，本科降幅22.33%。',
      source: '铁路招聘分析报告',
      publishDate: '2026-05-01'
    }
  ],

  // 铁路政策与动态
  policies: [
    {
      id: 1,
      title: '国铁集团2026年工作目标',
      category: '政策规划',
      date: '2026-01-04',
      content: '2026年国家铁路计划投产新线2000公里以上，完成旅客发送量44.02亿人次，完成货物发送量41.3亿吨。',
      source: '国铁集团年度工作会议'
    },
    {
      id: 2,
      title: '铁路校招规模调整趋势',
      category: '招聘政策',
      date: '2025-12-05',
      content: '2026年铁路局招聘总人数约4万人，同比减少约20%，专科生降幅24.12%，本科降幅22.33%。就业竞争加剧。',
      source: '铁路招聘分析报告'
    },
    {
      id: 3,
      title: '铁路客运服务升级',
      category: '服务改革',
      date: '2026-04-15',
      content: '国铁集团推进客运服务品牌化建设，提升旅客出行体验，推广电子客票、静音车厢等服务，打造铁路服务品牌。',
      source: '国铁集团'
    },
    {
      id: 4,
      title: '铁路货运增量行动',
      category: '货运政策',
      date: '2026-03-20',
      content: '继续推进货运增量行动，优化货运产品体系，提升铁路货运市场份额，助力实体经济发展。',
      source: '国铁集团'
    }
  ],

  // 铁路发展动态
  developments: [
    {
      id: 1,
      title: '全国铁路营业里程将达到18万公里',
      category: '发展规划',
      date: '2026-01-04',
      progress: '进行中',
      target: '2030年目标',
      description: '到2030年，全国铁路营业里程达到18万公里，其中高铁6万公里，复线率和电气化率分别达到64%和78%。'
    },
    {
      id: 2,
      title: '八纵八横高铁网建设加速',
      category: '高铁建设',
      date: '2026-02-01',
      progress: '建设中',
      target: '2026-2030',
      description: '战略骨干通道全面加强，八纵八横高铁系统成网，区域互联互通水平显著提升。'
    },
    {
      id: 3,
      title: '智能铁路建设推进',
      category: '科技创新',
      date: '2026-03-01',
      progress: '进行中',
      target: '持续推进',
      description: '推进铁路智能化建设，5G、北斗等技术应用，提升铁路运营效率和安全保障能力。'
    },
    {
      id: 4,
      title: '绿色铁路发展',
      category: '绿色发展',
      date: '2026-01-01',
      progress: '进行中',
      target: '碳达峰目标',
      description: '务实稳妥推进铁路碳达峰、碳中和，发展新能源机车，推进铁路电气化改造。'
    }
  ],

  // 铁路新闻热搜
  hotNews: [
    { rank: 1, title: '武汉铁路局招聘268人公告发布', bureau: '武汉局', date: '05-06', views: '12万+' },
    { rank: 2, title: '五一铁路发送旅客1.59亿人次创新高', bureau: '全国', date: '05-07', views: '10万+' },
    { rank: 3, title: '长三角海铁联运突破百万标箱', bureau: '上海局', date: '04-27', views: '8万+' },
    { rank: 4, title: '中老铁路国际客流持续增长', bureau: '昆明局', date: '04-28', views: '6万+' },
    { rank: 5, title: '2026年铁路投产新线2000公里', bureau: '国铁集团', date: '01-04', views: '5万+' },
    { rank: 6, title: '国铁集团营业收入12987亿元', bureau: '国铁集团', date: '04-30', views: '4万+' },
    { rank: 7, title: '青藏铁路格拉段扩能改造启动', bureau: '青藏集团', date: '04-28', views: '3万+' },
    { rank: 8, title: '格库铁路运量突破1亿吨', bureau: '乌鲁木齐局', date: '04-15', views: '3万+' }
  ],

  // 招聘时间线
  recruitmentTimeline: [
    { month: '2025-10', event: '太原局首发招聘公告', status: '已完成' },
    { month: '2025-11', event: '各铁路局集中发布招聘公告', status: '已完成' },
    { month: '2025-12', event: '青藏、乌鲁木齐局招聘', status: '已完成' },
    { month: '2026-01', event: '招聘审核阶段', status: '已完成' },
    { month: '2026-02', event: '笔试阶段', status: '已完成' },
    { month: '2026-03', event: '面试阶段', status: '已完成' },
    { month: '2026-04', event: '体检签约阶段', status: '进行中' },
    { month: '2026-05', event: '武汉局补充招聘', status: '进行中' },
    { month: '2026-06', event: '新员工入职培训', status: '待开始' }
  ],

  // 按年份统计各铁路局招聘数据
  yearlyStats: {
    2026: 'realtime-news-data.js内置',
    2025: '总计35,560人',
    2024: '总计42,680人',
    2023: '总计47,890人',
    2022: '总计52,340人'
  }
};
