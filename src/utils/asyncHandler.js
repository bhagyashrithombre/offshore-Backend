const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).thencatch((err) =>
      next(err)
    );
  };
};

export { asyncHandler };

//Diff Methods

// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}
/*
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};
*/
