const googleDatabase = [
  "cats.com",
  "uguryilmaz.dev",
  "bombabomba.com",
  "twitter.com",
  "asdf.com",
  "mrrobot.com",
  "ugrylmz.com",
];

const searchGoogle = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};
// console.log(searchGoogle("rob"));

module.exports = searchGoogle;
