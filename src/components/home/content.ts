export type Language = "id" | "en" | "zh";
export type ThemeMode = "dark" | "light";

export const languageOptions: { label: string; value: Language }[] = [
  { label: "Indonesia", value: "id" },
  { label: "English", value: "en" },
  { label: "中文", value: "zh" },
];

export const content = {
  id: {
    nav: {
      brand: "Portfolio Rizal Danuarta Akbar",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      tools: "Tools",
      contact: "Contact",
    },
    controls: {
      title: "Preferensi Tampilan",
      theme: "Mode",
      language: "Bahasa",
      dark: "Gelap",
      light: "Terang",
    },
    hero: {
      eyebrow: "Frontend Developer",
      title: "Siapa itu Rizal Danuarta Akbar?",
      lead: "Saya membuat antarmuka modern dengan Next.js, TypeScript, dan detail visual yang terasa personal tanpa kehilangan kerapian.",
      primary: "Lihat Projects",
      secondary: "Hubungi Saya",
      photo: "Foto Profil",
      badge: "Section portfolio siap dikembangkan.",
    },
    about: {
      eyebrow: "About",
      title: "Tentang Saya",
      paragraphs: [
        "Saya adalah seseorang yang memiliki minat pada pengembangan aplikasi, strategi bisnis, dan teknologi modern. Saya percaya bahwa produk yang baik lahir dari perpaduan antara teknologi yang kuat, desain yang tepat, dan pemahaman terhadap kebutuhan pengguna.",
        "Saya memiliki keunggulan dalam tiga bidang yang saling melengkapi: desain, bisnis, dan pemrograman. Pengalaman membangun bisnis sendiri mengajarkan saya untuk memahami kebutuhan pengguna, melihat peluang pasar, dan menciptakan solusi yang memberikan nilai nyata. Dengan kemampuan tersebut, saya siap berkontribusi, terus belajar, dan berkembang bersama tim untuk membangun produk yang berdampak bagi pengguna maupun perusahaan.",
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Hard Skill & Soft Skill",
      hardTitle: "Hard Skill",
      softTitle: "Soft Skill",
      hard: [
        {
          title: "Business Strategy",
          description:
            "Memahami kebutuhan pasar, mengembangkan produk, dan menciptakan nilai yang relevan bagi pengguna maupun bisnis.",
        },
        {
          title: "Software Development",
          description:
            "Mengubah ide menjadi solusi digital melalui pengembangan aplikasi yang fungsional dan berkelanjutan.",
        },
        {
          title: "Product Design",
          description:
            "Merancang pengalaman pengguna yang intuitif melalui desain yang efektif dan berorientasi pada kebutuhan pengguna.",
        },
        {
          title: "System Architecture",
          description:
            "Merancang struktur sistem, database, dan alur aplikasi yang scalable, efisien, dan mudah dikembangkan.",
        },
        {
          title: "DevOps & Deployment",
          description:
            "Mengelola proses deployment, integrasi, dan pemeliharaan aplikasi agar berjalan stabil dan siap digunakan di lingkungan produksi.",
        },
      ],
      soft: [
        {
          title: "Problem Solving",
          description:
            "Mampu menganalisis masalah dan menemukan solusi yang efektif.",
        },
        {
          title: "Creative Thinking",
          description:
            "Menciptakan ide dan pendekatan baru untuk menghasilkan solusi yang inovatif.",
        },
        {
          title: "Communication",
          description:
            "Menyampaikan ide dan informasi secara jelas kepada tim maupun stakeholder.",
        },
        {
          title: "Leadership",
          description:
            "Mampu mengarahkan tim dan mengambil keputusan untuk mencapai tujuan bersama.",
        },
        {
          title: "Teamwork",
          description:
            "Bekerja sama secara efektif dalam lingkungan kolaboratif dan multidisiplin.",
        },
        {
          title: "Adaptability",
          description:
            "Cepat beradaptasi dengan teknologi, tantangan, dan lingkungan kerja yang dinamis.",
        },
        {
          title: "Continuous Learning",
          description:
            "Memiliki semangat belajar yang tinggi untuk terus berkembang dan mengikuti perubahan industri.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Pengalaman Kerja & Proses Berkembang",
      summary:
        "Ringkasan pengalaman yang menggabungkan sisi bisnis, teknis, dan visual.",
      items: [
        {
          period: "Sekarang",
          role: "Sticker Seller",
          place: "Personal Brand",
          description:
            "Mengelola ide produk sticker, memilih desain yang punya daya tarik, melayani pembeli, dan memahami pola minat pasar.",
        },
        {
          period: "Belajar & Project",
          role: "Frontend Developer",
          place: "Personal Project",
          description:
            "Membangun website dengan Next.js, TypeScript, Sass, dan struktur komponen yang mudah dikembangkan.",
        },
        {
          period: "Dasar Kreatif",
          role: "Basic Designer",
          place: "Visual Exploration",
          description:
            "Membuat layout sederhana, menyusun komposisi, dan menjaga visual agar tetap rapi, jelas, dan punya karakter.",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Karya Pilihan",
      summary:
        "Beberapa contoh project yang bisa kamu sesuaikan dengan portofolio asli.",
      items: [
        {
          title: "Dashboard Belajar",
          description: "Aplikasi ringkas untuk memantau progres materi TypeScript.",
        },
        {
          title: "Landing Page UMKM",
          description: "Halaman promosi responsif untuk produk lokal dan kontak cepat.",
        },
        {
          title: "Portfolio Website",
          description:
            "Website personal dengan section About, Skills, Projects, dan Contact.",
        },
      ],
    },
    tools: {
      eyebrow: "Tools",
      title: "Tools, Bahasa, dan Aplikasi",
      summary:
        "Peralatan yang saya gunakan untuk membuat website, desain sederhana, dan mengelola proses kerja.",
      groups: [
        { title: "Bahasa", items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
        { title: "Tools", items: ["Next.js", "React", "Sass", "Git", "GitHub"] },
        {
          title: "Aplikasi",
          items: ["Visual Studio Code", "Figma", "Canva", "Chrome DevTools"],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Punya ide project? Mari mulai ngobrol.",
      summary:
        "Kirim pesan untuk kolaborasi, pembuatan website, atau diskusi belajar frontend.",
    },
  },
  en: {
    nav: {
      brand: "Rizal Danuarta Akbar Portfolio",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      tools: "Tools",
      contact: "Contact",
    },
    controls: {
      title: "Display Preferences",
      theme: "Mode",
      language: "Language",
      dark: "Dark",
      light: "Light",
    },
    hero: {
      eyebrow: "Frontend Developer",
      title: "Building websites that feel bold, alive, and easy to use.",
      lead: "I create modern interfaces with Next.js, TypeScript, and personal visual details without losing structure.",
      primary: "View Projects",
      secondary: "Contact Me",
      photo: "Profile Photo",
      badge: "Portfolio sections ready to grow.",
    },
    about: {
      eyebrow: "About",
      title: "About Me",
      paragraphs: [
        "I enjoy turning ideas into digital products that are clear, responsive, and easy to develop further.",
        "My focus is clean component structure, consistent visuals, and user experiences that feel light across screen sizes.",
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Hard Skills & Soft Skills",
      hardTitle: "Hard Skills",
      softTitle: "Soft Skills",
      hard: [
        {
          title: "Business Strategy",
          description:
            "Understanding market needs, developing products, and creating relevant value for users and businesses.",
        },
        {
          title: "Software Development",
          description:
            "Turning ideas into digital solutions through functional and sustainable application development.",
        },
        {
          title: "Product Design",
          description:
            "Designing intuitive user experiences through effective design focused on user needs.",
        },
        {
          title: "System Architecture",
          description:
            "Designing system structures, databases, and application flows that are scalable, efficient, and easy to develop.",
        },
        {
          title: "DevOps & Deployment",
          description:
            "Managing deployment, integration, and application maintenance so products run reliably in production environments.",
        },
      ],
      soft: [
        {
          title: "Problem Solving",
          description:
            "Able to analyze problems and find effective solutions.",
        },
        {
          title: "Creative Thinking",
          description:
            "Creating new ideas and approaches to produce innovative solutions.",
        },
        {
          title: "Communication",
          description:
            "Communicating ideas and information clearly to teams and stakeholders.",
        },
        {
          title: "Leadership",
          description:
            "Able to guide teams and make decisions to achieve shared goals.",
        },
        {
          title: "Teamwork",
          description:
            "Working effectively in collaborative and multidisciplinary environments.",
        },
        {
          title: "Adaptability",
          description:
            "Quickly adapting to technology, challenges, and dynamic work environments.",
        },
        {
          title: "Continuous Learning",
          description:
            "Having a strong learning mindset to keep growing and follow industry changes.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Work Experience & Growth Process",
      summary:
        "A short overview combining business, technical, and visual experience.",
      items: [
        {
          period: "Now",
          role: "Sticker Seller",
          place: "Personal Brand",
          description:
            "Managing sticker product ideas, choosing appealing designs, serving customers, and understanding market interest.",
        },
        {
          period: "Learning & Projects",
          role: "Frontend Developer",
          place: "Personal Project",
          description:
            "Building websites with Next.js, TypeScript, Sass, and maintainable component structure.",
        },
        {
          period: "Creative Basics",
          role: "Basic Designer",
          place: "Visual Exploration",
          description:
            "Creating simple layouts, arranging composition, and keeping visuals clear and characterful.",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected Work",
      summary: "A few project examples that can be adjusted to your real portfolio.",
      items: [
        {
          title: "Learning Dashboard",
          description: "A compact app to track TypeScript learning progress.",
        },
        {
          title: "Small Business Landing Page",
          description: "A responsive promo page for local products and quick contact.",
        },
        {
          title: "Portfolio Website",
          description:
            "A personal website with About, Skills, Projects, and Contact sections.",
        },
      ],
    },
    tools: {
      eyebrow: "Tools",
      title: "Tools, Languages, and Apps",
      summary:
        "The set of tools I use to build websites, create simple designs, and manage workflow.",
      groups: [
        { title: "Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
        { title: "Tools", items: ["Next.js", "React", "Sass", "Git", "GitHub"] },
        {
          title: "Apps",
          items: ["Visual Studio Code", "Figma", "Canva", "Chrome DevTools"],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Have a project idea? Let us talk.",
      summary:
        "Send a message for collaboration, website work, or frontend learning discussions.",
    },
  },
  zh: {
    nav: {
      brand: "Rizal Danuarta Akbar 作品集",
      about: "关于",
      skills: "技能",
      experience: "经验",
      projects: "项目",
      tools: "工具",
      contact: "联系",
    },
    controls: {
      title: "显示设置",
      theme: "模式",
      language: "语言",
      dark: "深色",
      light: "浅色",
    },
    hero: {
      eyebrow: "前端开发者",
      title: "打造有力量、有生命感、也容易使用的网站。",
      lead: "我使用 Next.js、TypeScript 和有个人特色的视觉细节来构建现代界面。",
      primary: "查看项目",
      secondary: "联系我",
      photo: "个人照片",
      badge: "作品集模块可继续扩展。",
    },
    about: {
      eyebrow: "关于",
      title: "关于我",
      paragraphs: [
        "我喜欢把想法变成清晰、响应式、并且容易继续开发的数字产品。",
        "我关注干净的组件结构、一致的视觉表现，以及在不同屏幕上都轻快的用户体验。",
      ],
    },
    skills: {
      eyebrow: "技能",
      title: "硬技能与软技能",
      hardTitle: "硬技能",
      softTitle: "软技能",
      hard: [
        {
          title: "Business Strategy",
          description:
            "理解市场需求，开发产品，并为用户和业务创造相关价值。",
        },
        {
          title: "Software Development",
          description:
            "通过功能性和可持续的应用开发，将想法转化为数字解决方案。",
        },
        {
          title: "Product Design",
          description:
            "通过有效并以用户需求为中心的设计，打造直观的用户体验。",
        },
        {
          title: "System Architecture",
          description:
            "设计可扩展、高效且易于继续开发的系统结构、数据库和应用流程。",
        },
        {
          title: "DevOps & Deployment",
          description:
            "管理部署、集成和应用维护，让产品在生产环境中稳定运行并可直接使用。",
        },
      ],
      soft: [
        {
          title: "Problem Solving",
          description: "能够分析问题并找到有效的解决方案。",
        },
        {
          title: "Creative Thinking",
          description: "创造新的想法和方法，形成创新的解决方案。",
        },
        {
          title: "Communication",
          description: "向团队和利益相关者清晰传达想法与信息。",
        },
        {
          title: "Leadership",
          description: "能够引导团队并做出决策，以实现共同目标。",
        },
        {
          title: "Teamwork",
          description: "在协作和跨领域环境中高效合作。",
        },
        {
          title: "Adaptability",
          description: "快速适应技术、挑战和动态工作环境。",
        },
        {
          title: "Continuous Learning",
          description: "保持强烈学习动力，持续成长并跟进行业变化。",
        },
      ],
    },
    experience: {
      eyebrow: "经验",
      title: "工作经验与成长过程",
      summary: "结合商业、技术与视觉经验的简短总结。",
      items: [
        {
          period: "现在",
          role: "贴纸销售者",
          place: "个人品牌",
          description:
            "管理贴纸产品想法，选择有吸引力的设计，服务买家，并理解市场兴趣。",
        },
        {
          period: "学习与项目",
          role: "前端开发者",
          place: "个人项目",
          description:
            "使用 Next.js、TypeScript、Sass 和可维护的组件结构构建网站。",
        },
        {
          period: "创意基础",
          role: "基础设计者",
          place: "视觉探索",
          description:
            "制作简单布局，安排构图，并保持视觉清晰且有个性。",
        },
      ],
    },
    projects: {
      eyebrow: "项目",
      title: "精选作品",
      summary: "一些可以根据真实作品集调整的项目示例。",
      items: [
        {
          title: "学习仪表盘",
          description: "用于跟踪 TypeScript 学习进度的简洁应用。",
        },
        {
          title: "小型商业落地页",
          description: "用于本地产品推广和快速联系的响应式页面。",
        },
        {
          title: "作品集网站",
          description: "包含关于、技能、项目和联系模块的个人网站。",
        },
      ],
    },
    tools: {
      eyebrow: "工具",
      title: "工具、语言和应用",
      summary: "我用于构建网站、制作简单设计和管理工作流程的工具。",
      groups: [
        { title: "语言", items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
        { title: "工具", items: ["Next.js", "React", "Sass", "Git", "GitHub"] },
        {
          title: "应用",
          items: ["Visual Studio Code", "Figma", "Canva", "Chrome DevTools"],
        },
      ],
    },
    contact: {
      eyebrow: "联系",
      title: "有项目想法？一起聊聊。",
      summary: "欢迎联系我进行合作、网站制作或前端学习讨论。",
    },
  },
} as const;
