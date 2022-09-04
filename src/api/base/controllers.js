const notFound = (req, res) => {
  res.dispatch.NotFound(
    `Dr. Pace API. Requested resource ${req.url} was not found`
  );
};

const errorHandler = (err, req, res, next) => {
  const isDev = process.env.NODE_ENV === "development";
  isDev ? console.log(err) : null;
  res.dispatch.ServerError(isDev ? err.message : null);
};

export { notFound, errorHandler };
