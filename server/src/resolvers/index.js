const Query = {
  posts: async (parent, args, context) => {
    return context.prisma.post.findMany();
  },
  post: async (parent, args, context) => {
    return context.prisma.post.findUnique({
      where: {
        id: args.id,
      },
    });
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
