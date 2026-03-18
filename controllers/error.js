exports.get404 = (req, res, next) => {
  //Simple static html
  //res.status(404).sendFile(path.join(utilDir,'views','404.html'));
  res.render("404", { docTitle: "Page Not Found", path: "" });
};
