const posts = [
  {
    id: 1,
    title: "パフォーマンス改善について",
    content: "hogehoge",
    status: 1,
    createdAt: "2021/01/01",
    updatedAt: "2021/01/01",
  },
];

const Query = {
  posts: async (parent, args, context) => {
    return context.prisma.post.findMany();
  },
};

const Mutation = {
  post: (parent, args, context, info) => {
    const newPost = context.prisma.post.create({
      data: {
        title: args.title,
        content: args.content,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return newPost;
  },
};

module.exports = {
  Query,
  Mutation,
};
