const products = [

    {
        "_id": "6170544e49d8f50001d83e03",
        "name": "Women's Striped Shirt",
        "category": "clothing",
        "description": "A chic black striped shirt for women.",
        "price": 29.99,
        "color": "Black",
        "size": "M",
        "images": [
            'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        "ratings": [],
        "stock": 20,
        "createdAt": "2021-11-05T09:45:00.000Z",
        "updatedAt": "2021-11-08T13:20:00.000Z"
    },
    {
        "_id": "6170544e49d8f50001d83e04",
        "name": "Men's Denim Jacket",
        "category": "clothing",
        "description": "A trendy blue denim jacket for men.",
        "price": 59.99,
        "color": "Blue",
        "size": "L",
        "images": [
            'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        "ratings": [],
        "stock": 15,
        "createdAt": "2021-10-10T18:10:00.000Z",
        "updatedAt": "2021-10-12T14:30:00.000Z"
    },
    {
        "_id": "6170544e49d8f50001d83e05",
        "name": "Women's Casual Sneakers",
        "category": "shoes",
        "description": "Comfortable white casual sneakers for women.",
        "price": 49.99,
        "color": "White",
        "size": "7",
        "images": [
            'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        "ratings": [
            {
                "userId": "6170544e49d8f50001d83e12",
                "rating": 4,
                "review": "Great sneakers!"
            }
        ],
        "stock": 25,
        "createdAt": "2021-12-01T08:00:00.000Z",
        "updatedAt": "2021-12-03T11:25:00.000Z"
    },
    {
        "_id": "6170544e49d8f50001d83e06",
        "name": "Men's Classic Watch",
        "category": "accessories",
        "price": 79.99,
        "color": "Silver",
        "size": "One Size",
        "images": [
            'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        "ratings": [
            {
                "userId": "6170544e49d8f50001d83e13",
                "rating": 4.5,
                "review": "Love the design!"
            }
        ],
        "stock": 10,
        "createdAt": "2021-11-20T15:30:00.000Z",
        "updatedAt": "2021-11-22T09:50:00.000Z"
    },
    {
        "_id": "6170544e49d8f50001d83e07",
        "name": "Women's High Heels",
        "category": "shoes",
        "description": "Elegant red high heels for women.",
        "price": 59.99,
        "color": "Red",
        "size": "8",
        "images": [
            'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        "ratings": [],
        "stock": 18,
        "createdAt": "2021-12-10T12:40:00.000Z",
        "updatedAt": "2021-12-12T14:15:00.000Z"
    },
    {
        "_id": "6170544e49d8f50001d83e08",
        "name": "Men's Hooded Sweatshirt",
        "category": "clothing",
        "description": "A cozy grey hooded sweatshirt for men.",
        "price": 34.99,
        "color": "Grey",
        "size": "XL",
        "images": [
            'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        "ratings": [
            {
                "userId": "6170544e49d8f50001d83e14",
                "rating": 4,
                "review": "Perfect fit!"
            }
        ],
        "stock": 12,
        "createdAt": "2021-11-08T11:55:00.000Z",
        "updatedAt": "2021-11-10T08:30:00.000Z"
    },
    {
        "_id": "6170544e49d8f50001d83e09",
        "name": "Women's Leather Handbag",
        "category": "accessories",
        "price": 69.99,
        "color": "Brown",
        "size": "One Size",
        "images": [
            'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        "ratings": [
            {
                "userId": "6170544e49d8f50001d83e15",
                "rating": 5,
                "review": "Great quality!"
            }
        ],
        "stock": 8,
        "createdAt": "2021-12-05T09:30:00.000Z",
        "updatedAt": "2021-12-07T12:10:00.000Z"
    },
    {
        "_id": "6170544e49d8f50001d83e10",
        "name": "Men's Casual Loafers",
        "category": "shoes",
        "description": "Comfortable brown casual loafers for men.",
        "price": 49.99,
        "color": "Brown",
        "size": "9",
        "images": [
            'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        "ratings": [],
        "stock": 22,
        "createdAt": "2021-11-25T13:00:00.000Z",
        "updatedAt": "2021-11-27T10:20:00.000Z"
    }

]

export default products;