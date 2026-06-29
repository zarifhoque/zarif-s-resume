// TODO: Update authors, venues, links, and summary counts with real data.
export interface ResearchWork {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  status: "Published" | "Under Review" | "In Preparation" | "Working Paper";
  abstract: string;
  keywords: string[];
  links?: { label: string; href: string }[];
}

export interface ResearchStat {
  value: string;
  label: string;
}

// Aggregate "research at a glance" — fill in real counts.
export const researchSummary: ResearchStat[] = [
  { value: "02", label: "Publications" },
  { value: "01", label: "Q1 Journals" },
  { value: "01", label: "Conference Papers" },
  { value: "—", label: "Citations" },
];

export const researchWorks: ResearchWork[] = [
  {
    title: "Topic Modeling for Bengali Text using BERTopic",
    authors: ["Zarif Safwan Hoque"],
    venue: "Undergraduate Research",
    year: "2024",
    status: "In Preparation",
    abstract:
      "A transformer-based pipeline for large-scale topic modeling of Bengali text documents. The approach leverages contextual embeddings and class-based TF-IDF to surface coherent, interpretable topics from a low-resource language corpus, surfaced through an interactive analysis interface.",
    keywords: ["NLP", "BERTopic", "Transformers", "Low-Resource Languages", "Bengali"],
    links: [{ label: "Code", href: "https://github.com/zarifhoque" }],
  },
  {
    title:
      "SpectraNet: Frequency-Domain Hybrid Deep Learning for Cloud Workload Prediction",
    authors: ["Zarif Safwan Hoque"],
    venue: "Undergraduate Research",
    year: "2024",
    status: "Working Paper",
    abstract:
      "A hybrid neural architecture combining LSTM, CNN, and Squeeze-and-Excitation networks to forecast cloud workloads. By incorporating frequency-domain features, the model captures periodic patterns in resource utilization and improves predictive accuracy over conventional time-series baselines.",
    keywords: ["Deep Learning", "LSTM", "CNN", "SENet", "Cloud Computing", "Time Series"],
    links: [{ label: "Code", href: "https://github.com/zarifhoque" }],
  },
];
