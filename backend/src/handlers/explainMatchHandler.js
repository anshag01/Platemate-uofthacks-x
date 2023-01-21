export default explainMatchHandler = (req, res, next) => {
    const { userJob, userInterest } = getUserInfo(req.body.userUuid);
    const { matchJob, matchInterest } = getUserInfo(req.body.matchUuid);
    const matchPrompt = `I am a ${userJob} who enjoys ${userInterest}. Briefly explain why I should eat dinner with a ${matchJob} who likes ${matchInterest}.`;
    cohereMatchExplainer
        .explain(matchPrompt)
        .then((result) => console.log(result))
        .catch((err) => next(err));
};
