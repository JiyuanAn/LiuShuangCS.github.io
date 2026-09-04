(function () {
    "use strict";

    // Every translatable piece of content lives here, keyed by the same
    // `data-i18n="..."` attribute you'll find on the matching element in
    // index.html. To edit a translation, or add a new one:
    //   1. Give the element (or new element) a `data-i18n="some.key"` attribute.
    //   2. Add `"some.key": { "en": "...", "zh": "..." }` below.
    // No CSS-selector guessing, no keeping two documents in sync by hand.
    const translations = {
        "nav.experience": {
            "en": "Experience",
            "zh": "工作经历"
        },
        "nav.services": {
            "en": "Services",
            "zh": "专业服务"
        },
        "nav.projects": {
            "en": "Projects",
            "zh": "项目"
        },
        "nav.patents": {
            "en": "Patents",
            "zh": "专利"
        },
        "nav.honors": {
            "en": "Honors &amp; Awards",
            "zh": "荣誉奖励"
        },
        "nav.publications": {
            "en": "Publications",
            "zh": "论文"
        },
        "nav.teaching": {
            "en": "Teaching",
            "zh": "教学"
        },
        "profile.affiliation": {
            "en": "School of Information, Renmin University of China",
            "zh": "中国人民大学信息学院"
        },
        "profile.title": {
            "en": "Associate Professor · Ph.D. Supervisor · Wu Yuzhang Young Scholar",
            "zh": "副教授 · 博士生导师 · 吴玉章青年学者"
        },
        "profile.email": {
            "en": "shuang.liu@ruc.edu.cn",
            "zh": "shuang.liu@ruc.edu.cn"
        },
        "profile.bioHeading": {
            "en": "Profile",
            "zh": "个人简介"
        },
        "profile.bio": {
            "en": "Shuang Liu is a Wu Yuzhang Young Scholar, Ph.D. supervisor, and associate professor at Renmin University of China. She is an executive committee member of the CCF Technical Committees on System Software and on Databases, and received her Ph.D. from the National University of Singapore. Her research focuses on complex-system testing, database testing, large-model testing, and related directions. She has published more than 70 papers in international venues such as PVLDB, ICDE, ISSTA, ESEC/FSE, ASE, ICSE, FM, USENIX Security, TSE, TOSEM, and the Journal of Software (including more than 30 CCF-A papers), and received the ESEC/FSE 2020 (CCF-A) Best Paper Award. She teaches several core computer-science courses, including Compiler Principles (Honors Course) and Software Engineering, and serves on multiple conference program committees and as a journal reviewer. She leads multiple funded projects, including an NSFC General Program grant, a subproject of a national science and technology major program, an NSFC Youth Program grant, and the CCF-Ant Joint Research Fund.",
            "zh": "刘爽，中国人民大学吴玉章青年学者，博导、副教授。中国计算机学会系统软件专委、数据库专委执行委员，在新加坡国立大学获得博士学位。从事复杂系统测试、数据库测试、大模型测试等相关方向的研究工作。在相关领域国际会议及期刊PVLDB, ICDE, ISSTA, ESEC/FSE, ASE, ICSE, FM, USENIX Security, TSE, TOSEM, 软件学报等发表论文70余篇（其中CCF A类论文30余篇），并获得ESEC/FSE 2020 (CCF A) 最佳论文奖。主讲编译原理（荣誉课程）、软件工程等多门计算机专业核心课程。担任多个会议程序委员会委员和期刊审稿人。主持包括自科面上、重大专项子课题、青年项目，CCF-蚂蚁联合基金等在内的多项项目。"
        },
        "heading.News": {
            "en": "News",
            "zh": "最新动态"
        },
        "heading.Working-Experience": {
            "en": "Working Experience",
            "zh": "工作经历"
        },
        "heading.Education": {
            "en": "Education",
            "zh": "教育经历"
        },
        "heading.Professional-Services": {
            "en": "Professional Services",
            "zh": "专业服务"
        },
        "heading.Projects": {
            "en": "Projects",
            "zh": "项目"
        },
        "heading.Patents": {
            "en": "Patents",
            "zh": "专利"
        },
        "heading.Honors-and-Awards": {
            "en": "Honors and Awards",
            "zh": "荣誉奖励"
        },
        "heading.Conference": {
            "en": "Conference",
            "zh": "会议论文"
        },
        "heading.Journal-Report": {
            "en": "Journal/Report",
            "zh": "期刊 / 报告"
        },
        "heading.Teaching": {
            "en": "Teaching",
            "zh": "教学"
        },
        "footer.rights": {
            "en": "All rights reserved.",
            "zh": "保留所有权利。"
        },
        "footer.credit": {
            "en": "Template by <a href=\"https://colorlib.com\" rel=\"noopener\" target=\"_blank\">Colorlib</a>.",
            "zh": "页面模板：<a href=\"https://colorlib.com\" target=\"_blank\" rel=\"noopener\">Colorlib</a>。"
        },
        "list.News.2": {
            "en": "<b>2024</b> — Selected as a Wu Yuzhang Young Scholar at Renmin University of China.",
            "zh": "<b>2024</b> — 入选中国人民大学吴玉章青年学者。"
        },
        "list.Working-Experience.0": {
            "en": "<b>Renmin University of China</b> <span>January 2024 - Present</span> <p>Associate Professor · Ph.D. Supervisor</p> <p></p>",
            "zh": "<b>中国人民大学信息学院</b><span>2024 年 1 月 – 至今</span><p>副教授 · 博士生导师</p>"
        },
        "list.Working-Experience.1": {
            "en": "<b>Tianjin University</b> <span>October 2017-December 2023</span> <p>Associate Professor</p> <p></p>",
            "zh": "<b>天津大学智能与计算学部</b><span>2017 年 10 月 – 2023 年 12 月</span><p>副教授</p>"
        },
        "list.Working-Experience.2": {
            "en": "<b>Singapore Institute of Technology</b> <span>June 2016 - September 2017</span> <p>Lecturer</p> <p> </p>",
            "zh": "<b>新加坡理工大学信息与通信技术学院</b><span>2016 年 6 月 – 2017 年 9 月</span><p>讲师</p>"
        },
        "list.Working-Experience.3": {
            "en": "<b>Singapore University of Technology and Design</b> <span>August 2015 - May 2016</span> <p>Postdoc Research Fellow</p> <p></p>",
            "zh": "<b>新加坡科技与设计大学信息系统技术设计学院</b><span>2015 年 8 月 – 2016 年 5 月</span><p>博士后</p>"
        },
        "list.Working-Experience.4": {
            "en": "<b>Singapore University of Technology and Design</b> <span>August 2014 - July 2015</span> <p>Research Assistant</p>",
            "zh": "<b>新加坡科技与设计大学信息系统技术设计学院</b><span>2014 年 8 月 – 2015 年 7 月</span><p>科研助理</p>"
        },
        "list.Education.0": {
            "en": "<b>National University of Singapore</b> <span>August 2010 - June 2015</span> <p>Ph.D. in Computer Science · Software Testing and Verification</p> <p> </p>",
            "zh": "<b>新加坡国立大学计算机学院</b><span>2010 年 8 月 – 2015 年 6 月</span><p>计算机科学博士 · 软件测试与验证方向</p>"
        },
        "list.Education.1": {
            "en": "<b>Renmin University of China</b> <span>September 2006 - July 2010</span> <p>B.Eng.</p> <p> </p>",
            "zh": "<b>中国人民大学信息学院</b><span>2006 年 9 月 – 2010 年 7 月</span><p>学士</p>"
        },
        "list.Professional-Services.0": {
            "en": "<b>Publication Chair</b> <p>ICPADS 2019; NDBC 2026</p>",
            "zh": "<b>会议出版主席</b><p>ICPADS 2019；NDBC 2026</p>"
        },
        "list.Professional-Services.1": {
            "en": "<b>Program Committee Member</b> <p>ICECCS 2018, ICECCS 2019, ICFEM 2019, SETTA 2019, ICECCS 2020, ICECCS 2022, ASE Student Research Competition 2022, ICSE 2023 CORE, SETTA 2023, Internetware 2026, SETTA 2026, and ICDE 2026</p>",
            "zh": "<b>国际会议程序委员会成员</b><p>ICECCS 2018、ICECCS 2019、ICFEM 2019、SETTA 2019、ICECCS 2020、ICECCS 2022、ASE Student Research Competition 2022、ICSE 2023 CORE、SETTA 2023、Internetware 2026、SETTA 2026、ICDE 2026</p>"
        },
        "list.Professional-Services.2": {
            "en": "<b>Project Advisor, OpenTeleDB Database Open-Source Community Advisory Board</b> <span>2025 - 2026</span>",
            "zh": "<b>OpenTeleDB 数据库开源社区顾问委员会项目顾问</b><span>2025 – 2026</span>"
        },
        "list.Professional-Services.3": {
            "en": "<b>Reviewer of the following journals: TOSEM, ISSE, Computing and Informatics, Journal of Systems and Software</b> <p></p>",
            "zh": "<b>期刊审稿人</b><p>TOSEM、ISSE、Computing and Informatics、Journal of Systems and Software</p>"
        },
        "list.Professional-Services.4": {
            "en": "<b>Reviewer of the following conferences: ICSE, TASE, ICFEM, APSEC, SEFM, ISORC, FTSCS, ACM SAC, ACOMP, SVT, CAI</b> <p></p>",
            "zh": "<b>会议审稿人</b><p>ICSE、TASE、ICFEM、APSEC、SEFM、ISORC、FTSCS、ACM SAC、ACOMP、SVT、CAI</p>"
        },
        "list.Projects.0": {
            "en": "<b>Testing Methods for Silent Bugs in NewSQL Databases</b> <span>January 2025 - December 2028</span> <p>National Natural Science Foundation of China General Program · Principal Investigator</p>",
            "zh": "<b>NewSQL 数据库沉默型缺陷测试方法研究</b><span>2025 年 1 月 – 2028 年 12 月</span><p>国家自然科学基金面上项目 · 主持</p>"
        },
        "list.Projects.1": {
            "en": "<b>Trusted Verification for SGX-based Cloud-Native HTAP Databases</b> <span>September 2024 - August 2025</span> <p>CCF-Ant Research Fund · Principal Investigator</p>",
            "zh": "<b>基于 SGX 的处理可信验证技术云原生数据库混合分析事务</b><span>2024 年 9 月 – 2025 年 8 月</span><p>CCF-蚂蚁科研基金 · 主持</p>"
        },
        "list.Projects.2": {
            "en": "<b>Key Technologies for Material-Data Aggregation, Integration, and Visualization</b> <span>July 2025 - June 2028</span> <p>National Science and Technology Major Project, subproject · Principal Investigator</p>",
            "zh": "<b>材料数据汇聚融通与可视化应用关键技术——子课题</b><span>2025 年 7 月 – 2028 年 6 月</span><p>工信部重点新材料研发及应用国家科技重大专项 · 主持</p>"
        },
        "list.Projects.3": {
            "en": "<b>Transaction Dependency Graph-based OLTP Database Testing</b> <span>September 2024 - August 2027</span> <p>Renmin University of China Research Fund · Principal Investigator</p>",
            "zh": "<b>基于事务依赖图的数据库 OLTP 事务测试方法研究</b><span>2024 年 9 月 – 2027 年 8 月</span><p>中国人民大学科研基金项目（理工类）· 主持</p>"
        },
        "list.Projects.4": {
            "en": "<b>Adaptive Storage-Scheme Selection for Cloud-Native HTAP Databases</b> <span>December 2025 - December 2026</span> <p>Tencent Cloud · Principal Investigator</p>",
            "zh": "<b>面向云原生 HTAP 数据库的自适应存储方案选择技术</b><span>2025 年 12 月 – 2026 年 12 月</span><p>腾讯云 · 主持</p>"
        },
        "list.Projects.5": {
            "en": "<b>Automatic Interpretation and Presentation of Android Privacy Policies</b> <span>January 2019 - December 2021</span> <p>National Natural Science Foundation of China Youth Program · Principal Investigator</p>",
            "zh": "<b>安卓应用隐私协议的自动解释与展示关键技术研究</b><span>2019 年 1 月 – 2021 年 12 月</span><p>国家自然科学基金青年项目 · 主持</p>"
        },
        "list.Projects.6": {
            "en": "<b>Key Technologies for Natural-Language Understanding in Hisense Cloud Brain</b> <span>May 2020 - December 2020</span> <p>Industry-sponsored project · Principal Investigator</p>",
            "zh": "<b>海信云脑自然语言理解关键技术开发</b><span>2020 年 5 月 – 2020 年 12 月</span><p>横向课题 · 主持</p>"
        },
        "list.Projects.7": {
            "en": "<b>Model Anomaly Detection for Cyber-Physical Systems with Missing Anomaly Information</b> <span>January 2019 - December 2021</span> <p>Tianjin University Independent Innovation Fund · Principal Investigator</p>",
            "zh": "<b>异常信息缺失情况下的信息物理系统模型异常检测技术研究</b><span>2019 年 1 月 – 2021 年 12 月</span><p>天津大学自主创新基金 · 主持</p>"
        },
        "list.Projects.8": {
            "en": "<b>Key Technologies for Functional Testing of Database Management Systems</b> <span>August 2022 - July 2024</span> <p>Open Project of the Key Laboratory of High-Confidence Software Technologies · Principal Investigator</p>",
            "zh": "<b>数据库管理系统功能测试关键技术研究</b><span>2022 年 8 月 – 2024 年 7 月</span><p>高安全系统的软件开发与验证技术工业和信息化部重点实验室开放课题 · 主持</p>"
        },
        "list.Projects.9": {
            "en": "<b>Rapid Detection, Localization, and High-quality Automatic Patch Generation for Concurrency Bugs</b> <span>January 2019 - December 2022</span> <p>National Natural Science Foundation of China General Program · Participant</p>",
            "zh": "<b>并发缺陷的快速检测、定位及高质量补丁自动生成研究</b><span>2019 年 1 月 – 2022 年 12 月</span><p>国家自然科学基金面上项目 · 参与</p>"
        },
        "list.Projects.10": {
            "en": "<b>Network Anomaly Behavior Detection and Localization</b> <span>January 2019 - December 2022</span> <p>National Natural Science Foundation of China Key Program · Participant</p>",
            "zh": "<b>网络异常行为检测技术及定位方法</b><span>2019 年 1 月 – 2022 年 12 月</span><p>国家自然科学基金重点项目 · 参与</p>"
        },
        "list.Projects.11": {
            "en": "<b>Key Network-Security Technologies for Media Communication</b> <span>November 2020 - September 2022</span> <p>People's Daily Online · Participant</p>",
            "zh": "<b>面向媒体传播的网络安全关键技术研究</b><span>2020 年 11 月 – 2022 年 9 月</span><p>人民网横向项目 · 参与</p>"
        },
        "list.Projects.12": {
            "en": "<b>Database Customer-Scenario Profiling Based on Machine Learning</b> <span>January 2024 - July 2025</span> <p>Huawei Cloud · Participant</p>",
            "zh": "<b>基于机器学习训练的数据库客户场景画像项目</b><span>2024 年 1 月 – 2025 年 7 月</span><p>华为云 · 参与</p>"
        },
        "list.Projects.13": {
            "en": "<b>Efficient Multi-writer Optimization through Transaction Reordering for OLTP Database Appliances</b> <span>January 2025 - December 2025</span> <p>China Mobile · Participant</p>",
            "zh": "<b>OLTP 数据库一体机中基于事务重排序的高效多写优化技术研究</b><span>2025 年 1 月 – 2025 年 12 月</span><p>中国移动 · 参与</p>"
        },
        "list.Projects.14": {
            "en": "<b>RUC-Kingbase Joint Laboratory 2026 Project</b> <span>January 2026 - December 2026</span> <p>Kingbase · Participant</p>",
            "zh": "<b>人大—电科金仓联合实验室 2026 年度项目</b><span>2026 年 1 月 – 2026 年 12 月</span><p>电科金仓 · 参与</p>"
        },
        "list.Projects.15": {
            "en": "<b>RUC-Tencent Collaborative Innovation Laboratory 2025-2026 Project</b> <span>January 2026 - December 2026</span> <p>Tencent Technology · Participant</p>",
            "zh": "<b>中国人民大学—腾讯协同创新实验室 2025–2026 年度项目</b><span>2026 年 1 月 – 2026 年 12 月</span><p>腾讯科技 · 参与</p>"
        },
        "list.Projects.16": {
            "en": "<b>Large-model Training and Inference Frameworks</b> <span>October 2025 - September 2028</span> <p>Xiaomi · Participant</p>",
            "zh": "<b>大模型训练和推理框架</b><span>2025 年 10 月 – 2028 年 9 月</span><p>小米 · 参与</p>"
        },
        "list.Patents.0": {
            "en": "<b>Shuang Liu, Shujie Dou</b><span>2026.02.27 · CN115809659B</span><p>A Method for Detecting Machine-Translation Software Defects Based on Compositional Semantics</p>",
            "zh": "<b>刘爽，窦淑洁</b><span>2026.02.27 · CN115809659B</span><p>一种基于组合语义的机器翻译软件缺陷检测方法</p>"
        },
        "list.Patents.1": {
            "en": "<b>Shuang Liu, Linshan Leng, Chenglin Tian</b><span>2024.05.07 · CN113986345B</span><p>A Pretraining-enhanced Code Clone Detection Method</p>",
            "zh": "<b>刘爽，冷林珊，田承霖</b><span>2024.05.07 · CN113986345B</span><p>一种预训练增强的代码克隆检测方法</p>"
        },
        "list.Patents.2": {
            "en": "<b>Shuang Liu, Yu Tu</b><span>2024.04.30 · CN11563087B</span><p>A DNS Tunneling Detection Method Combining Encoding Features and Statistical Behavioral Features</p>",
            "zh": "<b>刘爽，涂钰</b><span>2024.04.30 · CN11563087B</span><p>一种基于编码特征与统计行为特征融合的 DNS 隧道检测方法</p>"
        },
        "list.Patents.3": {
            "en": "<b>Shuang Liu, Huaiwei Yang</b><span>2022.04.19 · CN113051607B</span><p>A Privacy Policy Information Extraction Method</p>",
            "zh": "<b>刘爽，杨怀伟</b><span>2022.04.19 · CN113051607B</span><p>一种隐私政策信息提取方法</p>"
        },
        "list.Patents.4": {
            "en": "<b>Shuang Liu, Guanhong Chen</b><span>2022.11.01 · CN113434858B</span><p>A Malware Family Classification Method Based on Disassembled-code Structure and Semantic Features</p>",
            "zh": "<b>刘爽，陈冠宏</b><span>2022.11.01 · CN113434858B</span><p>基于反汇编代码结构和语义特征的恶意软件家族分类方法</p>"
        },
        "list.Patents.5": {
            "en": "<b>Junjie Chen, Ming Yan, Zan Wang, Shuang Liu, Dongdi Zhang</b><span>2023.04.18 · CN112183749B</span><p>A Deep-learning Library Testing Method Based on Guided Model Mutation</p>",
            "zh": "<b>陈俊洁，闫明，王赞，刘爽，张栋迪</b><span>2023.04.18 · CN112183749B</span><p>基于有导向模型变异的深度学习库测试方法</p>"
        },
        "list.Patents.6": {
            "en": "<b>Yanzhou Mu, Zan Wang, Shuang Liu</b><span>2022.05.17 · CN113468047B</span><p>A Heuristic-rule-based Concurrent Adaptive Random Testing Method</p>",
            "zh": "<b>沐燕舟，王赞，刘爽</b><span>2022.05.17 · CN113468047B</span><p>基于启发式规则的并发式自适应随机测试方法</p>"
        },
        "list.Honors-and-Awards.0": {
            "en": "<b>Outstanding Advisor Award, National Student Computer System Capability Competition — Compiler Design Track</b><span>2025, 2026</span>",
            "zh": "<b>全国大学生计算机系统能力大赛编译系统设计赛优秀指导教师奖</b><span>2025, 2026</span>"
        },
        "list.Honors-and-Awards.1": {
            "en": "<b>Wu Yuzhang Young Scholar, Renmin University of China</b><span>2024</span>",
            "zh": "<b>中国人民大学吴玉章青年学者</b><span>2024</span>"
        },
        "list.Honors-and-Awards.2": {
            "en": "<b>CCF Prototype System Competition Award (SANER 2022)</b><span>2022</span> <p>Natural Test Generation for Precise Testing of Question Answering Software</p>",
            "zh": "<b>CCF 原型系统竞赛奖（SANER 2022）</b><span>2022</span><p>获奖系统：Natural Test Generation for Precise Testing of Question Answering Software</p>"
        },
        "list.Honors-and-Awards.3": {
            "en": "<b>Outstanding Undergraduate Thesis Advisor, Tianjin University</b><span>2021</span>",
            "zh": "<b>天津大学本科毕业设计优秀指导教师</b><span>2021</span>"
        },
        "list.Honors-and-Awards.4": {
            "en": "<b>Shen Zhikang Teaching Award, Tianjin University</b><span>2021</span>",
            "zh": "<b>天津大学沈志康奖教金</b><span>2021</span>"
        },
        "list.Honors-and-Awards.5": {
            "en": "<b>Outstanding Reviewer, Journal of Software</b><span>2020</span>",
            "zh": "<b>《软件学报》优秀审稿人</b><span>2020</span>"
        },
        "list.Honors-and-Awards.6": {
            "en": "<b>ACM SigSoft Distinguish Paper Award</b> <span>2020</span> <p>ACM</p> <p></p>",
            "zh": "<b>ACM SIGSOFT 杰出论文奖（ESEC/FSE 2020）</b><span>2020</span><p>获奖论文：Deep Learning Library Testing via Effective Model Generation</p>"
        },
        "list.Honors-and-Awards.7": {
            "en": "<b>MAPTest: An Automatic Platform for Testing Java Thread-Safe Classes based on MAP-Coverage.First Prize of Prototype Competition</b> <span>2019.11.24</span> <p>China Computer Federation</p> <p></p>",
            "zh": "<b>CCF 原型系统竞赛奖（NASAC 2019）</b><span>2019</span><p>获奖系统：MAPTest: An Automatic Platform for Testing Java Thread-Safe Classes based on MAP-Coverage</p>"
        },
        "list.Honors-and-Awards.8": {
            "en": "<b>Second Prize of Best Exhibition Award</b> <span>2019.11.24</span> <p>China Computer Federation</p> <p></p>",
            "zh": "<b>CCF 最佳展览奖（NASAC 2019）</b><span>2019</span><p>获奖论文：A Survey for Testing Deep Neural Networks</p>"
        },
        "list.Honors-and-Awards.9": {
            "en": "<b>ACM TOSEM Distinguished Referee</b> <span>2017 - 2018</span> <p>ACM TOSEM Outstanding Jury</p> <p></p>",
            "zh": "<b>ACM TOSEM 杰出审稿人</b><span>2017 – 2018</span>"
        },
        "list.Honors-and-Awards.10": {
            "en": "<b>ACM TOSEM Distinguished Referee</b> <span>2015 - 2016</span> <p>ACM TOSEM Outstanding Jury</p> <p></p>",
            "zh": "<b>ACM TOSEM 杰出审稿人</b><span>2015 – 2016</span>"
        },
        "list.Honors-and-Awards.11": {
            "en": "<b>National University of Singapore Scholarship</b><span>2010 - 2014</span>",
            "zh": "<b>新加坡国立大学奖学金</b><span>2010 – 2014</span>"
        },
        "list.Honors-and-Awards.12": {
            "en": "<b>National Scholarship</b><span>2009</span>",
            "zh": "<b>国家奖学金</b><span>2009</span>"
        },
        "list.Honors-and-Awards.13": {
            "en": "<b>National Scholarship</b><span>2008</span>",
            "zh": "<b>国家奖学金</b><span>2008</span>"
        },
        "list.Teaching.0": {
            "en": "<b>Compiler Principles</b> <p>2018 Fall, 2019 Fall, 2020 Spring, 2021 Fall, 2022 Fall, 2025 Spring, 2026 Spring</p>",
            "zh": "<b>编译原理</b><p>2018秋季, 2019秋季, 2020春季, 2021秋季, 2022秋季, 2025春季, 2026春季</p>"
        },
        "list.Teaching.1": {
            "en": "<b>Software Engineering</b> <p>2018 Spring, 2019 Spring, 2020 Spring, 2026 Spring</p>",
            "zh": "<b>软件工程</b><p>2018春季, 2019春季, 2020春季, 2026春季</p>"
        },
        "ui.roleAssocProf": {
            "en": "Associate Professor",
            "zh": "副教授"
        },
        "ui.rolePhdSup": {
            "en": "Ph.D. Supervisor",
            "zh": "博士生导师"
        },
        "ui.roleWuYuzhang": {
            "en": "Wu Yuzhang Young Scholar",
            "zh": "吴玉章青年学者"
        },
        "ui.statPubs": {
            "en": "Publications",
            "zh": "发表论文"
        },
        "ui.statCcfA": {
            "en": "CCF-A papers",
            "zh": "CCF-A 论文"
        },
        "ui.statScholar": {
            "en": "Wu Yuzhang<br>Young Scholar",
            "zh": "吴玉章<br>青年学者"
        },
        "ui.statAward": {
            "en": "ESEC/FSE Best<br>Paper Award",
            "zh": "ESEC/FSE<br>最佳论文奖"
        },
        "ui.pubTitle": {
            "en": "Selected Publications",
            "zh": "代表性论文"
        },
        "ui.pubHint": {
            "en": "Search across titles and authors, or filter by CCF rank. Conference and journal / report papers are listed separately, newest first.",
            "zh": "可按标题或作者搜索，也可按 CCF 等级筛选。会议论文与期刊/报告分开列出，按时间倒序排列。"
        },
        "ui.filterAll": {
            "en": "All",
            "zh": "全部"
        },
        "ui.skipToContent": {
            "en": "Skip to content",
            "zh": "跳转到正文"
        },
        "ui.backToTop": {
            "en": "Back to top",
            "zh": "返回顶部"
        },
        "ui.searchPlaceholder": {
            "en": "Search publications…",
            "zh": "搜索论文…"
        },
        "nav.admissions": {
            "en": "Recruiting",
            "zh": "招生信息"
        },
        "admissions.eyebrow": {
            "en": "Now Recruiting",
            "zh": "招生信息"
        },
        "admissions.title": {
            "en": "Recruiting 2027 Graduate Students",
            "zh": "2027 级研究生招生"
        },
        "admissions.text": {
            "en": "Recruiting 2027-entry full-time Ph.D., full-time Doctor of Engineering, and academic / professional Master's students. Looking for students interested in building foundational software testing systems, coding agents, and AI infrastructure.",
            "zh": "招收2027级全日制博士、全日制工程博士、学硕、专硕研究生，欢迎对构建基础软件测试系统、编程智能体、AI 基础设施等方向感兴趣的同学加入。"
        }
    };

    // Exposed so app.js can drive the couple of attributes (input placeholders)
    // that innerHTML-based [data-i18n] swapping can't reach.
    window.SHUANG_LIU_TRANSLATIONS = translations;
    const docTitle = {
    "en": "Shuang Liu (刘爽) | Renmin University of China",
    "zh": "刘爽 | 中国人民大学"
};

    function applyLanguage(language) {
        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            const entry = translations[element.getAttribute("data-i18n")];
            if (!entry) {
                return;
            }
            element.innerHTML = language === "zh" ? entry.zh : entry.en;
        });
    }

    function setLanguage(language) {
        const selected = language === "zh" ? "zh" : "en";

        applyLanguage(selected);

        document.documentElement.lang = selected === "zh" ? "zh-CN" : "en";
        document.title = selected === "zh" ? docTitle.zh : docTitle.en;

        const switcher = document.querySelector(".language-switcher");
        if (switcher) {
            switcher.setAttribute("aria-label", selected === "zh" ? "语言选择" : "Language selection");
        }

        document.querySelectorAll(".language-button").forEach(function (button) {
            const active = button.dataset.language === selected;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", String(active));
        });

        try {
            window.localStorage.setItem("shuang-liu-language", selected);
        } catch (error) {
            // Language switching still works when browser storage is unavailable.
        }

        document.dispatchEvent(new CustomEvent("shuang-liu-language-changed", { detail: { language: selected } }));
    }

    document.getElementById("copyright-year").textContent = new Date().getFullYear();

    document.querySelectorAll(".language-button").forEach(function (button) {
        button.addEventListener("click", function () {
            setLanguage(button.dataset.language);
        });
    });

    function detectInitialLanguage() {
        try {
            const saved = window.localStorage.getItem("shuang-liu-language");
            if (saved === "zh" || saved === "en") {
                return saved;
            }
        } catch (error) {
            // Ignore: browser storage may be unavailable (e.g. private browsing).
        }
        // No stored preference yet: guess from the visitor's browser language
        // so first-time Chinese-speaking visitors land on 中文 automatically.
        try {
            const browserLanguages = navigator.languages && navigator.languages.length
                ? navigator.languages
                : [navigator.language || ""];
            if (browserLanguages.some(function (tag) { return /^zh/i.test(tag); })) {
                return "zh";
            }
        } catch (error) {
            // Ignore: fall through to the English default below.
        }
        return "en";
    }

    // The page starts hidden (see the `html.no-js` rule in index.html) so the
    // visitor never sees a flash of the "wrong" language before this runs.
    // Suppress the switcher's hover/click transition for this first paint only,
    // so the toggle shows its correct state instantly instead of fading in.
    const switcherEl = document.querySelector(".language-switcher");
    if (switcherEl) {
        switcherEl.classList.add("no-anim");
    }
    // Whatever happens above, always reveal the page again.
    try {
        setLanguage(detectInitialLanguage());
    } finally {
        document.documentElement.classList.remove("no-js");
        if (switcherEl) {
            requestAnimationFrame(function () {
                switcherEl.classList.remove("no-anim");
            });
        }
    }
}());
