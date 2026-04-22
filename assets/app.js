const DATA = {
  stats: [
    { value: "419", label: "企业项目" },
    { value: "167", label: "数字+绿色企业" },
    { value: "622", label: "可匹配政策" },
    { value: "369", label: "案例灵感" }
  ],
  checklist: [
    {
      title: "先判断赛道",
      desc: "节能环保装备、固废循环、水环境处理是当前更容易找到对标企业的方向。"
    },
    {
      title: "再做政策清单",
      desc: "补贴资助、培训辅导和平台服务适合作为学生团队的第一批资源入口。"
    },
    {
      title: "最后推进合作",
      desc: "合作桥会根据你的方向、地区和需求推荐更适合的企业与试点场景。"
    }
  ],
  signals: [
    {
      title: "学生团队更适合轻量起步",
      text: "先把政策、案例和企业样本各收藏两条，再推进第一次试点接触，效率通常更高。"
    },
    {
      title: "数字+绿色是更容易讲清楚的路径",
      text: "平台、系统、人工智能、大数据和物联网，是案例里最常见也最适合学生包装项目的技术抓手。"
    },
    {
      title: "合作要先从小步推进",
      text: "先发意向，再沟通，再交换材料，最后做试点策划，更容易建立双方信任。"
    }
  ],
  tracks: [
    "全部",
    "节能环保装备",
    "固废回收与循环利用",
    "水环境与水处理",
    "环保材料",
    "新能源与储能",
    "农业绿色科技",
    "碳管理与低碳服务"
  ],
  regions: ["全部", "广东省", "江苏省", "上海市", "北京市", "浙江省", "陕西省", "安徽省"],
  needs: ["政策信息", "资金支持", "技术合作", "市场验证", "孵化服务", "导师辅导"],
  policyTypes: ["全部", "补贴资助", "培训辅导", "平台服务", "场地孵化"],
  problems: ["全部", "生态保护", "节能降碳", "水资源", "农业与乡村生态", "新能源储能"],
  techs: ["全部", "人工智能", "大数据", "数据分析", "物联网", "平台", "系统", "智能制造"],
  trackBoard: [
    { label: "节能环保装备", value: 115 },
    { label: "固废回收与循环利用", value: 84 },
    { label: "水环境与水处理", value: 66 },
    { label: "环保材料", value: 48 },
    { label: "新能源与储能", value: 44 },
    { label: "农业绿色科技", value: 42 }
  ],
  financeBoard: [
    { label: "未融资", value: 191 },
    { label: "未披露", value: 86 },
    { label: "A轮", value: 28 },
    { label: "天使轮", value: 24 },
    { label: "Pre-A轮", value: 12 },
    { label: "种子轮", value: 11 }
  ],
  regionHeat: [
    { region: "广东省", heat: 92, track: "节能环保装备", companies: 58, digital: 28 },
    { region: "上海市", heat: 82, track: "节能环保装备", companies: 45, digital: 20 },
    { region: "山东省", heat: 81, track: "节能环保装备", companies: 47, digital: 16 },
    { region: "江苏省", heat: 79, track: "节能环保装备", companies: 41, digital: 19 },
    { region: "北京市", heat: 76, track: "节能环保装备", companies: 38, digital: 15 },
    { region: "浙江省", heat: 69, track: "节能环保装备", companies: 31, digital: 4 }
  ],
  policies: [
    {
      id: "p1",
      title: "广东：关于印发《2026年广东省高校毕业生就业创业十大行动方案》的通知",
      province: "广东",
      support: "补贴资助",
      fit: "高",
      amount: "每人每月不超过2000元",
      mode: "线上线下均可",
      summary: "面向大学生、高校毕业生与青年创业者，覆盖创业贷款、补贴、场地孵化和税费优惠。"
    },
    {
      id: "p2",
      title: "陕西省人民政府办公厅关于切实做好高校毕业生等青年就业创业工作的通知",
      province: "陕西",
      support: "补贴资助",
      fit: "高",
      amount: "不超过500万元",
      mode: "线上线下均可",
      summary: "适合需要创业担保贷款、社保补贴与场地支持的学生团队。"
    },
    {
      id: "p3",
      title: "最新！2022年贵州省高校毕业生就业创业政策服务清单",
      province: "贵州",
      support: "补贴资助",
      fit: "高",
      amount: "不超过20万元",
      mode: "线上线下均可",
      summary: "聚焦创业资助、担保贷款、场地孵化和社保补贴，适合作为起步政策清单。"
    },
    {
      id: "p4",
      title: "江苏：十大行动帮促高校毕业生就业创业",
      province: "江苏",
      support: "培训辅导",
      fit: "高",
      amount: "6000元",
      mode: "线上为主",
      summary: "更偏向见习实训、培训课程、招聘岗位开发和平台服务，适合提升准备度。"
    },
    {
      id: "p5",
      title: "河北：关于做好2026年高校毕业生等青年就业工作的若干措施",
      province: "河北",
      support: "场地孵化",
      fit: "高",
      amount: "400万元",
      mode: "线上线下均可",
      summary: "适合需要租金减免、见习实训与社保补贴的团队先建立试点。"
    },
    {
      id: "p6",
      title: "湖北省促进高校毕业生等青年人才就业创业若干措施",
      province: "湖北",
      support: "补贴资助",
      fit: "高",
      amount: "10亿元",
      mode: "线上线下均可",
      summary: "覆盖创业资助、租金场地、税费优惠与见习实训，适合学生团队做多渠道申报。"
    }
  ],
  cases: [
    {
      id: "c1",
      title: "AI“慧眼”识鸟踪——河湖湿地生态智能守护者",
      school: "北京工商大学",
      award: "特等奖",
      problems: ["生态保护", "水资源"],
      techs: ["人工智能", "大数据", "数据分析"],
      summary: "以河湖鸟类智能监测为核心，结合现场终端与计算平台，形成生态保护类数字项目的完整样板。"
    },
    {
      id: "c2",
      title: "锂云科技——行业领先的电池AI数智化检测系统",
      school: "西安交通大学",
      award: "特等奖",
      problems: ["生态保护", "新能源储能"],
      techs: ["人工智能", "大数据", "数据分析"],
      summary: "聚焦新能源电池检测，把数字孪生与 AI 模型结合，适合对标“技术+产业问题”型创业方向。"
    },
    {
      id: "c3",
      title: "浮探者——基于AI智能感知的海洋浮游生物原位监测装备",
      school: "中国海洋大学",
      award: "一等奖",
      problems: ["生态保护", "水资源"],
      techs: ["人工智能", "大数据", "数据分析"],
      summary: "适合参考“监测装备+算法模型+平台输出”的产品结构。"
    },
    {
      id: "c4",
      title: "“深智鲨”——基于嵌入式AI的小型无人潜航器自主控制系统设计",
      school: "北京信息科技大学",
      award: "一等奖",
      problems: ["生态保护", "水资源"],
      techs: ["人工智能", "物联网", "传感监测"],
      summary: "适合对标水环境场景中的低成本智能设备路线。"
    },
    {
      id: "c5",
      title: "智护国宝——长江生态廊道数智巡护与生态预警系统",
      school: "南京林业大学",
      award: "一等奖",
      problems: ["生态保护", "节能降碳"],
      techs: ["人工智能", "大数据", "数据分析"],
      summary: "适合参考“生态巡护+预警系统+多端协同”的表达方式。"
    },
    {
      id: "c6",
      title: "炆动探林——多模态协同智能火线预测系统",
      school: "四川农业大学",
      award: "一等奖",
      problems: ["生态保护"],
      techs: ["人工智能", "大数据"],
      summary: "适合森林火险、极端天气与应急响应类项目参考。"
    }
  ],
  companies: [
    {
      id: "m1",
      name: "双登股份",
      region: "江苏省",
      track: "新能源与储能",
      stage: "上市/公开市场",
      modes: ["技术共创", "联合开发"],
      offers: ["可联合探索低碳监测与能源优化", "具备数字化产品或平台协同基础"],
      campusFit: ["校园能耗监测/节能优化", "数据分析/平台运营/市场验证"]
    },
    {
      id: "m2",
      name: "陕能股份",
      region: "陕西省",
      track: "综合绿色服务",
      stage: "上市/公开市场",
      modes: ["联合开发"],
      offers: ["适合开展校园-企业双场景验证", "具备数字化产品或平台协同基础"],
      campusFit: ["校园回收/垃圾分类/低碳运营", "数据分析/平台运营/市场验证"]
    },
    {
      id: "m3",
      name: "华源泰盟",
      region: "北京市",
      track: "节能环保装备",
      stage: "战略融资",
      modes: ["场景试点", "联合开发"],
      offers: ["可提供真实环保治理问题场景", "适合联合打磨服务流程"],
      campusFit: ["校园回收/垃圾分类/低碳运营", "数据分析/平台运营/市场验证"]
    },
    {
      id: "m4",
      name: "蔚复来",
      region: "浙江省",
      track: "固废回收与循环利用",
      stage: "后期",
      modes: ["场景试点", "联合开发"],
      offers: ["可提供回收处置场景", "具备数字化产品协同基础"],
      campusFit: ["校园回收/垃圾分类/低碳运营", "绿色消费/积分激励"]
    },
    {
      id: "m5",
      name: "中川农业",
      region: "安徽省",
      track: "农业绿色科技",
      stage: "战略融资",
      modes: ["校地协同", "联合开发"],
      offers: ["可拓展乡村生态试验场景", "适合联合做校园与乡村双场景验证"],
      campusFit: ["校园农场/乡村振兴试点", "数据分析/平台运营/市场验证"]
    },
    {
      id: "m6",
      name: "绿色家园APP",
      region: "上海市",
      track: "综合绿色服务",
      stage: "战略融资",
      modes: ["联合开发"],
      offers: ["适合联合打磨商业模式与服务流程", "具备数字化产品协同基础"],
      campusFit: ["绿色消费/积分激励/社区传播", "数据分析/平台运营/市场验证"]
    }
  ],
  platforms: [
    {
      name: "广东省职业技能培训和评价服务平台",
      region: "广东省",
      type: "培训与评价服务平台",
      services: ["职业技能评价", "职业技能培训", "创业培训"],
      desc: "适合办理培训、评价和补贴相关事项。"
    },
    {
      name: "广东公共就业服务云平台",
      region: "广东省",
      type: "综合就业服务平台",
      services: ["就业登记", "失业登记", "资格认定"],
      desc: "适合高校毕业生信息登记、证件申领与就业服务。"
    },
    {
      name: "粤就业·广东就业服务（小程序）",
      region: "广东省",
      type: "小程序/移动服务入口",
      services: ["就业登记", "失业登记", "社保补贴"],
      desc: "适合移动端快速处理创业资助和社保补贴事项。"
    },
    {
      name: "国家大学生就业服务平台",
      region: "全国",
      type: "综合就业服务平台",
      services: ["政策查询"],
      desc: "适合集中检索大学生就业创业相关政策和服务。"
    }
  ],
  events: [
    { name: "中国“互联网+”大学生创新创业大赛", tags: ["创业", "创新", "大学生"] },
    { name: "中国国际大学生创新创业大赛", tags: ["创业", "创新", "大学生"] },
    { name: "中国大学生创业计划竞赛", tags: ["创业", "大学生"] },
    { name: "北京高校大学生创新创业大赛", tags: ["创业", "创新", "大学生"] }
  ]
};

const DEFAULT_STATE = {
  view: "home",
  authTab: "login",
  user: null,
  savedPolicies: [],
  savedCases: [],
  savedCompanies: [],
  applications: [],
  filters: {
    marketTrack: "全部",
    marketRegion: "全部",
    policyType: "全部",
    caseProblem: "全部",
    caseTech: "全部",
    collabTrack: "全部"
  },
  search: { market: "", policy: "", collab: "" },
  diagnosis: {
    projectName: "校园低碳回收服务平台",
    track: "固废回收与循环利用",
    region: "广东省",
    stage: "prepare",
    digital: "mid",
    needs: ["政策信息", "市场验证", "技术合作"]
  },
  tasks: [
    { id: "t1", title: "完成项目诊断", desc: "形成一份可解释的方向建议。" },
    { id: "t2", title: "收藏 2 条政策", desc: "先建立自己的申报清单。" },
    { id: "t3", title: "申请 1 个合作机会", desc: "进入第一次真实沟通。" }
  ]
};

const STORAGE_KEY = "green-compass-lite-state-v2";
const USER_KEY = "green-compass-lite-users-v2";
const SESSION_KEY = "green-compass-lite-session-v2";

const DEMO_USERS = [
  { name: "绿色创业团队", email: "demo@student.green", password: "123456", role: "student" },
  { name: "企业创新部门", email: "demo@enterprise.green", password: "123456", role: "enterprise" }
];

const APP = { state: null, users: [] };

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const clone = (value) => JSON.parse(JSON.stringify(value));

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(APP.state));
  localStorage.setItem(SESSION_KEY, JSON.stringify(APP.state.user));
}

function saveUsers() {
  localStorage.setItem(USER_KEY, JSON.stringify(APP.users));
}

function initUsers() {
  const local = JSON.parse(localStorage.getItem(USER_KEY) || "null");
  APP.users = Array.isArray(local) && local.length ? local : clone(DEMO_USERS);
  saveUsers();
}

function initState() {
  const local = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  APP.state = local
    ? {
        ...clone(DEFAULT_STATE),
        ...local,
        filters: { ...clone(DEFAULT_STATE.filters), ...(local.filters || {}) },
        search: { ...clone(DEFAULT_STATE.search), ...(local.search || {}) },
        diagnosis: { ...clone(DEFAULT_STATE.diagnosis), ...(local.diagnosis || {}) }
      }
    : clone(DEFAULT_STATE);
  const session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
  if (session) APP.state.user = session;
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
}

function setView(view) {
  APP.state.view = view;
  $$(".view").forEach((el) => el.classList.toggle("active", el.id === `view-${view}`));
  $$(".nav-link").forEach((el) => el.classList.toggle("active", el.dataset.view === view));
  renderCurrentView();
  persistState();
}

function renderTopbar() {
  const btn = $(".ghost-btn");
  if (APP.state.user) {
    btn.textContent = `${APP.state.user.name} · 退出`;
    btn.dataset.action = "logout";
  } else {
    btn.textContent = "登录 / 注册";
    btn.dataset.action = "open-auth";
  }
}

function renderHero() {
  $("#heroStats").innerHTML = DATA.stats
    .map((item) => `<div class="stat"><strong>${item.value}</strong><span>${item.label}</span></div>`)
    .join("");
  $("#heroChecklist").innerHTML = DATA.checklist
    .map(
      (item) =>
        `<div class="check-item"><strong>${item.title}</strong><span>${item.desc}</span></div>`
    )
    .join("");
}

function renderDiagnosisForm() {
  $("#projectName").value = APP.state.diagnosis.projectName;
  $("#trackSelect").innerHTML = DATA.tracks
    .filter((item) => item !== "全部")
    .map((item) => `<option ${item === APP.state.diagnosis.track ? "selected" : ""}>${item}</option>`)
    .join("");
  $("#regionSelect").innerHTML = DATA.regions
    .filter((item) => item !== "全部")
    .map((item) => `<option ${item === APP.state.diagnosis.region ? "selected" : ""}>${item}</option>`)
    .join("");
  $("#stageSelect").value = APP.state.diagnosis.stage;
  $("#digitalSelect").value = APP.state.diagnosis.digital;
  $("#needWrap").innerHTML = DATA.needs
    .map(
      (item) =>
        `<button type="button" class="need-chip ${APP.state.diagnosis.needs.includes(item) ? "active" : ""}" data-action="toggle-need" data-need="${item}">${item}</button>`
    )
    .join("");
}

function computeDiagnosis() {
  const d = APP.state.diagnosis;
  let score = 62;
  if (["节能环保装备", "固废回收与循环利用", "水环境与水处理"].includes(d.track)) score += 10;
  if (["广东省", "江苏省", "上海市", "北京市"].includes(d.region)) score += 8;
  if (d.stage === "prepare") score += 6;
  if (d.stage === "pilot") score += 10;
  if (d.stage === "growth") score += 12;
  if (d.digital === "mid") score += 6;
  if (d.digital === "strong") score += 11;
  score += Math.min(d.needs.length * 3, 12);
  score = clamp(score, 58, 96);

  const priorities = [];
  if (d.needs.includes("政策信息")) priorities.push("先建立政策申报清单");
  if (d.needs.includes("市场验证")) priorities.push("优先找校园试点和真实用户反馈");
  if (d.needs.includes("技术合作")) priorities.push("尽快连接能共创的企业或实验室");
  if (d.needs.includes("资金支持")) priorities.push("把赛事和小额资助一起纳入节奏");
  if (!priorities.length) priorities.push("先完成方向梳理，再建立行动清单");

  const reasons = [
    `${d.track}在现有企业样本中更容易找到对标场景和合作方向。`,
    `${d.region}是当前绿色企业更集中的区域之一，适合先做试点判断。`,
    d.digital === "strong"
      ? "团队数字能力较强，适合走“数字+绿色”路线。"
      : "当前更适合先做轻量 MVP，再逐步补强数字化能力。"
  ];

  const roadmap = [
    `1 周内：锁定 ${d.track} 的具体问题场景，完成项目表达和价值主张梳理。`,
    "2 周内：收藏政策、案例与企业各至少 2 条，形成自己的起步资料包。",
    "1 个月内：完成第一次试点接触或赛事报名，开始拿到外部反馈。"
  ];

  return { score, priorities, reasons, roadmap };
}

function renderDiagnosis() {
  const result = computeDiagnosis();
  $("#diagnosisResult").innerHTML = `
    <div class="score-panel">
      <div class="score-ring" style="--score:${result.score};position:relative"><span>${result.score}</span></div>
      <div>
        <div class="badge good">当前适配度</div>
        <h3 style="margin:10px 0 8px;font-size:24px">${result.priorities[0]}</h3>
        <p style="margin:0;color:var(--muted);line-height:1.8">这不是一个黑箱分数。系统会把赛道热度、区域样本、数字能力和当前诉求一起考虑，再给出下一步动作。</p>
      </div>
    </div>
    <div class="why-list" style="margin-top:16px">
      ${result.reasons
        .map(
          (item) =>
            `<div class="why-item"><strong>为什么这样判断</strong><span>${item}</span></div>`
        )
        .join("")}
    </div>
  `;
  $("#roadmap").innerHTML = result.roadmap
    .map((item) => {
      const parts = item.split("：");
      return `<div class="timeline-item"><strong>${parts[0]}</strong><span>${parts[1] || ""}</span></div>`;
    })
    .join("");
}

function renderSignals() {
  $("#homeSignals").innerHTML = DATA.signals
    .map((item) => `<div class="insight-item"><strong>${item.title}</strong><span>${item.text}</span></div>`)
    .join("");

  const links = [...DATA.platforms.slice(0, 2), ...DATA.events.slice(0, 2)];
  $("#quickLinks").innerHTML = links
    .map((item) => {
      const type = item.region ? "platform" : "event";
      const meta = item.region || item.tags.join(" / ");
      return `<div class="link-card"><div><strong>${item.name}</strong><span>${meta}</span></div><button class="tiny-btn" data-action="open-detail" data-type="${type}" data-id="${item.name}">查看</button></div>`;
    })
    .join("");
}

function renderBars(selector, items) {
  const max = Math.max(...items.map((item) => item.value));
  $(selector).innerHTML = items
    .map(
      (item) => `
        <div class="bar-row">
          <span>${item.label}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${(item.value / max) * 100}%"></div></div>
          <strong>${item.value}</strong>
        </div>
      `
    )
    .join("");
}

function renderChipGroup(items, selected, action, key) {
  return items
    .map(
      (item) =>
        `<button class="chip ${item === selected ? "active" : ""}" data-action="${action}" data-${key}="${item}">${item}</button>`
    )
    .join("");
}

function matchCompany(item) {
  const d = APP.state.diagnosis;
  let score = 70;
  if (d.track === item.track) score += 12;
  if (item.region === d.region) score += 6;
  if (d.needs.includes("市场验证") && item.modes.includes("场景试点")) score += 7;
  if (d.needs.includes("技术合作") && item.modes.includes("技术共创")) score += 8;
  if (d.digital !== "light" && item.campusFit.some((fit) => fit.includes("数据分析"))) score += 5;
  return clamp(score, 68, 96);
}

function companyCard(item, mode) {
  const match = matchCompany(item);
  return `
    <article class="item-card">
      <span class="badge good">匹配度 ${match}</span>
      <h3>${item.name}</h3>
      <div class="meta-row">
        <span class="tag">${item.region}</span>
        <span class="tag">${item.track}</span>
        <span class="tag">${item.stage}</span>
      </div>
      <p>${item.offers[0]}。${item.campusFit[0]}。</p>
      <div class="tag-row" style="margin-top:12px">${item.modes.map((x) => `<span class="tag">${x}</span>`).join("")}</div>
      <div class="item-actions">
        <button class="secondary-btn" data-action="save-company" data-id="${item.id}">${APP.state.savedCompanies.includes(item.id) ? "已收藏" : "收藏"}</button>
        <button class="primary-btn" data-action="${mode === "collab" ? "apply-company" : "jump-collab"}" data-id="${item.id}">${mode === "collab" ? "申请沟通" : "查看合作"}</button>
      </div>
    </article>
  `;
}

function renderMarket() {
  $("#marketTrackChips").innerHTML = renderChipGroup(
    DATA.tracks,
    APP.state.filters.marketTrack,
    "set-market-track",
    "track"
  );
  $("#marketRegionChips").innerHTML = renderChipGroup(
    DATA.regions,
    APP.state.filters.marketRegion,
    "set-market-region",
    "region"
  );
  $("#marketSearch").value = APP.state.search.market;
  renderBars("#trackBoard", DATA.trackBoard);
  renderBars("#financeBoard", DATA.financeBoard);

  $("#heatGrid").innerHTML = DATA.regionHeat
    .map(
      (item) => `
        <div class="heat-card">
          <strong>${item.heat}</strong>
          <span>${item.region}</span>
          <div class="meta-row" style="margin-top:12px">
            <span class="tag">${item.track}</span>
            <span class="tag">${item.companies} 家企业</span>
            <span class="tag">${item.digital} 家数字+绿色</span>
          </div>
        </div>
      `
    )
    .join("");

  const q = APP.state.search.market.trim();
  const list = DATA.companies.filter((item) => {
    const trackOk =
      APP.state.filters.marketTrack === "全部" || item.track === APP.state.filters.marketTrack;
    const regionOk =
      APP.state.filters.marketRegion === "全部" || item.region === APP.state.filters.marketRegion;
    const queryOk = !q || `${item.name}${item.track}${item.region}${item.modes.join("")}`.includes(q);
    return trackOk && regionOk && queryOk;
  });

  $("#companyGrid").innerHTML = list.length
    ? list.map((item) => companyCard(item, "market")).join("")
    : `<div class="saved-card empty" style="grid-column:1/-1"><div><strong>暂无结果</strong><span>换一个赛道或地区再试试。</span></div></div>`;
}

function renderPolicies() {
  $("#policyTypeChips").innerHTML = renderChipGroup(
    DATA.policyTypes,
    APP.state.filters.policyType,
    "set-policy-type",
    "type"
  );
  $("#policySearch").value = APP.state.search.policy;
  const q = APP.state.search.policy.trim();

  const list = DATA.policies.filter((item) => {
    const typeOk =
      APP.state.filters.policyType === "全部" || item.support === APP.state.filters.policyType;
    const queryOk = !q || `${item.title}${item.province}${item.support}${item.summary}`.includes(q);
    return typeOk && queryOk;
  });

  $("#policyGrid").innerHTML = list
    .map(
      (item) => `
        <article class="item-card">
          <span class="badge ${item.fit === "高" ? "good" : ""}">${item.fit}相关</span>
          <h3>${item.title}</h3>
          <div class="meta-row">
            <span class="tag">${item.province}</span>
            <span class="tag">${item.support}</span>
            <span class="tag">${item.mode}</span>
          </div>
          <p>${item.summary}</p>
          <div class="meta-row"><span class="tag">额度线索：${item.amount}</span></div>
          <div class="item-actions">
            <button class="secondary-btn" data-action="save-policy" data-id="${item.id}">${APP.state.savedPolicies.includes(item.id) ? "已收藏" : "加入清单"}</button>
            <button class="primary-btn" data-action="open-detail" data-type="policy" data-id="${item.id}">查看详情</button>
          </div>
        </article>
      `
    )
    .join("");

  $("#platformList").innerHTML = DATA.platforms
    .map(
      (item) => `
        <div class="stack-item">
          <strong>${item.name}</strong>
          <span>${item.region} · ${item.type}</span>
          <div class="meta-row" style="margin-top:10px">${item.services
            .map((x) => `<span class="tag">${x}</span>`)
            .join("")}</div>
        </div>
      `
    )
    .join("");

  $("#eventList").innerHTML = DATA.events
    .map(
      (item) => `
        <div class="stack-item">
          <strong>${item.name}</strong>
          <div class="meta-row" style="margin-top:10px">${item.tags
            .map((x) => `<span class="tag">${x}</span>`)
            .join("")}</div>
        </div>
      `
    )
    .join("");
}

function renderCases() {
  $("#problemChips").innerHTML = renderChipGroup(
    DATA.problems,
    APP.state.filters.caseProblem,
    "set-problem",
    "problem"
  );
  $("#techChips").innerHTML = renderChipGroup(
    DATA.techs,
    APP.state.filters.caseTech,
    "set-tech",
    "tech"
  );

  const list = DATA.cases.filter((item) => {
    const problemOk =
      APP.state.filters.caseProblem === "全部" || item.problems.includes(APP.state.filters.caseProblem);
    const techOk =
      APP.state.filters.caseTech === "全部" || item.techs.includes(APP.state.filters.caseTech);
    return problemOk && techOk;
  });

  $("#caseGrid").innerHTML = list
    .map(
      (item) => `
        <article class="item-card">
          <span class="badge">${item.award}</span>
          <h3>${item.title}</h3>
          <div class="meta-row">
            <span class="tag">${item.school}</span>
            ${item.problems.map((x) => `<span class="tag">${x}</span>`).join("")}
          </div>
          <p>${item.summary}</p>
          <div class="tag-row" style="margin-top:12px">${item.techs
            .map((x) => `<span class="tag">${x}</span>`)
            .join("")}</div>
          <div class="item-actions">
            <button class="secondary-btn" data-action="save-case" data-id="${item.id}">${APP.state.savedCases.includes(item.id) ? "已收藏" : "收藏案例"}</button>
            <button class="primary-btn" data-action="open-detail" data-type="case" data-id="${item.id}">提炼灵感</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCollab() {
  $("#collabTrackChips").innerHTML = renderChipGroup(
    DATA.tracks,
    APP.state.filters.collabTrack,
    "set-collab-track",
    "track"
  );
  $("#collabSearch").value = APP.state.search.collab;
  const q = APP.state.search.collab.trim();
  const list = DATA.companies.filter((item) => {
    const trackOk =
      APP.state.filters.collabTrack === "全部" || item.track === APP.state.filters.collabTrack;
    const queryOk = !q || `${item.name}${item.track}${item.region}${item.modes.join("")}`.includes(q);
    return trackOk && queryOk;
  });

  $("#collabGrid").innerHTML = list.map((item) => companyCard(item, "collab")).join("");

  $("#collabRules").innerHTML = [
    "先发意向，再沟通，再交换材料，最后做试点策划，更适合建立早期信任。",
    "如果你还没有完整 BP，可以先用问题场景、目标用户和验证计划来启动沟通。",
    "每次合作推进状态都会保留，便于你下次继续跟进。"
  ]
    .map(
      (item) => `<div class="rule-item"><strong>合作提醒</strong><span>${item}</span></div>`
    )
    .join("");

  const total = APP.state.applications.length;
  const moving = APP.state.applications.filter((item) => item.step !== "待企业确认").length;
  $("#collabSummary").innerHTML = `<strong style="display:block;margin-bottom:6px">当前对接概览</strong><span>你已经发起 ${total} 条合作意向，其中 ${moving} 条正在向资料交换或试点策划推进。</span>`;
}

function savedCard(title, items) {
  if (!items.length) {
    return `<div class="saved-card empty"><div><strong>${title}</strong><span>还没有内容</span></div></div>`;
  }
  return `<div class="saved-card"><strong>${title}</strong><div class="saved-row" style="margin-top:12px">${items
    .map((item) => `<span class="tag">${item}</span>`)
    .join("")}</div></div>`;
}

function renderWorkspace() {
  const user = APP.state.user;
  $("#workspaceLead").textContent = user
    ? `欢迎回来，${user.name}。这里会保留你的收藏、诊断记录和合作进展。`
    : "登录后可保留收藏、诊断记录和合作进展。";

  $("#workspaceProfile").innerHTML = user
    ? `<strong style="display:block;margin-bottom:8px">${user.name}</strong><span>${user.role === "student" ? "大学生团队" : "企业用户"} · ${user.email}</span>`
    : `<strong style="display:block;margin-bottom:8px">还未登录</strong><span>登录后即可解锁个人工作台、合作进度和长期留存。</span><div style="margin-top:14px"><button class="primary-btn" data-action="open-auth">立即登录</button></div>`;

  const completed = new Set(["t1"]);
  if (APP.state.savedPolicies.length >= 2) completed.add("t2");
  if (APP.state.applications.length >= 1) completed.add("t3");

  $("#taskList").innerHTML = APP.state.tasks
    .map(
      (task) => `
        <div class="task-item">
          <strong>${task.title}</strong>
          <span>${task.desc}</span>
          <div class="meta-row" style="margin-top:10px">
            <span class="badge ${completed.has(task.id) ? "good" : ""}">${completed.has(task.id) ? "已完成" : "待完成"}</span>
          </div>
        </div>
      `
    )
    .join("");

  const savedPolicies = DATA.policies.filter((item) => APP.state.savedPolicies.includes(item.id)).map((item) => item.title);
  const savedCases = DATA.cases.filter((item) => APP.state.savedCases.includes(item.id)).map((item) => item.title);
  const savedCompanies = DATA.companies.filter((item) => APP.state.savedCompanies.includes(item.id)).map((item) => item.name);

  $("#savedGrid").innerHTML = [
    savedCard("政策清单", savedPolicies),
    savedCard("案例收藏", savedCases),
    savedCard("合作对象", savedCompanies)
  ].join("");

  $("#pipeline").innerHTML = APP.state.applications.length
    ? APP.state.applications
        .map((item) => {
          const company = DATA.companies.find((x) => x.id === item.companyId);
          return `
            <div class="pipeline-item">
              <div>
                <strong>${company ? company.name : "合作对象"}</strong>
                <span>${item.note}</span>
              </div>
              <div>
                <span class="pipeline-step">${item.step}</span>
                <div style="margin-top:10px">
                  <button class="tiny-btn" data-action="advance-application" data-id="${item.id}">推进一格</button>
                </div>
              </div>
            </div>
          `;
        })
        .join("")
    : `<div class="saved-card empty"><div><strong>还没有合作进展</strong><span>去合作桥里挑一个更适合的企业先发起意向。</span></div></div>`;
}

function ensureLogin() {
  if (APP.state.user) return true;
  openAuth("login");
  toast("请先登录后继续操作");
  return false;
}

function toggleSaved(key, id, message) {
  if (!ensureLogin()) return;
  const list = APP.state[key];
  const index = list.indexOf(id);
  if (index >= 0) list.splice(index, 1);
  else list.push(id);
  persistState();
  renderCurrentView();
  renderWorkspace();
  renderTopbar();
  toast(message);
}

function applyCompany(id) {
  if (!ensureLogin()) return;
  if (APP.state.applications.some((item) => item.companyId === id)) {
    toast("你已经发起过这条合作意向了");
    return;
  }
  const company = DATA.companies.find((item) => item.id === id);
  APP.state.applications.unshift({
    id: `app-${Date.now()}`,
    companyId: id,
    step: "待企业确认",
    note: `已向 ${company.name} 发送合作意向，建议准备项目简介、试点设想和时间安排。`
  });
  persistState();
  renderCollab();
  renderWorkspace();
  toast("合作意向已发出");
}

function advanceApplication(id) {
  const steps = ["待企业确认", "初步沟通", "交换资料", "试点策划"];
  const target = APP.state.applications.find((item) => item.id === id);
  if (!target) return;
  const next = steps[Math.min(steps.indexOf(target.step) + 1, steps.length - 1)];
  target.step = next;
  target.note =
    next === "初步沟通"
      ? "可以准备项目简介、问题清单和目标场景。"
      : next === "交换资料"
        ? "现在适合交换更完整的项目材料和验证计划。"
        : "已进入试点策划阶段，建议细化目标、节点和反馈方式。";
  persistState();
  renderCollab();
  renderWorkspace();
  toast("合作进展已更新");
}

function openAuth(tab) {
  APP.state.authTab = tab || "login";
  $("#authModal").classList.add("show");
  syncAuthTabs();
}

function closeAuth() {
  $("#authModal").classList.remove("show");
}

function syncAuthTabs() {
  $$(".auth-tab").forEach((btn) => btn.classList.toggle("active", btn.dataset.authTab === APP.state.authTab));
  $("#loginForm").classList.toggle("active", APP.state.authTab === "login");
  $("#registerForm").classList.toggle("active", APP.state.authTab === "register");
  $("#authNote").textContent =
    APP.state.authTab === "login" ? "" : "注册后会在本设备保存账号信息。";
}

function openDrawer(title, body) {
  $("#drawerBody").innerHTML = `<h2 style="margin:0 0 12px;font-size:28px">${title}</h2>${body}`;
  $("#detailDrawer").classList.add("show");
}

function closeDrawer() {
  $("#detailDrawer").classList.remove("show");
}

function findDetail(type, id) {
  if (type === "policy") return DATA.policies.find((item) => item.id === id);
  if (type === "case") return DATA.cases.find((item) => item.id === id);
  if (type === "platform") return DATA.platforms.find((item) => item.name === id);
  if (type === "event") return DATA.events.find((item) => item.name === id);
  return null;
}

function showDetail(type, id) {
  const item = findDetail(type, id);
  if (!item) return;

  if (type === "policy") {
    openDrawer(
      item.title,
      `<div class="meta-row"><span class="tag">${item.province}</span><span class="tag">${item.support}</span><span class="tag">${item.mode}</span></div>
      <p style="line-height:1.8;color:var(--muted)">${item.summary}</p>
      <div class="why-list">
        <div class="why-item"><strong>适合谁先用</strong><span>刚进入筹备或试点阶段、需要政策入口和起步支持的学生团队。</span></div>
        <div class="why-item"><strong>怎么开始</strong><span>先加入清单，再去官方平台检索对应事项与申报要求。</span></div>
      </div>`
    );
  }

  if (type === "case") {
    openDrawer(
      item.title,
      `<div class="meta-row"><span class="tag">${item.school}</span><span class="tag">${item.award}</span>${item.problems
        .map((x) => `<span class="tag">${x}</span>`)
        .join("")}</div>
      <p style="line-height:1.8;color:var(--muted)">${item.summary}</p>
      <div class="why-list">
        <div class="why-item"><strong>可以借鉴什么</strong><span>优先学习它的问题定义方式、技术组织方式和落地场景表达。</span></div>
        <div class="why-item"><strong>适合怎么用</strong><span>把它作为路演中的对标参考，而不是直接照搬方案。</span></div>
      </div>`
    );
  }

  if (type === "platform") {
    openDrawer(
      item.name,
      `<div class="meta-row"><span class="tag">${item.region}</span><span class="tag">${item.type}</span></div>
      <p style="line-height:1.8;color:var(--muted)">${item.desc}</p>
      <div class="tag-row">${item.services.map((x) => `<span class="tag">${x}</span>`).join("")}</div>`
    );
  }

  if (type === "event") {
    openDrawer(
      item.name,
      `<div class="tag-row">${item.tags.map((x) => `<span class="tag">${x}</span>`).join("")}</div>
      <p style="line-height:1.8;color:var(--muted)">适合作为展示项目、获得导师反馈和链接外部资源的入口。</p>`
    );
  }
}

function login(email, password) {
  return APP.users.find((item) => item.email === email && item.password === password) || null;
}

function register(name, email, password, role) {
  if (APP.users.some((item) => item.email === email)) return "这个邮箱已经注册过了。";
  APP.users.push({ name, email, password, role });
  saveUsers();
  return "";
}

function renderCurrentView() {
  renderDiagnosisForm();
  renderDiagnosis();
  renderSignals();
  renderMarket();
  renderPolicies();
  renderCases();
  renderCollab();
  renderWorkspace();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action],[data-view],[data-view-jump],[data-auth-tab]");
  if (!target) return;

  if (target.dataset.view) {
    setView(target.dataset.view);
    return;
  }

  if (target.dataset.viewJump) {
    setView(target.dataset.viewJump);
    return;
  }

  if (target.dataset.authTab) {
    APP.state.authTab = target.dataset.authTab;
    syncAuthTabs();
    return;
  }

  const action = target.dataset.action;
  if (action === "go-home") return setView("home");
  if (action === "open-auth") return openAuth("login");
  if (action === "close-auth") return closeAuth();
  if (action === "close-drawer") return closeDrawer();
  if (action === "open-diagnosis") {
    setView("home");
    window.scrollTo({ top: 260, behavior: "smooth" });
    return;
  }
  if (action === "reset-diagnosis") {
    APP.state.diagnosis = clone(DEFAULT_STATE.diagnosis);
    persistState();
    renderDiagnosisForm();
    renderDiagnosis();
    return;
  }
  if (action === "toggle-need") {
    const need = target.dataset.need;
    const list = APP.state.diagnosis.needs;
    const index = list.indexOf(need);
    if (index >= 0) list.splice(index, 1);
    else list.push(need);
    persistState();
    renderDiagnosisForm();
    renderDiagnosis();
    return;
  }
  if (action === "set-market-track") {
    APP.state.filters.marketTrack = target.dataset.track;
    persistState();
    renderMarket();
    return;
  }
  if (action === "set-market-region") {
    APP.state.filters.marketRegion = target.dataset.region;
    persistState();
    renderMarket();
    return;
  }
  if (action === "set-policy-type") {
    APP.state.filters.policyType = target.dataset.type;
    persistState();
    renderPolicies();
    return;
  }
  if (action === "set-problem") {
    APP.state.filters.caseProblem = target.dataset.problem;
    persistState();
    renderCases();
    return;
  }
  if (action === "set-tech") {
    APP.state.filters.caseTech = target.dataset.tech;
    persistState();
    renderCases();
    return;
  }
  if (action === "set-collab-track") {
    APP.state.filters.collabTrack = target.dataset.track;
    persistState();
    renderCollab();
    return;
  }
  if (action === "jump-collab") {
    setView("collab");
    return;
  }
  if (action === "save-policy") return toggleSaved("savedPolicies", target.dataset.id, "政策清单已更新");
  if (action === "save-case") return toggleSaved("savedCases", target.dataset.id, "案例收藏已更新");
  if (action === "save-company") return toggleSaved("savedCompanies", target.dataset.id, "合作对象清单已更新");
  if (action === "apply-company") return applyCompany(target.dataset.id);
  if (action === "open-detail") return showDetail(target.dataset.type, target.dataset.id);
  if (action === "advance-application") return advanceApplication(target.dataset.id);
  if (action === "logout") {
    APP.state.user = null;
    persistState();
    renderTopbar();
    renderWorkspace();
    toast("已退出登录");
  }
});

$("#marketSearch").addEventListener("input", (event) => {
  APP.state.search.market = event.target.value;
  persistState();
  renderMarket();
});

$("#policySearch").addEventListener("input", (event) => {
  APP.state.search.policy = event.target.value;
  persistState();
  renderPolicies();
});

$("#collabSearch").addEventListener("input", (event) => {
  APP.state.search.collab = event.target.value;
  persistState();
  renderCollab();
});

$("#diagnosisForm").addEventListener("submit", (event) => {
  event.preventDefault();
  APP.state.diagnosis.projectName = $("#projectName").value.trim() || DEFAULT_STATE.diagnosis.projectName;
  APP.state.diagnosis.track = $("#trackSelect").value;
  APP.state.diagnosis.region = $("#regionSelect").value;
  APP.state.diagnosis.stage = $("#stageSelect").value;
  APP.state.diagnosis.digital = $("#digitalSelect").value;
  persistState();
  renderDiagnosis();
  toast("诊断建议已刷新");
});

$("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = $("#loginEmail").value.trim();
  const password = $("#loginPassword").value.trim();
  const user = login(email, password);
  if (!user) {
    $("#authNote").textContent = "邮箱或密码不正确。";
    return;
  }
  APP.state.user = { name: user.name, email: user.email, role: user.role };
  persistState();
  closeAuth();
  renderTopbar();
  renderWorkspace();
  setView("workspace");
  toast("登录成功");
});

$("#registerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = $("#registerName").value.trim();
  const email = $("#registerEmail").value.trim();
  const role = $("#registerRole").value;
  const password = $("#registerPassword").value.trim();
  if (!name || !email || password.length < 6) {
    $("#authNote").textContent = "请完整填写信息，密码至少 6 位。";
    return;
  }
  const message = register(name, email, password, role);
  if (message) {
    $("#authNote").textContent = message;
    return;
  }
  APP.state.authTab = "login";
  syncAuthTabs();
  $("#loginEmail").value = email;
  $("#loginPassword").value = password;
  $("#authNote").textContent = "注册成功，现在可以直接登录。";
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAuth();
    closeDrawer();
  }
});

function boot() {
  initUsers();
  initState();
  const params = new URLSearchParams(location.search);
  const demo = params.get("demo");
  const page = params.get("page");

  if (demo === "student") APP.state.user = { name: "绿色创业团队", email: "demo@student.green", role: "student" };
  if (demo === "enterprise") APP.state.user = { name: "企业创新部门", email: "demo@enterprise.green", role: "enterprise" };
  if (page && ["home", "market", "policy", "cases", "collab", "workspace"].includes(page)) {
    APP.state.view = page;
  }

  persistState();
  renderTopbar();
  renderHero();
  renderCurrentView();
  syncAuthTabs();
  setView(APP.state.view);
}

boot();
