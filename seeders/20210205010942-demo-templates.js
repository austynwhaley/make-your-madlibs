/* eslint-disable */
'use strict';

module.exports = {
  // eslint-disable-line no-alert
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Templates', [
      {
        title: "Talk Like A Pirate",
        teaser: "Ye can always pretend to be a bloodthirsty...",
        templateBody: "Ye can always pretend to be a bloodthirsty <singularNoun>, threatening everyone by waving yer <descriptiveAdjective> sword in the air, but until ye learn to <rootVerb> like a pirate, ye'll never be <mannerAdverb> accepted as an authentic <singularNoun>. So here's what ye do: Cleverly work into yer daily conversations <descriptiveAdjective> pirate phrases such as \"Ahoy there, <pluralNoun>,\" \"Avast, ye <pluralNoun>,\" and \"Shiver me <pluralNoun>.\" Remember to drop all yer g's when ye say such words as \"sailin'\", \"spittin'\", and \"fightin'\".  This will give ye a/an <singularNoun> start to being recognized as a swashbucklin' <singularNoun>.  Once ye have the lingo down pat, it helps to wear a three-cornered <singularNoun> on yer head, stash a/an <singularNoun> in yer pants, and keep a/an <singularNoun> perched atop yer <singularNoun>. Aye, now ye be a real pirate!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Fairy Tale",
        teaser: "Once upon a time there was a...",
        templateBody: "Once upon a time there was a <descriptiveAdjective> <properNoun> who lived in a giant <singularNoun>. One day a <singularNoun> came to visit, bringing news about a <properNoun> in a nearby <singularNoun>. The <properNoun> was very <descriptiveAdjective> to hear such interesting news and quickly made plans to visit the <properNoun>. Before they arrived, a ghastly <singularNoun> leaped out in front of their carriage. The <singularNoun> demanded all of their <pluralNoun>. It was then that a handsome <singularNoun> appeared as if out of nowhere and chased away the <singularNoun>. The <properNoun> and the handsome <singularNoun> decided to throw a grand party to celebrate. The End.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Stay Home",
        teaser: "Once there was a strange time where a...",
        templateBody: "Once there was a strange time where a <properNoun> took over the world and made us all stay <descriptiveAdjective> at home. So we <simplePastVerb> into our imagination and found out the key to <descriptiveAdjective> was all about wearing <singularNoun> with <singularNoun>. It turned out that this was also the trick to turning on our <properNoun> and getting to do everything you love all at once. Now, we can eat <singularNoun> while playing <singularNoun>, or search for <singularNoun> while singing <singularNoun>. One time, we even turned <singularNoun> into a <properNoun>. Don't believe us? Just say <singularNoun> and we'll show you.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Our Solar System",
        teaser: "When we look up into the sky on a summer night...",
        templateBody: "When we look up into the sky on a/an <descriptiveAdjective> summer night, we see millions of tiny spots of light. Each one represents a/an <singularNoun> which is the center of a/an <descriptiveAdjective> solar system with dozens of <pluralNoun> revolving <mannerAdverb> around a distant sun. Sometimes these suns expand and begin <presentParticipleVerb> their neighbors. Soon they will become so big, they will turn into <pluralNoun>. Eventually they subside and become <descriptiveAdjective> giants or perhaps black <pluralNoun>. Our own planet, which we call <properNoun>, circles around our <descriptiveAdjective> sun <quantitativeAdjective> times every year. There are eight other planets in our solar system. They are named <properNoun>, <properNoun>, <properNoun>, <properNoun>, <properNoun>, <properNoun>, Jupiter, and Mars. Scientists who study these planets are called <pluralNoun>.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Vacations",
        teaser: "A vacation is when you take a trip to some...",
        templateBody: "A vacation is when you take a trip to some <descriptiveAdjective> place with your <descriptiveAdjective> family. Usually you go to some place that is near a/an <singularNoun> or up on a/an <singularNoun>. A good vacation place is one where you can ride <pluralNoun> or play <singularNoun> or go hunting for <pluralNoun>. I like to spend my time <presentParticipleVerb> or <presentParticipleVerb>. When parents go on a vacation, they spend their time eating three <pluralNoun> a day, and fathers play golf, and mothers sit around <presentParticipleVerb>. Last summer, my little brother fell in a/an <singularNoun> and got poison <singularNoun> all over his <singularNoun>. My family is going to go to the <properNoun>, and I will practice <presentParticipleVerb>. Parents need vacations more than kids because parents are always very <descriptiveAdjective> and because they have to work <quantitativeAdjective> hours every day all year making enough <pluralNoun> to pay for the vacation.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Comic Superhero Movie",
        teaser: "Meet our hero, a super-intelligent...",
        templateBody: "Meet our hero <properNoun>, a super-intelligent <properNoun>. A run-in with the <properNoun> military leads him to create his alter-ego <properNoun>, a <descriptiveAdjective> giant capable of great destruction. He <mannerAdverb> battles the military with his girlfriend <properNoun>. Eventually it is discovered that our hero's long-time colleague <properNoun>, distinguished by his <singularNoun>, is trying to turn <properNoun> into a weapon, leading to a climactic, if pointless, battle in downtown <properNoun> with an evil version of the same giant alter-ego called <properNoun>. Eventually the enemy is subdued by <presentParticipleVerb> him with a <singularNoun>. In the final reel, <properNoun> appears to propose joining him in a <singularNoun>.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Templates', null, {});
  }
};
