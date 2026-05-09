const adminMiddleware = (req, res, next) => {

  const { role } = req.body;

  if (role !== "admin") {

    return res.status(403).json({
      message: "Access Denied",
    });

  }

  next();
};

module.exports = adminMiddleware;