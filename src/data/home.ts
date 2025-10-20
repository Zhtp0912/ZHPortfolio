// Central place for arrays/objects used by sections
export const skillsData: Record<string, string[]> = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "FlutterFlow"],
    Backend: ["PHP", "Node.js", "MySQL", "Python", "Java", "C++", "Flutter"],
    Microsoft: ["Access", "Excel", "Powerpoint", "Word"],
    Tools: ["Figma", "Canva", "GitHub", "Bitbucket", "Jira"],
  };
  
  export const projects = [
    { img: "/ZHPortfolio/php.png", title: "E-learning Platform", desc: "PHP/HTML/CSS/Javascript/MySQL" },
    { img: "/ZHPortfolio/java.png", title: "Simple Booking System", desc: "Java/Apache NetBeans" },
    { img: "/ZHPortfolio/botpress.png", title: "Pangolin Care Center", desc: "Botpress" },
    { img: "/ZHPortfolio/flutter.png", title: "Medical Application", desc: "Flutter/FlutterFlow" },
    { img: "/ZHPortfolio/python.png", title: "Tower Defense Game", desc: "Python" },
    { img: "/ZHPortfolio/nextjs.png", title: "Allowance Counter", desc: "Next Js" },
  ];
  
  export const services = [
    { title: "Web Development", desc: "Building responsive and modern websites", color: "blue" as const },
    { title: "UI/UX Design", desc: "Designing user-friendly interfaces", color: "purple" as const },
  ];
  
  export const qualifications = [
    { color: "blue",   title: "IGCSE", place: "Poi Lam High School(SUWA)", period: "2015–2019", highlight: "7A" },
    { color: "yellow", title: "Microsoft Office Speacialist", period: "2019-2020",
      highlight: "Access | Excel Expert | PowerPoint | Word (Office 2016)" },
    { color: "purple", title: "Diploma in Information & Communication Technology with a specialism in Software Engineering",
      place: "Asia Pacific University (APU)", period: "2022–2024", highlight: "CGPA: 3.4" },
    { color: "green",  title: "Full Stack Programmer (Internship)", place: "IPS Software", period: "2024 May - 2024 July" },
    { color: "orange", title: "Bachelor of Computer Science (Hons) (Artificial Intelligence)",
      place: "Asia Pacific University (APU)", period: "2024–Present", highlight: "CGPA: 3.35" },
  ];
  