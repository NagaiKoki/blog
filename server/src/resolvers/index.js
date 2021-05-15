const posts = [
  {
    id: 1,
    content: "hogehoge",
    status: 1,
    createdAt: "2021/01/01",
    updatedAt: "2021/01/01",
  },
];

const Query = {
  posts: () => posts,
};

module.exports = {
  Query,
};
