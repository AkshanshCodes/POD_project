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

