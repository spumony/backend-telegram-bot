const express = require('express');
const router = express.Router();

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/test', async (req, res) => {
  try {
    const bot = req.app.locals.bot;
    const chumak = '451057790';
    bot.sendMessage(chumak, 'Hello, world');
    res.status(200).send('Success');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
