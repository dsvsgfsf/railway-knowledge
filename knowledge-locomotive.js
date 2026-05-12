/* knowledge-locomotive.js v4.0
   中国铁路机车车辆详细图鉴数据库 v4.0
   黑龙江交通职业技术学院 铁路知识智能查询系统
   数据更新：2026年5月8日
   v2.0新增：图片展示功能
   v3.0新增：真实机车图片链接
   v4.0新增：百度百科真实图片（可显示）
*/
(function(){
'use strict';
if(!window.KNOWLEDGE_BASE) return;

/* ══════════════════════════════════════════════════════════
   机车车辆完整数据库 locomotiveData
   ══════════════════════════════════════════════════════════ */
window.KNOWLEDGE_BASE.locomotiveData = {

  /* ─────────────────────────────────────────────
     一、电力机车分类 Electric Locomotives
     ───────────────────────────────────────────── */
  electric: {
    title: "🚂 电力机车（Electric Locomotives）",
    subtitle: "从接触网25kV获取电能，绿色环保、功率大",
    description: "电力机车是中国铁路主力牵引机型，占比超过60%。采用交-直-交传动技术，效率高、可靠性好。",
    categories: {

      /* ── HXD系列 和谐型电力机车 ── */
      HXD: {
        name: "和谐型电力机车（HXD系列）",
        icon: "⚡",
        color: "#c0392b",
        intro: "HXD系列是中国铁路现役主力电力机车，采用交-直-交传动技术，功率覆盖4800kW-9600kW。由中车集团各子公司与国外企业合作生产。",
        types: {
          "HXD1": {
            name: "HXD1型（和谐电1）",
            nickname: "大漠红",
            manufacturer: "中车株洲电力机车有限公司",
            techPartner: "德国西门子",
            image: "HXD1型电力机车",
            specs: {
              轴式: "2×B0-B0（八轴重联）",
              单轴功率: "1200kW",
              总功率: "9600kW",
              最高速度: "120km/h",
              电流制: "AC25kV/50Hz",
              传动方式: "交-直-交"
            },
            features: [
              "采用西门子SIBAS 32微机控制系统",
              "TCN网络通讯技术，支持多机重联",
              "异步牵引电机，效率高、可靠性好",
              "具备再生制动功能，节约能源"
            ],
            usage: "大秦铁路牵引2万吨重载煤炭列车、朔黄铁路、京沪铁路货运",
            status: "现役"
          },
          "HXD1B": {
            name: "HXD1B型（和谐1B）",
            nickname: "",
            manufacturer: "中车株洲电力机车有限公司",
            techPartner: "德国西门子",
            image: "HXD1B型电力机车",
            specs: {
              轴式: "Co-Co（六轴）",
              单轴功率: "1600kW",
              总功率: "9600kW",
              最高速度: "120km/h",
              可牵引重量: "约6500吨"
            },
            features: [
              "中国首批使用1600kW单轴功率的六轴车型",
              "批量生产型，可靠性高"
            ],
            usage: "重载货运",
            status: "现役"
          },
          "HXD1C": {
            name: "HXD1C型（和谐1C）",
            nickname: "",
            manufacturer: "中车株州/大同电力机车有限公司",
            techPartner: "国产化",
            image: "HXD1C型电力机车",
            specs: {
              轴式: "Co-Co（六轴）",
              单轴功率: "1200kW",
              总功率: "7200kW",
              国产化率: "90%以上",
              可牵引重量: "5000-5500吨"
            },
            features: [
              "国产化程度最高的HXD车型之一",
              "使用IGBT模块（3300V/1200A）牵引变流器",
              "网络控制系统完全国产",
              "维护成本低，配件供应充足"
            ],
            usage: "全路各局均有配属，货运主力",
            status: "现役"
          },
          "HXD1D": {
            name: "HXD1D型（和谐1D）",
            nickname: "大红枣",
            manufacturer: "中车株洲电力机车有限公司",
            techPartner: "西门子技术",
            image: "HXD1D型电力机车 大红枣",
            specs: {
              轴式: "Co-Co（六轴）",
              单轴功率: "1200kW",
              总功率: "7200kW",
              最高速度: "160km/h",
              昵称: "大红枣（红色涂装）"
            },
            features: [
              "大功率IGBT水冷变流器",
              "异步牵引电机",
              "卧式主变压器（降低重心）",
              "DK-2型电空制动机",
              "全悬挂转向架（提高高速稳定性）"
            ],
            usage: "牵引Z/T/K字头普速旅客列车、京沪/京广既有线客运",
            status: "现役"
          },
          "HXD2": {
            name: "HXD2型（和谐电2）",
            nickname: "",
            manufacturer: "中车大同电力机车有限公司",
            techPartner: "法国阿尔斯通（PRIMA系列）",
            image: "HXD2型电力机车",
            specs: {
              轴式: "2×Bo-Bo（八轴重联）",
              单轴功率: "1200kW",
              总功率: "9600kW",
              轴重: "25吨（可转换为23吨）",
              最高速度: "120km/h"
            },
            features: [
              "中国铁路单轴功率最大的机车之一",
              "可单机牵引7000吨重载列车",
              "三机重联可满足20000吨以上重载牵引",
              "模块化设计，维护简便"
            ],
            usage: "大秦铁路运煤重载、朔黄铁路、国家能源集团专用线",
            status: "现役"
          },
          "HXD2B": {
            name: "HXD2B型（和谐2B）",
            nickname: "",
            manufacturer: "中车大同电力机车有限公司",
            techPartner: "法国阿尔斯通",
            image: "HXD2B型电力机车",
            specs: {
              轴式: "Co-Co（六轴）",
              单轴功率: "1600kW",
              总功率: "9600kW",
              最高速度: "120km/h",
              可牵引重量: "约6500吨"
            },
            features: ["提高机车再生制动功率", "将更多电能反馈回接触网", "节能环保"],
            usage: "重载货运",
            status: "现役"
          },
          "HXD2C": {
            name: "HXD2C型（和谐2C）",
            nickname: "",
            manufacturer: "中车大同电力机车有限公司",
            techPartner: "国产化",
            image: "HXD2C型电力机车",
            specs: {
              轴式: "Co-Co（六轴）",
              单轴功率: "1200kW",
              总功率: "7200kW",
              可牵引重量: "5000-6000吨"
            },
            features: [
              "模块化设计理念",
              "TCMS控制系统采用以太网/RS485/MVB总线",
              "司机室配备生活设施（微波炉、冰箱、热水壶、整体卫生间）",
              "适应长途运行需求"
            ],
            usage: "货运及长途运行",
            status: "现役"
          },
          "HXD2D": {
            name: "HXD2D型（和谐2D）",
            nickname: "",
            manufacturer: "中车大同电力机车有限公司",
            image: "HXD2D型电力机车",
            specs: {
              轴式: "Co-Co（六轴）",
              单轴功率: "1200kW",
              总功率: "7200kW",
              最高速度: "160km/h"
            },
            features: ["客运型机车"],
            usage: "牵引准高速旅客列车",
            status: "现役"
          },
          "HXD3": {
            name: "HXD3型（和谐电3）",
            nickname: "",
            manufacturer: "中车大连机车车辆有限公司",
            techPartner: "日本东芝",
            image: "HXD3型电力机车 和谐3",
            specs: {
              轴式: "Co-Co（六轴）",
              单轴功率: "1200kW",
              总功率: "7200kW",
              最高速度: "120km/h",
              电流制: "单相工频交流25kV/50Hz"
            },
            features: [
              "客货两用六轴电力机车",
              "采用交-直-交流电传动",
              "使用TT-78型转向架",
              "中国铁路保有量最大的车型之一"
            ],
            usage: "沈阳局、哈尔滨局、北京局等全路广泛运用",
            status: "现役"
          },
          "HXD3B": {
            name: "HXD3B型（和谐3B）",
            nickname: "",
            manufacturer: "中车大连机车车辆有限公司",
            techPartner: "加拿大庞巴迪",
            image: "HXD3B型电力机车",
            specs: {
              轴式: "Co-Co（六轴）",
              单轴功率: "1600kW",
              总功率: "9600kW",
              最高速度: "120km/h",
              可牵引重量: "5000-6000吨"
            },
            features: ["提高机车再生制动功率", "将更多电能反馈回接触网", "节能环保"],
            usage: "重载货运",
            status: "现役"
          },
          "HXD3C": {
            name: "HXD3C型（和谐3C）",
            nickname: "",
            manufacturer: "中车大连机车车辆有限公司",
            image: "HXD3C型电力机车",
            specs: {
              轴式: "Co-Co（六轴）",
              总功率: "7200kW",
              最高速度: "160km/h"
            },
            features: [
              "和谐型系列首款客货运两用车型",
              "配备DC600V列车供电插座",
              "可为旅客列车提供电源",
              "中国保有量最大的客运型机车之一"
            ],
            usage: "牵引普通旅客列车、部分快速列车、DC600V列车供电",
            status: "现役"
          },
          "HXD3D": {
            name: "HXD3D型（和谐3D）",
            nickname: "客运旗舰",
            manufacturer: "中车大连机车车辆有限公司",
            image: "HXD3D型电力机车",
            specs: {
              轴式: "Co-Co（六轴）",
              总功率: "7200kW",
              最高速度: "160-200km/h"
            },
            features: [
              "200km等级客运型机车",
              "国内最大功率客运型机车之一",
              "再生制动效率高",
              "司机室舒适性好"
            ],
            usage: "牵引Z字头直达旅客列车、部分T字头特快、京沪/京广等主要干线客运",
            status: "现役"
          },
          "HXD3CA": {
            name: "HXD3CA型（和谐3CA）",
            nickname: "",
            manufacturer: "中车大连机车车辆有限公司",
            image: "HXD3CA型电力机车",
            specs: {
              轴式: "Co-Co（六轴）",
              总功率: "7680kW",
              最高速度: "100km/h"
            },
            features: ["调车/小运转专用型"],
            usage: "调车作业、小运转",
            status: "现役"
          }
        }
      },

      /* ── SS系列 韶山型电力机车 ── */
      SS: {
        name: "韶山系列电力机车（SS系列）",
        icon: "🏭",
        color: "#8e44ad",
        intro: "韶山型电力机车是中国第一代国产电力机车的代表，从1958年试制的6Y1型演变而来，为中国铁路电力牵引发展奠定了基础。",
        types: {
          "SS3": {
            name: "SS3型（韶山3）",
            image: "韶山3型电力机车",
            specs: {
              轴式: "Co-Co（六轴）",
              功率: "4800kW",
              最高速度: "100km/h"
            },
            features: ["级间相控调压", "第二代国产电力机车代表"],
            usage: "部分线路仍有运用",
            status: "逐渐退役"
          },
          "SS7": {
            name: "SS7型（韶山7）",
            image: "韶山7型电力机车",
            specs: {
              轴式: "Bo-Bo-Bo（三节六轴）",
              功率: "4800kW",
              最高速度: "120km/h"
            },
            features: ["三轴转向架设计", "适合山区线路"],
            usage: "山区铁路",
            status: "逐渐退役"
          },
          "SS8": {
            name: "SS8型（韶山8）",
            image: "韶山8型电力机车",
            specs: {
              轴式: "Bo-Bo（四轴）",
              功率: "3600kW",
              最高速度: "240km/h"
            },
            features: ["准高速客运型", "创下1998年240km/h'中国铁路第一速'"],
            usage: "曾用于准高速客运",
            status: "已停产退役"
          },
          "SS9": {
            name: "SS9型（韶山9）",
            image: "韶山9型电力机车",
            specs: {
              轴式: "Co-Co（六轴）",
              功率: "4800kW",
              最高速度: "170km/h"
            },
            features: ["干线客运功率最大韶山机车"],
            usage: "部分干线客运",
            status: "逐渐退役"
          }
        }
      }
    }
  },

  /* ─────────────────────────────────────────────
     二、内燃机车分类 Diesel Locomotives
     ───────────────────────────────────────────── */
  diesel: {
    title: "🚃 内燃机车（Diesel Locomotives）",
    subtitle: "以柴油机为动力，电气传动，适合非电气化区段",
    description: "内燃机车是中国铁路非电气化区段的主力牵引机型，采用电传动或液力传动方式。在高寒、高原地区发挥重要作用。",
    categories: {

      /* ── HXN系列 和谐型内燃机车 ── */
      HXN: {
        name: "和谐型内燃机车（HXN系列）",
        icon: "🛢️",
        color: "#27ae60",
        intro: "HXN系列是中国铁路新一代内燃机车，采用先进的大功率柴油机和电传动技术，在高寒高原地区广泛应用。",
        types: {
          "HXN3": {
            name: "HXN3型（和谐3型内燃）",
            nickname: "高寒高原专家",
            manufacturer: "中车大连机车车辆有限公司",
            techPartner: "美国EMD公司",
            image: "HXN3型内燃机车",
            specs: {
              轴式: "Co-Co（六轴）",
              装车功率: "约3500kW（约4800马力）",
              最高速度: "120km/h",
              EMD型号: "JT56Ace",
              首台出厂: "2008年7月"
            },
            features: [
              "牵引力大",
              "排放低（满足环保要求）",
              "可靠性好",
              "安全性高",
              "操作便利",
              "成本低"
            ],
            features高原: [
              "适应海拔5000m以上",
              "配备制氧设备",
              "特殊保温设计"
            ],
            usage: "高寒地区非电气化铁路、青藏铁路格拉段、东北林区铁路",
            status: "现役"
          },
          "HXN5": {
            name: "HXN5型（和谐5型内燃）",
            nickname: "重载货运主力",
            manufacturer: "中车大连机车车辆有限公司",
            image: "HXN5型内燃机车",
            specs: {
              轴式: "Co-Co（六轴）",
              装车功率: "约4470kW（约6000马力）",
              最高速度: "120km/h"
            },
            features: ["大功率内燃机车", "重载货运专用"],
            usage: "神朔铁路、朔黄铁路、其他重载货运线路",
            status: "现役"
          },
          "HXN5B": {
            name: "HXN5B型（和谐5B型内燃）",
            nickname: "调车专用",
            manufacturer: "中车戚墅堰/大连机车车辆有限公司",
            image: "HXN5B型内燃机车",
            specs: {
              轴式: "Co-Co（六轴）",
              装车功率: "约3000kW",
              最高速度: "100km/h"
            },
            features: ["调车专用设计", "适应频繁启停"],
            usage: "编组站调车作业、小运转作业、场段调车",
            status: "现役"
          }
        }
      },

      /* ── DF系列 东风型内燃机车 ── */
      DF: {
        name: "东风系列内燃机车（DF系列）",
        icon: "💨",
        color: "#f39c12",
        intro: "东风系列是中国铁路内燃机车的核心系列，采用交-直流电传动，曾是铁路牵引的主力机型。",
        types: {
          "DF4B": {
            name: "DF4B型（东风4B）",
            image: "东风4B型内燃机车",
            specs: {
              轴式: "Co-Co（六轴）",
              功率: "2430kW（约3300马力）",
              最高速度: "100km/h"
            },
            features: ["货运主力", "经典车型"],
            usage: "货运",
            status: "已停产，部分仍在运用（淘汰中）"
          },
          "DF7": {
            name: "DF7型（东风7）",
            image: "东风7型内燃机车",
            specs: {
              轴式: "Co-Co（六轴）",
              功率: "约2000kW",
              最高速度: "100km/h"
            },
            features: ["调车型", "小运转作业"],
            usage: "调车、小运转",
            status: "已停产，部分淘汰"
          },
          "DF8B": {
            name: "DF8B型（东风8B）",
            image: "东风8B型内燃机车",
            specs: {
              轴式: "Co-Co（六轴）",
              功率: "3300kW（约4500马力）",
              最高速度: "100km/h"
            },
            features: ["重载货运型"],
            usage: "重载货运",
            status: "现役"
          },
          "DF11": {
            name: "DF11型（东风11）",
            image: "东风11型内燃机车",
            specs: {
              轴式: "Co-Co（六轴）",
              功率: "约3000kW",
              最高速度: "170km/h"
            },
            features: ["准高速客运型", "曾用于快速列车牵引"],
            usage: "准高速客运",
            status: "已停产"
          },
          "DF12": {
            name: "DF12型（东风12）",
            image: "东风12型内燃机车",
            specs: {
              轴式: "Co-Co（六轴）",
              功率: "约2000kW",
              最高速度: "100km/h"
            },
            features: ["调车及小运转"],
            usage: "调车及小运转",
            status: "现役"
          }
        }
      }
    },

    /* 老旧型淘汰政策 */
    retirementPolicy: {
      title: "📋 老旧内燃机车淘汰政策",
      policy: "根据国家铁路局2024年发布的《老旧型铁路内燃机车淘汰更新监督管理暂行办法》",
      timeline: "2027年底前重点区域完成淘汰",
      affectedTypes: [
        "DF4、DF4B、DF4C、DF4D 系列",
        "DF5、DF7 全系列",
        "DF11 型",
        "JZ-7型制动机车型"
      ]
    }
  },

  /* ─────────────────────────────────────────────
     三、动车组分类 EMU/DMU
     ───────────────────────────────────────────── */
  emu: {
    title: "🚄 动车组（Electric Multiple Unit / Diesel Multiple Unit）",
    subtitle: "动力分散或集中，高速舒适，全球领先",
    description: "中国动车组技术从引进消化吸收到自主研发，实现了从追赶到引领的跨越。复兴号系列已全面实现国产化和标准化。",

    /* ── 复兴号 CR系列 ── */
    CRseries: {
      name: "复兴号动车组（CR系列）",
      icon: "🚀",
      color: "#e74c3c",
      intro: "复兴号是中国标准动车组系列，具有完全自主知识产权，已形成覆盖160-400km/h速度等级的完整系列。",
      types: {

        CR450: {
          name: "CR450型动车组",
          subtitle: "400km/h 世界最快高铁",
          image: "CR450动车组 400公里高铁",
          specs: {
            试验速度: "450km/h",
            运营速度: "400km/h",
            样车发布: "2024年12月29日",
            定位: "全球最快高铁列车"
          },
          breakthroughs: [
            "永磁牵引电机：转换效率较CR400提升3%以上",
            "减阻降耗：全方位空气动力学优化",
            "全要素轻量化：轻量化系统集成",
            "时间敏感列车网络通信：通信技术升级",
            "多级控制制动：制动系统技术升级"
          ],
          records: [
            "隧道内单列时速403公里",
            "明线上单列时速435公里",
            "相对交会时速870公里"
          ],
          status: "即将投入运营"
        },

        CR400: {
          name: "CR400系列（350km/h高速主力）",
          subtitle: "中国标准动车组旗舰",
          image: "CR400AF CR400BF 复兴号",
          specs: {
            运营速度: "350km/h",
            编组: "4M4T（4动车4拖车）",
            长度: "209m",
            座位数: "556座"
          },
          subtypes: {
            "CR400AF": {
              name: "CR400AF（四方）",
              manufacturer: "中车四方机车车辆股份有限公司",
              color: "红色",
              specs: {
                长度: "209m",
                宽度: "3360mm",
                高度: "3890mm",
                座位数: "556座"
              }
            },
            "CR400AF-A": {
              name: "CR400AF-A（长编组）",
              specs: {
                编组: "8M8T",
                长度: "418m",
                座位数: "1193座"
              }
            },
            "CR400BF": {
              name: "CR400BF（长客/唐山）",
              manufacturer: "中车长春轨道客车/中车唐山机车车辆",
              color: "金色"
            },
            "CR400BF-A": {
              name: "CR400BF-A（长编组）",
              specs: {
                编组: "8M8T",
                座位数: "1193座"
              }
            }
          },
          variants: {
            "CR400AF-G/CR400BF-G": "高寒型，适用于哈大高铁、京张高铁"
          },
          status: "现役主力"
        },

        CR300: {
          name: "CR300系列（250km/h）",
          subtitle: "经济型高速动车组",
          image: "CR300AF CR300BF",
          specs: {
            速度等级: "250km/h"
          },
          subtypes: {
            "CR300AF": {
              name: "CR300AF（四方）",
              color: "蓝色"
            },
            "CR300BF": {
              name: "CR300BF（长客）",
              color: "金色"
            }
          },
          status: "现役"
        },

        CR200J: {
          name: "CR200J系列（160km/h动力集中）",
          subtitle: "替代普速Z/T/K字头列车",
          image: "CR200J动车组 绿巨人 动力集中",
          specs: {
            速度等级: "160km/h",
            动力车: "FXD1/FXD3型动力车",
            拖车: "复兴号标准拖车"
          },
          versions: {
            "1.0版": "早期版本",
            "2.0版": "改进型",
            "3.0版": "全新外观设计"
          },
          advantages: [
            "乘坐舒适性好",
            "维护成本低",
            "标准化程度高"
          ],
          status: "现役"
        }
      }
    },

    /* ── 和谐号 CRH系列 ── */
    CRHseries: {
      name: "和谐号动车组（CRH系列）",
      icon: "🚅",
      color: "#3498db",
      intro: "CRH系列是中国早期引进消化吸收国外技术的高速动车组，为中国高铁发展奠定了基础。",
      types: {

        CRH1: {
          name: "CRH1系列（庞巴迪技术）",
          image: "CRH1A动车组 CRH1E",
          manufacturer: "中车四方-庞巴迪",
          specs: {
            技术来源: "加拿大庞巴迪"
          },
          subtypes: {
            "CRH1A": "城际铁路主力，250km/h",
            "CRH1A-A": "长编组，16辆",
            "CRH1E": "卧铺动车组"
          },
          status: "现役"
        },

        CRH2: {
          name: "CRH2系列（四方-川崎技术）",
          image: "CRH2A动车组 CRH2C",
          manufacturer: "中车四方-川崎",
          specs: {
            技术来源: "日本川崎重工业"
          },
          subtypes: {
            "CRH2A": "基础型，250km/h",
            "CRH2C": "高速型，350km/h",
            "CRH2G": "高寒型（哈大、京沈）"
          },
          status: "现役"
        },

        CRH3: {
          name: "CRH3系列（唐山-西门子技术）",
          image: "CRH3C动车组 CRH3A",
          manufacturer: "中车唐山-西门子",
          specs: {
            技术来源: "德国西门子"
          },
          subtypes: {
            "CRH3C": "京沪高铁350km/h运营",
            "CRH3A": "城际铁路，250km/h"
          },
          status: "现役"
        },

        CRH5: {
          name: "CRH5系列（长客-阿尔斯通技术）",
          image: "CRH5A动车组 CRH5G",
          manufacturer: "中车长客-阿尔斯通",
          specs: {
            技术来源: "法国阿尔斯通"
          },
          subtypes: {
            "CRH5A": "北方高铁主力，250km/h",
            "CRH5G": "高寒型"
          },
          status: "现役"
        },

        CRH6: {
          name: "CRH6系列（城际动车组）",
          image: "CRH6A动车组 城际动车组",
          specs: {
            定位: "城际铁路专用"
          },
          subtypes: {
            "CRH6A": "200km/h，城际主力",
            "CRH6F": "160km/h，市域铁路"
          },
          status: "现役"
        },

        CRH380: {
          name: "CRH380系列（350km/h高速）",
          image: "CRH380A动车组 CRH380B",
          specs: {
            速度等级: "350km/h"
          },
          subtypes: {
            "CRH380A/L": "四方，沪宁、沪杭、京沪",
            "CRH380B/BL": "长客，京沈、京哈",
            "CRH380BG": "长客，高寒型",
            "CRH380CL": "长客，长编组"
          },
          records: [
            "2011年1月9日",
            "CRH380BL在京沪高铁",
            "徐州至蚌埠区间",
            "创下487.3km/h最高试验速度",
            "截至2025年仍是中国铁路速度记录保持者"
          ],
          status: "逐渐退役"
        }
      }
    }
  },

  /* ─────────────────────────────────────────────
     四、特种作业车辆
     ───────────────────────────────────────────── */
  special: {
    title: "🔧 特种作业车辆",
    subtitle: "工程、维修、救援等专业用途车辆",
    categories: {

      engineering: {
        name: "工程作业车",
        icon: "🏗️",
        types: {
          "GCY-300": {
            name: "GCY-300型工程车",
            usage: "线路维修",
            image: "GCY系列工程车 铁路检修车"
          },
          "GCY-450": {
            name: "GCY-450型工程车",
            usage: "大修作业",
            image: "GCY-450工程车"
          },
          "救援列车": {
            name: "铁路救援列车",
            usage: "事故救援",
            image: "铁路救援列车"
          }
        }
      },

      catenary: {
        name: "接触网检修装备",
        icon: "⚡",
        types: {
          "JJC型": {
            name: "JJC型接触网检修列车",
            usage: "接触网日常检修和高空作业",
            image: "JJC接触网检修列车"
          },
          "DPT型": {
            name: "DPT型接触网作业车",
            usage: "接触网检修",
            image: "DPT接触网作业车"
          },
          "检测车": {
            name: "接触网检测车",
            usage: "接触网状态检测",
            image: "接触网检测车"
          }
        }
      },

      inspection: {
        name: "检测车辆",
        icon: "🔍",
        types: {
          "综合检测车": {
            name: "高速铁路综合检测车",
            usage: "线路几何状态、信号设备检测",
            image: "高铁综合检测车"
          },
          "轨检车": {
            name: "轨道检查车",
            usage: "轨道几何尺寸检测",
            image: "轨道检查车"
          }
        }
      }
    }
  },

  /* ─────────────────────────────────────────────
     五、识别指南与涂装
     ───────────────────────────────────────────── */
  identification: {
    title: "🎨 机车涂装与识别指南",
    colorGuide: {
      "深红色": ["HXD1系列", "HXD3D"],
      "红色": ["HXD2系列", "HXD3系列"],
      "绿色": ["HXN3（高原涂装）"],
      "蓝色": ["CR300AF"],
      "金色": ["CR400BF", "CR300BF"],
      "红色+金色": ["CR400AF"],
      "绿色": ["CRH380系列部分"]
    },
    recognition: [
      {
        方法: "听声音",
        电力机车: "启动声平滑",
        内燃机车: "柴油机轰鸣"
      },
      {
        方法: "看受电弓",
        电力机车: "有受电弓",
        内燃机车: "无"
      },
      {
        方法: "闻气味",
        电力机车: "无",
        内燃机车: "有柴油味"
      },
      {
        方法: "看轴式",
        六轴: "Co-Co货运主力",
        四轴: "B0-B0多为调车"
      }
    ]
  },

  /* ─────────────────────────────────────────────
     六、图片资源推荐
     ───────────────────────────────────────────── */
  imageResources: {
    title: "📷 图片资源推荐",
    websites: [
      {
        name: "中国铁路摄影网",
        url: "jprailfan.com/cnloco/",
        description: "机车图鉴频道，高清机车照片"
      },
      {
        name: "百度图片",
        url: "image.baidu.com",
        description: "搜索各车型关键词"
      }
    ],
    searchKeywords: {
      "电力机车": ["HXD1D电力机车", "HXD3D电力机车", "和谐型电力机车"],
      "内燃机车": ["HXN3内燃机车", "东风4B型内燃机车"],
      "动车组": ["CR400AF", "CR400BF", "复兴号动车组"],
      "历史车型": ["韶山型电力机车", "东风型内燃机车"]
    }
  },

  /* ─────────────────────────────────────────────
     七、技术术语解释
     ───────────────────────────────────────────── */
  terminology: {
    title: "📖 技术术语解释",
    terms: [
      {
        term: "轴式",
        definition: "表示机车转向架数量和每台转向架轴数的标记，如Co-Co表示两台三轴转向架"
      },
      {
        term: "功率",
        definition: "机车持续输出的最大功率，单位kW或马力"
      },
      {
        term: "轴重",
        definition: "每根轴对轨道的压力，单位吨，影响黏着牵引力"
      },
      {
        term: "交-直-交传动",
        definition: "交流电网→直流中间回路→变频交流电机的传动方式"
      },
      {
        term: "再生制动",
        definition: "将制动能量转化为电能反馈回接触网或电网"
      },
      {
        term: "动力集中",
        definition: "动力车集中在一端或两端的动车组形式"
      },
      {
        term: "动力分散",
        definition: "动力分散布置在多个车厢的动车组形式"
      },
      {
        term: "Bo-Bo",
        definition: "两台二轴转向架，用于四轴机车"
      },
      {
        term: "Co-Co",
        definition: "两台三轴转向架，用于六轴机车"
      },
      {
        term: "M/T",
        definition: "M=动车（有动力），T=拖车（无动力）"
      }
    ]
  }
};

/* ══════════════════════════════════════════════════════════
   二、快捷搜索函数 showLocomotiveGallery()
   直接显示机车分类选择，不通过AI处理
   ══════════════════════════════════════════════════════════ */
window.showLocomotiveGallery = function(){
  if(!state.selectedMajor){
    showToast('请先选择入学年份和专业','error');
    return;
  }
  
  const loc = KNOWLEDGE_BASE.locomotiveData;
  let html = `
    <div style="margin-bottom:20px">
      <div style="font-size:16px;font-weight:700;color:var(--primary);margin-bottom:12px">🚂 ${loc.electric.title}</div>
      <div style="font-size:13px;color:var(--text-sub);margin-bottom:12px">${loc.electric.description}</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        <span class="tag-inline" onclick="showLocomotiveType('electric','HXD')" style="cursor:pointer;background:#fdeaea;border-color:#f5c6cb">⚡ HXD系列</span>
        <span class="tag-inline" onclick="showLocomotiveType('electric','SS')" style="cursor:pointer;background:#f3e8ff;border-color:#d0bfff">🏭 SS系列</span>
      </div>
    </div>

    <div style="margin-bottom:20px">
      <div style="font-size:16px;font-weight:700;color:var(--primary);margin-bottom:12px">🚃 ${loc.diesel.title}</div>
      <div style="font-size:13px;color:var(--text-sub);margin-bottom:12px">${loc.diesel.description}</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        <span class="tag-inline" onclick="showLocomotiveType('diesel','HXN')" style="cursor:pointer;background:#e8f5e9;border-color:#a5d6a7">🛢️ HXN系列</span>
        <span class="tag-inline" onclick="showLocomotiveType('diesel','DF')" style="cursor:pointer;background:#fff8e1;border-color:#ffe082">💨 DF系列</span>
      </div>
      <div style="margin-top:10px;padding:10px;background:#fff3cd;border-radius:8px;border:1px solid #ffc107;font-size:12px">
        <strong>⚠️ 淘汰政策：</strong>${loc.diesel.retirementPolicy.policy}，${loc.diesel.retirementPolicy.timeline}
      </div>
    </div>

    <div style="margin-bottom:20px">
      <div style="font-size:16px;font-weight:700;color:var(--primary);margin-bottom:12px">🚄 ${loc.emu.title}</div>
      <div style="font-size:13px;color:var(--text-sub);margin-bottom:12px">${loc.emu.description}</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        <span class="tag-inline" onclick="showLocomotiveType('emu','CRseries')" style="cursor:pointer;background:#ffebee;border-color:#ef9a9a">🚀 复兴号CR</span>
        <span class="tag-inline" onclick="showLocomotiveType('emu','CRHseries')" style="cursor:pointer;background:#e3f2fd;border-color:#90caf9">🚅 和谐号CRH</span>
      </div>
    </div>

    <div style="margin-bottom:20px">
      <div style="font-size:16px;font-weight:700;color:var(--primary);margin-bottom:12px">🔧 ${loc.special.title}</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        <span class="tag-inline" onclick="showLocomotiveType('special','engineering')" style="cursor:pointer">🏗️ 工程作业车</span>
        <span class="tag-inline" onclick="showLocomotiveType('special','catenary')" style="cursor:pointer">⚡ 接触网检修</span>
        <span class="tag-inline" onclick="showLocomotiveType('special','inspection')" style="cursor:pointer">🔍 检测车辆</span>
      </div>
    </div>

    <div style="margin-top:16px;padding:12px;background:#f8f9fc;border-radius:8px;font-size:12px;color:var(--text-sub)">
      <strong>💡 提示：</strong>点击上方标签查看详细车型参数！图片搜索请访问 <a href="https://image.baidu.com" target="_blank" style="color:var(--primary)">百度图片</a>，输入对应车型名称。
    </div>
  `;
  
  // 直接添加到消息区域
  if(typeof addBotMessage === 'function'){
    addBotMessage(html);
  }
};

/* ══════════════════════════════════════════════════════════
   三、显示特定类型机车详情（直接显示，不返回）
   ══════════════════════════════════════════════════════════ */
window.showLocomotiveType = function(category, subType){
  const loc = KNOWLEDGE_BASE.locomotiveData;
  let content = "";

  if(category === 'electric'){
    if(subType === 'HXD'){
      const hxd = loc.electric.categories.HXD;
      content = `
        <div style="margin-bottom:16px">
          <div style="font-size:16px;font-weight:700;color:var(--accent)">⚡ ${hxd.name}</div>
          <div style="font-size:12px;color:var(--text-sub);margin-top:4px">${hxd.intro}</div>
        </div>
      `;
      
      // 添加HXD系列图片展示
      const hxdImages = [
        { key: 'HXD1', desc: 'HXD1 和谐1型' },
        { key: 'HXD1D', desc: 'HXD1D 大红枣' },
        { key: 'HXD3', desc: 'HXD3 和谐3型' },
        { key: 'HXD3D', desc: 'HXD3D 电力机车' },
        { key: 'HXD2', desc: 'HXD2 和谐2型' }
      ];
      
      content += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin-bottom:16px;">`;
      for(const imgInfo of hxdImages){
        const imgData = KNOWLEDGE_BASE.locomotiveImages.realImages[imgInfo.key];
        if(imgData && imgData.thumbnail){
          content += `
            <div style="background:#fff;border:1px solid #f5c6cb;border-radius:10px;overflow:hidden;">
              <div style="height:140px;background:linear-gradient(135deg,#922b21,#c0392b);position:relative;overflow:hidden;">
                <img src="${imgData.thumbnail}" alt="${imgInfo.desc}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">
                <div style="position:absolute;top:6px;right:6px;background:rgba(0,0,0,0.6);color:#fff;padding:2px 8px;border-radius:4px;font-size:10px;">📷 百度百科</div>
              </div>
              <div style="padding:10px;font-size:12px;color:#c0392b;font-weight:600;">${imgInfo.desc}</div>
            </div>
          `;
        }
      }
      content += `</div>`;
      
      for(const [key, type] of Object.entries(hxd.types)){
        content += `
          <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <strong style="font-size:14px;color:var(--primary)">${type.name}</strong>
              <span class="tag-inline">${type.status}</span>
            </div>
            ${type.nickname ? `<div style="font-size:12px;color:#e67e22;margin-bottom:6px">别名：${type.nickname}</div>` : ''}
            <div style="font-size:12px;color:var(--text-sub);margin-bottom:8px">
              <strong>制造：</strong>${type.manufacturer} ${type.techPartner ? `(${type.techPartner}技术)` : ''}
            </div>
            ${type.specs ? `<div style="margin:8px 0">
              <table style="width:100%;border-collapse:collapse;font-size:12px">
                ${Object.entries(type.specs).map(([k,v])=>`<tr style="border-bottom:1px solid #eee"><td style="padding:4px 8px;color:var(--accent);font-weight:600;white-space:nowrap">${k}</td><td style="padding:4px 8px;color:var(--text-main)">${v}</td></tr>`).join('')}
              </table>
            </div>` : ''}
            ${type.features && type.features.length ? `<div style="margin-top:8px"><strong style="font-size:12px">特点：</strong><ul style="margin:4px 0 0 16px;padding-left:0">${type.features.map(f=>`<li style="font-size:12px;margin:2px 0">${f}</li>`).join('')}</ul></div>` : ''}
            ${type.usage ? `<div style="margin-top:8px;font-size:12px;color:var(--text-sub)"><strong>运用：</strong>${type.usage}</div>` : ''}
          </div>
        `;
      }
    } else if(subType === 'SS'){
      // SS系列
      const ss = loc.electric.categories.SS;
      content = `
        <div style="margin-bottom:16px">
          <div style="font-size:16px;font-weight:700;color:var(--primary)">💡 ${ss.name}</div>
          <div style="font-size:12px;color:var(--text-sub);margin-top:4px">${ss.intro}</div>
        </div>
      `;
      
      // SS系列图片展示
      const ssImages = [
        { key: 'SS7E', desc: 'SS7E 韶山7E型' },
        { key: 'SS9', desc: 'SS9 韶山9型' }
      ];
      
      content += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin-bottom:16px;">`;
      for(const imgInfo of ssImages){
        const imgData = KNOWLEDGE_BASE.locomotiveImages.realImages[imgInfo.key];
        if(imgData && imgData.thumbnail){
          content += `
            <div style="background:#fff;border:1px solid #d0bfff;border-radius:10px;overflow:hidden;">
              <div style="height:140px;background:linear-gradient(135deg,#6c3483,#8e44ad);position:relative;overflow:hidden;">
                <img src="${imgData.thumbnail}" alt="${imgInfo.desc}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">
                <div style="position:absolute;top:6px;right:6px;background:rgba(0,0,0,0.6);color:#fff;padding:2px 8px;border-radius:4px;font-size:10px;">📷 百度百科</div>
              </div>
              <div style="padding:10px;font-size:12px;color:#8e44ad;font-weight:600;">${imgInfo.desc}</div>
            </div>
          `;
        }
      }
      content += `</div>`;
      
      for(const [key, type] of Object.entries(ss.types)){
        content += `
          <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <strong style="font-size:14px;color:var(--primary)">${type.name}</strong>
              <span class="tag-inline" style="background:#fff3e0;color:#e65100">已淘汰</span>
            </div>
            ${type.specs ? `<div style="margin:8px 0">
              <table style="width:100%;border-collapse:collapse;font-size:12px">
                ${Object.entries(type.specs).map(([k,v])=>`<tr style="border-bottom:1px solid #eee"><td style="padding:4px 8px;color:#8e44ad;font-weight:600;white-space:nowrap">${k}</td><td style="padding:4px 8px;color:var(--text-main)">${v}</td></tr>`).join('')}
              </table>
            </div>` : ''}
            ${type.usage ? `<div style="margin-top:8px;font-size:12px;color:var(--text-sub)"><strong>运用：</strong>${type.usage}</div>` : ''}
          </div>
        `;
      }
    }
  } else if(category === 'diesel'){
    if(subType === 'HXN'){
      const hxn = loc.diesel.categories.HXN;
      content = `
        <div style="margin-bottom:16px">
          <div style="font-size:16px;font-weight:700;color:#27ae60">🛢️ ${hxn.name}</div>
          <div style="font-size:12px;color:var(--text-sub);margin-top:4px">${hxn.intro}</div>
        </div>
      `;
      
      // HXN系列图片展示
      const hxnImages = [
        { key: 'HXN5', desc: 'HXN5 和谐内燃5型' },
        { key: 'HXN3', desc: 'HXN3 和谐内燃3型' }
      ];
      
      content += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin-bottom:16px;">`;
      for(const imgInfo of hxnImages){
        const imgData = KNOWLEDGE_BASE.locomotiveImages.realImages[imgInfo.key];
        if(imgData && imgData.thumbnail){
          content += `
            <div style="background:#fff;border:1px solid #a5d6a7;border-radius:10px;overflow:hidden;">
              <div style="height:140px;background:linear-gradient(135deg,#1e8449,#27ae60);position:relative;overflow:hidden;">
                <img src="${imgData.thumbnail}" alt="${imgInfo.desc}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">
                <div style="position:absolute;top:6px;right:6px;background:rgba(0,0,0,0.6);color:#fff;padding:2px 8px;border-radius:4px;font-size:10px;">📷 百度百科</div>
              </div>
              <div style="padding:10px;font-size:12px;color:#27ae60;font-weight:600;">${imgInfo.desc}</div>
            </div>
          `;
        }
      }
      content += `</div>`;
      
      for(const [key, type] of Object.entries(hxn.types)){
        content += `
          <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <strong style="font-size:14px;color:var(--primary)">${type.name}</strong>
              <span class="tag-inline" style="background:#e8f5e9;color:#27ae60">${type.status}</span>
            </div>
            ${type.specs ? `<div style="margin:8px 0">
              <table style="width:100%;border-collapse:collapse;font-size:12px">
                ${Object.entries(type.specs).map(([k,v])=>`<tr style="border-bottom:1px solid #eee"><td style="padding:4px 8px;color:#27ae60;font-weight:600;white-space:nowrap">${k}</td><td style="padding:4px 8px;color:var(--text-main)">${v}</td></tr>`).join('')}
              </table>
            </div>` : ''}
            ${type.usage ? `<div style="margin-top:8px;font-size:12px;color:var(--text-sub)"><strong>运用：</strong>${type.usage}</div>` : ''}
          </div>
        `;
      }
    } else if(subType === 'DF'){
      const df = loc.diesel.categories.DF;
      content = `
        <div style="margin-bottom:16px">
          <div style="font-size:16px;font-weight:700;color:#e67e22">💨 ${df.name}</div>
          <div style="font-size:12px;color:var(--text-sub);margin-top:4px">${df.intro}</div>
        </div>
        <div style="padding:10px;background:#fff3cd;border-radius:8px;font-size:12px;margin-bottom:16px">
          <strong>⚠️ 淘汰政策：</strong>${loc.diesel.retirementPolicy.policy}，${loc.diesel.retirementPolicy.timeline}
        </div>
      `;
      
      // DF系列图片展示
      const dfImages = [
        { key: 'DF4B', desc: 'DF4B 东风4B型' }
      ];
      
      content += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin-bottom:16px;">`;
      for(const imgInfo of dfImages){
        const imgData = KNOWLEDGE_BASE.locomotiveImages.realImages[imgInfo.key];
        if(imgData && imgData.thumbnail){
          content += `
            <div style="background:#fff;border:1px solid #ffe082;border-radius:10px;overflow:hidden;">
              <div style="height:140px;background:linear-gradient(135deg,#d68910,#e67e22);position:relative;overflow:hidden;">
                <img src="${imgData.thumbnail}" alt="${imgInfo.desc}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">
                <div style="position:absolute;top:6px;right:6px;background:rgba(0,0,0,0.6);color:#fff;padding:2px 8px;border-radius:4px;font-size:10px;">📷 百度百科</div>
              </div>
              <div style="padding:10px;font-size:12px;color:#e67e22;font-weight:600;">${imgInfo.desc}</div>
            </div>
          `;
        }
      }
      content += `</div>`;
      
      for(const [key, type] of Object.entries(df.types)){
        content += `
          <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <strong style="font-size:14px;color:var(--primary)">${type.name}</strong>
              <span class="tag-inline" style="background:#ffe0b2;color:#e65100">逐步淘汰</span>
            </div>
            ${type.specs ? `<div style="margin:8px 0">
              <table style="width:100%;border-collapse:collapse;font-size:12px">
                ${Object.entries(type.specs).map(([k,v])=>`<tr style="border-bottom:1px solid #eee"><td style="padding:4px 8px;color:#e67e22;font-weight:600;white-space:nowrap">${k}</td><td style="padding:4px 8px;color:var(--text-main)">${v}</td></tr>`).join('')}
              </table>
            </div>` : ''}
            ${type.usage ? `<div style="margin-top:8px;font-size:12px;color:var(--text-sub)"><strong>运用：</strong>${type.usage}</div>` : ''}
          </div>
        `;
      }
    }
  } else if(category === 'emu'){
    if(subType === 'CRseries'){
      const cr = loc.emu.categories.CRseries;
      content = `
        <div style="margin-bottom:16px">
          <div style="font-size:16px;font-weight:700;color:#e74c3c">🚀 ${cr.name}</div>
          <div style="font-size:12px;color:var(--text-sub);margin-top:4px">${cr.intro}</div>
        </div>
      `;
      
      // 复兴号系列图片展示
      const crImages = [
        { key: 'CR400AF', desc: 'CR400AF 复兴号' },
        { key: 'CR400BF', desc: 'CR400BF 复兴号' },
        { key: 'CR300AF', desc: 'CR300AF 复兴号' }
      ];
      
      content += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin-bottom:16px;">`;
      for(const imgInfo of crImages){
        const imgData = KNOWLEDGE_BASE.locomotiveImages.realImages[imgInfo.key];
        if(imgData && imgData.thumbnail){
          content += `
            <div style="background:#fff;border:1px solid #ef9a9a;border-radius:10px;overflow:hidden;">
              <div style="height:140px;background:linear-gradient(135deg,#922b21,#e74c3c);position:relative;overflow:hidden;">
                <img src="${imgData.thumbnail}" alt="${imgInfo.desc}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">
                <div style="position:absolute;top:6px;right:6px;background:rgba(0,0,0,0.6);color:#fff;padding:2px 8px;border-radius:4px;font-size:10px;">📷 百度百科</div>
              </div>
              <div style="padding:10px;font-size:12px;color:#e74c3c;font-weight:600;">${imgInfo.desc}</div>
            </div>
          `;
        }
      }
      content += `</div>`;
      
      for(const [key, type] of Object.entries(cr.types)){
        content += `
          <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <strong style="font-size:14px;color:var(--primary)">${type.name}</strong>
              <span class="tag-inline" style="background:#ffebee;color:#c0392b">${type.status}</span>
            </div>
            ${type.nickname ? `<div style="font-size:12px;color:#e67e22;margin-bottom:6px">${type.nickname}</div>` : ''}
            ${type.specs ? `<div style="margin:8px 0">
              <table style="width:100%;border-collapse:collapse;font-size:12px">
                ${Object.entries(type.specs).map(([k,v])=>`<tr style="border-bottom:1px solid #eee"><td style="padding:4px 8px;color:#e74c3c;font-weight:600;white-space:nowrap">${k}</td><td style="padding:4px 8px;color:var(--text-main)">${v}</td></tr>`).join('')}
              </table>
            </div>` : ''}
            ${type.features && type.features.length ? `<div style="margin-top:8px"><strong style="font-size:12px">特点：</strong><ul style="margin:4px 0 0 16px;padding-left:0">${type.features.map(f=>`<li style="font-size:12px;margin:2px 0">${f}</li>`).join('')}</ul></div>` : ''}
          </div>
        `;
      }
    } else if(subType === 'CRHseries'){
      const crh = loc.emu.categories.CRHseries;
      content = `
        <div style="margin-bottom:16px">
          <div style="font-size:16px;font-weight:700;color:#3498db">🚅 ${crh.name}</div>
          <div style="font-size:12px;color:var(--text-sub);margin-top:4px">${crh.intro}</div>
        </div>
      `;
      
      // 和谐号系列图片展示
      const crhImages = [
        { key: 'CRH380A', desc: 'CRH380A 和谐号' }
      ];
      
      content += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin-bottom:16px;">`;
      for(const imgInfo of crhImages){
        const imgData = KNOWLEDGE_BASE.locomotiveImages.realImages[imgInfo.key];
        if(imgData && imgData.thumbnail){
          content += `
            <div style="background:#fff;border:1px solid #90caf9;border-radius:10px;overflow:hidden;">
              <div style="height:140px;background:linear-gradient(135deg,#1a5276,#3498db);position:relative;overflow:hidden;">
                <img src="${imgData.thumbnail}" alt="${imgInfo.desc}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">
                <div style="position:absolute;top:6px;right:6px;background:rgba(0,0,0,0.6);color:#fff;padding:2px 8px;border-radius:4px;font-size:10px;">📷 百度百科</div>
              </div>
              <div style="padding:10px;font-size:12px;color:#3498db;font-weight:600;">${imgInfo.desc}</div>
            </div>
          `;
        }
      }
      content += `</div>`;
      
      for(const [key, type] of Object.entries(crh.types)){
        content += `
          <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <strong style="font-size:14px;color:var(--primary)">${type.name}</strong>
              <span class="tag-inline" style="background:#e3f2fd;color:#1976d2">${type.status}</span>
            </div>
            ${type.specs ? `<div style="margin:8px 0">
              <table style="width:100%;border-collapse:collapse;font-size:12px">
                ${Object.entries(type.specs).map(([k,v])=>`<tr style="border-bottom:1px solid #eee"><td style="padding:4px 8px;color:#3498db;font-weight:600;white-space:nowrap">${k}</td><td style="padding:4px 8px;color:var(--text-main)">${v}</td></tr>`).join('')}
              </table>
            </div>` : ''}
          </div>
        `;
      }
    }
  } else if(category === 'special'){
    const special = loc.special.categories[subType];
    if(special){
      content = `
        <div style="margin-bottom:16px">
          <div style="font-size:16px;font-weight:700;color:var(--primary)">🔧 ${special.name}</div>
          <div style="font-size:12px;color:var(--text-sub);margin-top:4px">${special.description}</div>
        </div>
      `;
      for(const [key, type] of Object.entries(special.types)){
        content += `
          <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <strong style="font-size:14px;color:var(--primary)">${type.name}</strong>
            </div>
            ${type.specs ? `<div style="margin:8px 0">
              <table style="width:100%;border-collapse:collapse;font-size:12px">
                ${Object.entries(type.specs).map(([k,v])=>`<tr style="border-bottom:1px solid #eee"><td style="padding:4px 8px;color:var(--accent);font-weight:600;white-space:nowrap">${k}</td><td style="padding:4px 8px;color:var(--text-main)">${v}</td></tr>`).join('')}
              </table>
            </div>` : ''}
            ${type.usage ? `<div style="margin-top:8px;font-size:12px;color:var(--text-sub)"><strong>用途：</strong>${type.usage}</div>` : ''}
          </div>
        `;
      }
    }
  }

  const finalContent = content || '<div style="color:var(--text-sub);">正在加载机车数据...</div>';
  
  // 直接添加到消息区域
  if(typeof addBotMessage === 'function'){
    addBotMessage(finalContent);
  }
};
      
      for(const [key, type] of Object.entries(hxd.types)){
        content += `
          <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <strong style="font-size:14px;color:var(--primary)">${type.name}</strong>
              <span class="tag-inline">${type.status}</span>
            </div>
            ${type.nickname ? `<span style="background:#ffeaa7;padding:2px 8px;border-radius:10px;font-size:11px;margin-left:8px">🌟 ${type.nickname}</span>` : ''}
            <div style="font-size:12px;color:#888;margin:6px 0">📷 图片来源：百度百科 · 可点击查看高清图</div>
            <table style="width:100%;font-size:12px;border-collapse:collapse">
              <tr style="background:#f8f9fc"><td style="padding:4px 8px;border:1px solid #eee;width:35%">轴式</td><td style="padding:4px 8px;border:1px solid #eee">${type.specs.轴式}</td></tr>
              <tr><td style="padding:4px 8px;border:1px solid #eee">功率</td><td style="padding:4px 8px;border:1px solid #eee">${type.specs.总功率 || type.specs.功率 || type.specs.装车功率}</td></tr>
              ${type.specs.最高速度 ? `<tr style="background:#f8f9fc"><td style="padding:4px 8px;border:1px solid #eee">最高速度</td><td style="padding:4px 8px;border:1px solid #eee">${type.specs.最高速度}</td></tr>` : ''}
              ${type.specs.可牵引重量 ? `<tr><td style="padding:4px 8px;border:1px solid #eee">可牵引重量</td><td style="padding:4px 8px;border:1px solid #eee">${type.specs.可牵引重量}</td></tr>` : ''}
            </table>
            ${type.features && type.features.length ? `<div style="margin-top:8px;font-size:12px"><strong>特点：</strong>${type.features.join('、')}</div>` : ''}
            <div style="margin-top:6px;font-size:12px;color:var(--text-sub)"><strong>运用：</strong>${type.usage}</div>
          </div>
        `;
      }
    } else if(subType === 'SS'){
      const ss = loc.electric.categories.SS;
      content = `
        <div style="margin-bottom:16px">
          <div style="font-size:16px;font-weight:700;color:#8e44ad">🏭 ${ss.name}</div>
          <div style="font-size:12px;color:var(--text-sub);margin-top:4px">${ss.intro}</div>
        </div>
      `;
      for(const [key, type] of Object.entries(ss.types)){
        content += `
          <div style="background:#fff;border:1px solid #e8d4f0;border-radius:10px;padding:14px;margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <strong style="font-size:14px;color:#8e44ad">${type.name}</strong>
              <span class="tag-inline" style="background:#f3e8ff">${type.status}</span>
            </div>
            <div style="font-size:12px;color:#888;margin:6px 0">📷 图片搜索：百度图片搜「${type.image}」</div>
            <table style="width:100%;font-size:12px;border-collapse:collapse">
              <tr style="background:#f8f9fc"><td style="padding:4px 8px;border:1px solid #eee;width:35%">轴式</td><td style="padding:4px 8px;border:1px solid #eee">${type.specs.轴式}</td></tr>
              <tr><td style="padding:4px 8px;border:1px solid #eee">功率</td><td style="padding:4px 8px;border:1px solid #eee">${type.specs.功率}</td></tr>
              <tr style="background:#f8f9fc"><td style="padding:4px 8px;border:1px solid #eee">最高速度</td><td style="padding:4px 8px;border:1px solid #eee">${type.specs.最高速度}</td></tr>
            </table>
            ${type.features && type.features.length ? `<div style="margin-top:8px;font-size:12px"><strong>特点：</strong>${type.features.join('、')}</div>` : ''}
            <div style="margin-top:6px;font-size:12px;color:var(--text-sub)"><strong>运用：</strong>${type.usage}</div>
          </div>
        `;
      }
    }
  }
  else if(category === 'diesel'){
    if(subType === 'HXN'){
      const hxn = loc.diesel.categories.HXN;
      content = `
        <div style="margin-bottom:16px">
          <div style="font-size:16px;font-weight:700;color:#27ae60">🛢️ ${hxn.name}</div>
          <div style="font-size:12px;color:var(--text-sub);margin-top:4px">${hxn.intro}</div>
        </div>
      `;
      
      // 添加HXN系列图片展示
      const hxnImages = [
        { key: 'HXN3', desc: 'HXN3 和谐内燃' }
      ];
      
      content += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin-bottom:16px;">`;
      for(const imgInfo of hxnImages){
        const imgData = KNOWLEDGE_BASE.locomotiveImages.realImages[imgInfo.key];
        if(imgData && imgData.thumbnail){
          content += `
            <div style="background:#fff;border:1px solid #a8d5ba;border-radius:10px;overflow:hidden;">
              <div style="height:140px;background:linear-gradient(135deg,#1e8449,#27ae60);position:relative;overflow:hidden;">
                <img src="${imgData.thumbnail}" alt="${imgInfo.desc}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">
                <div style="position:absolute;top:6px;right:6px;background:rgba(0,0,0,0.6);color:#fff;padding:2px 8px;border-radius:4px;font-size:10px;">📷 百度百科</div>
              </div>
              <div style="padding:10px;font-size:12px;color:#27ae60;font-weight:600;">${imgInfo.desc}</div>
            </div>
          `;
        }
      }
      content += `</div>`;
      
      for(const [key, type] of Object.entries(hxn.types)){
        content += `
          <div style="background:#fff;border:1px solid #a8d5ba;border-radius:10px;padding:14px;margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <strong style="font-size:14px;color:#27ae60">${type.name}</strong>
              <span class="tag-inline" style="background:#e8f5e9">${type.status}</span>
            </div>
            ${type.nickname ? `<span style="background:#ffeaa7;padding:2px 8px;border-radius:10px;font-size:11px">🌟 ${type.nickname}</span>` : ''}
            <div style="font-size:12px;color:#888;margin:6px 0">📷 图片来源：百度百科 · 可点击查看高清图</div>
            <table style="width:100%;font-size:12px;border-collapse:collapse">
              <tr style="background:#f8f9fc"><td style="padding:4px 8px;border:1px solid #eee;width:35%">轴式</td><td style="padding:4px 8px;border:1px solid #eee">${type.specs.轴式}</td></tr>
              <tr><td style="padding:4px 8px;border:1px solid #eee">装车功率</td><td style="padding:4px 8px;border:1px solid #eee">${type.specs.装车功率}</td></tr>
              <tr style="background:#f8f9fc"><td style="padding:4px 8px;border:1px solid #eee">最高速度</td><td style="padding:4px 8px;border:1px solid #eee">${type.specs.最高速度}</td></tr>
            </table>
            ${type.features && type.features.length ? `<div style="margin-top:8px;font-size:12px"><strong>特点：</strong>${type.features.join('、')}</div>` : ''}
            ${type.features高原 && type.features高原.length ? `<div style="margin-top:4px;font-size:12px;color:#27ae60"><strong>高原型特点：</strong>${type.features高原.join('、')}</div>` : ''}
            <div style="margin-top:6px;font-size:12px;color:var(--text-sub)"><strong>运用：</strong>${type.usage}</div>
          </div>
        `;
      }
    } else if(subType === 'DF'){
      const df = loc.diesel.categories.DF;
      content = `
        <div style="margin-bottom:16px">
          <div style="font-size:16px;font-weight:700;color:#f39c12">💨 ${df.name}</div>
          <div style="font-size:12px;color:var(--text-sub);margin-top:4px">${df.intro}</div>
        </div>
      `;
      
      // 添加DF东风系列图片展示
      const dfImages = [
        { key: 'DF4B', desc: 'DF4B 东风4B' },
        { key: 'DF4', desc: 'DF4 东风4' },
        { key: 'DF11', desc: 'DF11 东风11' }
      ];
      
      content += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin-bottom:16px;">`;
      for(const imgInfo of dfImages){
        const imgData = KNOWLEDGE_BASE.locomotiveImages.realImages[imgInfo.key];
        if(imgData && imgData.thumbnail){
          content += `
            <div style="background:#fff;border:1px solid #f5d89a;border-radius:10px;overflow:hidden;">
              <div style="height:140px;background:linear-gradient(135deg,#d68910,#f39c12);position:relative;overflow:hidden;">
                <img src="${imgData.thumbnail}" alt="${imgInfo.desc}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">
                <div style="position:absolute;top:6px;right:6px;background:rgba(0,0,0,0.6);color:#fff;padding:2px 8px;border-radius:4px;font-size:10px;">📷 百度百科</div>
              </div>
              <div style="padding:10px;font-size:12px;color:#d68910;font-weight:600;">${imgInfo.desc}</div>
            </div>
          `;
        }
      }
      content += `</div>`;
      
      for(const [key, type] of Object.entries(df.types)){
        content += `
          <div style="background:#fff;border:1px solid #f5d89a;border-radius:10px;padding:14px;margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <strong style="font-size:14px;color:#f39c12">${type.name}</strong>
              <span class="tag-inline" style="background:#fff8e1">${type.status}</span>
            </div>
            <div style="font-size:12px;color:#888;margin:6px 0">📷 图片来源：百度百科 · 可点击查看高清图</div>
            <table style="width:100%;font-size:12px;border-collapse:collapse">
              <tr style="background:#f8f9fc"><td style="padding:4px 8px;border:1px solid #eee;width:35%">轴式</td><td style="padding:4px 8px;border:1px solid #eee">${type.specs.轴式}</td></tr>
              <tr><td style="padding:4px 8px;border:1px solid #eee">功率</td><td style="padding:4px 8px;border:1px solid #eee">${type.specs.功率}</td></tr>
              <tr style="background:#f8f9fc"><td style="padding:4px 8px;border:1px solid #eee">最高速度</td><td style="padding:4px 8px;border:1px solid #eee">${type.specs.最高速度}</td></tr>
            </table>
            ${type.features && type.features.length ? `<div style="margin-top:8px;font-size:12px"><strong>特点：</strong>${type.features.join('、')}</div>` : ''}
            <div style="margin-top:6px;font-size:12px;color:var(--text-sub)"><strong>运用：</strong>${type.usage}</div>
          </div>
        `;
      }
      content += `
        <div style="padding:12px;background:#fff3cd;border-radius:8px;border:1px solid #ffc107;font-size:12px;margin-top:12px">
          <strong>⚠️ ${loc.diesel.retirementPolicy.title}</strong><br>
          ${loc.diesel.retirementPolicy.policy}<br>
          <strong>淘汰时间：</strong>${loc.diesel.retirementPolicy.timeline}
        </div>
      `;
    }
  }
  else if(category === 'emu'){
    if(subType === 'CRseries'){
      const cr = loc.emu.CRseries;
      content = `
        <div style="margin-bottom:16px">
          <div style="font-size:16px;font-weight:700;color:#e74c3c">🚀 ${cr.name}</div>
          <div style="font-size:12px;color:var(--text-sub);margin-top:4px">${cr.intro}</div>
        </div>
      `;
      
      // 添加复兴号系列图片展示
      const crImages = [
        { key: 'CR400AF', desc: 'CR400AF 复兴号' },
        { key: 'CR400BF', desc: 'CR400BF 复兴号' },
        { key: 'CR300AF', desc: 'CR300AF 复兴号' }
      ];
      
      content += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;margin-bottom:16px;">`;
      for(const imgInfo of crImages){
        const imgData = KNOWLEDGE_BASE.locomotiveImages.realImages[imgInfo.key];
        if(imgData && imgData.thumbnail){
          content += `
            <div style="background:#fff;border:1px solid #ef9a9a;border-radius:10px;overflow:hidden;">
              <div style="height:160px;background:linear-gradient(135deg,#c0392b,#e74c3c);position:relative;overflow:hidden;">
                <img src="${imgData.thumbnail}" alt="${imgInfo.desc}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">
                <div style="position:absolute;top:6px;right:6px;background:rgba(0,0,0,0.6);color:#fff;padding:2px 8px;border-radius:4px;font-size:10px;">📷 百度百科</div>
              </div>
              <div style="padding:10px;font-size:12px;color:#e74c3c;font-weight:600;">${imgInfo.desc}</div>
            </div>
          `;
        }
      }
      content += `</div>`;
      
      for(const [key, type] of Object.entries(cr.types)){
        let bgColor = '#ffebee';
        let borderColor = '#ef9a9a';
        if(key === 'CR450'){ bgColor = '#fff'; borderColor = '#e74c3c'; }
        content += `
          <div style="background:${bgColor};border:1px solid ${borderColor};border-radius:10px;padding:14px;margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <strong style="font-size:14px;color:#e74c3c">${type.name}</strong>
              <span class="tag-inline" style="background:#ffebee">${type.status || type.subtitle}</span>
            </div>
            <div style="font-size:12px;color:#888;margin:6px 0">📷 图片来源：百度百科 · 可点击查看高清图</div>
        `;
        if(type.specs && Object.keys(type.specs).length){
          content += `<table style="width:100%;font-size:12px;border-collapse:collapse">`;
          for(const [k, v] of Object.entries(type.specs)){
            content += `<tr><td style="padding:4px 8px;border:1px solid #eee;width:40%">${k}</td><td style="padding:4px 8px;border:1px solid #eee">${v}</td></tr>`;
          }
          content += `</table>`;
        }
        if(type.breakthroughs && type.breakthroughs.length){
          content += `<div style="margin-top:8px;font-size:12px"><strong>技术突破：</strong>${type.breakthroughs.join('、')}</div>`;
        }
        if(type.records && type.records.length){
          content += `<div style="margin-top:6px;font-size:12px;color:#e74c3c"><strong>🏆 世界纪录：</strong>${type.records.join('，')}</div>`;
        }
        if(type.subtypes){
          content += `<div style="margin-top:8px;font-size:12px"><strong>子型号：</strong><br>`;
          for(const [sub, info] of Object.entries(type.subtypes)){
            if(typeof info === 'object'){
              content += `<span class="tag-inline" style="margin:2px">${info.name || sub}</span>`;
            } else {
              content += `<span class="tag-inline" style="margin:2px">${info}</span>`;
            }
          }
          content += `</div>`;
        }
        content += `</div>`;
      }
    } else if(subType === 'CRHseries'){
      const crh = loc.emu.CRHseries;
      content = `
        <div style="margin-bottom:16px">
          <div style="font-size:16px;font-weight:700;color:#3498db">🚅 ${crh.name}</div>
          <div style="font-size:12px;color:var(--text-sub);margin-top:4px">${crh.intro}</div>
        </div>
      `;
      
      // 添加和谐号系列图片展示
      const crhImages = [
        { key: 'CRH380A', desc: 'CRH380A 和谐号' }
      ];
      
      content += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;margin-bottom:16px;">`;
      for(const imgInfo of crhImages){
        const imgData = KNOWLEDGE_BASE.locomotiveImages.realImages[imgInfo.key];
        if(imgData && imgData.thumbnail){
          content += `
            <div style="background:#fff;border:1px solid #90caf9;border-radius:10px;overflow:hidden;">
              <div style="height:160px;background:linear-gradient(135deg,#1565c0,#3498db);position:relative;overflow:hidden;">
                <img src="${imgData.thumbnail}" alt="${imgInfo.desc}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">
                <div style="position:absolute;top:6px;right:6px;background:rgba(0,0,0,0.6);color:#fff;padding:2px 8px;border-radius:4px;font-size:10px;">📷 百度百科</div>
              </div>
              <div style="padding:10px;font-size:12px;color:#3498db;font-weight:600;">${imgInfo.desc}</div>
            </div>
          `;
        }
      }
      content += `</div>`;
      
      for(const [key, type] of Object.entries(crh.types)){
        content += `
          <div style="background:#fff;border:1px solid #90caf9;border-radius:10px;padding:14px;margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <strong style="font-size:14px;color:#3498db">${type.name}</strong>
              <span class="tag-inline" style="background:#e3f2fd">${type.status}</span>
            </div>
            <div style="font-size:12px;margin:4px 0"><strong>制造商：</strong>${type.manufacturer}</div>
            <div style="font-size:12px;margin:4px 0"><strong>技术来源：</strong>${type.specs.技术来源}</div>
            <div style="font-size:12px;color:#888;margin:6px 0">📷 图片来源：百度百科 · 可点击查看高清图</div>
            ${type.subtypes ? `<div style="margin-top:8px;font-size:12px"><strong>子型号：</strong><br>${Object.entries(type.subtypes).map(([k,v])=>`<span class="tag-inline" style="margin:2px;background:#e3f2fd">${k}：${v}</span>`).join(' ')}</div>` : ''}
          </div>
        `;
      }
      content += `
        <div style="padding:12px;background:#fff3cd;border-radius:8px;border:1px solid #ffc107;font-size:12px;margin-top:12px">
          <strong>🏆 历史记录：</strong>CRH380BL于2011年1月9日在京沪高铁创下487.3km/h试验速度，至今仍是CRH系列最高记录！
        </div>
      `;
    }
  }
  else if(category === 'special'){
    const sp = loc.special;
    for(const [key, cat] of Object.entries(sp.categories)){
      if(key !== subType) continue;
      content = `
        <div style="margin-bottom:16px">
          <div style="font-size:16px;font-weight:700;color:var(--primary)">${cat.icon} ${cat.name}</div>
        </div>
      `;
      for(const [k, type] of Object.entries(cat.types)){
        content += `
          <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:12px">
            <strong style="font-size:14px;color:var(--primary)">${type.name}</strong>
            <div style="font-size:12px;color:#888;margin:6px 0">📷 图片搜索：百度图片搜「${type.image}」</div>
            <div style="font-size:12px;color:var(--text-sub)"><strong>主要用途：</strong>${type.usage}</div>
          </div>
        `;
      }
    }
  }

  return content || '<div style="color:var(--text-sub)">正在加载机车数据...</div>';
};

/* ══════════════════════════════════════════════════════════
   四、图片资源管理 v4.0 - 真实机车图片（百度百科）
   ══════════════════════════════════════════════════════════ */
window.KNOWLEDGE_BASE.locomotiveImages = {
  // 真实机车图片URL（来自百度百科公开资源）
  // 更新：v4.0 使用百度百科CDN图片，可直接显示
  realImages: {
    // ── 复兴号系列 CR ──
    'CR400AF': {
      url: 'https://bkimg.cdn.bcebos.com/smart/d31b0ef41bd5ad6ea347188b8ecb39dbb6fd3c10-bkimg-process,v_1,rw_800,rh_533,maxl_426?x-bce-process=image/format,f_auto',
      thumbnail: 'https://bkimg.cdn.bcebos.com/smart/d31b0ef41bd5ad6ea347188b8ecb39dbb6fd3c10-bkimg-process,v_1,rw_800,rh_533,maxl_426?x-bce-process=image/format,f_auto',
      source: '百度百科',
      description: '复兴号CR400AF型电力动车组'
    },
    'CR400BF': {
      url: 'https://bkimg.cdn.bcebos.com/smart/5ab5c9ea15ce36d3acb8632131f33a87e950b167-bkimg-process,v_1,rw_368,rh_252,maxl_737?x-bce-process=image/format,f_auto',
      thumbnail: 'https://bkimg.cdn.bcebos.com/smart/5ab5c9ea15ce36d3acb8632131f33a87e950b167-bkimg-process,v_1,rw_368,rh_252,maxl_737?x-bce-process=image/format,f_auto',
      source: '百度百科',
      description: '复兴号CR400BF型电力动车组'
    },
    'CR300AF': {
      url: 'https://bkimg.cdn.bcebos.com/smart/d52a2834349b033b5bb537072b9821d3d539b70017ed-bkimg-process,v_1,rw_2000,rh_1332,maxl_426?x-bce-process=image/format,f_auto',
      thumbnail: 'https://bkimg.cdn.bcebos.com/smart/d52a2834349b033b5bb537072b9821d3d539b70017ed-bkimg-process,v_1,rw_2000,rh_1332,maxl_426?x-bce-process=image/format,f_auto',
      source: '百度百科',
      description: '复兴号CR300AF型电力动车组'
    },
    // ── 和谐号系列 CRH ──
    'CRH380A': {
      url: 'https://bkimg.cdn.bcebos.com/smart/ca1349540923dd540034d05cdb09b3de9c8248ba-bkimg-process,v_1,rw_1280,rh_800,maxl_454?x-bce-process=image/format,f_auto',
      thumbnail: 'https://bkimg.cdn.bcebos.com/smart/ca1349540923dd540034d05cdb09b3de9c8248ba-bkimg-process,v_1,rw_1280,rh_800,maxl_454?x-bce-process=image/format,f_auto',
      source: '百度百科',
      description: '和谐号CRH380A型电力动车组'
    },
    'CRH2': {
      url: 'https://bkimg.cdn.bcebos.com/smart/ca1349540923dd540034d05cdb09b3de9c8248ba-bkimg-process,v_1,rw_1280,rh_800,maxl_454?x-bce-process=image/format,f_auto',
      thumbnail: 'https://bkimg.cdn.bcebos.com/smart/ca1349540923dd540034d05cdb09b3de9c8248ba-bkimg-process,v_1,rw_1280,rh_800,maxl_454?x-bce-process=image/format,f_auto',
      source: '百度百科',
      description: '和谐号CRH2型电力动车组'
    },
    // ── 电力机车 HXD ──
    'HXD1': {
      url: 'https://bkimg.cdn.bcebos.com/smart/9f510fb30f2442a7d9335c78ea15ba4bd11372f0a4ea-bkimg-process,v_1,rw_648,rh_384,maxl_479?x-bce-process=image/format,f_auto',
      thumbnail: 'https://bkimg.cdn.bcebos.com/smart/9f510fb30f2442a7d9335c78ea15ba4bd11372f0a4ea-bkimg-process,v_1,rw_648,rh_384,maxl_479?x-bce-process=image/format,f_auto',
      source: '百度百科',
      description: '和谐1型HXD1电力机车'
    },
    'HXD1D': {
      url: 'https://bkimg.cdn.bcebos.com/smart/9825bc315c6034a85edf134b2e475e540923dc54d8e6-bkimg-process,v_1,rw_648,rh_400,maxl_460?x-bce-process=image/format,f_auto',
      thumbnail: 'https://bkimg.cdn.bcebos.com/smart/9825bc315c6034a85edf134b2e475e540923dc54d8e6-bkimg-process,v_1,rw_648,rh_400,maxl_460?x-bce-process=image/format,f_auto',
      source: '百度百科',
      description: '和谐1D型HXD1D电力机车(大红枣)'
    },
    'HXD3': {
      url: 'https://bkimg.cdn.bcebos.com/smart/fcfaaf51f3deb48f5c9c2d9bf91f3a292cf578fa-bkimg-process,v_1,rw_800,rh_600,maxl_378?x-bce-process=image/format,f_auto',
      thumbnail: 'https://bkimg.cdn.bcebos.com/smart/fcfaaf51f3deb48f5c9c2d9bf91f3a292cf578fa-bkimg-process,v_1,rw_800,rh_600,maxl_378?x-bce-process=image/format,f_auto',
      source: '百度百科',
      description: '和谐3型HXD3电力机车'
    },
    'HXD3D': {
      url: 'https://bkimg.cdn.bcebos.com/smart/71cf3bc79f3df8dcd2d50cd4c411728b4610288e-bkimg-process,v_1,rw_800,rh_600,maxl_378?x-bce-process=image/format,f_auto',
      thumbnail: 'https://bkimg.cdn.bcebos.com/smart/71cf3bc79f3df8dcd2d50cd4c411728b4610288e-bkimg-process,v_1,rw_800,rh_600,maxl_378?x-bce-process=image/format,f_auto',
      source: '百度百科',
      description: '和谐3D型HXD3D电力机车'
    },
    'HXD2': {
      url: 'https://bkimg.cdn.bcebos.com/smart/5243fbf2b2119313b07ec66a256e1bd7912396dd27e9-bkimg-process,v_1,rw_650,rh_407,maxl_453?x-bce-process=image/format,f_auto',
      thumbnail: 'https://bkimg.cdn.bcebos.com/smart/5243fbf2b2119313b07ec66a256e1bd7912396dd27e9-bkimg-process,v_1,rw_650,rh_407,maxl_453?x-bce-process=image/format,f_auto',
      source: '百度百科',
      description: '和谐2型HXD2电力机车'
    },
    // ── 内燃机车 DF ──
    'DF4B': {
      url: 'https://bkimg.cdn.bcebos.com/smart/b21c8701a18b87d6277f335f485e3f381f30e924576e-bkimg-process,v_1,rw_4608,rh_3456,maxl_378?x-bce-process=image/format,f_auto',
      thumbnail: 'https://bkimg.cdn.bcebos.com/smart/43a7d933c895d143ad4b2558ada495025aafa40fa909-bkimg-process,v_1,rw_1208,rh_805,maxl_426?x-bce-process=image/format,f_auto',
      source: '百度百科',
      description: '东风4B型DF4B内燃机车'
    },
    'DF4': {
      url: 'https://bkimg.cdn.bcebos.com/smart/4b90f603738da977391295a77805ef198618377a45b8-bkimg-process,v_1,rw_640,rh_480,maxl_378?x-bce-process=image/format,f_auto',
      thumbnail: 'https://bkimg.cdn.bcebos.com/smart/4b90f603738da977391295a77805ef198618377a45b8-bkimg-process,v_1,rw_640,rh_480,maxl_378?x-bce-process=image/format,f_auto',
      source: '百度百科',
      description: '东风4型DF4内燃机车'
    },
    'DF11': {
      url: 'https://bkimg.cdn.bcebos.com/smart/32fa828ba61ea8d336cba10b900a304e241f58d0-bkimg-process,v_1,rw_448,rh_252,maxl_897?x-bce-process=image/format,f_auto',
      thumbnail: 'https://bkimg.cdn.bcebos.com/smart/32fa828ba61ea8d336cba10b900a304e241f58d0-bkimg-process,v_1,rw_448,rh_252,maxl_897?x-bce-process=image/format,f_auto',
      source: '百度百科',
      description: '东风11型DF11内燃机车'
    },
    // ── 韶山系列 SS ──
    'SS9': {
      url: 'https://bkimg.cdn.bcebos.com/smart/43a7d933c895d143ad4b2558ada495025aafa40fa909-bkimg-process,v_1,rw_1208,rh_805,maxl_426?x-bce-process=image/format,f_auto',
      thumbnail: 'https://bkimg.cdn.bcebos.com/smart/43a7d933c895d143ad4b2558ada495025aafa40fa909-bkimg-process,v_1,rw_1208,rh_805,maxl_426?x-bce-process=image/format,f_auto',
      source: '百度百科',
      description: '韶山9型SS9电力机车'
    },
    'SS7': {
      url: 'https://bkimg.cdn.bcebos.com/smart/9825bc315c6034a8831e3574cc13495408237643-bkimg-process,v_1,rw_336,rh_252,maxl_672?x-bce-process=image/format,f_auto',
      thumbnail: 'https://bkimg.cdn.bcebos.com/smart/9825bc315c6034a8831e3574cc13495408237643-bkimg-process,v_1,rw_336,rh_252,maxl_672?x-bce-process=image/format,f_auto',
      source: '百度百科',
      description: '韶山7型SS7电力机车'
    },
    // ── 高速综合检测列车 ──
    'CIT': {
      url: 'https://bkimg.cdn.bcebos.com/smart/91ef76c6a7efce1b9d160894d01ae4deb48f8c54cf13-bkimg-process,v_1,rw_378,rh_252,maxl_756?x-bce-process=image/format,f_auto',
      thumbnail: 'https://bkimg.cdn.bcebos.com/smart/91ef76c6a7efce1b9d160894d01ae4deb48f8c54cf13-bkimg-process,v_1,rw_378,rh_252,maxl_756?x-bce-process=image/format,f_auto',
      source: '百度百科',
      description: '高速综合检测列车CIT'
    }
  },

  // 备用免费图片（Unsplash等）
  electricImages: {
    default: 'https://images.unsplash.com/photo-1565130838609-c3a86655db61?w=600&h=400&fit=crop',
    hxd: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
    ss: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=400&fit=crop',
  },

  dieselImages: {
    default: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    hxn: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    df: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },

  emuImages: {
    cr: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=600&h=400&fit=crop',
    crh: 'https://images.unsplash.com/photo-1545401569342-c65f7f2af0e5?w=600&h=400&fit=crop',
    cr380: 'https://images.unsplash.com/photo-1565557629236-c73b36e2cf5e?w=600&h=400&fit=crop',
  },

  // 备用图标
  fallbackIcon: '🚂',

  // 图片搜索快捷链接
  searchUrls: {
    baidu: 'https://image.baidu.com/search/index?tn=baiduimage&word=',
    bing: 'https://cn.bing.com/images/search?q=',
    wikipedia: 'https://zh.wikipedia.org/wiki/'
  },

  // 获取图片URL
  getImage: function(category, type, imageKey) {
    // 首先尝试真实图片
    if(imageKey && this.realImages[imageKey]) {
      return this.realImages[imageKey].thumbnail || this.realImages[imageKey].url;
    }

    // 尝试分类默认图片
    const imgMap = {
      'electric': this.electricImages,
      'diesel': this.dieselImages,
      'emu': this.emuImages
    };
    const catImages = imgMap[category] || this.electricImages;
    return catImages[type] || catImages.default || null;
  },

  // 获取图片搜索链接
  getSearchUrl: function(imageKey) {
    if(imageKey && this.realImages[imageKey] && this.realImages[imageKey].url) {
      return this.realImages[imageKey].url;
    }
    return this.searchUrls.baidu + encodeURIComponent(imageKey || '和谐型电力机车');
  }
};

/* ══════════════════════════════════════════════════════════
   五、增强的图片展示卡片组件 v4.0
   ══════════════════════════════════════════════════════════ */
window.KNOWLEDGE_BASE.createLocomotiveCard = function(data, category, options) {
  const opts = Object.assign({
    showImage: true,
    imageHeight: '200px',
    cardWidth: '100%',
    showSearchLink: true
  }, options || {});

  // 优先使用真实图片
  const realImageInfo = KNOWLEDGE_BASE.locomotiveImages.realImages[data.imageKey || data.image];
  let img = null;
  let searchUrl = null;
  
  if(realImageInfo && realImageInfo.thumbnail) {
    img = realImageInfo.thumbnail;
    searchUrl = realImageInfo.url;
  } else {
    img = KNOWLEDGE_BASE.locomotiveImages.getImage(category, data.imageKey || 'default', data.imageKey);
    searchUrl = KNOWLEDGE_BASE.locomotiveImages.getSearchUrl(data.imageKey || data.image);
  }
  
  const fallbackIcon = KNOWLEDGE_BASE.locomotiveImages.fallbackIcon;

  let cardHtml = `
    <div style="background:#fff;border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-bottom:16px;${opts.cardWidth !== '100%' ? 'width:' + opts.cardWidth + ';display:inline-block;margin-right:12px;vertical-align:top;' : ''}">
  `;

  // 图片区域
  if(opts.showImage) {
    if(img) {
      // 判断是否是百度百科图片（背景渐变颜色）
      const isBaiduImage = img.includes('bkimg.cdn.bcebos.com');
      const gradientColors = isBaiduImage ? '#1a237e 0%, #0d47a1 100%' : '#667eea 0%,#764ba2 100%';
      
      cardHtml += `
        <div style="height:${opts.imageHeight};background:linear-gradient(135deg,${gradientColors});display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
          <img src="${img}" alt="${data.name || data.image}" style="width:100%;height:100%;object-fit:cover;" 
            onerror="this.style.opacity='0';this.nextElementSibling.style.display='flex';"
            onload="this.style.opacity='1';">
          <div style="position:absolute;top:8px;right:8px;background:rgba(0,0,0,0.7);color:#fff;padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600;">
            📷 ${realImageInfo ? realImageInfo.source : '示意'}
          </div>
          <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,0.8));padding:20px 12px 8px;">
            <span style="color:#fff;font-size:13px;font-weight:600;text-shadow:0 1px 3px rgba(0,0,0,0.5);">${data.name || data.image}</span>
          </div>
        </div>
      `;
    } else {
      // 无图片时显示图标
      cardHtml += `
        <div style="height:${opts.imageHeight};background:linear-gradient(135deg,${data.color || '#667eea'} 0%,${data.colorDark || '#764ba2'} 100%);display:flex;align-items:center;justify-content:center;position:relative;">
          <span style="font-size:64px;opacity:0.3;">${fallbackIcon}</span>
          <div style="position:absolute;bottom:8px;left:8px;background:rgba(0,0,0,0.6);color:#fff;padding:4px 8px;border-radius:4px;font-size:11px;">
            ${data.name || '待补充图片'}
          </div>
        </div>
      `;
    }
  }

  // 内容区域
  cardHtml += `
    <div style="padding:14px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <strong style="font-size:15px;color:var(--primary)">${data.name}</strong>
        ${data.status ? `<span class="tag-inline" style="background:${data.statusColor || '#e8f5e9'};color:${data.statusTextColor || '#27ae60'}">${data.status}</span>` : ''}
      </div>
  `;

  if(data.nickname) {
    cardHtml += `<span style="background:#ffeaa7;padding:2px 8px;border-radius:10px;font-size:11px;margin-bottom:8px;display:inline-block;">🌟 ${data.nickname}</span>`;
  }

  if(data.specs) {
    cardHtml += `<table style="width:100%;font-size:12px;border-collapse:collapse;margin:8px 0;">`;
    for(const [k, v] of Object.entries(data.specs)) {
      if(v && v !== 'N/A' && v !== '') {
        cardHtml += `<tr><td style="padding:4px 8px;border:1px solid #eee;width:35%;color:#666;">${k}</td><td style="padding:4px 8px;border:1px solid #eee;font-weight:500;">${v}</td></tr>`;
      }
    }
    cardHtml += `</table>`;
  }

  if(data.features && data.features.length) {
    cardHtml += `<div style="font-size:12px;color:#555;margin-top:8px;"><strong>特点：</strong>${data.features.join('、')}</div>`;
  }

  if(data.usage) {
    cardHtml += `<div style="font-size:12px;color:#888;margin-top:6px;"><strong>运用：</strong>${data.usage}</div>`;
  }

  // 图片搜索按钮
  if(opts.showSearchLink && data.image) {
    cardHtml += `
      <div style="margin-top:10px;padding-top:10px;border-top:1px solid #eee;">
        <a href="${searchUrl}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;background:linear-gradient(135deg,#3498db,#2980b9);color:#fff;border-radius:8px;font-size:12px;text-decoration:none;font-weight:600;">
          🔍 查看真实机车图片
        </a>
      </div>
    `;
  }

  cardHtml += `</div></div>`;
  return cardHtml;
};

/* ══════════════════════════════════════════════════════════
   六、带有图片的增强版机车展示函数（已废弃，保留用于兼容）
   ══════════════════════════════════════════════════════════ */

// 增强版：显示HXD系列机车（带图片）- 已废弃，现在showLocomotiveType直接显示内容
window.showLocomotiveTypeWithImages = function(category, subType){
  // 直接调用showLocomotiveType，它已经包含图片显示功能
  showLocomotiveType(category, subType);
};

// 显示机车总览（带图片预览）
window.showLocomotiveGalleryWithImages = function(){
  if(!state.selectedMajor){
    showToast('请先选择入学年份和专业','error');
    return;
  }
  
  const loc = KNOWLEDGE_BASE.locomotiveData;
  const imgMap = KNOWLEDGE_BASE.locomotiveImages;

  let html = `
    <div style="margin-bottom:24px;">
      <div style="font-size:18px;font-weight:700;color:var(--primary);margin-bottom:12px;">🚂 中国铁路机车车辆图鉴</div>
      <div style="font-size:13px;color:var(--text-sub);margin-bottom:16px;">本图鉴收录中国国家铁路现役机车车辆型号 ${loc.totalCount || 50}+ 种，配有详细参数和图片</div>
    </div>
  `;

  // 图片展示区
  const featuredImages = [
    { img: imgMap.emuImages.cr, label: '复兴号CR系列', category: 'emu' },
    { img: imgMap.electricImages.hxd, label: '和谐型电力机车', category: 'electric' },
    { img: imgMap.dieselImages.default, label: '内燃机车', category: 'diesel' }
  ];

  html += `
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:24px;">
  `;
  featuredImages.forEach(item => {
    html += `
      <div style="position:relative;height:120px;border-radius:10px;overflow:hidden;cursor:pointer;" onclick="showLocomotiveType('${item.category}','HXD')">
        <img src="${item.img}" style="width:100%;height:100%;object-fit:cover;" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 200%22%3E%3Crect fill=%22%23667eea%22 width=%22400%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22white%22 font-size=%2240%22%3E🚂%3C/text%3E%3C/svg%3E';">
        <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,0.7));color:#fff;padding:8px;font-size:12px;font-weight:500;">
          ${item.label}
        </div>
      </div>
    `;
  });
  html += `</div>`;

  // 分类导航
  html += `
    <div style="margin-bottom:20px;">
      <div style="font-size:14px;font-weight:600;color:var(--primary);margin-bottom:12px;">📚 分类浏览</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
  `;

  const categories = [
    { icon: '⚡', name: '电力机车', color: '#c0392b', bg: '#fdeaea', click: "showLocomotiveType('electric','HXD')" },
    { icon: '💡', name: '韶山系列', color: '#8e44ad', bg: '#f3e8ff', click: "showLocomotiveType('electric','SS')" },
    { icon: '🛢️', name: '和谐内燃', color: '#27ae60', bg: '#e8f5e9', click: "showLocomotiveType('diesel','HXN')" },
    { icon: '💨', name: '东风系列', color: '#f39c12', bg: '#fff8e1', click: "showLocomotiveType('diesel','DF')" },
    { icon: '🚀', name: '复兴号CR', color: '#e74c3c', bg: '#ffebee', click: "showLocomotiveType('emu','CRseries')" },
    { icon: '🚅', name: '和谐号CRH', color: '#3498db', bg: '#e3f2fd', click: "showLocomotiveType('emu','CRHseries')" },
    { icon: '🔧', name: '特种车辆', color: '#34495e', bg: '#f5f5f5', click: "showLocomotiveType('special','engineering')" }
  ];

  categories.forEach(cat => {
    html += `
      <span style="padding:8px 16px;border-radius:20px;background:${cat.bg};color:${cat.color};font-size:13px;cursor:pointer;transition:transform 0.2s;" onclick="${cat.click}" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        ${cat.icon} ${cat.name}
      </span>
    `;
  });

  html += `
      </div>
    </div>
  `;

  // 快速搜索提示
  html += `
    <div style="padding:12px;background:#f8f9fc;border-radius:8px;font-size:12px;color:#666;">
      <strong>💡 快速搜索：</strong>输入车型名称（如"HXD1"、"CR400"、"复兴号"）可直接查看详情
    </div>
  `;

  // 直接添加到消息区域
  if(typeof addBotMessage === 'function'){
    addBotMessage(html);
  }
};

// 修复：直接显示机车图鉴分类，不再通过AI处理
const originalShowLocomotiveGalleryQuick = window.showLocomotiveGalleryQuick;
window.showLocomotiveGalleryQuick = function(useImages = false){
  if(!state.selectedMajor){
    showToast('请先选择入学年份和专业','error');
    return;
  }
  // 直接调用机车图鉴函数，不再通过AI
  if(useImages && window.showLocomotiveGalleryWithImages){
    showLocomotiveGalleryWithImages();
  } else if(window.showLocomotiveGallery){
    showLocomotiveGallery();
  }
};

// 导出模块信息
console.log('✅ 机车车辆图鉴 v2.0 已加载 - 支持图片展示功能');

})();
