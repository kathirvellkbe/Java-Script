
//Task 1 — Product API Operations

let api = "https://fakestoreapi.com/products";

fetch(api)
    .then(response => response.json())
    .then(products => {

        console.log("===== ALL PRODUCTS =====");

        products.forEach(product => {
            console.log("Title:", product.title);
            console.log("Price: $" + product.price);
            console.log("Category:", product.category);
            console.log("-------------------------");
        });

        // map()
        let productDetails = products.map(product => ({
            title: product.title,
            price: product.price
        }));

        console.log("===== TITLE AND PRICE =====");
        console.log(productDetails);

        // filter()
        let expensiveProducts = products.filter(product => product.price > 100);

        console.log("===== PRODUCTS ABOVE $100 =====");
        console.log(expensiveProducts);

        // find()
        let electronicsProduct = products.find(
            product => product.category === "electronics"
        );

        console.log("===== FIRST ELECTRONICS PRODUCT =====");
        console.log(electronicsProduct);

        // reduce()
        let totalPrice = products.reduce(
            (total, product) => total + product.price,
            0
        );

        console.log("===== TOTAL PRICE =====");
        console.log("$" + totalPrice.toFixed(2));

        // sort()
        let sortedProducts = [...products].sort(
            (a, b) => b.price - a.price
        );

        console.log("===== HIGHEST TO LOWEST =====");

        sortedProducts.forEach(product => {
            console.log(
                product.title + " - $" + product.price
            );
        });
    })
    .catch(error => {
        console.log("API Error:", error);
    })
    .finally(() => {
        console.log("===== API OPERATION COMPLETED =====");
    
    });

//-------------------------------------------------------------------//



    //Task 2 — Product Category Dashboard

{
    let api = "https://fakestoreapi.com/products";

function countCategory(products, category) {
    return products.filter(
        product => product.category === category
    ).length;
}

fetch(api)
    .then(response => response.json())
    .then(products => {

        let totalProducts = products.length;

        let electronics = countCategory(products, "electronics");
        let jewelery = countCategory(products, "jewelery");
        let mensClothing = countCategory(products, "men's clothing");
        let womensClothing = countCategory(products, "women's clothing");

        let prices = products.map(product => product.price);

        let highestPrice = Math.max(...prices);
        let lowestPrice = Math.min(...prices);

        let totalPrice = products.reduce(
            (total, product) => total + product.price,
            0
        );

        let averagePrice = totalPrice / products.length;

        let sortedProducts = [...products].sort(
            (a, b) => b.price - a.price
        );

        console.log(`
===== PRODUCT DASHBOARD =====

Total Products: ${totalProducts}

Electronics: ${electronics}
Jewelery: ${jewelery}
Men's Clothing: ${mensClothing}
Women's Clothing: ${womensClothing}

Highest Price: $${highestPrice.toFixed(2)}
Lowest Price: $${lowestPrice.toFixed(2)}
Average Price: $${averagePrice.toFixed(2)}
`);

    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Dashboard completed.");
    });
}

//-----------------------------------------------------------------------//


//Task 3 — User & Post API

{

let usersAPI = "https://jsonplaceholder.typicode.com/users";
let postsAPI = "https://jsonplaceholder.typicode.com/posts";

fetch(usersAPI)
    .then(response => response.json())
    .then(users => {

        console.log("===== ALL USER NAMES =====");

        users.forEach(user => {
            console.log(user.name);
        });

        console.log("===== NAME + EMAIL =====");

        users.forEach(user => {
            console.log(
                `${user.name} - ${user.email}`
            );
        });

        // Find user ID 5
        let userFive = users.find(user => user.id === 5);

        console.log("===== USER ID 5 =====");
        console.log(userFive);

        // Filter users from a city
        let city = "Gwenborough";

        let cityUsers = users.filter(
            user => user.address.city === city
        );

        console.log(`===== USERS FROM ${city} =====`);
        console.log(cityUsers);

        // Fetch posts
        return fetch(postsAPI);
    })
    .then(response => response.json())
    .then(posts => {

        // Posts written by user ID 1
        let userPosts = posts.filter(
            post => post.userId === 1
        );

        console.log("===== POSTS BY USER ID 1 =====");
        console.log(userPosts);

        // Count posts
        console.log(
            "Number of posts by User 1:",
            userPosts.length
        );

        // First post with title > 50 characters
        let longTitlePost = posts.find(
            post => post.title.length > 50
        );

        console.log("===== FIRST TITLE ABOVE 50 CHARACTERS =====");
        console.log(longTitlePost);

    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("===== TASK COMPLETED =====");
    });
}


//---------------------------------------------------------------------//


//Task 4 — API + Search

{
let api = "https://fakestoreapi.com/products";

let category = prompt("Enter product category:");
let maxPrice = Number(prompt("Enter maximum price:"));

function searchProducts(products, category, maxPrice) {

    return products.filter(product =>
        product.category.toLowerCase() === category.toLowerCase() &&
        product.price <= maxPrice
    );
}

fetch(api)
    .then(response => response.json())
    .then(products => {

        let result = searchProducts(
            products,
            category,
            maxPrice
        );

        console.log("===== SEARCH RESULT =====");

        if (result.length === 0) {
            console.log("No products found.");
        } else {

            result.forEach(product => {

                console.log(`
Product: ${product.title}
Price: $${product.price}
Category: ${product.category}
-------------------------
                `);

            });
        }
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Search completed.");
    });
}


//----------------------------------------------------------------------//



//Task 5 — API Shopping Cart


{
let api = "https://fakestoreapi.com/products";

fetch(api)
    .then(response => response.json())
    .then(products => {

        console.log("===== AVAILABLE PRODUCTS =====");

        products.forEach(product => {
            console.log(
                `ID: ${product.id} | ${product.title} | $${product.price}`
            );
        });

        let selectedIds = prompt(
            "Enter product IDs separated by commas:"
        );

        let ids = selectedIds
            .split(",")
            .map(id => Number(id.trim()));

        let cart = products.filter(product =>
            ids.includes(product.id)
        );

        console.log("===== CART =====");

        cart.forEach((product, index) => {

            console.log(`
Product ${index + 1}: ${product.title}
Price: $${product.price}
            `);

        });

        // Calculate total
        let total = cart.reduce(
            (sum, product) => sum + product.price,
            0
        );

        // Discount
        let discount = 0;

        if (total > 200) {
            discount = 20;
        } else if (total > 100) {
            discount = 10;
        }

        let discountAmount = total * discount / 100;

        let finalAmount = total - discountAmount;

        console.log(`
===== CART SUMMARY =====

Total: $${total.toFixed(2)}
Discount: ${discount}%
Discount Amount: $${discountAmount.toFixed(2)}
Final Amount: $${finalAmount.toFixed(2)}
`);

    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("===== CART COMPLETED =====");
    });
}


//--------------------------------------------------------------------//



//Task 6 — FakeStore Product Report


{
let api = "https://fakestoreapi.com/products";

fetch(api)
    .then(response => response.json())
    .then(products => {

        console.log("========== PRODUCT REPORT ==========");

        // Total products
        console.log("\nTotal Products:", products.length);

        // map()
        let productNames = products.map(
            product => product.title
        );

        console.log("\nProduct Names:");

        productNames.forEach(name => {
            console.log("- " + name);
        });

        // filter()
        let expensiveProducts = products.filter(
            product => product.price > 100
        );

        console.log("\nProducts Above $100:");

        expensiveProducts.forEach(product => {
            console.log(
                `${product.title} - $${product.price}`
            );
        });

        // find()
        let electronicsProduct = products.find(
            product => product.category === "electronics"
        );

        console.log("\nElectronics Product:");

        console.log(electronicsProduct);

        // reduce()
        let totalValue = products.reduce(
            (total, product) => total + product.price,
            0
        );

        console.log(
            "\nTotal Product Value: $" +
            totalValue.toFixed(2)
        );

        // some()
        let above500 = products.some(
            product => product.price > 500
        );

        console.log(
            "\nAny Product Above $500:",
            above500
        );

        // every()
        let allAbove1 = products.every(
            product => product.price > 1
        );

        console.log(
            "All Products Above $1:",
            allAbove1
        );

        // sort()
        let sortedProducts = [...products].sort(
            (a, b) => b.price - a.price
        );

        console.log("\nHighest → Lowest:");

        sortedProducts.forEach(product => {
            console.log(
                `${product.title} - $${product.price}`
            );
        });

    })
    .catch(error => {

        console.log("API Error:", error);

    })
    .finally(() => {

        console.log("\n========== REPORT COMPLETED ==========");

    });
}