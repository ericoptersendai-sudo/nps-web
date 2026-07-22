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

const uiTranslations: Record<Exclude<Language, "English">, Record<string, string>> = {
  Spanish: {
    Help: "Ayuda",
    Login: "Iniciar sesión",
    Account: "Cuenta",
    "Log in": "Iniciar sesión",
    "Create account": "Crear cuenta",
    "Forgot passcode?": "¿Olvidaste tu código?",
    Username: "Usuario",
    Passcode: "Código",
    "Recovery passkey": "Clave de recuperación",
    "Choose a username": "Elige un usuario",
    "Enter a passcode": "Ingresa un código",
    "Enter a new passcode": "Ingresa un código nuevo",
    "Make a recovery passkey": "Crea una clave de recuperación",
    "Enter your recovery passkey": "Ingresa tu clave de recuperación",
    "Save this somewhere private. It lets you reset your passcode later.": "Guárdala en un lugar privado. Te permite restablecer tu código después.",
    "Use the recovery passkey you made when creating the account.": "Usa la clave de recuperación que creaste con la cuenta.",
    "Reset passcode": "Restablecer código",
    "Account status": "Estado de la cuenta",
    "You are signed in.": "Has iniciado sesión.",
    "No one is signed in.": "Nadie ha iniciado sesión.",
    "Accounts are saved in this browser so progress can feel more personal on this device.": "Las cuentas se guardan en este navegador para personalizar el progreso en este dispositivo.",
    "Sign out": "Cerrar sesión",
    "Username must be at least 3 characters.": "El usuario debe tener al menos 3 caracteres.",
    "Passcode must be at least 4 characters.": "El código debe tener al menos 4 caracteres.",
    "Recovery passkey must be at least 4 characters.": "La clave de recuperación debe tener al menos 4 caracteres.",
    "That username already exists. Try logging in.": "Ese usuario ya existe. Intenta iniciar sesión.",
    "Account created. You are signed in.": "Cuenta creada. Has iniciado sesión.",
    "Username or passcode is incorrect.": "El usuario o el código es incorrecto.",
    "Signed in.": "Sesión iniciada.",
    "New passcode must be at least 4 characters.": "El nuevo código debe tener al menos 4 caracteres.",
    "No account was found with that username.": "No se encontró una cuenta con ese usuario.",
    "This account does not have a recovery passkey yet.": "Esta cuenta aún no tiene clave de recuperación.",
    "Recovery passkey is incorrect.": "La clave de recuperación es incorrecta.",
    "Passcode reset. You can log in now.": "Código restablecido. Ahora puedes iniciar sesión.",
    "Cookie choices": "Opciones de cookies",
    "Cookies must be accepted before using this website. They keep settings, accounts, progress, and anonymous usage tracking working.": "Debes aceptar las cookies antes de usar este sitio. Mantienen funcionando la configuración, las cuentas, el progreso y el seguimiento anónimo de uso.",
    "This website uses local browser storage for settings and progress. If you accept, Google Analytics also tracks anonymous site usage. No usernames, passcodes, or answers are sent.": "Este sitio usa almacenamiento local del navegador para configuración y progreso. Si aceptas, Google Analytics también registra uso anónimo. No se envían usuarios, códigos ni respuestas.",
    "Accept cookies": "Aceptar cookies",
    "Decline cookies": "Rechazar cookies",
    Welcome: "Bienvenido",
    "Here is how to use the app": "Así se usa la aplicación",
    "This guide only appears once for this account on this browser.": "Esta guía aparece solo una vez para esta cuenta en este navegador.",
    "Close guide": "Cerrar guía",
    "Start in Prep": "Empieza en Preparación",
    "Take the Test": "Toma el examen",
    "Pick the Grade": "Elige el grado",
    "Adjust Settings": "Ajusta la configuración",
    "Use Prep Mode for unlimited practice problems with worked solutions before you take a test.": "Usa Preparación para practicar sin límite con soluciones antes del examen.",
    "Use Test when you are ready for a 50-question proficiency-style check for your selected grade and subject.": "Usa Examen cuando estés listo para una prueba de competencia de 50 preguntas para tu grado y materia.",
    "Choose the grade you are trying to skip into so the app gives you the right level of difficulty.": "Elige el grado al que quieres avanzar para recibir la dificultad correcta.",
    "Change language, theme, text size, and other settings to make the website easier to use.": "Cambia idioma, tema, tamaño del texto y otros ajustes para usar mejor el sitio.",
    "Open Prep": "Abrir Preparación",
    "Open Test": "Abrir Examen",
    "Choose Grade": "Elegir grado",
    "Open Settings": "Abrir configuración",
    "How to use the website.": "Cómo usar el sitio web.",
    "Start Prep Mode": "Iniciar preparación",
    "Click Prep in the side menu.": "Haz clic en Preparación en el menú lateral.",
    "Choose Mathematics or English Language Arts.": "Elige Matemáticas o Artes del lenguaje inglés.",
    "Click Study Mode.": "Haz clic en Modo de estudio.",
    "Pick an answer, then click Check Answer to see the worked solution.": "Elige una respuesta y haz clic en Revisar respuesta para ver la solución.",
    "Click Next Problem to keep practicing.": "Haz clic en Siguiente problema para seguir practicando.",
    "Click Grade and choose the grade you are trying to skip into.": "Haz clic en Grado y elige el grado al que quieres avanzar.",
    "Click Test in the side menu.": "Haz clic en Examen en el menú lateral.",
    "Answer all 50 questions.": "Responde las 50 preguntas.",
    "Click Submit to see your final score and explanations.": "Haz clic en Enviar para ver tu puntaje final y las explicaciones.",
    "Click Grade in the side menu.": "Haz clic en Grado en el menú lateral.",
    "Choose the grade you want to skip into.": "Elige el grado al que quieres avanzar.",
    "The Prep and Test pages will update to match that grade.": "Preparación y Examen se actualizarán para ese grado.",
    "Use Settings": "Usar configuración",
    "Click Settings in the side menu.": "Haz clic en Configuración en el menú lateral.",
    "Change language, dark mode, text size, colors, or brightness.": "Cambia idioma, modo oscuro, tamaño de texto, colores o brillo.",
    "Anonymous Usage is protected by the usage password.": "Uso anónimo está protegido por la contraseña de uso.",
    "Recover a Passcode": "Recuperar un código",
    "Click Login in the side menu.": "Haz clic en Iniciar sesión en el menú lateral.",
    "Enter your username, your recovery passkey, and a new passcode.": "Ingresa tu usuario, clave de recuperación y un código nuevo.",
    "Click Reset passcode, then log in with the new passcode.": "Haz clic en Restablecer código y luego inicia sesión con el código nuevo.",
    "Open Login": "Abrir inicio de sesión",
    "Quick tips": "Consejos rápidos",
    "Prep is for learning and unlimited practice. Test is for checking readiness.": "Preparación sirve para aprender y practicar sin límite. Examen sirve para comprobar preparación.",
    "If a question feels tricky, read the solution and compare why the wrong choices do not work.": "Si una pregunta parece difícil, lee la solución y compara por qué las opciones incorrectas no funcionan.",
    "Save your recovery passkey somewhere private when you create an account.": "Guarda tu clave de recuperación en un lugar privado al crear una cuenta.",
    "Anonymous Usage": "Uso anónimo",
    "Enter the usage password to view anonymous stats.": "Ingresa la contraseña de uso para ver estadísticas anónimas.",
    Password: "Contraseña",
    "Incorrect password.": "Contraseña incorrecta.",
    "Unlock Usage": "Desbloquear uso",
    "These counts stay in this browser. They do not include usernames, passcodes, or school-wide totals from other devices.": "Estos conteos se quedan en este navegador. No incluyen usuarios, códigos ni totales de otros dispositivos.",
    "Site opens": "Aperturas del sitio",
    Events: "Eventos",
    "Account logins": "Inicios de sesión",
    "Accounts created": "Cuentas creadas",
    "Most opened pages": "Páginas más abiertas",
    "Score bands": "Rangos de puntaje",
    "Recent anonymous events": "Eventos anónimos recientes",
    "No page views yet.": "Aún no hay vistas de página.",
    "No completed tests yet.": "Aún no hay exámenes completados.",
    "No events yet.": "Aún no hay eventos.",
    Section: "Sección",
    "All available practice problems have been completed.": "Se completaron todos los problemas de práctica disponibles.",
    "No practice problems added yet.": "Aún no hay problemas de práctica.",
    "Switch grades or subjects for a new unused question set.": "Cambia de grado o materia para obtener preguntas nuevas.",
    "Tell me what curriculum to add, and practice mode will fill back in.": "Dime qué currículo agregar y la práctica se llenará de nuevo.",
    "No lessons added yet.": "Aún no hay lecciones.",
    "This subject is ready for the curriculum you want to add next.": "Esta materia está lista para el currículo que quieras agregar."
  },
  Chinese: {
    Help: "帮助", Login: "登录", Account: "账户", "Log in": "登录", "Create account": "创建账户", "Forgot passcode?": "忘记密码？", Username: "用户名", Passcode: "密码", "Recovery passkey": "恢复密钥", "Choose a username": "选择用户名", "Enter a passcode": "输入密码", "Enter a new passcode": "输入新密码", "Make a recovery passkey": "创建恢复密钥", "Enter your recovery passkey": "输入恢复密钥", "Reset passcode": "重置密码", "Account status": "账户状态", "You are signed in.": "你已登录。", "No one is signed in.": "当前无人登录。", "Sign out": "退出登录", "Cookie choices": "Cookie 选择", "Cookies must be accepted before using this website. They keep settings, accounts, progress, and anonymous usage tracking working.": "必须接受 Cookie 才能使用此网站。它们用于保存设置、账户、进度和匿名使用统计。", "Accept cookies": "接受 Cookie", "Decline cookies": "拒绝 Cookie", Welcome: "欢迎", "Here is how to use the app": "应用使用指南", "Close guide": "关闭指南", "Start in Prep": "从备考开始", "Take the Test": "参加测试", "Pick the Grade": "选择年级", "Adjust Settings": "调整设置", "Open Prep": "打开备考", "Open Test": "打开测试", "Choose Grade": "选择年级", "Open Settings": "打开设置", "How to use the website.": "如何使用网站。", "Start Prep Mode": "开始备考模式", "Take a Test": "参加测试", "Change Grade": "更改年级", "Use Settings": "使用设置", "Recover a Passcode": "恢复密码", "Open Login": "打开登录", "Quick tips": "快速提示", "Anonymous Usage": "匿名使用情况", Password: "密码", "Incorrect password.": "密码错误。", "Unlock Usage": "解锁使用情况", "Site opens": "网站打开次数", Events: "事件", "Account logins": "账户登录", "Accounts created": "已创建账户", "Most opened pages": "最常打开页面", "Score bands": "分数区间", "Recent anonymous events": "最近匿名事件", "No page views yet.": "还没有页面浏览。", "No completed tests yet.": "还没有完成的测试。", "No events yet.": "还没有事件。", Section: "章节", "All available practice problems have been completed.": "所有可用练习题已完成。", "No practice problems added yet.": "还没有练习题。", "No lessons added yet.": "还没有课程。"
  },
  French: {
    Help: "Aide", Login: "Connexion", Account: "Compte", "Log in": "Se connecter", "Create account": "Créer un compte", "Forgot passcode?": "Code oublié ?", Username: "Nom d'utilisateur", Passcode: "Code", "Recovery passkey": "Clé de récupération", "Choose a username": "Choisir un nom d'utilisateur", "Enter a passcode": "Entrer un code", "Enter a new passcode": "Entrer un nouveau code", "Make a recovery passkey": "Créer une clé de récupération", "Enter your recovery passkey": "Entrer la clé de récupération", "Reset passcode": "Réinitialiser le code", "Account status": "État du compte", "You are signed in.": "Vous êtes connecté.", "No one is signed in.": "Personne n'est connecté.", "Sign out": "Se déconnecter", "Cookie choices": "Choix des cookies", "Accept cookies": "Accepter les cookies", "Decline cookies": "Refuser les cookies", Welcome: "Bienvenue", "Here is how to use the app": "Voici comment utiliser l'application", "Close guide": "Fermer le guide", "Start in Prep": "Commencer la préparation", "Take the Test": "Passer le test", "Pick the Grade": "Choisir le niveau", "Adjust Settings": "Régler les paramètres", "Open Prep": "Ouvrir la préparation", "Open Test": "Ouvrir le test", "Choose Grade": "Choisir le niveau", "Open Settings": "Ouvrir les paramètres", "How to use the website.": "Comment utiliser le site.", "Start Prep Mode": "Démarrer le mode préparation", "Take a Test": "Passer un test", "Change Grade": "Changer de niveau", "Use Settings": "Utiliser les paramètres", "Recover a Passcode": "Récupérer un code", "Open Login": "Ouvrir la connexion", "Quick tips": "Conseils rapides", "Anonymous Usage": "Utilisation anonyme", Password: "Mot de passe", "Incorrect password.": "Mot de passe incorrect.", "Unlock Usage": "Déverrouiller l'utilisation", "Site opens": "Ouvertures du site", Events: "Événements", "Account logins": "Connexions", "Accounts created": "Comptes créés", "Most opened pages": "Pages les plus ouvertes", "Score bands": "Bandes de score", "Recent anonymous events": "Événements anonymes récents", "No page views yet.": "Aucune vue de page pour l'instant.", "No completed tests yet.": "Aucun test terminé pour l'instant.", "No events yet.": "Aucun événement pour l'instant.", Section: "Section"
  },
  Vietnamese: {
    Help: "Trợ giúp", Login: "Đăng nhập", Account: "Tài khoản", "Log in": "Đăng nhập", "Create account": "Tạo tài khoản", "Forgot passcode?": "Quên mã?", Username: "Tên người dùng", Passcode: "Mã", "Recovery passkey": "Khóa khôi phục", "Choose a username": "Chọn tên người dùng", "Enter a passcode": "Nhập mã", "Enter a new passcode": "Nhập mã mới", "Make a recovery passkey": "Tạo khóa khôi phục", "Enter your recovery passkey": "Nhập khóa khôi phục", "Reset passcode": "Đặt lại mã", "Account status": "Trạng thái tài khoản", "You are signed in.": "Bạn đã đăng nhập.", "No one is signed in.": "Chưa ai đăng nhập.", "Sign out": "Đăng xuất", "Cookie choices": "Lựa chọn cookie", "Accept cookies": "Chấp nhận cookie", "Decline cookies": "Từ chối cookie", Welcome: "Chào mừng", "Here is how to use the app": "Cách sử dụng ứng dụng", "Close guide": "Đóng hướng dẫn", "Start in Prep": "Bắt đầu ôn tập", "Take the Test": "Làm bài kiểm tra", "Pick the Grade": "Chọn lớp", "Adjust Settings": "Điều chỉnh cài đặt", "Open Prep": "Mở ôn tập", "Open Test": "Mở kiểm tra", "Choose Grade": "Chọn lớp", "Open Settings": "Mở cài đặt", "How to use the website.": "Cách sử dụng trang web.", "Start Prep Mode": "Bắt đầu chế độ ôn tập", "Take a Test": "Làm bài kiểm tra", "Change Grade": "Đổi lớp", "Use Settings": "Dùng cài đặt", "Recover a Passcode": "Khôi phục mã", "Open Login": "Mở đăng nhập", "Quick tips": "Mẹo nhanh", "Anonymous Usage": "Sử dụng ẩn danh", Password: "Mật khẩu", "Incorrect password.": "Mật khẩu không đúng.", "Unlock Usage": "Mở khóa sử dụng", "Site opens": "Lượt mở trang", Events: "Sự kiện", "Account logins": "Lượt đăng nhập", "Accounts created": "Tài khoản đã tạo", "Most opened pages": "Trang mở nhiều nhất", "Score bands": "Nhóm điểm", "Recent anonymous events": "Sự kiện ẩn danh gần đây", Section: "Phần"
  },
  Arabic: {
    Help: "المساعدة", Login: "تسجيل الدخول", Account: "الحساب", "Log in": "تسجيل الدخول", "Create account": "إنشاء حساب", "Forgot passcode?": "هل نسيت الرمز؟", Username: "اسم المستخدم", Passcode: "الرمز", "Recovery passkey": "مفتاح الاسترداد", "Choose a username": "اختر اسم مستخدم", "Enter a passcode": "أدخل الرمز", "Enter a new passcode": "أدخل رمزًا جديدًا", "Make a recovery passkey": "أنشئ مفتاح استرداد", "Enter your recovery passkey": "أدخل مفتاح الاسترداد", "Reset passcode": "إعادة تعيين الرمز", "Account status": "حالة الحساب", "You are signed in.": "تم تسجيل الدخول.", "No one is signed in.": "لا يوجد مستخدم مسجل.", "Sign out": "تسجيل الخروج", "Cookie choices": "خيارات ملفات تعريف الارتباط", "Accept cookies": "قبول ملفات تعريف الارتباط", "Decline cookies": "رفض ملفات تعريف الارتباط", Welcome: "مرحبًا", "Here is how to use the app": "إليك كيفية استخدام التطبيق", "Close guide": "إغلاق الدليل", "Start in Prep": "ابدأ بالتحضير", "Take the Test": "خذ الاختبار", "Pick the Grade": "اختر الصف", "Adjust Settings": "تعديل الإعدادات", "Open Prep": "فتح التحضير", "Open Test": "فتح الاختبار", "Choose Grade": "اختيار الصف", "Open Settings": "فتح الإعدادات", "How to use the website.": "كيفية استخدام الموقع.", "Start Prep Mode": "بدء وضع التحضير", "Take a Test": "خذ اختبارًا", "Change Grade": "تغيير الصف", "Use Settings": "استخدام الإعدادات", "Recover a Passcode": "استرداد الرمز", "Open Login": "فتح تسجيل الدخول", "Quick tips": "نصائح سريعة", "Anonymous Usage": "استخدام مجهول", Password: "كلمة المرور", "Incorrect password.": "كلمة المرور غير صحيحة.", "Unlock Usage": "فتح الاستخدام", "Site opens": "مرات فتح الموقع", Events: "الأحداث", "Account logins": "تسجيلات الدخول", "Accounts created": "الحسابات المنشأة", "Most opened pages": "الصفحات الأكثر فتحًا", "Score bands": "نطاقات الدرجات", "Recent anonymous events": "أحداث مجهولة حديثة", Section: "قسم"
  },
  Korean: {
    Help: "도움말", Login: "로그인", Account: "계정", "Log in": "로그인", "Create account": "계정 만들기", "Forgot passcode?": "비밀번호를 잊었나요?", Username: "사용자 이름", Passcode: "비밀번호", "Recovery passkey": "복구 키", "Choose a username": "사용자 이름 선택", "Enter a passcode": "비밀번호 입력", "Enter a new passcode": "새 비밀번호 입력", "Make a recovery passkey": "복구 키 만들기", "Enter your recovery passkey": "복구 키 입력", "Reset passcode": "비밀번호 재설정", "Account status": "계정 상태", "You are signed in.": "로그인했습니다.", "No one is signed in.": "로그인한 사람이 없습니다.", "Sign out": "로그아웃", "Cookie choices": "쿠키 선택", "Accept cookies": "쿠키 허용", "Decline cookies": "쿠키 거절", Welcome: "환영합니다", "Here is how to use the app": "앱 사용 방법", "Close guide": "가이드 닫기", "Start in Prep": "준비로 시작", "Take the Test": "시험 보기", "Pick the Grade": "학년 선택", "Adjust Settings": "설정 조정", "Open Prep": "준비 열기", "Open Test": "시험 열기", "Choose Grade": "학년 선택", "Open Settings": "설정 열기", "How to use the website.": "웹사이트 사용 방법.", "Start Prep Mode": "준비 모드 시작", "Take a Test": "시험 보기", "Change Grade": "학년 변경", "Use Settings": "설정 사용", "Recover a Passcode": "비밀번호 복구", "Open Login": "로그인 열기", "Quick tips": "빠른 팁", "Anonymous Usage": "익명 사용", Password: "비밀번호", "Incorrect password.": "비밀번호가 올바르지 않습니다.", "Unlock Usage": "사용 통계 열기", "Site opens": "사이트 열림", Events: "이벤트", "Account logins": "계정 로그인", "Accounts created": "생성된 계정", "Most opened pages": "가장 많이 열린 페이지", "Score bands": "점수 구간", "Recent anonymous events": "최근 익명 이벤트", Section: "섹션"
  }
};

export function translate(text: string, language: Language) {
  if (language === "English") return text;
  const dictionary = translations[language];
  if (dictionary[text]) return dictionary[text];
  const uiDictionary = uiTranslations[language];
  if (uiDictionary[text]) return uiDictionary[text];

  let translated = text;
  Object.entries(problemPrefixes[language] ?? {}).forEach(([from, to]) => {
    translated = translated.replace(from, to);
  });
  const gradePhrase: Record<Exclude<Language, "English">, string> = {
    Spanish: "Grado $1",
    Chinese: "$1 年级",
    French: "Niveau $1",
    Vietnamese: "Lớp $1",
    Arabic: "الصف $1",
    Korean: "$1학년"
  };
  const questionPhrase: Record<Exclude<Language, "English">, string> = {
    Spanish: "Pregunta $1 de $2",
    Chinese: "第 $1 题，共 $2 题",
    French: "Question $1 sur $2",
    Vietnamese: "Câu $1 trong $2",
    Arabic: "السؤال $1 من $2",
    Korean: "$2문항 중 $1번"
  };
  const problemPhrase: Record<Exclude<Language, "English">, string> = {
    Spanish: "Problema $1",
    Chinese: "第 $1 题",
    French: "Problème $1",
    Vietnamese: "Bài $1",
    Arabic: "المسألة $1",
    Korean: "$1번 문제"
  };
  const problemOfPhrase: Record<Exclude<Language, "English">, string> = {
    Spanish: "Problema $1 de $2",
    Chinese: "第 $1 题，共 $2 题",
    French: "Problème $1 sur $2",
    Vietnamese: "Bài $1 trong $2",
    Arabic: "المسألة $1 من $2",
    Korean: "$2문제 중 $1번"
  };
  const stepPhrase: Record<Exclude<Language, "English">, string> = {
    Spanish: "Paso $1",
    Chinese: "步骤 $1",
    French: "Étape $1",
    Vietnamese: "Bước $1",
    Arabic: "الخطوة $1",
    Korean: "$1단계"
  };
  const signedInPhrase: Record<Exclude<Language, "English">, string> = {
    Spanish: "Sesión iniciada como $1",
    Chinese: "已登录为 $1",
    French: "Connecté en tant que $1",
    Vietnamese: "Đã đăng nhập với tên $1",
    Arabic: "تم تسجيل الدخول باسم $1",
    Korean: "$1(으)로 로그인됨"
  };
  translated = translated
    .replace(/Signed in as (.+)/g, signedInPhrase[language])
    .replace(/Grade (\d+)/g, gradePhrase[language])
    .replace(/Question (\d+) of (\d+)/g, questionPhrase[language])
    .replace(/Problem (\d+) of (\d+)/g, problemOfPhrase[language])
    .replace(/Problem (\d+)/g, problemPhrase[language])
    .replace(/Step (\d+)/g, stepPhrase[language])
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
