const projects = [
  {
    title: "月鳞绮纪",
    type: "AI微电影",
    category: "AI微电影",
    media: "http://thes7p03x.hn-bkt.clouddn.com/AI微电影_东方奇幻_月鳞绮纪.mp4",
    poster: "http://thes7p03x.hn-bkt.clouddn.com/AI短剧_悬疑惊悚_诡楼杀局_海报.jpg",
    desc: "东方奇幻视觉短片，以高概念美术、电影化镜头和 AI 影像生成呈现仙侠质感。",
    tagline: "东方美学与 AI 影像生成的电影化视觉短片。",
    highlights: ["东方美学视觉设定", "奇幻场景生成", "电影感镜头组织", "适合首页主视觉展示"]
  },
  {
    title: "城市宣传片",
    type: "品牌视觉",
    category: "品牌视觉",
    media: "http://thes7p03x.hn-bkt.clouddn.com/品牌视觉_城市形象_城市宣传片.mp4",
    poster: "",
    desc: "城市形象类品牌视觉片，适合展示宏观叙事、空间影像和城市品牌包装能力。",
    tagline: "以城市空间和视觉节奏塑造品牌形象。",
    highlights: ["城市品牌表达", "大场景视觉调度", "宣传片叙事", "商业形象包装"]
  },
  {
    title: "医院宣传片",
    type: "AI广告片",
    category: "AI广告片",
    media: "http://thes7p03x.hn-bkt.clouddn.com/AI广告片_医疗场景_医院宣传片.mp4",
    poster: "http://thes7p03x.hn-bkt.clouddn.com/AI短剧_悬疑犯罪_消失的二重奏_海报.jpg",
    desc: "医疗场景宣传片，面向机构传播与品牌信任建设，突出行业质感和清晰信息表达。",
    tagline: "面向机构传播的医疗场景品牌广告片。",
    highlights: ["医疗行业视觉", "广告片成片能力", "机构宣传语境", "商业项目交付"]
  },
  {
    title: "一千零一次告白",
    type: "AI短剧",
    category: "AI短剧",
    media: "http://thes7p03x.hn-bkt.clouddn.com/AI短剧_都市爱情_10001次告白.mp4",
    poster: "http://thes7p03x.hn-bkt.clouddn.com/AI短剧_都市爱情_一千零一次告白_海报.jpg",
    desc: "都市爱情短剧，适合展示情绪推进、人物关系和甜宠向短剧节奏。",
    tagline: "都市爱情题材，聚焦甜宠关系与情绪推进。",
    highlights: ["都市爱情题材", "甜宠叙事", "情绪钩子设计", "短剧商业表达"]
  },
  {
    title: "前任9海王攻略",
    type: "AI短剧",
    category: "AI短剧",
    media: "http://thes7p03x.hn-bkt.clouddn.com/AI短剧_都市情感_前任9海王攻略.mp4",
    poster: "",
    desc: "都市情感题材短剧，围绕关系冲突与反转情节展开，适合展示女频内容判断。",
    tagline: "都市情感冲突与反转关系的短剧样片。",
    highlights: ["都市情感", "反转剧情", "强冲突关系", "平台短剧气质"]
  },
  {
    title: "荒村",
    type: "AI短剧",
    category: "AI短剧",
    media: "http://thes7p03x.hn-bkt.clouddn.com/AI短剧_乡村悬疑_荒村.mp4",
    poster: "http://thes7p03x.hn-bkt.clouddn.com/AI短剧_乡村惊悚_回乡惊魂_海报.jpg",
    desc: "乡村悬疑题材，强化惊悚氛围、地域空间和悬念递进。",
    tagline: "乡村空间里的悬疑氛围与惊悚张力。",
    highlights: ["乡村悬疑", "氛围营造", "惊悚类型化", "悬念节奏"]
  },
  {
    title: "全球器灵",
    type: "AI漫剧",
    category: "AI漫剧",
    media: "http://thes7p03x.hn-bkt.clouddn.com/AI漫剧_奇幻器灵_全球器灵.mp4",
    poster: "",
    desc: "奇幻器灵设定漫剧，适合展示世界观塑造、角色视觉和长线 IP 化潜力。",
    tagline: "奇幻器灵世界观下的 AI 漫剧项目。",
    highlights: ["奇幻世界观", "器灵设定", "漫剧视觉", "IP 化内容"]
  },
  {
    title: "我是大反派凭什么讲道理",
    type: "AI漫剧",
    category: "AI漫剧",
    media: "http://thes7p03x.hn-bkt.clouddn.com/AI漫剧_反派修仙_我是大反派凭什么讲道理.mp4",
    poster: "",
    desc: "反派修仙题材漫剧，突出爽文结构、角色反差和强节奏表达。",
    tagline: "反派修仙设定，强化爽文节奏与角色反差。",
    highlights: ["反派修仙", "爽文漫改", "高密度剧情", "角色反差"]
  },
  {
    title: "猫娘",
    type: "AI漫剧",
    category: "AI漫剧",
    media: "http://thes7p03x.hn-bkt.clouddn.com/AI漫剧_二次元萌系_猫娘.mp4",
    poster: "",
    desc: "二次元萌系角色向作品，展示角色设定、风格控制和漫画化表达。",
    tagline: "二次元萌系角色视觉与漫画化表达。",
    highlights: ["二次元角色", "萌系视觉", "角色设定", "风格化影像"]
  },
  {
    title: "潜伏电视剧番外",
    type: "AI微电影",
    category: "AI微电影",
    media: "http://thes7p03x.hn-bkt.clouddn.com/AI微电影_谍战番外_潜伏电视剧番外.mp4",
    poster: "",
    desc: "谍战番外微电影，适合展示年代感、类型氛围和 IP 延展创作能力。",
    tagline: "谍战气质、年代氛围与 IP 番外表达。",
    highlights: ["谍战类型", "剧集番外", "年代氛围", "IP 延展"]
  },
  {
    title: "TK平台试稿样片",
    type: "AI广告片",
    category: "AI广告片",
    media: "http://thes7p03x.hn-bkt.clouddn.com/AI广告片_TK平台_试稿样片.mp4",
    poster: "",
    desc: "平台广告试稿样片，强调短视频传播环境下的视觉吸引力和快速成片能力。",
    tagline: "为短视频传播环境设计的广告试稿样片。",
    highlights: ["平台广告", "试稿样片", "短视频节奏", "快速响应"]
  },
  {
    title: "骑马片段",
    type: "AI微电影",
    category: "AI微电影",
    media: "http://thes7p03x.hn-bkt.clouddn.com/AI微电影_古装动作_骑马片段.mp4",
    poster: "",
    desc: "古装动作片段，适合展示动作镜头、古装质感和电影化片段生成。",
    tagline: "古装动作镜头与电影化片段生成测试。",
    highlights: ["古装动作", "动态镜头", "场面调度", "电影片段"]
  }
];

const grid = document.querySelector("[data-work-grid]");
const modal = document.querySelector("[data-modal]");
const modalMedia = document.querySelector("[data-modal-media]");
const modalType = document.querySelector("[data-modal-type]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalDesc = document.querySelector("[data-modal-desc]");
const modalHighlights = document.querySelector("[data-modal-highlights]");

function createMedia(project, isModal = false) {
  if (project.media) {
    const video = document.createElement("video");
    video.src = project.media;
    if (project.poster) video.poster = project.poster;
    video.muted = !isModal;
    video.loop = !isModal;
    video.playsInline = true;
    video.preload = "metadata";
    video.controls = isModal;
    if (!isModal && !project.poster) {
      video.dataset.firstFrameCover = "true";
      video.addEventListener(
        "loadedmetadata",
        () => {
          video.currentTime = 0.01;
        },
        { once: true }
      );
    }
    if (!isModal) {
      video.setAttribute("aria-hidden", "true");
    }
    return video;
  }

  if (project.poster) {
    const image = document.createElement("img");
    image.src = project.poster;
    image.alt = project.title;
    return image;
  }

  const fallback = document.createElement("div");
  fallback.className = "poster-fallback";
  fallback.textContent = project.title;
  return fallback;
}

function renderProjects(filter = "全部") {
  const visibleProjects = filter === "全部" ? projects : projects.filter((item) => item.category === filter);
  grid.innerHTML = "";

  visibleProjects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "work-card reveal";
    card.tabIndex = 0;
    card.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
    card.dataset.category = project.category;

    const media = createMedia(project);
    const info = document.createElement("div");
    info.className = "work-info";
    info.innerHTML = `
      <span class="work-type">${project.type}</span>
      <h3>${project.title}</h3>
      <p>${project.tagline || project.desc}</p>
    `;

    card.append(media, info);
    card.addEventListener("mouseenter", () => {
      const video = card.querySelector("video");
      if (video) video.play().catch(() => {});
    });
    card.addEventListener("mouseleave", () => {
      const video = card.querySelector("video");
      if (video) {
        video.pause();
        if (video.dataset.firstFrameCover === "true") {
          video.currentTime = 0.01;
        }
      }
    });
    card.addEventListener("click", () => openProject(project));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") openProject(project);
    });
    grid.appendChild(card);
  });

  observeReveals();
}

function openProject(project) {
  modalMedia.innerHTML = "";
  modalMedia.appendChild(createMedia(project, true));
  modalType.textContent = project.type;
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.desc;
  modalHighlights.innerHTML = project.highlights.map((item) => `<span>${item}</span>`).join("");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  modalMedia.innerHTML = "";
}

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeProject);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeProject();
  }
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 18);
});

let revealObserver;

function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }

  document.querySelectorAll(".reveal:not(.visible)").forEach((item) => revealObserver.observe(item));
}

document.querySelectorAll(".cinema-case video").forEach((video) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    },
    { threshold: 0.28 }
  );
  observer.observe(video);
});

renderProjects();
observeReveals();
