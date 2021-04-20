const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        savedProducts: [Saved]
    }

    type Saved {
        productId: String!
        price: Int
        description: String
        title: String
        image: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input saveInput {
        productId: String!
        price: Int
        description: String
        title: String
        image: String
    }

    type Query {
        me: User
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveProduct(saved: saveInput!): User
        removeProduct(productId: String!): User
    }
`;

module.exports = typeDefs;