import {
  FaPython, FaDatabase, FaGitAlt, FaGithub, FaChartPie, FaChartBar, FaBrain,
  FaJava, FaCode, FaHtml5, FaReact, FaChartArea,
  FaCogs, FaRegChartBar, FaServer, FaLaptopCode, FaChartLine, FaLinkedin
} from "react-icons/fa";
import {
  SiJavascript, SiScikitlearn, SiTensorflow, SiPytorch, SiPandas,
  SiNumpy, SiStreamlit, SiOpencv
} from "react-icons/si";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const skills = {
  "Languages & Web": [
    { name: "Python", icon: FaPython , level: "Expert" },
    { name: "C / C++", icon: FaCode , level: "Intermediate" },
    { name: "Java", icon: FaJava , level: "Familiar" },
    { name: "JavaScript", icon: SiJavascript , level: "Intermediate" },
    { name: "HTML & CSS", icon: FaHtml5 , level: "Advanced" },
    { name: "React", icon: FaReact , level: "Intermediate" },
  ],
  "Libraries & AI": [
    { name: "Pandas", icon: SiPandas , level: "Expert" },
    { name: "NumPy", icon: SiNumpy , level: "Expert" },
    { name: "Scikit-learn", icon: SiScikitlearn , level: "Advanced" },
    { name: "TensorFlow", icon: SiTensorflow , level: "Intermediate" },
    { name: "PyTorch", icon: SiPytorch , level: "Advanced" },
    { name: "OpenCV", icon: SiOpencv , level: "Intermediate" },
    { name: "Matplotlib & Seaborn", icon: FaChartArea , level: "Expert" },
  ],
  "Data Analytics & BI": [
    { name: "Power BI (DAX)", icon: FaChartPie , level: "Expert" },
    { name: "Tableau", icon: FaChartBar , level: "Advanced" },
    { name: "Excel (Pivot)", icon: FaRegChartBar , level: "Expert" },
    { name: "Dashboards & KPIs", icon: FaChartLine , level: "Expert" },
    { name: "Data Storytelling", icon: FaRegChartBar , level: "Advanced" },
  ],
  "DS & ML Concepts": [
    { name: "Data Cleaning & EDA", icon: FaCogs , level: "Expert" },
    { name: "Regression & Class.", icon: FaBrain , level: "Advanced" },
    { name: "Time Series", icon: FaChartLine , level: "Intermediate" },
    { name: "Statistics & Math", icon: FaCogs , level: "Advanced" },
    { name: "Deep Learning (CNNs)", icon: FaBrain , level: "Advanced" },
  ],
  "Databases & Backend": [
    { name: "SQL & MySQL", icon: FaDatabase , level: "Expert" },
    { name: "REST APIs", icon: FaServer , level: "Intermediate" },
    { name: "Query Optimization", icon: FaCogs , level: "Advanced" },
  ],
  "Tools & Engineering": [
    { name: "GitHub", icon: FaGithub , level: "Advanced" },
    { name: "Streamlit Apps", icon: SiStreamlit , level: "Expert" },
    { name: "Jupyter", icon: FaLaptopCode , level: "Expert" },
    { name: "DSA & Logic", icon: FaCode , level: "Intermediate" },
    { name: "Model Deployment", icon: FaServer , level: "Intermediate" },
    { name: "Business Insights", icon: FaChartLine , level: "Advanced" },
  ]
};

export const experience = [
    {
    role: "Data Visualization Intern",
    company: "Infosys Springboard",
    period: "Sep 25 - Nov 25",
    certificateLink: "https://drive.google.com/file/d/1J4jhaLNaJ9k5Ll3WrZHG3sLgYni-ilqH/view?usp=sharing",
    contributions: [
      "Designed and built dynamic dashboards using Power BI to present insights from 15,000 plus data points",
      "Transformed raw data into meaningful visual stories using DAX, Power Query, and chart design principles",
      "Optimized dashboard performance and usability for better stakeholder interaction",
      "Communicated key trends and findings through visually intuitive reports and presentations"
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Aishwi Technologies",
    period: "Jul 25 - Oct 25",
    certificateLink: "https://drive.google.com/file/d/1XlwBEmnIhoKesglvr2xZk5_Wu2SxS0xl/view?usp=sharing",
    contributions: [
      "Analyzed large datasets of over 40,000 records using SQL and Python to uncover patterns in operational and customer data",
      "Developed interactive dashboards in Power BI to track KPIs and support data driven decision making",
      "Performed exploratory data analysis and data cleaning to improve data quality and reliability",
      "Generated actionable insights that supported business strategy and performance optimization"
    ],
  },
  {
    role: "Data Scientist Intern",
    company: "EiSystems Technologies",
    period: "Mar 25 - May 25",
    certificateLink: "https://drive.google.com/file/d/1yiIshnmKUbVKpKU3QqFSHDU2ZBhrIIs2/view?usp=sharing",
    contributions: [
      "Built machine learning models including regression and classification to solve real world problems",
      "Engineered features and prepared datasets for training predictive models using Python libraries",
      "Evaluated model performance using metrics such as accuracy, R2 score, and precision",
      "Deployed solutions using Streamlit to enable real time predictions and user interaction"
    ],
  }
];

export const projects = [
  {
    title: "CuraTech",
    category: "Machine Learning",
    featured: true,
    date: "Aug 24 - Nov 24",
    image: "/assets/images/curatech.png",
    description: "Built to optimize hospital operations, CuraTech analyzes patient admission patterns and resource usage. By leveraging advanced Machine Learning models (Regression, Classification) trained on extensive hospital data, it accurately predicts length of stay and readmission risks. The solution includes interactive Power BI dashboards that visualize operational insights, ultimately resulting in a comprehensive understanding of end-to-end ML pipelines in real-world healthcare analytics.",
    tech: ["Python", "Machine Learning", "Power BI", "SQL"],
    live: "#",
    github: "https://github.com/Meher450/CuraTech_Hospital_Management.git"
  },
  {
    title: "VizGen",
    category: "Data Science",
    featured: true,
    date: "Mar 24 - Jul 24",
    image: "/assets/images/vinzen.png",
    description: "Designed to empower non-technical users, VizGen automatically generates data insights through natural language. This AI assistant interprets user queries to clean data and render relevant charts via a Python-driven Streamlit interface. Implementing NLP-based intent detection simplified automated data visualization workflows and significantly enhanced dashboard interactivity and user experience.",
    tech: ["Python", "NLP", "Streamlit", "Pandas"],
    live: "https://meher450.github.io/VizGen/VizGen.html",
    github: "https://github.com/Meher450/VizGen.git"
  },
  {
    title: "Sales and Promotion Dashboard",
    category: "Data Analytics",
    featured: false,
    date: "Dec 23 - Feb 24",
    image: ["/assets/pepsi/1.png","/assets/pepsi/2.png","/assets/pepsi/3.png"], 
    description: "This project evaluates how promotional campaigns impact sales performance and revenue across diverse product lines. After performing EDA and processing over 75,000 sales records using SQL and Excel, interactive Power BI dashboards were engineered to track discount depths and channel performance. The hands-on experience refined skills in designing business KPIs and translating raw data into actionable insights.",
    tech: ["SQL", "Power BI", "Excel", "Data Analytics"],
    live: "#",
    github: "https://github.com/Meher450/sales_and_promotion.git"
  },
  {
    title: "Customer Churn Prediction",
    category: "Data Science",
    featured: false,
    date: "Oct 23 - Dec 23",
    image: "/assets/images/customer_churn.png",
    description: "Focuses on identifying at-risk customers by leveraging Python and SQL to analyze behavior and subscription patterns. Through comprehensive data preprocessing and exploratory analysis, I developed Logistic Regression and Random Forest models to accurately predict churn probability. The results were translated into visual dashboards that highlight key attrition drivers, enabling data-driven retention strategies. This initiative strengthened my expertise in predictive modeling, feature engineering, and the ability to convert complex technical findings into actionable business insights",
    tech: ["Python", "SQL", "Scikit-learn", "Pandas", "Power BI"],
    live: "#",
    github: "https://github.com/Meher450/customer_churn.git"
  },
  {
    title: "Smart Waste Classifier",
    category: "Machine Learning",
    featured: false,
    date: "Jun 23 - Aug 23",
    image: "/assets/images/smart_waste.png",
    description: "Created to enhance sustainability efforts, this tool automates waste segregation using computer vision. A CNN model was trained using TensorFlow and PyTorch on over 10,000 images to classify waste, deployed seamlessly via a Streamlit interface for real-time predictions. The project provided critical learning in deep learning fundamentals, image preprocessing, and deploying ML models for practical use.",
    tech: ["PyTorch", "TensorFlow", "Python", "Streamlit"],
    live: "https://smart-waste-classifier.streamlit.app/",
    github: "https://github.com/Meher450/smart_waste_classifier.git"
  },
  {
    title: "Digit Classifier App",
    category: "Machine Learning",
    featured: false,
    date: "Oct 22 - Jan 23",
    image: "/assets/images/digit_recogniser.png",
    description: "This interactive application recognizes handwritten digits to demonstrate deep learning capabilities. A CNN model trained on the MNIST dataset integrates with a dynamic Streamlit frontend, allowing users to draw digits and instantly receive predictions. The project solidified core knowledge in model training, preprocessing, and building interactive ML web applications.",
    tech: ["TensorFlow", "OpenCV", "Streamlit", "Python"],
    live: "https://huggingface.co/spaces/meher450/digit_recognizer",
    github: "https://github.com/Meher450/Digit_Recognizer.git"
  },
  {
    title: "Food Trend Analysis",
    category: "Data Analytics",
    featured: false,
    date: "Jul 22 - Sep 22",
    image: ["/assets/food_trend/Picture1.png",
            "/assets/food_trend/Picture2.png",
            "/assets/food_trend/Picture3.png",
            "/assets/food_trend/Picture4.png",
            "/assets/food_trend/Picture5.png",
            "/assets/food_trend/Picture6.png"],
    description: "Built to decode customer behavior in the food sector, this project analyzes historical sales to identify upcoming trends. Utilizing Power BI with advanced DAX on 15,000+ records, 15 KPIs and 25 visuals were structured to expose product insights and regional shifts. The end-to-end execution dramatically sharpened skills in continuous dashboard design and continuous KPI-driven data storytelling.",
    tech: ["Power BI", "DAX", "Excel"],
    live: "#",
    github: "https://github.com/Meher450/food_trend_analysis.git"
  }
];

export const achievements = [
  { icon: FaDatabase, title: "Data Science Community Lead", date: "Dec 25", certificateLink: "https://drive.google.com/file/d/1ZRUh7QRHJoeLh-nDmYxI_XEpD8VksrHC/view?usp=sharing", description: "Organized workshops and mentored 100+ students in Python and Machine Learning fundamentals." },
  { icon: FaGithub, title: "Microsoft Learn Hackathon Runner-up", date: "Jan 24", certificateLink: "https://drive.google.com/file/d/1OclawFyLw0OqdjFjTaMlg_uUrZPqGAgw/view?usp=drive_link", description: "Secured Runner-up position in the Microsoft Learn Student Ambassador Hackathon: Jan 24. Recognized for developing a real-time ISRO landing page using APIs." }
];

export const certifications = [
  { title: "Oracle Data Platform 2025 Certified Foundations Associate", issuer: "Oracle Data Platform", date: "Jan 26 - Mar 26", certificateLink: "https://drive.google.com/file/d/1DYcCyLbcqqyBjHSHR-ZO0--cJUX9-yaW/view?usp=sharing", year: "2026"},
  { title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional", issuer: "Oracle Cloud Infrastructure", date: "Jul 25 - Oct 25", certificateLink: "https://drive.google.com/file/d/17cmLWUiNwy4uRrcco0SJ9c30Rzxqq_-7/view?usp=sharing", year: "2026" },   
  { title: "Cloud Computing", issuer: "NPTEL", date: "Jan 25 - Apr 25", certificateLink: "https://drive.google.com/file/d/1ySARNG85XFYTS60wkcGfVIobj5XJuQX8/view?usp=sharing", year: "2025" },
  { title: "Prompt Engineering Specialization", issuer: "Coursera", date: "Oct 23 - Mar 24", certificateLink: "https://drive.google.com/file/d/1CFWLRma7mqlU1_-T63i3yETGfYOaDRNa/view?usp=sharing", year: "2024" }
];

export const education = [
  { degree: "B.Tech in Computer Science and Engineering", date: "Aug 21 - Present", period: "2021 - Present", institution: "Lovely Professional University", score: "CGPA: 8.80/10" },
  { degree: "Higher Secondary Education (12th)", date: "Jun 19 - May 21", period: "2019 - 2021", institution: "Sri Shirdi Sai Vidya Niketan", score: "Percentage: 75" },
  { degree: "Secondary Education (10th)", date: "Jun 18 - May 19", period: "2018 - 2019", institution: "Little Paradise High School", score: "Percentage: 100" }
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Meher450", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/meherraju/", icon: FaLinkedin }       
];
