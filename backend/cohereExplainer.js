const cohere = require('cohere-ai');
cohere.init('UX06Mr70hZIdSCOhHml4vGeljYJwH2UeUgKaon0I');

class CohereExplainer {
    async explain(
        userName,
        userInterest1,
        userInterest2,
        userInterest3,
        userJob,
        matchName,
        matchInterest1,
        matchInterest2,
        matchInterest3,
        matchJob
    ) {
        const explanation = await cohere.generate({
            model: 'medium',
            prompt: `Given two users, this program will explain why they should go to a restaurant together. Here are some examples:\n\nUser 1: Alice, [movies, travel, books], software engineer\nUser 2: Bob, [books, tennis, hikes], blogger\nExplanation: Time to explore! You and Bob both share a love of food, but each of you has different interests. Take this opportunity to explore Bob\'s career as a software engineer and be introduced to different interests, like books, tennis, and hikes.\n--\nUser 1: Bob, [books, tennis, hikes], blogger\nUser 2: Alice, [movies, travel, books], software engineer\nExplanation: Time to explore! You and Alice both share a love of food, but each of you has different interests. Take this opportunity to explore Alice\'s career as a blogger and be introduced to different interests, like movies, travel, and books.\n--\nUser 1: Carol, [sightseeing, sleep, games], teacher\nUser 2: Dave, [chess, runs, programming], politician\nExplanation: Time to explore! You and Dave both share a love of food, but each of you has different interests. Take this opportunity to explore Carol\'s career as a teacher and be introduced to different interests, like sightseeing, sleep, and games.\n--\nUser 1: ${userName}, [${userInterest1}, ${userInterest2}, ${userInterest3}], ${userJob}\nUser 2: ${matchName}, [${matchInterest1}, ${matchInterest2}, ${matchInterest3}], ${matchJob}\nExplanation:`,
            max_tokens: 75,
            temperature: 1.4,
            k: 0,
            p: 0.75,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop_sequences: []
        });
        const temp = explanation.body.generations[0].text;
        return temp.substring(0, temp.length - 2);
    }
}

module.exports = CohereExplainer;
