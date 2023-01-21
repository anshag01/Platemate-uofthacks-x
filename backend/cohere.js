const cohere = require('cohere-ai');
cohere.init('UX06Mr70hZIdSCOhHml4vGeljYJwH2UeUgKaon0I');

class CohereExtractor {
  constructor(examples, exampleLabels, labels, taskDescription, examplePrompt) {
    this.examples = examples;
    this.exampleLabels = exampleLabels;
    this.labels = labels;
    this.taskDescription = taskDescription;
    this.examplePrompt = examplePrompt;
  }

  makePrompt(example) {
    const examples = this.examples.concat(example);
    const labels = this.exampleLabels.concat('');
    let arr = [];
    for (let i = 0; i < examples.length; i++) {
      arr.push(examples[i] + '\n' + this.examplePrompt + labels[i]);
    }
    return (this.taskDescription + arr.join('\n---\n'));
  }

  async extract(example) {
    const extraction = await cohere.generate({
      model: 'xlarge',
      prompt: this.makePrompt(example),
      max_tokens: 10,
      temperature: 0.1,
      stop_sequences: ['\n']
    });
    return extraction.body.generations[0].text.trim();
  }
}

module.exports = CohereExtractor;
