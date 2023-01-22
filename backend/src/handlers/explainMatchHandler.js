// const db = require('../app.js').db;

// export default explainMatchHandler = (req, res, next) => {
//     const user = getUserInfo(db, req.body.userId);
//     const match = getUserInfo(db, req.body.matchId);
//     const matchUser = { user.name, user.cuisine, user.interests[0], user.interests[1], user.interests[2], user.job };
//     const matchMatch = { match.name, match.cuisine, match.interests[0], match.interests[1], match.interests[2], match.job };
//     cohereMatchExplainer
//         .explain(matchUser, matchMatch)
//         .then((result) => console.log(result))
//         .catch((err) => next(err));
// };
