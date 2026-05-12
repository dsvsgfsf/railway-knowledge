/* quiz-bank.js  v1.0
   铁路专业课程题库 — 含单选/多选/判断题 + 打分机制
   黑龙江交通职业技术学院 铁路知识智能查询系统
*/
(function(){
'use strict';

/* ══════════════════════════════════════════════════════════
   QUIZ ENGINE — 题库引擎
   ══════════════════════════════════════════════════════════ */
window.QUIZ_BANK = {

  /* ─── 铁道概论 ─── */
  "铁道概论": {
    desc: "铁路基础综合知识，铁路发展史、技术标准、运营规范",
    totalQ: 80,
    questions: [
      {id:1,type:"single",q:"世界上第一条铁路诞生于哪一年？",opts:["A.1814年","B.1825年","C.1863年","D.1876年"],ans:"B",exp:"1825年英国斯托克顿至达灵顿铁路开通，是世界上第一条公用铁路，由乔治·史蒂芬森设计建造。"},
      {id:2,type:"single",q:"中国第一条自建铁路是哪条？",opts:["A.淞沪铁路","B.唐胥铁路","C.京张铁路","D.广九铁路"],ans:"B",exp:"1881年开通的唐胥铁路（唐山至胥各庄），是中国第一条标准轨距自建铁路，全长约9.7公里。"},
      {id:3,type:"single",q:"中国标准轨距为多少mm？",opts:["A.600mm","B.1000mm","C.1435mm","D.1520mm"],ans:"C",exp:"标准轨距1435mm（4英尺8.5英寸），全球约60%铁路采用此轨距，中国铁路全部采用标准轨距。"},
      {id:4,type:"single",q:"中国铁路速度等级划分中，高速铁路是指设计速度达到多少km/h及以上？",opts:["A.160km/h","B.200km/h","C.250km/h","D.350km/h"],ans:"C",exp:"按《高速铁路设计规范》，高速铁路是指设计速度250km/h及以上的铁路，中国高铁最高运营速度为350km/h。"},
      {id:5,type:"single",q:"铁路线路按运输任务分类，不包括哪种？",opts:["A.客运专线","B.货运专线","C.客货共线","D.景区专线"],ans:"D",exp:"铁路线路按运输任务分为客运专线（如高铁）、货运专线（如大秦线）和客货共线（普速铁路）三类。"},
      {id:6,type:"single",q:"中国铁路网\"八纵八横\"主通道是哪个规划文件确定的？",opts:["A.《中长期铁路网规划（2004年）》","B.《中长期铁路网规划（2008年修订）》","C.《中长期铁路网规划（2016年修订）》","D.《"十四五"铁路发展规划》"],ans:"C",exp:"2016年国务院批准的《中长期铁路网规划》确立了\"八纵八横\"高速铁路主通道，规划到2025年铁路网规模达到17.5万公里。"},
      {id:7,type:"single",q:"以下哪条线路是大秦铁路？",opts:["A.大连至秦皇岛","B.大同至秦皇岛","C.大庆至秦皇岛","D.大连至秦皇岛"],ans:"B",exp:"大秦铁路是大同至秦皇岛煤炭运输专线，全长653km，是中国第一条重载铁路，年运量超4亿吨。"},
      {id:8,type:"single",q:"铁路线路中，正线是指什么？",opts:["A.车站站场内的各种线路","B.连接车站并贯穿或直对车站的线路","C.专供机车车辆出入段用的线路","D.专供货物装卸使用的线路"],ans:"B",exp:"正线是指连接车站并贯穿或直对车站的线路，即列车正常运行的主干线路，不包括站内其他线路。"},
      {id:9,type:"single",q:"以下哪种坡度是铁路线路限制坡度？",opts:["A.线路上最平坦的坡度","B.限制机车牵引能力的最大上坡坡度","C.下坡时的最大坡度","D.弯道上的最大坡度"],ans:"B",exp:"限制坡度是指在该线路上限制机车牵引能力（即决定牵引定数）的最大上坡坡度，是线路最难通过的坡度。"},
      {id:10,type:"single",q:"铁路线路中，曲线半径越小说明弯道越怎样？",opts:["A.越平缓","B.越急","C.与弯道无关","D.越安全"],ans:"B",exp:"曲线半径越小，弯道越急，列车通过速度受限越大。高速铁路曲线半径一般不低于7000m，普速铁路一般不低于400m。"},
      {id:11,type:"judge",q:"中国首条时速350公里高铁是京沪高铁。",ans:false,exp:"中国首条时速350公里高铁是京津城际铁路（2008年8月1日开通），而非京沪高铁（2011年6月30日开通）。"},
      {id:12,type:"judge",q:"铁路轨枕的作用是承受钢轨传来的压力并传布于道床。",ans:true,exp:"轨枕（枕木或混凝土枕）的主要作用是固定钢轨，保持轨距，并将钢轨传来的压力均匀传布于道床。"},
      {id:13,type:"judge",q:"复线铁路是指同一走行方向有两条线路并行的铁路。",ans:false,exp:"复线铁路是指在同一路基上铺设两条正线的铁路，两条线路供列车双向运行（上行和下行），不是同一走行方向。"},
      {id:14,type:"multi",q:"铁路线路由哪些主要部分组成？（多选）",opts:["A.路基","B.桥涵","C.轨道","D.隧道","E.通信系统"],ans:["A","B","C","D"],exp:"铁路线路由路基（含路堤、路堑）、桥涵（桥梁、涵洞）、隧道和轨道（钢轨、轨枕、扣件、道床等）组成。通信系统属于设备，不属于线路本体。"},
      {id:15,type:"multi",q:"以下哪些属于高速铁路的技术特征？（多选）",opts:["A.无砟轨道","B.全封闭运营","C.CTCS信号系统","D.动力分散型动车组","E.高架桥梁比例高"],ans:["A","B","C","D","E"],exp:"高速铁路五大技术特征全部正确：采用无砟轨道（路基稳定性高）、全封闭运营（防止人畜入侵）、CTCS列控系统（自动防护）、动力分散型动车组（编组灵活、爬坡能力强）、高架桥梁（节约土地、线形平顺）。"},
      {id:16,type:"single",q:"铁路信号中，绿色灯光代表什么？",opts:["A.停车","B.注意","C.准许通过","D.减速"],ans:"C",exp:"铁路信号灯光颜色含义：绿色=准许通行（速度最高）；黄色=注意/减速；红色=停车；白色=引导/调车。"},
      {id:17,type:"single",q:"列车运行速度与线路曲线超高有何关系？",opts:["A.速度越高，需要的超高越小","B.速度越高，需要的超高越大","C.超高与速度无关","D.只有高速铁路才需要设置超高"],ans:"B",exp:"曲线超高是外轨高于内轨的高度差，用于平衡离心力。行车速度越高，离心力越大，所需超高也越大，以防止列车倾覆或旅客不适。"},
      {id:18,type:"single",q:"中国铁路总公司正式更名为国家铁路集团有限公司是在哪一年？",opts:["A.2013年","B.2016年","C.2019年","D.2021年"],ans:"C",exp:"2019年6月，中国铁路总公司（铁总）完成工商注册变更，正式更名为中国国家铁路集团有限公司（国铁集团）。"},
      {id:19,type:"single",q:"铁路线路按技术等级分，最高等级是哪类？",opts:["A.一级铁路","B.国家铁路","C.高速铁路","D.干线铁路"],ans:"A",exp:"按《铁路线路设计规范》，铁路按技术等级分为一级、二级、三级，一级铁路是技术等级最高、标准最高的铁路（如客货运量特大的干线）。"},
      {id:20,type:"single",q:"铁路车站按作业性质分类，以下哪种不属于？",opts:["A.区段站","B.中间站","C.编组站","D.风景站"],ans:"D",exp:"铁路车站按作业性质分为：客运站（旅客）、货运站（货物）、编组站（车辆编组）、中间站（区间中间）、区段站（机务折返点）等，无\"风景站\"类型。"}
    ]
  },

  /* ─── 电工基础 ─── */
  "电工基础": {
    desc: "电路基本定律、交直流电路分析、电磁感应",
    totalQ: 60,
    questions: [
      {id:1,type:"single",q:"欧姆定律的数学表达式是？",opts:["A.I=U×R","B.U=I×R","C.R=U+I","D.P=U/I"],ans:"B",exp:"欧姆定律：U=IR，其中U为电压（V），I为电流（A），R为电阻（Ω）。由此导出I=U/R，R=U/I。"},
      {id:2,type:"single",q:"基尔霍夫电流定律（KCL）的内容是？",opts:["A.回路中所有电压之和为零","B.流入节点的电流之和等于流出节点的电流之和","C.电阻串联时各电阻电流相同","D.并联电路中各支路电压相等"],ans:"B",exp:"KCL（基尔霍夫电流定律）：对任一节点，流入节点的电流之和等于流出节点的电流之和，即∑I=0。"},
      {id:3,type:"single",q:"三相交流电路中，线电压与相电压的关系（星形接法）是？",opts:["A.线电压=相电压","B.线电压=√2×相电压","C.线电压=√3×相电压","D.线电压=2×相电压"],ans:"C",exp:"星形（Y）接法中，线电压UL=√3×相电压UY。中国标准：相电压220V，线电压=220×√3≈380V。"},
      {id:4,type:"single",q:"电感线圈的感抗计算公式是？",opts:["A.XL=1/(ωC)","B.XL=ωL","C.XL=R/L","D.XL=L/ω"],ans:"B",exp:"感抗XL=ωL=2πfL，其中ω为角频率，L为电感量，f为频率。感抗随频率增大而增大。"},
      {id:5,type:"single",q:"纯电容电路中，电流与电压的相位关系是？",opts:["A.电流超前电压90°","B.电压超前电流90°","C.同相位","D.相差180°"],ans:"A",exp:"纯电容电路中，电流超前电压90°（电容的相位特性）。口诀：\"电感电压超前，电容电流超前\"。"},
      {id:6,type:"single",q:"变压器的工作原理基于什么物理现象？",opts:["A.热效应","B.光电效应","C.电磁感应","D.压电效应"],ans:"C",exp:"变压器利用电磁感应原理工作：一次侧交变电流产生交变磁场，通过铁芯耦合到二次侧，在二次侧感应出电动势。"},
      {id:7,type:"single",q:"三相异步电动机的转差率公式是？",opts:["A.s=(n1-n)/n1","B.s=(n-n1)/n","C.s=n/n1","D.s=n1/n"],ans:"A",exp:"转差率s=(n1-n)/n1，其中n1为同步转速，n为转子转速。正常运行时s很小（1%-8%），启动时s=1，同步时s=0。"},
      {id:8,type:"judge",q:"电路中，短路时电阻为无穷大。",ans:false,exp:"短路时，两点间直接导通，电阻接近零，电流很大（危险状态）。开路（断路）时，电阻为无穷大，电流为零。"},
      {id:9,type:"judge",q:"变压器变比k=N1/N2=U1/U2，表示变压器升压还是降压由绕组匝数比决定。",ans:true,exp:"变压器变比k=N1/N2=U1/U2=I2/I1。当N1>N2时k>1为降压变压器，当N1<N2时k<1为升压变压器。"},
      {id:10,type:"multi",q:"以下哪些是提高功率因数的方法？（多选）",opts:["A.并联电容器组","B.使电动机轻载运行","C.选用高效同步电动机","D.加装串联电抗器","E.更换大容量变压器"],ans:["A","C"],exp:"提高功率因数的主要方法：①并联电容器组（补偿感性无功功率）；②选用同步电动机（可超励运行）；③提高电动机负载率（避免轻载）。"},
      {id:11,type:"single",q:"电阻串联电路中，各电阻两端电压与各电阻阻值的关系是？",opts:["A.各电阻电压相等","B.各电阻电压与其阻值成正比","C.各电阻电压与其阻值成反比","D.与阻值无关"],ans:"B",exp:"串联电路：各电阻电流相同，电压按阻值分配（分压原理），U1/U2=R1/R2，即电压与阻值成正比。"},
      {id:12,type:"single",q:"中国工频交流电的频率是多少？",opts:["A.50Hz","B.60Hz","C.100Hz","D.400Hz"],ans:"A",exp:"中国标准工频为50Hz，对应周期T=0.02s。美国、加拿大、日本部分地区使用60Hz。铁路信号频率有25Hz（轨道电路）等特殊规格。"}
    ]
  },

  /* ─── 机车牵引与控制 ─── */
  "机车牵引与控制": {
    desc: "电力机车牵引特性、主电路、控制系统",
    totalQ: 70,
    questions: [
      {id:1,type:"single",q:"电力机车最主要的能量来源是什么？",opts:["A.车载蓄电池","B.柴油发电机","C.接触网供电","D.太阳能"],ans:"C",exp:"电力机车通过受电弓从接触网（架空导线）取电，通过主变压器降压后驱动牵引电机。中国电气化铁路接触网标准电压为25kV单相交流50Hz。"},
      {id:2,type:"single",q:"HXD1型电力机车的中文全称是什么？",opts:["A.和谐一型电力机车","B.和谐电力大一型","C.和谐动力一型","D.和谐型动车一型"],ans:"A",exp:"HXD是\"和谐电（力机车）\"首字母缩写。HXD1（和谐一型）为6轴大功率电力机车，持续功率9600kW，用于重载货运。"},
      {id:3,type:"single",q:"机车牵引力与速度的基本关系在恒功率阶段符合？",opts:["A.F×V=常数","B.F+V=常数","C.F=V","D.F/V=常数"],ans:"A",exp:"恒功率阶段：P=F×V=常数，即牵引力F与速度V成反比。速度增加则牵引力减小，速度减小则牵引力增大。"},
      {id:4,type:"single",q:"列车制动时，空气制动机的制动力来源是什么？",opts:["A.弹簧力","B.电磁力","C.压缩空气的气压力","D.液压力"],ans:"C",exp:"空气制动机（风闸）利用压缩空气操纵制动缸，推动制动闸瓦或制动盘夹紧车轮，产生制动摩擦力。"},
      {id:5,type:"single",q:"机车主变压器的作用是什么？",opts:["A.将电能转换为机械能","B.将接触网25kV降压为适合各用电设备的电压","C.储存电能","D.控制电机转速"],ans:"B",exp:"主变压器将接触网25kV高压降压，分别提供牵引变流器（驱动牵引电机）、辅助变压器（辅机用电）所需电压。"},
      {id:6,type:"judge",q:"DF11型机车是电力机车。",ans:false,exp:"DF（东风）系列是内燃机车，D代表内燃，F代表大型货运。DF11是内燃机车中的主型货运机车。HXD、SS（韶山）系列才是电力机车。"},
      {id:7,type:"judge",q:"机车的牵引重量（牵引定数）受限制坡度影响。",ans:true,exp:"限制坡度是确定牵引定数的主要参数。坡度越大，列车自重分力越大，机车可牵引的货物重量（牵引定数）越小。"},
      {id:8,type:"single",q:"电力机车受电弓与接触网导线接触的接触压力大约为多少N？",opts:["A.10-30N","B.60-120N","C.200-500N","D.1000N以上"],ans:"B",exp:"受电弓与接触网的接触压力标准为60~120N（静态接触压力），过小容易拉弧（离线），过大容易磨损导线。"},
      {id:9,type:"single",q:"列车基本阻力产生的原因不包括下列哪项？",opts:["A.车轮与钢轨的摩擦","B.轴承摩擦阻力","C.空气阻力","D.坡道重力分量"],ans:"D",exp:"列车基本阻力是在水平直线道上的运动阻力，包括：轮轨摩擦、轴承摩擦、空气阻力等。坡道重力分量是附加阻力（坡道阻力），不属于基本阻力。"},
      {id:10,type:"multi",q:"电力机车的主要技术参数包括哪些？（多选）",opts:["A.持续功率（kW）","B.最大速度（km/h）","C.轴重（t）","D.牵引定数（t）","E.轴式"],ans:["A","B","C","E"],exp:"机车主要参数：持续功率（连续额定功率）、最大速度、轴重（影响线路承载）、轴式（轴排列，如Co-Co）。牵引定数是列车编组参数，不是机车本身参数。"}
    ]
  },

  /* ─── 铁路行车安全 ─── */
  "铁路行车安全": {
    desc: "行车规章制度、事故等级、安全管理",
    totalQ: 80,
    questions: [
      {id:1,type:"single",q:"铁路交通事故按照严重程度分为几个等级？",opts:["A.3个","B.4个","C.5个","D.6个"],ans:"B",exp:"《铁路交通事故调查处理规则》将铁路交通事故分为：特别重大事故、重大事故、较大事故、一般事故四个等级。"},
      {id:2,type:"single",q:"列车在区间发生脱轨，应向哪个方向报告？",opts:["A.只向前方车站报告","B.只向后方车站报告","C.同时向邻近两端车站报告","D.直接拨打110"],ans:"C",exp:"区间发生紧急情况，司机应立即制动停车，同时通知前后两端车站（用无线列调电话），使两端车站均知晓，防止追尾。"},
      {id:3,type:"single",q:"\"铁路安全\"中，鸟巢（鸟窝）建在信号机上属于什么隐患？",opts:["A.设备安全隐患","B.自然灾害","C.人员操作失误","D.不属于安全隐患"],ans:"A",exp:"鸟巢建在信号机、变压器、电缆槽等设备上，可能导致设备短路、信号显示遮挡等问题，属于铁路设备安全隐患，需定期排查清除。"},
      {id:4,type:"single",q:"铁路行车凭证，以下哪种是行车凭证？",opts:["A.装货通知单","B.进路锁闭通知","C.路票（行车许可证）","D.机车检修合格证"],ans:"C",exp:"路票（行车许可证）是机车乘务员在无自动闭塞区段凭借运行的行车凭证，分为电话路票、路单等形式。"},
      {id:5,type:"single",q:"列车司机\"一看二鸣三确认\"的操作规程中，二鸣是指？",opts:["A.鸣两声长笛","B.鸣号（笛声）提示沿线人员","C.鸣笛要求信号员发出信号","D.鸣笛通知车站列车出发"],ans:"B",exp:"\"一看\"看信号、\"二鸣\"鸣笛警示沿线人员、\"三确认\"确认信号显示正确，是机车司机接近信号机时的标准化操作。"},
      {id:6,type:"judge",q:"列车尾部不需要设置防护装置。",ans:false,exp:"列车尾部需设置尾部安全防护装置（列尾装置），可监测列车完整性，并可远程充排风控制制动机，防止列车分离事故。"},
      {id:7,type:"judge",q:"铁路道口是行人和车辆穿越铁路线路的专用设施，必须设置在正线上。",ans:false,exp:"铁路道口可设在正线上，但高速铁路严禁设置道口（全封闭）。普速铁路道口分有人看守道口和无人看守道口，有安全设施（栏木、信号灯等）。"},
      {id:8,type:"multi",q:"以下哪些是铁路行车安全的主要规章？（多选）",opts:["A.《铁路技术管理规程》（技规）","B.《铁路行车组织规则》（行规）","C.《铁路机车运用管理规程》","D.《铁路交通事故调查处理规则》","E.《铁路旅客运输规程》"],ans:["A","B","C","D"],exp:"铁路四大行车规章：①《技规》（铁路技术管理基础）②《行规》（行车组织）③《机车运用规程》（机车乘务）④《事故处理规则》（事故调查）。《旅客运输规程》属于客运规章，不属于行车规章范畴。"},
      {id:9,type:"single",q:"铁路区间闭塞的作用是什么？",opts:["A.防止列车超速","B.确保同一区间同一时刻只有一列列车运行","C.控制列车鸣笛","D.安排列车会让"],ans:"B",exp:"闭塞制度：将线路划分为若干闭塞区间，确保同一时刻同一区间只有一列列车运行，从技术上防止追尾事故。"},
      {id:10,type:"single",q:"CTCS是什么系统的缩写？",opts:["A.中国列车控制系统","B.中国铁路通信系统","C.中央调度控制系统","D.铁路车辆检测系统"],ans:"A",exp:"CTCS=China Train Control System（中国列车控制系统），分为CTCS-0至CTCS-4五个等级，高铁采用CTCS-3级（基于GSM-R无线传输）和CTCS-4级（基于LTE）。"}
    ]
  },

  /* ─── 铁道信号 ─── */
  "铁路信号自动控制基础": {
    desc: "铁路信号系统基础、轨道电路、联锁系统",
    totalQ: 75,
    questions: [
      {id:1,type:"single",q:"轨道电路的主要作用是什么？",opts:["A.给列车供电","B.检测列车占用区间并传输信号","C.控制道岔转换","D.为车站照明供电"],ans:"B",exp:"轨道电路利用铁轨作为导线，检测列车是否占用该区间（车轮短路），同时可以向列车传输信号（机车信号）。"},
      {id:2,type:"single",q:"计算机联锁系统（CBI）中，联锁关系的核心是保证什么？",opts:["A.列车速度不超限","B.进路上无障碍时才能开放信号","C.车站客运服务质量","D.机车按时出发"],ans:"B",exp:"联锁（Interlocking）的核心：进路（排列好的行车路线）锁闭后，检查进路上所有道岔正确定位、区间空闲、无接近列车，才能开放进路信号，保证行车安全。"},
      {id:3,type:"single",q:"色灯信号机的绿灯显示含义是什么？",opts:["A.停车","B.减速至规定速度","C.允许按规定速度通过","D.注意前方信号"],ans:"C",exp:"绿灯=允许按规定速度通过（速度不受限制）；黄灯=注意，前方有停车信号，减速准备停车；红灯=停车（绝对停车信号）。"},
      {id:4,type:"single",q:"道岔的定位（正位）通常是指？",opts:["A.道岔位于最左位置","B.道岔通向主要线路（正线）的位置","C.道岔最近一次操作后的位置","D.人工拨定的位置"],ans:"B",exp:"道岔定位（正位）：道岔尖轨与基本轨的固定位置，通常为通向正线（主要线路）的位置。反位：通向副线或岔线的位置。"},
      {id:5,type:"single",q:"ZPW-2000A型无绝缘轨道电路的工作频段范围是？",opts:["A.50Hz","B.83.33~416.67Hz","C.1700~2300Hz","D.5000~10000Hz"],ans:"B",exp:"ZPW-2000A（中国高铁主用）：采用载频83.33Hz、125Hz、166.67Hz、250Hz、333.33Hz、416.67Hz共6个载频，调制频率10Hz和12Hz。"},
      {id:6,type:"judge",q:"道岔缺口是指道岔尖轨与基本轨之间的间隙，越大越安全。",ans:false,exp:"道岔缺口过大会导致车轮跳道，必须控制在限度内（一般尖轨与基本轨的贴合缺口≤1mm，开口缺口≥65mm）。缺口不合格是严重安全隐患。"},
      {id:7,type:"single",q:"TDCS系统是指什么？",opts:["A.铁路调度指挥系统","B.列车动态控制系统","C.铁路道岔控制系统","D.铁路通信交换系统"],ans:"A",exp:"TDCS=Train Dispatching Command System（铁路调度指挥系统），是调度中心掌握列车运行情况、下达调度命令的综合平台。"},
      {id:8,type:"multi",q:"铁路信号的三要素是？（多选）",opts:["A.距离","B.颜色（灯光）","C.声音","D.形状","E.位置"],ans:["B","D","E"],exp:"铁路信号三要素：颜色（灯光信号）、形状（手信号形状）、位置（信号机安装位置，如左侧/右侧/跨线）。距离和声音不是信号三要素。"}
    ]
  },

  /* ─── 动车组检修 ─── */
  "动车组技术": {
    desc: "CRH系列动车组结构、检修级别、关键技术",
    totalQ: 70,
    questions: [
      {id:1,type:"single",q:"CRH是什么的缩写？",opts:["A.China Railway High-speed","B.China Rail Highway","C.China Road High-speed","D.China Rail High-speed"],ans:"A",exp:"CRH=China Railway High-speed（中国铁路高速），是中国动车组的统一型号前缀。之后的CR（复兴号）系列为CR400等。"},
      {id:2,type:"single",q:"动车组一级检修（1级修）对应的走行公里大约是多少？",opts:["A.2万km","B.5万km","C.12万km","D.24万km"],ans:"A",exp:"CRH系列动车组五级检修制度：1级修约2万km（相当于定期检查）；2级修约12万km；3级修约48万km；4级修约96万km；5级修约240万km（大修）。"},
      {id:3,type:"single",q:"动车组动力分散型的优点是什么？",opts:["A.检修简单","B.每节车厢都有动力，加速性能好、爬坡能力强","C.造价低","D.噪声小"],ans:"B",exp:"动力分散型（如CRH）每节动车均设有牵引电机，动力更均匀，加速快（0~350km/h约6分钟），爬坡能力强，且单节故障不影响整列运行。"},
      {id:4,type:"single",q:"复兴号CR400AF的最高设计速度是多少？",opts:["A.250km/h","B.300km/h","C.350km/h","D.400km/h"],ans:"C",exp:"CR400AF（复兴号标准型，16辆编组）设计最高速度400km/h，当前运营最高速度350km/h。'AF'=A型（16辆）+F型编组（16节）。"},
      {id:5,type:"single",q:"动车组的TCMS系统是什么？",opts:["A.列车控制与管理系统","B.轨道检测与监测系统","C.列车通信与广播系统","D.制动控制管理系统"],ans:"A",exp:"TCMS=Train Control and Management System（列车控制与管理系统），是动车组的\"大脑\"，集中管理牵引、制动、供电、通风等所有子系统，并进行故障诊断。"},
      {id:6,type:"judge",q:"动车组检修时，1级修可以由随车机械师在乘务结束后自行完成。",ans:false,exp:"动车组各级检修须在具备资质的动车所/动车段完成，不同级别有严格的场所、工具、人员资质要求。随车机械师负责途中应急处置，不负责定期检修。"},
      {id:7,type:"multi",q:"CRH2C型动车组的主要特点包括？（多选）",opts:["A.8辆编组","B.最高速度350km/h","C.基于日本新干线N700技术","D.基于日本新干线E2-1000技术","E.牵引功率约9600kW"],ans:["A","B","D","E"],exp:"CRH2C：8辆编组，最高速度350km/h（C型为提速版），基于日本新干线E2-1000型技术（西门子E2，非N700），总功率9600kW。CRH3基于西门子Velaro。"}
    ]
  },

  /* ─── 铁路运营管理 ─── */
  "铁路旅客运输组织": {
    desc: "旅客运输服务、票务管理、客运规程",
    totalQ: 65,
    questions: [
      {id:1,type:"single",q:"旅客列车按速度等级从高到低排列，正确顺序是？",opts:["A.G>D>C>Z>T>K","B.G>C>D>Z>T>K","C.G>D>Z>C>T>K","D.D>G>C>Z>T>K"],ans:"A",exp:"旅客列车速度级别：G（高铁350km/h）>D（动车250~350km/h）>C（城际动车组）>Z（直达特快）>T（特快）>K（快速）>普通旅客列车。"},
      {id:2,type:"single",q:"铁路车票实名制正式全面推行是哪一年？",opts:["A.2009年","B.2012年","C.2015年","D.2010年"],ans:"B",exp:"2012年1月1日，铁路旅客购票实名制在全国铁路全面推行，旅客需凭有效身份证件购票和乘车。"},
      {id:3,type:"single",q:"旅客乘车携带行李每人的免费携带重量是多少kg？",opts:["A.10kg","B.20kg","C.30kg","D.50kg"],ans:"B",exp:"《铁路旅客运输规程》规定，成人旅客每人免费携带行李20kg；小孩旅客（未购票儿童）免费携带行李10kg。超重行李须办理行李托运。"},
      {id:4,type:"single",q:"旅客在候车室内存取行李的自动寄存柜，行李存储时限最长通常为多少小时？",opts:["A.12小时","B.24小时","C.48小时","D.72小时"],ans:"C",exp:"铁路车站自动寄存柜一般规定最长存储时限为48小时（各站可能略有差异），超时按时累计加收费用。"},
      {id:5,type:"judge",q:"旅客持站台票可以上车送客。",ans:false,exp:"站台票（月台票）仅允许持票人进入站台（月台）区域，不能上车。上车送客须购买对应列车的普通车票。"},
      {id:6,type:"single",q:"G车（高铁动车组列车）的票价构成基础是？",opts:["A.固定政府定价","B.运营成本+合理利润（国家指导价）","C.市场自由定价","D.按照K车票价乘以倍数"],ans:"B",exp:"高铁动车票价实行国家指导价（以铁路旅客运价里程为基础），在核定的最高限价内，铁路总公司可上下浮动，具有一定市场化灵活性。"}
    ]
  },

  /* ─── 铁路工务工程 ─── */
  "铁路线路维修": {
    desc: "铁路线路检修标准、作业方法、维修规程",
    totalQ: 70,
    questions: [
      {id:1,type:"single",q:"钢轨接头的主要作用是什么？",opts:["A.美观装饰","B.允许钢轨受热伸缩","C.增加轨道强度","D.标记线路里程"],ans:"B",exp:"钢轨接头（轨缝）允许钢轨因温度变化而伸缩，防止胀轨。无缝线路采用焊接消除接头，但在出入场所设置伸缩调节器。"},
      {id:2,type:"single",q:"铁路线路几何状态的主要检测参数不包括？",opts:["A.轨距","B.轨向（方向）","C.钢轨材质成分","D.水平（高低）"],ans:"C",exp:"铁路线路几何状态参数（五大检测项目）：轨距、轨向（方向）、水平（超高）、高低（纵向平顺性）、扭曲（三角坑）。钢轨材质成分属于钢轨质量检测，非几何状态参数。"},
      {id:3,type:"single",q:"标准轨距允许偏差范围是多少mm？",opts:["A.+2~-3mm","B.+5~-5mm","C.±10mm","D.+10~-3mm"],ans:"A",exp:"普速铁路正线轨距标准1435mm，允许偏差+6~-2mm（静态），动态检测允许偏差+4~-3mm。线路维修精度标准更高，安全最大限度+10~-4mm。"},
      {id:4,type:"judge",q:"无缝线路完全消除了钢轨热胀冷缩的问题。",ans:false,exp:"无缝线路通过\"锁定\"应力（在特定温度下焊接固定）来平衡热应力，并非消除热胀冷缩，而是将热应力控制在钢轨强度范围内。超过锁定温度仍需防胀轨。"},
      {id:5,type:"multi",q:"以下哪些属于铁路道岔病害？（多选）",opts:["A.尖轨与基本轨不密贴","B.辙叉心轮缘槽宽度超限","C.道岔枕木腐朽","D.转辙机缺油","E.道床板结不洁"],ans:["A","B","C","E"],exp:"道岔常见病害：尖轨不密贴（危险）、辙叉轮缘槽超限（影响通过）、枕木腐朽（支撑不足）、道床脏污板结（排水差）。转辙机缺油属于信号设备维护，不属于线路工务病害。"}
    ]
  },

  /* ─── 计算机基础 ─── */
  "计算机基础": {
    desc: "计算机硬件、软件、网络、数据库基础",
    totalQ: 60,
    questions: [
      {id:1,type:"single",q:"二进制数10110101转换为十进制是多少？",opts:["A.165","B.177","C.181","D.128"],ans:"C",exp:"10110101：1×128+0×64+1×32+1×16+0×8+1×4+0×2+1×1=128+32+16+4+1=181。"},
      {id:2,type:"single",q:"TCP/IP协议模型的第几层对应OSI模型的网络层？",opts:["A.第1层（网络接口层）","B.第2层（互联网层）","C.第3层（传输层）","D.第4层（应用层）"],ans:"B",exp:"TCP/IP四层模型：应用层、传输层、互联网层（网络层）、网络接口层。TCP/IP互联网层对应OSI七层模型的第三层（网络层），负责IP寻址和路由。"},
      {id:3,type:"single",q:"SQL语句中，用于查询的语句是？",opts:["A.INSERT","B.UPDATE","C.SELECT","D.DELETE"],ans:"C",exp:"SQL四大基本操作：SELECT（查询）、INSERT（插入）、UPDATE（更新）、DELETE（删除）。SELECT是最常用的DQL（数据查询语言）语句。"},
      {id:4,type:"judge",q:"CPU的主频越高，计算机处理速度越快。",ans:false,exp:"CPU主频是影响性能的重要因素，但不是唯一因素。核心数、缓存大小、架构效率（IPC）、内存带宽等同样重要。多核低频CPU可能比单核高频CPU综合性能更好。"},
      {id:5,type:"single",q:"计算机的1GB等于多少MB？",opts:["A.100MB","B.1000MB","C.1024MB","D.2048MB"],ans:"C",exp:"存储容量单位：1TB=1024GB，1GB=1024MB，1MB=1024KB，1KB=1024B（字节）。注意：硬盘厂商通常用1000进制，实际显示容量比标称小。"}
    ]
  },

  /* ─── 公路运输管理 ─── */
  "运输经济学基础": {
    desc: "运输经济学原理、成本分析、运价政策",
    totalQ: 50,
    questions: [
      {id:1,type:"single",q:"运输业的基本功能是什么？",opts:["A.创造货物的形态效用","B.创造货物的时间效用和空间效用","C.创造货物的品质效用","D.创造货物的信息效用"],ans:"B",exp:"运输的核心功能是克服商品生产和消费的空间和时间上的分离，创造货物的空间效用（位移）和时间效用（及时性）。"},
      {id:2,type:"single",q:"铁路运输相比公路运输的比较优势是？",opts:["A.灵活性高","B.初期投资小","C.适合长途大宗货物运输，单位成本低","D.门到门服务方便"],ans:"C",exp:"铁路运输优势：大运量（每列万吨以上）、低能耗、长途运输成本低、全天候运行稳定、占地少。劣势：灵活性差、初期基础设施投资大。"},
      {id:3,type:"judge",q:"铁路旅客运输有明显的旺季和淡季之分，属于需求的季节性波动。",ans:true,exp:"铁路旅客运输需求具有明显季节性：春节、五一、十一等节假日为旺季（供不应求），其他时段为淡季。铁路通过动态定价、浮动票价等机制调节需求分布。"}
    ]
  }
};

/* ══════════════════════════════════════════════════════════
   QUIZ ENGINE FUNCTIONS — 题库引擎函数
   ══════════════════════════════════════════════════════════ */

/**
 * 启动模拟考试
 * @param {string} courseName - 课程名称
 * @param {number} count - 题目数量
 */
window.startQuiz = function(courseName, count){
  count = count || 10;
  const bank = window.QUIZ_BANK[courseName];
  if(!bank){
    // 尝试模糊匹配题库名称
    const keys = Object.keys(window.QUIZ_BANK);
    const fuzzy = keys.find(k=>k.includes(courseName)||courseName.includes(k)||
      k.replace(/[^\u4e00-\u9fa5]/g,'').includes(courseName.replace(/[^\u4e00-\u9fa5]/g,'')));
    if(fuzzy){
      return window.startQuiz(fuzzy, count);
    }
    const available = keys.join('、');
    return `<strong>❌ 未找到"${courseName}"的题库</strong><br>当前有题库的课程：${available}<br><br>💡 可尝试输入：<span class="tag-inline" onclick="quickAsk('铁路局招聘考试题库')">铁路局招聘考试</span> <span class="tag-inline" onclick="quickAsk('铁道概论题库')">铁道概论</span> <span class="tag-inline" onclick="quickAsk('铁路信号基础题库')">铁路信号基础</span> <span class="tag-inline" onclick="quickAsk('查看全部题库')">查看全部题库</span>`;
  }

  // 兼容 sections 格式（quiz-bank-comprehensive.js）和 questions 格式
  let pool;
  if(bank.sections && bank.sections.length){
    // sections 格式：合并所有 section.items
    pool = bank.sections.reduce((acc, sec)=>{
      if(sec.items) return acc.concat(sec.items.map(q=>({...q,_sec:sec.name})));
      return acc;
    },[]);
  } else {
    pool = [...(bank.questions||[])];
  }

  const shuffled = pool.sort(()=>Math.random()-0.5).slice(0, Math.min(count, pool.length));

  // 存储到会话
  window._quizSession = {
    courseName, questions: shuffled,
    answers: new Array(shuffled.length).fill(null),
    startTime: Date.now(), submitted: false,
    // sections 格式额外信息
    sections: bank.sections || null,
    title: bank.title || bank.desc || courseName,
    subtitle: bank.subtitle || ''
  };

  return renderQuizUI();
};

/* ══════════════════════════════════════════════════════════
   题库目录 — 展示所有可用题库
   ══════════════════════════════════════════════════════════ */
window.showQuizCatalog = function(){
  const banks = window.QUIZ_BANK || {};
  const keys = Object.keys(banks);
  if(keys.length === 0){
    return '<strong>暂无题库数据</strong>，请联系管理员添加题库。';
  }

  // 定义各题库的中文显示名和描述
  const catalog = {
    recruitment: {
      name: '铁路局招聘综合考试',
      desc: '200题 · 行测+铁路基础+时事政治+专业知识',
      color: '#1a4b8c', icon: '🏢', count: '200题',
      tip: '想考铁路局？先做这套题'
    },
    railwayIntro: {
      name: '铁道概论', desc: '200题 · 4章节', color: '#1e5296', icon: '🚂', count: '200题'
    },
    signal: {
      name: '铁路信号基础', desc: '200题 · 4章节', color: '#1b4332', icon: '🚦', count: '200题'
    },
    trainOperation: {
      name: '铁路行车组织', desc: '200题 · 4章节', color: '#1a1a5c', icon: '🚃', count: '200题'
    },
    overheadLine: {
      name: '接触网运行与检修', desc: '200题 · 4章节', color: '#3a5f0b', icon: '⚡', count: '200题'
    },
    locomotiveRepair: {
      name: '机车检修与故障处理', desc: '200题 · 4章节', color: '#6b2d2d', icon: '🔧', count: '200题'
    },
    '铁道概论': {
      name: '铁道概论（基础版）', desc: '80题 · 基础单选题+判断+多选', color: '#1e5296', icon: '🚂'
    },
    '电工基础': {
      name: '电工基础', desc: '60题 · 交直流电路/电磁/电机', color: '#1c3a5c', icon: '💡'
    }
  };

  let html = `<div style="margin-bottom:14px">
    <strong style="font-size:15px">📚 铁路专业题库目录（共${keys.length}套）</strong>
    <div style="font-size:12px;color:#718096;margin-top:4px">点击卡片即可开始练习，随机抽取10题</div>
  </div>`;

  html += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px">`;

  keys.forEach(k=>{
    const info = catalog[k] || {
      name: k, desc: '题库',
      color: '#2c3e50', icon: '📝'
    };
    const totalQ = banks[k].totalQuestions || (banks[k].questions ? banks[k].questions.length :
      (banks[k].sections ? banks[k].sections.reduce((a,s)=>a+(s.items?s.items.length:0),0) : '?'));
    html += `<div style="background:linear-gradient(135deg,${info.color}22,${info.color}11);
                border:1.5px solid ${info.color}44;border-radius:10px;padding:14px;cursor:pointer;
                transition:all .2s"
                onclick="window._startQuizFromCatalog('${k}')"
                onmouseover="this.style.transform='translateY(-3px)';this.style.boxShadow='0 6px 20px rgba(0,0,0,.12)'"
                onmouseout="this.style.transform='';this.style.boxShadow=''">
      <div style="font-size:22px;margin-bottom:6px">${info.icon||'📝'}</div>
      <div style="font-weight:700;color:${info.color};font-size:14px;margin-bottom:4px">${info.name}</div>
      <div style="font-size:11px;color:#64748b;margin-bottom:6px">${info.desc}</div>
      ${info.tip ? `<div style="font-size:11px;color:#e67e22;margin-top:4px">💡 ${info.tip}</div>` : ''}
      <div style="font-size:11px;color:#94a3b8;margin-top:6px">${totalQ}题 · 点击开始 →</div>
    </div>`;
  });

  html += `</div>`;
  html += `<div style="margin-top:14px;font-size:12px;color:#94a3b8;text-align:center">
    💡 输入"开始考试：课程名"可指定题库和题量，例如：开始考试：铁道概论（20题）
  </div>`;
  return html;
};

/* 从目录启动考试的包装函数 */
window._startQuizFromCatalog = function(k){
  const q = window.startQuiz(k, 10);
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:500;display:flex;align-items:center;justify-content:center;padding:20px';
  modal.onclick = function(e){ if(e.target===modal) modal.remove(); };
  const box = document.createElement('div');
  box.style.cssText = 'background:#fff;border-radius:14px;padding:24px;width:min(680px,95vw);max-height:88vh;overflow-y:auto;position:relative;animation:slideUp .25s';
  box.innerHTML = q;
  modal.appendChild(box);
  document.body.appendChild(modal);
  // 注入slideUp动画
  if(!document.getElementById('quiz-anim-style')){
    const s = document.createElement('style');
    s.id = 'quiz-anim-style';
    s.textContent = '@keyframes slideUp{from{transform:translateY(16px);opacity:0}to{transform:translateY(0);opacity:1}}';
    document.head.appendChild(s);
  }
};

function renderQuizUI(){
  const s = window._quizSession;
  if(!s) return '请先开始一个考试。';

  let html = `<div class="quiz-wrapper">`;
  const quizTitle = s.title || s.courseName;
  html += `<div class="quiz-header">
    <span class="quiz-title">📝 ${quizTitle}（共${s.questions.length}题）${s.subtitle ? '— '+s.subtitle : ''}</span>
    <span class="quiz-timer" id="quiz-timer">⏱ 计时中...</span>
  </div>`;

  s.questions.forEach((q, idx)=>{
    const typeLabel = q.type==='single'?'单选':q.type==='multi'?'多选':'判断';
    html += `<div class="quiz-item" id="qi-${idx}" data-idx="${idx}">
      <div class="qi-no"><span class="qi-type-badge ${q.type}">${typeLabel}</span> 第${idx+1}题</div>
      <div class="qi-question">${q.q}</div>
      <div class="qi-opts">`;

    if(q.type==='judge'){
      html += `<label class="qi-opt"><input type="radio" name="q${idx}" value="true" onchange="recordAnswer(${idx},'true')"> ✅ 正确</label>`;
      html += `<label class="qi-opt"><input type="radio" name="q${idx}" value="false" onchange="recordAnswer(${idx},'false')"> ❌ 错误</label>`;
    } else if(q.type==='multi'){
      (q.opts||[]).forEach(opt=>{
        const val = opt[0];
        html += `<label class="qi-opt"><input type="checkbox" name="q${idx}" value="${val}" onchange="recordMultiAnswer(${idx})"> ${opt}</label>`;
      });
    } else {
      (q.opts||[]).forEach(opt=>{
        const val = opt[0];
        html += `<label class="qi-opt"><input type="radio" name="q${idx}" value="${val}" onchange="recordAnswer(${idx},'${val}')"> ${opt}</label>`;
      });
    }

    html += `</div></div>`;
  });

  html += `<div class="quiz-actions">
    <button class="btn-submit-quiz" onclick="submitQuiz()">📤 提交答卷</button>
    <button class="btn-clear-quiz" onclick="clearQuizAnswers()">🔄 清空作答</button>
  </div>`;
  html += `</div>`;

  // 启动计时器
  setTimeout(()=>startQuizTimer(), 100);
  return html;
}

window.recordAnswer = function(idx, val){
  if(!window._quizSession || window._quizSession.submitted) return;
  window._quizSession.answers[idx] = val;
};

window.recordMultiAnswer = function(idx){
  if(!window._quizSession || window._quizSession.submitted) return;
  const boxes = document.querySelectorAll(`input[name="q${idx}"]:checked`);
  window._quizSession.answers[idx] = Array.from(boxes).map(b=>b.value).sort();
};

window.clearQuizAnswers = function(){
  if(!window._quizSession) return;
  window._quizSession.answers.fill(null);
  document.querySelectorAll('.quiz-wrapper input').forEach(el=>{el.checked=false;});
  showToast('已清空所有作答','info');
};

window.startQuizTimer = function(){
  if(window._quizTimerInterval) clearInterval(window._quizTimerInterval);
  window._quizTimerInterval = setInterval(()=>{
    if(!window._quizSession || window._quizSession.submitted){
      clearInterval(window._quizTimerInterval); return;
    }
    const elapsed = Math.floor((Date.now() - window._quizSession.startTime)/1000);
    const min = Math.floor(elapsed/60), sec = elapsed%60;
    const el = document.getElementById('quiz-timer');
    if(el) el.textContent = `⏱ ${min}分${sec.toString().padStart(2,'0')}秒`;
  }, 1000);
};

window.submitQuiz = function(){
  const s = window._quizSession;
  if(!s){ showToast('请先开始考试','error'); return; }
  if(s.submitted){ showToast('已经提交过了','info'); return; }

  const unanswered = s.answers.filter(a=>a===null).length;
  if(unanswered > 0){
    const ok = confirm(`还有${unanswered}道题未作答，确认提交吗？`);
    if(!ok) return;
  }

  s.submitted = true;
  clearInterval(window._quizTimerInterval);
  const timeUsed = Math.floor((Date.now() - s.startTime)/1000);

  // 计算分数
  let correct = 0, wrong = 0, unansweredCount = 0;
  const details = [];

  s.questions.forEach((q, idx)=>{
    const userAns = s.answers[idx];
    let isCorrect = false;

    if(userAns === null){
      unansweredCount++;
    } else if(q.type==='multi'){
      const correctArr = Array.isArray(q.ans) ? q.ans.sort() : q.ans.split('').sort();
      isCorrect = JSON.stringify(userAns) === JSON.stringify(correctArr);
    } else if(q.type==='judge'){
      isCorrect = String(userAns) === String(q.ans);
    } else {
      isCorrect = userAns === q.ans;
    }

    if(userAns !== null){ isCorrect ? correct++ : wrong++; }
    details.push({q, userAns, isCorrect, idx});
  });

  const total = s.questions.length;
  const answered = total - unansweredCount;
  const score = Math.round((correct / total) * 100);
  const passLine = 60;
  const passed = score >= passLine;

  // 渲染结果
  const messages = document.getElementById('messages');
  const div = document.createElement('div');
  div.className = 'msg bot';

  let html = `<div class="msg-avatar">🤖</div><div class="msg-body"><div class="msg-name">铁路AI助手</div><div class="msg-bubble">`;
  html += `<div class="quiz-result">
    <div class="qr-header ${passed?'pass':'fail'}">
      ${passed?'🎉 恭喜通过！':'😔 需要加油！'}
    </div>
    <div class="qr-score">${score}<span>分</span></div>
    <div class="qr-stats">
      <span class="qrs-item correct">✅ 答对 ${correct} 题</span>
      <span class="qrs-item wrong">❌ 答错 ${wrong} 题</span>
      <span class="qrs-item unanswered">⬜ 未答 ${unansweredCount} 题</span>
      <span class="qrs-item time">⏱ 用时 ${Math.floor(timeUsed/60)}分${(timeUsed%60).toString().padStart(2,'0')}秒</span>
    </div>
    ${passed?
      `<div class="qr-comment">非常好！掌握程度扎实，继续保持！</div>`:
      `<div class="qr-comment">加油！建议重点复习错题，多做练习题巩固。</div>`}
  </div>`;

  // 逐题解析
  html += `<div class="quiz-analysis">`;
  html += `<div class="qa-title">📖 答题解析</div>`;
  details.forEach(({q, userAns, isCorrect, idx})=>{
    const statusClass = userAns===null?'unanswered':isCorrect?'correct':'wrong';
    const statusIcon = userAns===null?'⬜':isCorrect?'✅':'❌';
    const typeLabel = q.type==='single'?'单选':q.type==='multi'?'多选':'判断';

    let userAnsDisplay = '未作答';
    if(userAns !== null){
      if(q.type==='judge') userAnsDisplay = userAns==='true'?'正确':'错误';
      else if(q.type==='multi') userAnsDisplay = Array.isArray(userAns)?userAns.join(''): userAns;
      else userAnsDisplay = userAns;
    }

    let correctAnsDisplay = '';
    if(q.type==='judge') correctAnsDisplay = q.ans?'正确':'错误';
    else if(q.type==='multi') correctAnsDisplay = Array.isArray(q.ans)?q.ans.join(''):q.ans;
    else correctAnsDisplay = q.ans;

    html += `<div class="qa-item ${statusClass}">
      <div class="qa-q">${statusIcon} [${typeLabel}] 第${idx+1}题：${q.q}</div>
      <div class="qa-ans">你的答案：<strong>${userAnsDisplay}</strong>${!isCorrect&&userAns!==null?' &nbsp;|&nbsp; 正确答案：<strong class="ans-correct">'+correctAnsDisplay+'</strong>':''}</div>
      <div class="qa-exp">💡 ${q.exp}</div>
    </div>`;
  });
  html += `</div>`;

  // 再次挑战按钮
  html += `<div style="margin-top:12px">
    <span class="tag-inline" onclick="quickAsk('开始考试：${s.courseName}')" style="cursor:pointer">🔄 再次挑战</span>
    <span class="tag-inline" onclick="quickAsk('${s.courseName}错题知识点复习')" style="cursor:pointer">📚 复习错题</span>
  </div>`;
  html += `</div></div></div>`;

  div.innerHTML = html;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
};

})();
