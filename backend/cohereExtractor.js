const cohere = require('cohere-ai');
cohere.init('UX06Mr70hZIdSCOhHml4vGeljYJwH2UeUgKaon0I');

class CohereExtractor {
  async extract(extractPrompt) {
    const extraction = await cohere.generate({
      model: 'xlarge',
      prompt: `Given a paragraph, this program will extract one-word information for name, cuisine, interests, and job. It will return the information JSON format with the keys name, cuisine, interests, and job. The name, cuisine, and job keys should contain a string value. The interests key should contain an array with three nouns as string elements. Here are some examples:\n\nParagraph:\nMy name is Alice and I am a nature-loving person who loves eating Italian food. Some of my hobbies include watching movies, travelling, studying books, coding and watching football. I am really interested in technology and work as a software engineer.\nJSON content:\n{\n	\"name\": \"Alice\",\n	\"cuisine\": \"Italian\",\n	\"interests\": [\"movies\", \"travel\", \"books\"],\n	\"job\": \"software engineer\"\n}\n--\nParagraph:\nMy name is Bob and I want someone with whom I can eat Japanese food. I am a very shy and indoor person. I have been working as a blogger for some time now. I love to read and write books, play tennis, and go on hikes.\nJSON content:\n{\n	\"name\": \"Bob\",\n	\"cuisine\": \"Japanese\",\n	\"interests\": [\"books\", \"tennis\", \"hikes\"],\n	\"job\": \"blogger\"\n}\n--\nParagraph:\nI\'m Carol and I am a person who loves sightseeing, sleeping, and playing games. I\'m also a chess player and love eating Indian food. I am a teacher.\nJSON content:\n{\n	\"name\": \"Carol\",\n	\"cuisine\": \"Indian\",\n	\"interests\": [\"sightseeing\", \"sleep\", \"games\"],\n	\"job\": \"teacher\"\n}\n--\nParagraph:\n${extractPrompt}\nJSON content:`,
      max_tokens: 50,
      temperature: 0.1,
      k: 0,
      p: 0.75,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: ["}"],
      return_likelihoods: 'NONE'
    });
    return extraction.body.generations[0].text.trim();
  }
}

module.exports = CohereExtractor;
