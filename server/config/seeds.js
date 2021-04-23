const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Fedoras' },
        { name: 'Jackets' },
        { name: 'Accessories' }
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Explorador \'36',
            description:
                'Raiders',
            image: 'raiders-hat.jpg',
            category: categories[0]._id,
            price: 220.00,
            quantity: 500
        },
        {
            name: 'Explorador \'35',
            description:
                'Temple',
            image: 'TOD-hat.jpg',
            category: categories[0]._id,
            price: 220.00,
            quantity: 500
        },
        {
            name: 'Explorador \'38',
            category: categories[0]._id,
            description:
                'Last Crusade',
            image: 'crusade-hat.jpg',
            price: 220.00,
            quantity: 20
        },
        {
            name: 'Explorador \'57',
            category: categories[0]._id,
            description:
                'Crystal Skull',
            image: 'CS-hat.jpg',
            price: 220.00,
            quantity: 50
        },
        {
            name: 'Viajero \'36',
            category: categories[0]._id,
            description:
                'Raiders travel hat',
            image: 'raiders-grey.jpg',
            price: 220.00,
            quantity: 100
        },
        {
            name: 'Viajero \'57',
            category: categories[0]._id,
            description:
                'Crystall skull travel hat',
            image: 'CS-grey.jpg',
            price: 220.00,
            quantity: 30
        },
        {
            name: 'Cazadora \'36 -Raiders-',
            category: categories[1]._id,
            description:
                'The TRUCK jacket. Correct lambskin leather -color and texture-, correct lining, correct zipper, snaps and buckles, and distressing if wanted.',
            image: 'raiders-jacket.jpg',
            price: 555.00,
            quantity: 30
        },
        {
            name: 'CAZADORA \'38 -Last Crusade-',
            category: categories[1]._id,
            description:
                'Correct lambskin leather -color and texture- or "Chocolate Premium Horsehide", correct lining, correct zipper, snaps and buckles, and distressing if wanted.',
            image: 'crusade-jacket.jpg',
            price: 525.00,
            quantity: 100
        },
        {
            name: 'Leather Accessories -Model \'36',
            category: categories[2]._id,
            description: 'Combo: Holster, belt, whipholder',
            image: 'raiders-accessories.jpg',
            price: 120.00,
            quantity: 1000
        },
        {
            name: 'Leather Accessories -Model \'35',
            category: categories[2]._id,
            description: 'Combo: Holster, belt, whipholder',
            image: 'TOD-accessories.jpg',
            price: 120.00,
            quantity: 1000
        },
        {
            name: 'Leather Accessories -Model \'38',
            category: categories[2]._id,
            description: 'Combo: Holster, belt, whipholder',
            image: 'crusade-accessories.jpg',
            price: 120.00,
            quantity: 100
        },
        {
            name: 'Leather Accessories -Model \'57',
            category: categories[2]._id,
            description: 'Combo: Holster, belt, whipholder',
            image: 'CS-accessories.jpg',
            price: 120.00,
            quantity: 600
        }
    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Henry',
        lastName: 'Jones',
        email: 'henry@testmail.com',
        password: 'password12345',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Indiana',
        lastName: 'Jones',
        email: 'indy@testmail.com',
        password: 'password12345'
    });

    console.log('users seeded');

    process.exit();
});