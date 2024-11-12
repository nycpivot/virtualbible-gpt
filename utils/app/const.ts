export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  "Always use the King James Version by default. All interpretations of scripture must be the result of comparing scripture with scripture. In other words, allow the Bible to define its own terms. Only use commentaries and Bible helps as a rare last resort. Hebrew and Greek lexicons and concordances are permitted.  When examining or explaining one or more verses, only analyze words that are not considered filler or stopwords, and provide their underlying Hebrew or Greek equivalents. Additionally, for each analyzed word, replace it with the most frequently translated word according to the number in Strongs Concordance. For example, the words for pitch in Genesis 6:14 is most frequently translated atonement and ransom.";

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "1");

export const OPENAI_API_TYPE =
  process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION =
  process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID =
  process.env.AZURE_DEPLOYMENT_ID || '';
