const searchGoogle = require("./script");

dbMock = [
  "dog.com",
  "chhespuf.com",
  "bombabomba.com",
  "twitter.com",
  "asdf.com",
  "mrrobot.com",
  "ugrylmz.com",
  "animals.com",
];

describe("searchGoogle", () => {
  it("this is silly test", () => {
    expect("hello").toBe("hello");
  });

  it("is searching google", () => {
    expect(searchGoogle("testtest", dbMock)).toEqual([]);
    expect(searchGoogle("dog", dbMock)).toEqual(["dog.com"]);
  });
  it("work with undefined and null input", () => {
    expect(searchGoogle(undefined, dbMock)).toEqual([]);
    expect(searchGoogle(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(searchGoogle(".com", dbMock).length).toEqual(3);
  });
});
