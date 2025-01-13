export const projects = [
  {
    img_url: "public/project_images/NWS görsel.jpg",
    img_alt: "NWS img",
    title: "Next Web Soliton",
    desc: "Bu projede kişisel web sitemin sınırlarını ve teknolojilerini zorluyorum.",
    badge_languages: ["HTML", "CSS", "JavaScript", "React"],
    Links: [
      { link_name: "GitHub", link_url: "https://github.com/uzeyir-yariz/NWS" },
      { link_name: "Link", link_url: "https://uzeyir-yariz.com.tr" }
    ],
    isStarred: true // Bu proje yıldızlı
  },
  {
    img_url: "public/project_images/oldeblog görsel.jpg",
    img_alt: "oldeblog img",
    title: "oldeblog",
    desc: "Bu projede yapılan projeleri edilen kaynakları ve teknolojileri inceleyerek blog haline getirerek tek bir yerde topluyorum.",
    badge_languages: ["HTML", "CSS", "JS", "Astro", "blog"],
    Links: [
      { link_name: "GitHub", link_url: "https://github.com/uzeyir-yariz/blog" },
      { link_name: "Link", link_url: "https://www.oldedb.com.tr/" }
    ],
    isStarred: true // Bu proje yıldızlı değil
  },
  {
    img_url: "public/project_images/yusufçolakmedya görsel.jpg",
    img_alt: "yusufcolakmedya img",
    title: "Yusuf Çolak Medya",
    desc: "Bu projede, bir e-ticaret sitesi geliştirme amacıyla ortak bir çalışma yürütülmektedir ve proje kodlama aşamasında ilerlemektedir.",
    badge_languages: ["HTML", "CSS", "JS", "SCSS", "Bootstrap"],
    Links: [
      { link_name: "Link", link_url: "https://yusufcolakmedya.com.tr/" },
      { link_name: "Proje Ortağı", link_url: "https://www.instagram.com/yusufcolakmedya/" }
    ],
    isStarred: true // Bu proje yıldızlı
  }
];

// Yıldızlı projeleri filtreleme
export const starredProjects = projects.filter((project) => project.isStarred);
