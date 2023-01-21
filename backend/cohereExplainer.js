const cohere = require('cohere-ai');
cohere.init('UX06Mr70hZIdSCOhHml4vGeljYJwH2UeUgKaon0I');

class CohereExplainer {
  async explain(matchPrompt) {
    const explanation = await cohere.generate({
      model: 'medium',
      prompt: matchPrompt,
      max_tokens: 75,
      temperature: 1.4,
      k: 0,
      p: 0.75,
      frequency_penalty: 0, 
      presence_penalty: 0, 
      stop_sequences: []
    });
    return explanation.body.generations[0].text.trim();
  }
}

module.exports = CohereExplainer;
