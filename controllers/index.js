const health = require("../models/health.js");
async function health_bot_home(req, res) {
  res.render("problemAsk", { asked: false }); //Change the {asked} value according to the person data that you will fetch from database while authenticating user
}
async function condition_to_database(req, res) {
  try {
    let user_data = await health.create({
      asked: req.body.asked,
      condition: req.body.message.text,
      problem: req.body.problem,
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
  res.json({ success: true });
}

async function dataSort(req, res) {
  const high_to_low_risk_on_condition_and_timeStamps = await health.aggregate([
    {
      $sort: {
        condition: -1, // Descending order for `condition`
        timestamps: 1, // Ascending order for `timestamps`
      },
    },
  ]);

  res.json(high_to_low_risk_on_condition_and_timeStamps);
}

module.exports = { health_bot_home, condition_to_database, dataSort };
