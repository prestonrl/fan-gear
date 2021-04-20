const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')

                return userData;
            }

            throw new AuthenticationError('Not logged in.')
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);

            return { token, user };
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        saveProduct: async (parent, { product }, context) => {
            if (context.user) {
                const saveInput = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedProducts: saved } },
                    { new: true }
                );

                return saveInput;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        removeProduct: async (parent, { productId }, context) => {
            if (context.user) {
                const removeProduct = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedProducts: { productId: productId } } },
                    { new: true }
                );

                return removeProduct;
            }

            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;