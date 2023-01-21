export default signUpHandler = async (req, res, next) => {
    const cohereResult = cohereKeywordExtractor.extract(req.body.bio);
    const docRef = await addDoc(collection(db, 'users'), {
        username: req.body.username,
        password: req.body.password,
        name: cohereResult.data.name,
        budget: req.body.budget + req.body.goal,
        cuisine: cohereResult.data.cuisine,
        dietary_restrictions: req.body.dietary_restrictions,
        interests: cohereResult.data.interests,
        job: cohereResult.data.job
    });
    res.send(docRef.id);
};
