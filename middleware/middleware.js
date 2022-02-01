exports.logger =(req,res,next) => {
    console.log(`${req.method} ${req.protocol}://${req.hostname}:${ports}${req.path}`);
    next();
};

exports.errorHandler = (err, req, res, next) => {
    res.status(err.status || 500)
    .json({message: err.message || "Internal Server Error" });
    next();
};

exports.notFoundPage = (req, res, next) => {
    res.status(404).json({message: "path not found"});
    next();
};