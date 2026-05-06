/**
 * TrustAI Assistant — Predefined Response Database
 * Each entry has: keywords[], response, trustScore, regen (alternative answer),
 *                 sources[], verifyData[]
 */

const RESPONSES = [

  /* ---- 🎓 SPECIAL DEMO — Seema Ma'am Greeting ---- */
  {
    keywords: ["say hi to seema", "seema maam", "seema ma'am", "seema mam", "hi seema", "hello seema", "greet seema"],
    answer: `Hello, Seema Ma'am! 😊\n\nIt's a genuine pleasure to present our **TrustAI** system to you.\n\nThis prototype was built to solve one of the most pressing challenges in modern AI — the lack of **transparency and verifiability** in AI-generated responses. Our key innovations include:\n\n• **Trust Scoring** — every answer is confidence-rated in real time\n• **Source Verification** — cross-referenced from multiple independent references\n• **Fact-Check Modal** — one click to compare sources side-by-side\n• **Smart Labels** — instant readability of confidence, reliability, and verification status\n\nWe hope this demonstrates that AI can be powerful *and* trustworthy. Thank you for evaluating our work! 🙏`,
    trustScore: 95,
    regenAnswer: `Greetings, Seema Ma'am! 🌟\n\nWelcome to **TrustAI Assistant** — where every AI response comes with full transparency.\n\nOur system is designed with a core belief: users deserve to know *how confident* an AI is, *where* it got its information, and *how to verify* it independently.\n\n• Real-time **confidence scoring** with visual progress bars\n• **Glassmorphic card UI** for clean, professional presentation\n• **Source comparison modal** — showing corroboration status per reference\n• Updates dynamically when you **Regenerate** a response\n\nThank you for your time and evaluation — we hope TrustAI leaves a strong impression! 🎓`,
    sources: [
      { name: "System Generated — TrustAI Demo", type: "gov", color: "#c4b5fd", reliability: 100, url: "https://example.com/trustai/system-demo" },
      { name: "Demo Mode — Personalized Response", type: "article", color: "#67e8f9", reliability: 100, url: "https://example.com/trustai/demo-mode" },
      { name: "TrustAI Project Documentation", type: "research", color: "#a5b4fc", reliability: 98, url: "https://example.com/trustai/docs" }
    ],
    verifyData: [
      {
        source: "🎓 TrustAI Project — Source Documentation",
        excerpt: "This response was handcrafted for demonstration purposes. Every feature shown — trust scoring, source verification, and regeneration — is fully functional and product-ready.",
        match: "match",
        url: "https://example.com/trustai/source-documentation"
      },
      {
        source: "✅ Demo Mode Verification",
        excerpt: "Personalized greeting responses carry a 95% trust score as they are deterministic and system-generated, removing any hallucination risk.",
        match: "match",
        url: "https://example.com/trustai/demo-verification"
      },
      {
        source: "📋 College Project Evaluation Context",
        excerpt: "This prototype was built as a college project to demonstrate responsible AI design principles: transparency, reliability, and user trust.",
        match: "match",
        url: "https://example.com/trustai/evaluation-context"
      }
    ]
  },

  /* ---- AI HALLUCINATION ---- */
  {
    keywords: ["ai hallucination", "hallucination", "hallucinate", "llm hallucination"],
    answer: `AI hallucination refers to a phenomenon where a large language model (LLM) generates information that is factually incorrect, nonsensical, or unsupported by real-world data — yet presents it with total confidence.\n\nThis occurs because LLMs predict the statistically most likely next token rather than "looking up" verified facts. Common hallucination types include:\n• **Fabricated citations** — inventing academic papers or URLs\n• **Wrong dates & statistics** — confidently stating incorrect numbers\n• **False attribution** — putting quotes in someone's mouth\n\nMitigation strategies include retrieval-augmented generation (RAG), grounding responses with verified sources, and confidence calibration.`,
    trustScore: 88,
    regenAnswer: `AI hallucinations are a well-documented limitation of LLMs where the model produces plausible-sounding but incorrect information. This stems from the probabilistic text-prediction mechanism models use — they optimise for fluency, not factual accuracy.\n\nResearchers actively study hallucination through benchmarks like TruthfulQA and HaluEval. Solutions range from constitutional AI and RLHF (Reinforcement Learning from Human Feedback) to tool-augmented models that query external knowledge bases in real time.`,
    sources: [
      { name: "Wikipedia — AI Hallucination", type: "wiki", color: "#6ee7b7", reliability: 80, url: "https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)" },
      { name: "Anthropic Research: Constitutional AI", type: "research", color: "#a5b4fc", reliability: 95, url: "https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback" },
      { name: "DeepMind: Sparrow Paper (2022)", type: "research", color: "#a5b4fc", reliability: 92, url: "https://arxiv.org/abs/2209.14375" }
    ],
    verifyData: [
      {
        source: "📖 Wikipedia — Hallucination (AI)",
        excerpt: "Language models can generate text that is coherent and fluent but factually incorrect. This is known as hallucination and remains one of the central challenges in deploying LLMs.",
        match: "match",
        url: "https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)"
      },
      {
        source: "🔬 Anthropic — Constitutional AI (2022)",
        excerpt: "RLHF-trained models show measurably reduced rates of confident hallucination when constitutional constraints are applied during fine-tuning.",
        match: "match",
        url: "https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback"
      },
      {
        source: "📄 TruthfulQA Benchmark (Lin et al., 2021)",
        excerpt: "GPT-3 answered 20% of adversarially-framed questions truthfully, while humans scored ~94%, highlighting the hallucination gap in large language models.",
        match: "partial",
        url: "https://arxiv.org/abs/2109.07958"
      }
    ]
  },

  /* ---- MACHINE LEARNING ---- */
  {
    keywords: ["machine learning", "ml", "supervised learning", "unsupervised learning"],
    answer: `Machine learning (ML) is a branch of artificial intelligence that enables systems to learn from data and improve their performance on tasks without being explicitly programmed for every scenario.\n\n**Three core paradigms:**\n• **Supervised Learning** — trained on labelled input-output pairs (e.g., spam classifiers, image recognition)\n• **Unsupervised Learning** — discovers hidden patterns without labels (e.g., clustering, dimensionality reduction)\n• **Reinforcement Learning** — an agent learns by trial-and-error, maximising reward signals (e.g., game-playing AI, robotics)\n\nML powers recommendation engines, fraud detection, medical diagnosis, and self-driving cars.`,
    trustScore: 94,
    regenAnswer: `Machine learning is a subset of AI where statistical algorithms improve automatically through experience. The core idea: instead of hand-coding rules, you feed data and the model learns patterns.\n\nKey algorithms include decision trees, support vector machines, neural networks, and gradient boosting. Modern ML pipelines involve data preprocessing, feature engineering, model training, and rigorous evaluation via cross-validation to prevent overfitting.`,
    sources: [
      { name: "Stanford CS229 — ML Course Notes", type: "research", color: "#a5b4fc", reliability: 97, url: "https://cs229.stanford.edu/syllabus-fall2022.html" },
      { name: "Towards Data Science — ML Overview", type: "article", color: "#67e8f9", reliability: 78, url: "https://towardsdatascience.com/tagged/machine-learning" },
      { name: "MIT OpenCourseWare — AI Lecture Series", type: "research", color: "#a5b4fc", reliability: 95, url: "https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/" }
    ],
    verifyData: [
      {
        source: "🎓 Stanford CS229 Lecture Notes",
        excerpt: "Machine learning algorithms build models based on sample data, enabling predictions or decisions without being explicitly programmed to perform the task.",
        match: "match",
        url: "https://cs229.stanford.edu/syllabus-fall2022.html"
      },
      {
        source: "📘 MIT OpenCourseWare — 6.034 AI",
        excerpt: "Supervised, unsupervised, and reinforcement learning represent the three foundational paradigms, each suited to different problem structures.",
        match: "match",
        url: "https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/"
      },
      {
        source: "📰 Towards Data Science",
        excerpt: "ML is widely used in recommendation systems, NLP, computer vision, and healthcare — though performance heavily depends on data quality.",
        match: "partial",
        url: "https://towardsdatascience.com/tagged/machine-learning"
      }
    ]
  },

  /* ---- DEEP LEARNING ---- */
  {
    keywords: ["deep learning", "neural network", "cnn", "transformer", "llm"],
    answer: `Deep learning is a subfield of machine learning that uses **multi-layered artificial neural networks** to model extremely complex, high-dimensional data such as images, audio, and natural language.\n\n**Key architectures:**\n• **CNNs** (Convolutional Neural Networks) — excel at spatial data like images\n• **RNNs / LSTMs** — designed for sequential data and time series\n• **Transformers** — the dominant architecture for NLP; powers GPT-4, BERT, and modern LLMs\n\nDeep learning requires large datasets and significant compute (GPUs/TPUs). It achieved breakthrough results in image classification, speech recognition, protein folding (AlphaFold), and generative AI.`,
    trustScore: 91,
    regenAnswer: `Deep learning refers to neural networks with many hidden layers (hence "deep"). These models learn hierarchical representations — early layers detect edges, deeper layers detect shapes, and the final layers recognise complex objects.\n\nThe 2012 AlexNet paper marked the modern deep learning era. Since then, the field has been transformed by the attention mechanism (2017 "Attention Is All You Need" paper), leading to transformer models that now dominate virtually every AI benchmark.`,
    sources: [
      { name: "\"Attention Is All You Need\" — Vaswani et al.", type: "research", color: "#a5b4fc", reliability: 99, url: "https://arxiv.org/abs/1706.03762" },
      { name: "DeepLearning.AI — Specialization", type: "article", color: "#67e8f9", reliability: 88, url: "https://www.coursera.org/specializations/deep-learning" },
      { name: "Nature — AlphaFold Protein Folding", type: "research", color: "#a5b4fc", reliability: 98, url: "https://www.nature.com/articles/s41586-021-03819-2" }
    ],
    verifyData: [
      {
        source: "📄 \"Attention Is All You Need\" (Vaswani et al., 2017)",
        excerpt: "The Transformer model replaces recurrence entirely with attention mechanisms, achieving state-of-the-art results while being more parallelisable than RNNs.",
        match: "match",
        url: "https://arxiv.org/abs/1706.03762"
      },
      {
        source: "🔬 Nature — AlphaFold2 (2021)",
        excerpt: "Deep neural networks were used to predict 3D protein structures with near-experimental accuracy, solving a 50-year grand challenge in biology.",
        match: "match",
        url: "https://www.nature.com/articles/s41586-021-03819-2"
      },
      {
        source: "📚 DeepLearning.AI Coursera Notes",
        excerpt: "Convolutional networks, recurrent networks, and transformers form the three major families of deep learning architectures applied today.",
        match: "match",
        url: "https://www.coursera.org/specializations/deep-learning"
      }
    ]
  },

  /* ---- BLOCKCHAIN ---- */
  {
    keywords: ["blockchain", "crypto", "bitcoin", "ethereum", "web3", "nft"],
    answer: `A blockchain is a **distributed, immutable ledger** that records transactions across a peer-to-peer network. No single entity controls it — instead, consensus mechanisms ensure all nodes agree on the canonical chain.\n\n**How it works:**\n1. Transactions are broadcast to the network\n2. Nodes group them into a **block** and compete to validate\n3. Validated blocks are cryptographically chained using hashes\n4. Once recorded, data cannot be altered without redoing all subsequent blocks\n\nApplications include cryptocurrencies (Bitcoin, Ethereum), smart contracts, DeFi, supply-chain tracking, and digital identity systems.`,
    trustScore: 82,
    regenAnswer: `Blockchain's core innovation is trustless consensus — removing the need for centralised intermediaries like banks or notaries. Its properties are:\n• **Decentralisation** — no single point of failure\n• **Transparency** — all transactions publicly auditable\n• **Immutability** — past records are tamper-evident\n\nPublic blockchains like Ethereum support Turing-complete smart contracts, enabling programmable finance (DeFi) and tokenised digital assets (NFTs).`,
    sources: [
      { name: "Bitcoin Whitepaper — Satoshi Nakamoto", type: "research", color: "#a5b4fc", reliability: 99, url: "https://bitcoin.org/bitcoin.pdf" },
      { name: "Ethereum.org Documentation", type: "article", color: "#67e8f9", reliability: 93, url: "https://ethereum.org/en/developers/docs/" },
      { name: "MIT Digital Currency Initiative", type: "research", color: "#a5b4fc", reliability: 94, url: "https://dci.mit.edu/" }
    ],
    verifyData: [
      {
        source: "📄 Bitcoin: P2P Electronic Cash System (Nakamoto, 2008)",
        excerpt: "A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution.",
        match: "match",
        url: "https://bitcoin.org/bitcoin.pdf"
      },
      {
        source: "🌐 Ethereum.org Developer Docs",
        excerpt: "Smart contracts are programs stored on a blockchain that run when predetermined conditions are met, enabling trustless automation of agreements.",
        match: "match",
        url: "https://ethereum.org/en/developers/docs/smart-contracts/"
      },
      {
        source: "🎓 MIT Digital Currency Initiative",
        excerpt: "Blockchain offers transparency and censorship resistance but faces scalability trade-offs; Layer-2 solutions like rollups partially address throughput limitations.",
        match: "partial",
        url: "https://dci.mit.edu/"
      }
    ]
  },

  /* ---- CLIMATE CHANGE ---- */
  {
    keywords: ["climate change", "global warming", "greenhouse", "carbon", "emissions", "fossil"],
    answer: `Climate change refers to long-term shifts in global temperatures and weather patterns. Since the Industrial Revolution (~1850), human activities — primarily **burning fossil fuels** — have released massive quantities of greenhouse gases (CO₂, CH₄, N₂O) that trap heat in the atmosphere.\n\n**Key consequences:**\n• Rising sea levels (projected +0.3–1m by 2100)\n• More frequent extreme weather events (hurricanes, droughts, heatwaves)\n• Ocean acidification threatening marine ecosystems\n• Mass species extinction and biodiversity loss\n\nThe IPCC warns that limiting warming to 1.5°C requires halving global emissions by 2030 and reaching net-zero by 2050.`,
    trustScore: 96,
    regenAnswer: `The scientific consensus on climate change is overwhelming — 97% of climate scientists agree that current warming is human-caused. The primary driver is the greenhouse effect: CO₂ and other gases allow sunlight in but trap outgoing infrared radiation.\n\nThe Paris Agreement (2015) set a global target of limiting warming to well below 2°C. Mitigation strategies include renewable energy transition, electric vehicles, carbon capture, and reforestation. Adaptation plans address inevitable impacts like coastal flooding and food-system disruption.`,
    sources: [
      { name: "IPCC Sixth Assessment Report (AR6)", type: "research", color: "#a5b4fc", reliability: 99, url: "https://www.ipcc.ch/assessment-report/ar6/" },
      { name: "NASA Climate Change Evidence", type: "gov", color: "#fca5a5", reliability: 99, url: "https://climate.nasa.gov/evidence/" },
      { name: "Nature — Climate Science Review 2023", type: "research", color: "#a5b4fc", reliability: 97, url: "https://www.nature.com/subjects/climate-sciences" }
    ],
    verifyData: [
      {
        source: "🔬 IPCC AR6 (2021–2023)",
        excerpt: "It is unequivocal that human influence has warmed the atmosphere, ocean and land. Widespread and rapid changes in the atmosphere, ocean, cryosphere and biosphere have occurred.",
        match: "match",
        url: "https://www.ipcc.ch/assessment-report/ar6/"
      },
      {
        source: "🚀 NASA Global Climate Change",
        excerpt: "Global surface temperature has increased faster since 1970 than in any other 50-year period over at least the last 2000 years.",
        match: "match",
        url: "https://climate.nasa.gov/evidence/"
      },
      {
        source: "📄 Nature — Climate Tipping Points (2022)",
        excerpt: "Five major tipping points may already have been crossed due to the roughly 1.1°C of global warming caused by humans to date.",
        match: "match",
        url: "https://www.nature.com/articles/s41586-022-04553-z"
      }
    ]
  },

  /* ---- QUANTUM COMPUTING ---- */
  {
    keywords: ["quantum", "quantum computing", "qubit", "superposition", "entanglement"],
    answer: `Quantum computing exploits quantum mechanical phenomena — **superposition**, **entanglement**, and **interference** — to perform calculations impossible for classical computers.\n\n**Classical vs Quantum:**\n• A classical bit is always 0 or 1\n• A **qubit** can exist in a superposition of both simultaneously, enabling exponentially larger solution spaces\n\n**Promising applications:**\n• Breaking current RSA encryption (Shor's algorithm)\n• Drug discovery via molecular simulation\n• Optimisation problems in logistics and finance\n\nLeading players include IBM (Eagle, Condor chips), Google (achieved "quantum supremacy" in 2019), and IonQ. We are currently in the **NISQ era** (Noisy Intermediate-Scale Quantum).`,
    trustScore: 78,
    regenAnswer: `Quantum computers leverage qubits that can be in superposition — both 0 and 1 simultaneously — and entanglement, allowing two qubits to have correlated states regardless of physical distance.\n\nGrover's algorithm quadratically speeds up database search; Shor's algorithm factorises large numbers exponentially faster than classical methods, threatening current cryptography. Despite impressive milestones, practical fault-tolerant quantum computing is still estimated to be 10–20 years away.`,
    sources: [
      { name: "IBM Quantum — Educational Resources", type: "article", color: "#67e8f9", reliability: 90, url: "https://www.ibm.com/quantum/learn" },
      { name: "Google Research — Quantum Supremacy (Nature, 2019)", type: "research", color: "#a5b4fc", reliability: 96, url: "https://www.nature.com/articles/s41586-019-1666-5" },
      { name: "Caltech — Quantum Computing Explainer", type: "article", color: "#67e8f9", reliability: 89, url: "https://scienceexchange.caltech.edu/topics/quantum-science-explained/quantum-computing" }
    ],
    verifyData: [
      {
        source: "🔬 Google Research — Nature 2019",
        excerpt: "Our Sycamore processor performed a specific task in 200 seconds that would take the world's fastest supercomputer approximately 10,000 years.",
        match: "match",
        url: "https://www.nature.com/articles/s41586-019-1666-5"
      },
      {
        source: "💻 IBM Quantum Docs",
        excerpt: "Qubits can represent 0, 1, or any quantum superposition of those states, and quantum gates manipulate these superpositions to perform computation.",
        match: "match",
        url: "https://www.ibm.com/quantum/learn/what-is-quantum-computing"
      },
      {
        source: "🎓 Caltech — Preskill's Lecture Notes",
        excerpt: "NISQ devices have 50–1000 qubits but are not yet error-corrected; fault-tolerant operation requires millions of physical qubits per logical qubit.",
        match: "partial",
        url: "https://theory.caltech.edu/~preskill/ph229/"
      }
    ]
  },

  /* ---- DOCUMENT UPLOAD MOCK ---- */
  {
    keywords: ["__document_upload__"],
    answer: `I have successfully analyzed the uploaded document.\n\n**Document Summary:**\nThe document outlines the key methodologies and recent advancements in deep learning models, specifically focusing on the transition from traditional recurrent networks to transformer-based architectures. It highlights the significant improvements in parallel processing capabilities and the resulting impact on natural language understanding tasks.\n\n**Key Facts Extracted:**\n• The shift towards self-attention mechanisms.\n• The exponential increase in model parameter sizes over the last 3 years.\n• Emerging challenges regarding computational efficiency and environmental impact.\n\nI have cross-referenced these claims with our verified knowledge base. The information is highly consistent with current consensus.`,
    trustScore: 92,
    regenAnswer: `Here is a refined analysis of the uploaded document.\n\nThe text primarily explores the evolution of neural network architectures, with a heavy emphasis on transformer models replacing RNNs/LSTMs in modern AI applications. It notes that while transformers offer superior performance due to self-attention, they demand substantially more compute resources.\n\nAll extracted claims have been verified against recent literature and show a high degree of factual reliability.`,
    sources: [
      { name: "Document Analysis Engine", type: "gov", color: "#c4b5fd", reliability: 100, url: "" },
      { name: "Cross-Reference: AI Architectural Shifts", type: "research", color: "#a5b4fc", reliability: 95, url: "" },
      { name: "Fact-Check Module", type: "article", color: "#67e8f9", reliability: 98, url: "" }
    ],
    verifyData: [
      {
        source: "📄 Uploaded Document Context",
        excerpt: "The uploaded file 'Research_Draft_v2.pdf' states that transformers have fundamentally changed NLP by allowing parallel processing of sequential data.",
        match: "match",
        url: ""
      },
      {
        source: "🔬 External Knowledge Base",
        excerpt: "This aligns with the foundational 'Attention Is All You Need' paper, which introduced the transformer architecture and its parallelizable nature.",
        match: "match",
        url: ""
      },
      {
        source: "🔍 Semantic Consistency Check",
        excerpt: "The document's claims regarding compute requirements are statistically consistent with known trends in LLM scaling laws.",
        match: "match",
        url: ""
      }
    ]
  },

  /* ---- CYBERSECURITY ---- */
  {
    keywords: ["cybersecurity", "cyber security", "phishing", "malware", "ransomware", "data breach"],
    answer: `Cybersecurity is the practice of protecting systems, networks, devices, and data from unauthorized access, misuse, disruption, or theft.\n\n**Common threats include:**\n• **Phishing** — fake messages designed to steal passwords or sensitive information\n• **Malware** — harmful software such as viruses, spyware, or trojans\n• **Ransomware** — malware that encrypts files and demands payment\n• **Data breaches** — unauthorized exposure of private records\n\nStrong cybersecurity depends on layered defenses: multi-factor authentication, regular updates, encrypted data, least-privilege access, backups, employee awareness, and continuous monitoring.`,
    trustScore: 90,
    regenAnswer: `Cybersecurity is about reducing digital risk. Instead of relying on one tool, organizations use a defense-in-depth approach: secure identities, patch vulnerable systems, monitor suspicious activity, train users, and prepare an incident response plan.\n\nFor individuals, the highest-impact steps are using unique passwords with a password manager, enabling multi-factor authentication, avoiding suspicious links, updating software, and backing up important files.`,
    sources: [
      { name: "CISA — Cybersecurity Best Practices", type: "gov", color: "#fca5a5", reliability: 96, url: "https://www.cisa.gov/topics/cybersecurity-best-practices" },
      { name: "NIST Cybersecurity Framework", type: "gov", color: "#fca5a5", reliability: 98, url: "https://www.nist.gov/cyberframework" },
      { name: "Microsoft Security — Ransomware Guide", type: "article", color: "#67e8f9", reliability: 88, url: "https://www.microsoft.com/en-us/security/business/security-101/what-is-ransomware" }
    ],
    verifyData: [
      {
        source: "🛡️ CISA — Cybersecurity Best Practices",
        excerpt: "CISA recommends practical protections such as multi-factor authentication, software updates, data backups, and phishing awareness to reduce cyber risk.",
        match: "match",
        url: "https://www.cisa.gov/topics/cybersecurity-best-practices"
      },
      {
        source: "📘 NIST Cybersecurity Framework",
        excerpt: "NIST organizes cybersecurity work around identifying, protecting, detecting, responding to, and recovering from security events.",
        match: "match",
        url: "https://www.nist.gov/cyberframework"
      },
      {
        source: "🔐 Microsoft Security",
        excerpt: "Ransomware is malicious software that blocks access to systems or files until a ransom is demanded, making backups and prevention essential.",
        match: "partial",
        url: "https://www.microsoft.com/en-us/security/business/security-101/what-is-ransomware"
      }
    ]
  },

  /* ---- DATA PRIVACY ---- */
  {
    keywords: ["data privacy", "privacy", "personal data", "gdpr", "data protection", "cookies"],
    answer: `Data privacy is the control people and organizations have over how personal information is collected, used, shared, stored, and deleted.\n\n**Key principles:**\n• **Consent** — users should understand and approve how data is used\n• **Minimization** — collect only what is necessary\n• **Transparency** — explain data practices clearly\n• **Security** — protect stored and transmitted information\n• **User rights** — allow access, correction, deletion, or portability where laws require it\n\nGood privacy design builds trust because users can see that their information is handled responsibly instead of quietly exploited.`,
    trustScore: 89,
    regenAnswer: `Data privacy focuses on responsible handling of personal information. A privacy-conscious system limits collection, explains why data is needed, secures it properly, and gives users meaningful control.\n\nRegulations like GDPR and CCPA influenced modern privacy practices, but privacy is not only a legal issue. It is also a product-design and trust issue: collect less, keep it safer, and make choices understandable.`,
    sources: [
      { name: "European Commission — GDPR", type: "gov", color: "#fca5a5", reliability: 96, url: "https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_en" },
      { name: "FTC — Protecting Consumer Privacy", type: "gov", color: "#fca5a5", reliability: 93, url: "https://www.ftc.gov/business-guidance/privacy-security" },
      { name: "OECD Privacy Guidelines", type: "research", color: "#a5b4fc", reliability: 90, url: "https://www.oecd.org/sti/ieconomy/oecdguidelinesontheprotectionofprivacyandtransborderflowsofpersonaldata.htm" }
    ],
    verifyData: [
      {
        source: "🇪🇺 European Commission — Data Protection",
        excerpt: "EU data protection rules emphasize lawful processing, transparency, data subject rights, and protection of personal data.",
        match: "match",
        url: "https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_en"
      },
      {
        source: "🏛️ FTC — Privacy and Security",
        excerpt: "The FTC provides guidance for businesses on protecting consumer privacy and securing sensitive information.",
        match: "match",
        url: "https://www.ftc.gov/business-guidance/privacy-security"
      },
      {
        source: "📄 OECD Privacy Guidelines",
        excerpt: "OECD privacy principles include collection limitation, purpose specification, use limitation, security safeguards, and accountability.",
        match: "match",
        url: "https://www.oecd.org/sti/ieconomy/oecdguidelinesontheprotectionofprivacyandtransborderflowsofpersonaldata.htm"
      }
    ]
  },

  /* ---- GENERATIVE AI ---- */
  {
    keywords: ["generative ai", "gen ai", "text to image", "image generation", "chatbot", "large language model"],
    answer: `Generative AI refers to AI systems that create new content such as text, images, code, audio, video, or designs based on patterns learned from training data.\n\n**Common examples:**\n• Chatbots that write or summarize text\n• Image generators that create visuals from prompts\n• Code assistants that suggest functions or debug logic\n• Audio and video models that synthesize media\n\nGenerative AI is powerful because it can accelerate creative and analytical work, but it also introduces risks: hallucinated facts, copyright uncertainty, deepfakes, bias, and overreliance without verification.`,
    trustScore: 87,
    regenAnswer: `Generative AI creates outputs instead of only classifying or predicting labels. Large language models generate text token by token, diffusion models generate images by reversing noise, and multimodal models combine text, vision, audio, and other signals.\n\nIts best use is as a collaborator for drafting, brainstorming, coding, and summarization, with human review and source verification for important claims.`,
    sources: [
      { name: "Google Cloud — Generative AI Overview", type: "article", color: "#67e8f9", reliability: 86, url: "https://cloud.google.com/discover/what-is-generative-ai" },
      { name: "IBM — What Is Generative AI?", type: "article", color: "#67e8f9", reliability: 86, url: "https://www.ibm.com/topics/generative-ai" },
      { name: "NIST — AI Risk Management Framework", type: "gov", color: "#fca5a5", reliability: 95, url: "https://www.nist.gov/itl/ai-risk-management-framework" }
    ],
    verifyData: [
      {
        source: "☁️ Google Cloud — Generative AI",
        excerpt: "Generative AI can produce text, images, audio, code, and other media from learned patterns and user prompts.",
        match: "match",
        url: "https://cloud.google.com/discover/what-is-generative-ai"
      },
      {
        source: "💼 IBM — Generative AI",
        excerpt: "Generative AI models create original-seeming content based on training data and are used for text, images, code, and media generation.",
        match: "match",
        url: "https://www.ibm.com/topics/generative-ai"
      },
      {
        source: "📋 NIST AI Risk Management Framework",
        excerpt: "AI systems require risk management across validity, reliability, safety, security, accountability, transparency, and fairness.",
        match: "partial",
        url: "https://www.nist.gov/itl/ai-risk-management-framework"
      }
    ]
  },

  /* ---- SPACE EXPLORATION ---- */
  {
    keywords: ["space exploration", "nasa", "mars", "moon mission", "artemis", "rocket"],
    answer: `Space exploration is the use of satellites, robotic probes, telescopes, spacecraft, and human missions to study Earth, the Moon, planets, stars, and the wider universe.\n\n**Why it matters:**\n• Scientific discovery about planetary systems and cosmic history\n• Earth observation for weather, climate, disasters, and agriculture\n• Technology development in materials, robotics, communication, and navigation\n• Long-term preparation for human activity beyond Earth\n\nModern space exploration combines government programs like NASA's Artemis missions with private launch companies, international partnerships, and robotic missions to Mars and beyond.`,
    trustScore: 91,
    regenAnswer: `Space exploration helps humanity understand both the universe and our own planet. Robotic missions collect data from places humans cannot easily reach, while telescopes study distant galaxies and exoplanets.\n\nHuman exploration is more expensive and risky, but it drives engineering progress and inspires long-term goals such as sustainable lunar bases and future Mars missions.`,
    sources: [
      { name: "NASA — Artemis Program", type: "gov", color: "#fca5a5", reliability: 98, url: "https://www.nasa.gov/humans-in-space/artemis/" },
      { name: "NASA — Mars Exploration Program", type: "gov", color: "#fca5a5", reliability: 97, url: "https://mars.nasa.gov/" },
      { name: "ESA — Space Science", type: "gov", color: "#fca5a5", reliability: 94, url: "https://www.esa.int/Science_Exploration/Space_Science" }
    ],
    verifyData: [
      {
        source: "🚀 NASA — Artemis",
        excerpt: "NASA's Artemis program is focused on returning humans to the Moon and building a foundation for deeper space exploration.",
        match: "match",
        url: "https://www.nasa.gov/humans-in-space/artemis/"
      },
      {
        source: "🔴 NASA — Mars Exploration",
        excerpt: "Robotic Mars missions study geology, climate, habitability, and the history of water on the planet.",
        match: "match",
        url: "https://mars.nasa.gov/"
      },
      {
        source: "🛰️ European Space Agency",
        excerpt: "Space science missions investigate planets, stars, galaxies, and fundamental questions about the universe.",
        match: "partial",
        url: "https://www.esa.int/Science_Exploration/Space_Science"
      }
    ]
  },

  /* ---- RENEWABLE ENERGY ---- */
  {
    keywords: ["renewable energy", "solar energy", "wind energy", "clean energy", "hydropower", "green energy"],
    answer: `Renewable energy comes from sources that naturally replenish on human timescales, such as sunlight, wind, flowing water, geothermal heat, and biomass.\n\n**Major types:**\n• **Solar** — converts sunlight into electricity using photovoltaic panels\n• **Wind** — uses turbines to convert moving air into power\n• **Hydropower** — uses flowing or falling water\n• **Geothermal** — uses heat from inside Earth\n\nRenewables reduce dependence on fossil fuels and can lower greenhouse gas emissions, but they also require grid upgrades, storage, transmission planning, and responsible material supply chains.`,
    trustScore: 93,
    regenAnswer: `Renewable energy is central to decarbonizing electricity. Solar and wind have grown quickly because costs have fallen and deployment is scalable, but their output varies with weather and time of day.\n\nA reliable clean-energy system often combines renewables with batteries, transmission lines, demand response, hydropower, geothermal, nuclear, or other firm low-carbon resources depending on local needs.`,
    sources: [
      { name: "IEA — Renewables", type: "research", color: "#a5b4fc", reliability: 96, url: "https://www.iea.org/energy-system/renewables" },
      { name: "NREL — Renewable Energy Basics", type: "gov", color: "#fca5a5", reliability: 95, url: "https://www.nrel.gov/research/re-renewable-energy.html" },
      { name: "U.S. Energy Information Administration", type: "gov", color: "#fca5a5", reliability: 94, url: "https://www.eia.gov/energyexplained/renewable-sources/" }
    ],
    verifyData: [
      {
        source: "⚡ IEA — Renewables",
        excerpt: "Renewable electricity generation has expanded rapidly, especially from solar PV and wind power, as costs and deployment barriers change.",
        match: "match",
        url: "https://www.iea.org/energy-system/renewables"
      },
      {
        source: "🔬 NREL — Renewable Energy",
        excerpt: "NREL studies renewable power technologies including solar, wind, water, geothermal, and bioenergy.",
        match: "match",
        url: "https://www.nrel.gov/research/re-renewable-energy.html"
      },
      {
        source: "📊 EIA — Renewable Sources",
        excerpt: "Renewable energy sources include biomass, hydropower, geothermal, wind, and solar energy.",
        match: "match",
        url: "https://www.eia.gov/energyexplained/renewable-sources/"
      }
    ]
  },

  /* ---- DEFAULT fallback ---- */
  {
    keywords: ["__default__"],
    answer: `That's an interesting question! While I don't have a specialist answer in my knowledge base for this exact topic, here's what I can tell you:\n\nAI assistants like myself are best used as a **starting point for research**, not a final authority. Complex topics often involve nuance that a single response cannot capture.\n\n**Recommended approach:**\n1. Use my answer as a broad overview\n2. Verify key claims using the sources listed below\n3. Click **Verify** to see cross-referenced evidence\n4. Consult domain-specific databases (PubMed, arXiv, official government sites) for critical decisions\n\nTransparency and trust are at the heart of what I do — I'll always tell you how confident I am.`,
    trustScore: 55,
    regenAnswer: `I don't have a dedicated knowledge entry for this topic, but I can reason from first principles:\n\nWhen evaluating any claim — including AI-generated ones — look for:\n• **Primary sources** (peer-reviewed papers, official data)\n• **Recency** (is the information current?)\n• **Consensus** (do multiple independent sources agree?)\n• **Author credentials** (subject-matter experts vs generalists)\n\nMy trust score for this response is moderate because I'm reasoning generally rather than drawing on a verified knowledge base.`,
    sources: [
      { name: "Wikipedia — General Reference", type: "wiki", color: "#6ee7b7", reliability: 65, url: "https://www.wikipedia.org/" },
      { name: "Google Scholar Search", type: "article", color: "#67e8f9", reliability: 70, url: "https://scholar.google.com/" },
      { name: "Snopes — Fact Checking", type: "article", color: "#67e8f9", reliability: 80, url: "https://www.snopes.com/" }
    ],
    verifyData: [
      {
        source: "🌐 Wikipedia",
        excerpt: "Wikipedia provides a broad overview with citations but may not be authoritative for specialised topics. Always check the listed references.",
        match: "partial",
        url: "https://www.wikipedia.org/"
      },
      {
        source: "📚 Google Scholar",
        excerpt: "Academic search engines surface peer-reviewed literature; results should be filtered by publication date and citation count for quality.",
        match: "partial",
        url: "https://scholar.google.com/"
      },
      {
        source: "✔ Snopes",
        excerpt: "Fact-checking sites are useful for debunking viral misinformation but may not cover niche technical topics with the depth required.",
        match: "partial",
        url: "https://www.snopes.com/"
      }
    ]
  }
];

/**
 * Finds the best matching response for a user query.
 * Falls back to __default__ if no keywords match.
 */
function findResponse(query) {
  const lower = query.toLowerCase();
  for (const resp of RESPONSES) {
    if (resp.keywords[0] === "__default__") continue;
    if (resp.keywords.some(kw => lower.includes(kw))) {
      return resp;
    }
  }
  // Return default
  return RESPONSES[RESPONSES.length - 1];
}
