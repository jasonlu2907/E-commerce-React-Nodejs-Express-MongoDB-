exports.getAllUsers =  (req, res) => {
  res.status(200).send("Hello");
}

exports.createUser = (req, res) => {
  const username = req.body.username;
  console.log(username);
  // res.status(202).send("Xui"); 
}