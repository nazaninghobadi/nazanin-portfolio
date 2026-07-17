export const projects = [
  {
    id: 'smartliver',
    tag: 'ml · healthcare',
    title: 'SmartLiver',
    subtitle: 'Explainable AI for NAFLD Screening',
    description:
      'An interpretable machine learning approach for screening non-alcoholic fatty liver disease from clinical data — built with a team of five, with a focus on making the model\u2019s reasoning legible to clinicians, not just accurate.',
    details: ['Data preprocessing', 'Feature engineering', 'Machine learning modeling', 'Explainable AI approaches'],
    stack: ['Random Forest', 'Decision Tree', 'RuleFit'],
    achievement: 'Winner, AI competition 2025 · team of 5',
    links: [
    {
    label: 'Competition Certificate',
    href: '/public/certificates/smartliver-certificate.png',
    type: 'link'
    }
],
  },
  {
    id: 'docagent',
    tag: 'llm · rag',
    title: 'DocAgent',
    subtitle: 'LLM-based Document Assistant',
    description:
      'A lightweight assistant that lets you search and summarize documents semantically. Built to explore how retrieval-augmented generation holds up on real, messy documents rather than clean benchmarks.',
    details: ['Semantic document search', 'Document summarization', 'Vector search', 'Retrieval-augmented generation (RAG)'],
    stack: ['LangChain', 'OpenRouter', 'FAISS', 'HuggingFace Embeddings'],
    achievement: null,
    links: [{ label: 'GitHub', href: 'https://github.com/nazaninghobadi/DocAgent', type: 'github' }],
  },
  {
    id: 'oral-cancer-cv',
    tag: 'computer vision · medical',
    title: 'Oral Cancer Detection',
    subtitle: 'Medical Computer Vision, Exploratory',
    description:
      'An early-stage exploration into preliminary oral cancer detection from medical images, comparing a tissue-image classifier against a simpler camera-image approach. A learning project in medical imaging constraints, not a clinical tool.',
    details: ['Tissue image classification', 'Camera image-based classification'],
    stack: ['Python', 'Deep Learning', 'Image Processing'],
    achievement: null,
    links: [],
  },
  {
    id: 'avr-traffic',
    tag: 'embedded systems',
    title: 'AVR Traffic Light Controller',
    subtitle: 'Timers, Interrupts, Simulation',
    description:
      'A four-way traffic light control system developed by a three-person team using Embedded C and ATmega16. I was responsible for algorithm design and firmware development, implementing timer-based interrupts, countdown logic, and 7-segment display control in a resource-constrained embedded environment.',
    details: ['Timers', 'Interrupts', 'Embedded systems', 'Teamwork'],
    stack: ['C', 'AVR Microcontroller', 'Proteus Simulation'],
    achievement: null,
    links: [{ label: 'GitHub', href: 'https://github.com/Shahzadhpr/Traffic-Light', type: 'github' }],
  },
]
