export type Language = "English" | "Spanish" | "Chinese" | "French" | "Vietnamese" | "Arabic" | "Korean";

export const languageOptions: Language[] = ["English", "Spanish", "Chinese", "French", "Vietnamese", "Arabic", "Korean"];

const translations: Record<Exclude<Language, "English">, Record<string, string>> = {
  Spanish: {
    "Make the way this website looks, reads, and sound.": "Cambia cómo se ve, se lee y suena este sitio web.",
    Settings: "Configuración",
    Appearance: "Apariencia",
    Accessibility: "Accesibilidad",
    Language: "Idioma",
    "Interface language": "Idioma de la interfaz",
    "Audio and Brightness": "Audio y brillo",
    "Theme Colors": "Colores del tema",
    "Dark Mode": "Modo oscuro",
    "Light Mode": "Modo claro",
    "Dyslexia Font": "Fuente para dislexia",
    "Large Text": "Texto grande",
    "High Contrast Mode": "Modo de alto contraste",
    Volume: "Volumen",
    Brightness: "Brillo",
    "Accent color": "Color de acento",
    "Background color": "Color de fondo",
    "Sidebar color": "Color de barra lateral",
    Home: "Inicio",
    Test: "Examen",
    Prep: "Preparación",
    Grade: "Grado",
    Info: "Información",
    "Norman Public Schools": "Escuelas Públicas de Norman",
    "Norman Public Schools, Oklahoma": "Escuelas Públicas de Norman, Oklahoma",
    "Start Learning": "Empezar a aprender",
    "Personalized exam readiness": "Preparación personalizada para el examen",
    "Focused proficiency practice turns hard exams into familiar territory.": "La práctica enfocada de competencia convierte los exámenes difíciles en terreno familiar.",
    "Study targeted lessons, work through challenging untimed proficiency checks, and review clear solutions whenever a concept feels slippery.": "Estudia lecciones específicas, resuelve prácticas de competencia sin tiempo y revisa soluciones claras cuando un concepto sea difícil.",
    "Current Grade": "Grado actual",
    "Change Grade": "Cambiar grado",
    "Tests completed": "Exámenes completados",
    "Average score": "Puntaje promedio",
    "Time studied": "Tiempo estudiado",
    "Subjects practiced": "Materias practicadas",
    "Recently studied": "Estudiado recientemente",
    "Recent activity": "Actividad reciente",
    "Practice Test": "Examen de práctica",
    "Untimed practice": "Práctica sin tiempo",
    Previous: "Anterior",
    Next: "Siguiente",
    Submit: "Enviar",
    "Test Results": "Resultados del examen",
    "Final score": "Puntaje final",
    "Correct answer": "Respuesta correcta",
    Question: "Pregunta",
    "out of": "de",
    correct: "correctas",
    answered: "respondidas",
    incorrect: "incorrectas",
    "New Test": "Nuevo examen",
    "Study Materials": "Materiales de estudio",
    "Study Mode": "Modo de estudio",
    "Close Study Mode": "Cerrar modo de estudio",
    "Unlimited practice": "Práctica ilimitada",
    "Show Solution": "Mostrar solución",
    "Hide Solution": "Ocultar solución",
    Solution: "Solución",
    Correct: "Correcto",
    "Check Answer": "Revisar respuesta",
    "Next Problem": "Siguiente problema",
    Mathematics: "Matemáticas",
    Science: "Ciencias",
    "English Language Arts": "Artes del lenguaje inglés",
    Reading: "Lectura",
    History: "Historia",
    Geography: "Geografía",
    "Fine Arts": "Bellas artes",
    Spanish: "Español",
    Chinese: "Chino"
  },
  Chinese: {
    "Make the way this website looks, reads, and sound.": "更改此网站的外观、文字和声音。",
    Settings: "设置",
    Appearance: "外观",
    Accessibility: "无障碍",
    Language: "语言",
    "Interface language": "界面语言",
    "Audio and Brightness": "音频和亮度",
    "Theme Colors": "主题颜色",
    "Dark Mode": "深色模式",
    "Light Mode": "浅色模式",
    Home: "首页",
    Test: "测试",
    Prep: "备考",
    Grade: "年级",
    Info: "信息",
    "Start Learning": "开始学习",
    "Practice Test": "练习测试",
    "Untimed practice": "不限时练习",
    Previous: "上一题",
    Next: "下一题",
    Submit: "提交",
    "Test Results": "测试结果",
    Question: "问题",
    "out of": "共",
    answered: "已答",
    "Final score": "最终得分",
    "Study Materials": "学习材料",
    "Study Mode": "学习模式",
    "Close Study Mode": "关闭学习模式",
    "Unlimited practice": "无限练习",
    "Show Solution": "显示解答",
    "Hide Solution": "隐藏解答",
    Solution: "解答",
    Correct: "正确",
    "Check Answer": "检查答案",
    "Next Problem": "下一题",
    Mathematics: "数学",
    Science: "科学",
    "English Language Arts": "英语语言艺术",
    Reading: "阅读",
    History: "历史",
    Geography: "地理",
    "Fine Arts": "美术",
    Spanish: "西班牙语",
    Chinese: "中文"
  },
  French: {
    "Make the way this website looks, reads, and sound.": "Modifier l'apparence, la lecture et le son de ce site.",
    Settings: "Paramètres",
    Appearance: "Apparence",
    Accessibility: "Accessibilité",
    Language: "Langue",
    "Interface language": "Langue de l'interface",
    "Dark Mode": "Mode sombre",
    "Light Mode": "Mode clair",
    Home: "Accueil",
    Test: "Test",
    Prep: "Préparation",
    Grade: "Niveau",
    "Practice Test": "Test pratique",
    Submit: "Soumettre",
    Previous: "Précédent",
    Next: "Suivant",
    "Study Mode": "Mode étude",
    Solution: "Solution",
    Mathematics: "Mathématiques",
    Science: "Sciences",
    Reading: "Lecture",
    History: "Histoire",
    Geography: "Géographie",
    Spanish: "Espagnol",
    Chinese: "Chinois"
  },
  Vietnamese: {
    "Make the way this website looks, reads, and sound.": "Thay đổi cách trang web này hiển thị, đọc và phát âm thanh.",
    Settings: "Cài đặt",
    Appearance: "Giao diện",
    Accessibility: "Trợ năng",
    Language: "Ngôn ngữ",
    "Interface language": "Ngôn ngữ giao diện",
    Home: "Trang chủ",
    Test: "Bài kiểm tra",
    Prep: "Ôn tập",
    Grade: "Lớp",
    Submit: "Nộp bài",
    Previous: "Trước",
    Next: "Tiếp",
    Solution: "Lời giải",
    Mathematics: "Toán",
    Science: "Khoa học",
    Reading: "Đọc hiểu",
    History: "Lịch sử",
    Geography: "Địa lý",
    Spanish: "Tiếng Tây Ban Nha",
    Chinese: "Tiếng Trung"
  },
  Arabic: {
    "Make the way this website looks, reads, and sound.": "غيّر طريقة ظهور هذا الموقع وقراءته وصوته.",
    Settings: "الإعدادات",
    Appearance: "المظهر",
    Accessibility: "إمكانية الوصول",
    Language: "اللغة",
    "Interface language": "لغة الواجهة",
    Home: "الرئيسية",
    Test: "اختبار",
    Prep: "تحضير",
    Grade: "الصف",
    Submit: "إرسال",
    Previous: "السابق",
    Next: "التالي",
    Solution: "الحل",
    Mathematics: "الرياضيات",
    Science: "العلوم",
    Reading: "القراءة",
    History: "التاريخ",
    Geography: "الجغرافيا",
    Spanish: "الإسبانية",
    Chinese: "الصينية"
  },
  Korean: {
    "Make the way this website looks, reads, and sound.": "이 웹사이트의 보이는 방식, 읽히는 방식, 소리를 바꿉니다.",
    Settings: "설정",
    Appearance: "화면",
    Accessibility: "접근성",
    Language: "언어",
    "Interface language": "인터페이스 언어",
    Home: "홈",
    Test: "시험",
    Prep: "준비",
    Grade: "학년",
    Submit: "제출",
    Previous: "이전",
    Next: "다음",
    Solution: "풀이",
    Mathematics: "수학",
    Science: "과학",
    Reading: "읽기",
    History: "역사",
    Geography: "지리",
    Spanish: "스페인어",
    Chinese: "중국어"
  }
};

const problemPrefixes: Record<Exclude<Language, "English">, Record<string, string>> = {
  Spanish: {
    "Skill checkpoint": "Control de habilidad",
    "Proficiency item": "Pregunta de competencia",
    "Application task": "Tarea de aplicación",
    "Evidence question": "Pregunta de evidencia",
    "Transfer problem": "Problema de transferencia",
    "Readiness challenge": "Desafío de preparación",
    "PEMDAS": "Orden de operaciones",
    "Fractions": "Fracciones",
    "Ratios": "Razones",
    "Linear equations": "Ecuaciones lineales",
    "Geometry": "Geometría",
    "Data analysis": "Análisis de datos"
  },
  Chinese: {
    "Skill checkpoint": "技能检查",
    "Proficiency item": "能力题",
    "Application task": "应用任务",
    "Evidence question": "证据题",
    "Transfer problem": "迁移题",
    "Readiness challenge": "准备挑战",
    "PEMDAS": "运算顺序",
    "Fractions": "分数",
    "Ratios": "比率",
    "Linear equations": "一次方程",
    "Geometry": "几何",
    "Data analysis": "数据分析"
  },
  French: {},
  Vietnamese: {},
  Arabic: {},
  Korean: {}
};

export function translate(text: string, language: Language) {
  if (language === "English") return text;
  const dictionary = translations[language];
  if (dictionary[text]) return dictionary[text];

  let translated = text;
  Object.entries(problemPrefixes[language] ?? {}).forEach(([from, to]) => {
    translated = translated.replace(from, to);
  });
  translated = translated
    .replace(/Grade (\d+)/g, language === "Spanish" ? "Grado $1" : language === "Chinese" ? "$1 年级" : "Grade $1")
    .replace(/Question (\d+) of (\d+)/g, language === "Spanish" ? "Pregunta $1 de $2" : language === "Chinese" ? "第 $1 题，共 $2 题" : "Question $1 of $2")
    .replace(/Problem (\d+)/g, language === "Spanish" ? "Problema $1" : language === "Chinese" ? "第 $1 题" : "Problem $1")
    .replace(/skip-readiness test/g, language === "Spanish" ? "examen de preparación para avanzar de grado" : language === "Chinese" ? "跳级准备测试" : "skip-readiness test")
    .replace(/skip-readiness prep/g, language === "Spanish" ? "preparación para avanzar de grado" : language === "Chinese" ? "跳级准备" : "skip-readiness prep")
    .replace(/skip-readiness problem/g, language === "Spanish" ? "problema de preparación para avanzar de grado" : language === "Chinese" ? "跳级准备题" : "skip-readiness problem")
    .replace(/Welcome back\. Your/g, language === "Spanish" ? "Bienvenido de nuevo. Tu" : language === "Chinese" ? "欢迎回来。你的" : "Welcome back. Your")
    .replace(/plan is ready\./g, language === "Spanish" ? "plan está listo." : language === "Chinese" ? "计划已准备好。" : "plan is ready.")
    .replace(/Lesson/g, language === "Spanish" ? "Lección" : language === "Chinese" ? "课程" : "Lesson")
    .replace(/Example problem/g, language === "Spanish" ? "Problema de ejemplo" : language === "Chinese" ? "示例题" : "Example problem")
    .replace(/Not yet\. Review the solution, then try another problem\./g, language === "Spanish" ? "Todavía no. Revisa la solución y prueba otro problema." : language === "Chinese" ? "还不对。查看解答，然后再试下一题。" : "Not yet. Review the solution, then try another problem.");
  if (language === "Spanish") {
    translated = translated
      .replace(/Evaluate/g, "Evalúa")
      .replace(/Which fraction is equivalent to/g, "¿Qué fracción es equivalente a")
      .replace(/Solve for x/g, "Resuelve x")
      .replace(/Solve/g, "Resuelve")
      .replace(/What is the mean of/g, "¿Cuál es la media de")
      .replace(/What is its area/g, "¿Cuál es su área")
      .replace(/What is its perimeter/g, "¿Cuál es su perímetro")
      .replace(/Which value is correct/g, "¿Qué valor es correcto")
      .replace(/Correct answer/g, "Respuesta correcta");
  }
  if (language === "Chinese") {
    translated = translated
      .replace(/Evaluate/g, "计算")
      .replace(/Which fraction is equivalent to/g, "哪个分数等于")
      .replace(/Solve for x/g, "求 x")
      .replace(/Solve/g, "求解")
      .replace(/What is the mean of/g, "这些数的平均数是多少：")
      .replace(/What is its area/g, "它的面积是多少")
      .replace(/What is its perimeter/g, "它的周长是多少")
      .replace(/Which value is correct/g, "哪个值是正确的")
      .replace(/Correct answer/g, "正确答案");
  }
  return translated;
}
