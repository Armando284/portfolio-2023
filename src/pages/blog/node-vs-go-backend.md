---
layout: '../../layouts/BlogLayout.astro'
---

# Comparing Node Js vs Golang for Backend Development

## Testing the performance of a Node Js API vs a Golang API, which language is better for what and when to use it to get the best performance

![Express and Gin main files side by side.](https://miro.medium.com/v2/resize:fit:720/format:webp/1*QZjtaeDtosL5b78k_25sQQ.png)

I already wrote an article talking about the performance differences between JavaScript (Node Js) and Go.

[Node.Js vs Go Which Has The Best Performance](/blog/node-vs-go-performance)

This article generated a lot of interest and many interesting comments from thousands of readers. However, as many of you suggested, I was only testing one language against the other in an unrealistic way since most backend tasks are not related to sorting large quantities of data, as I do in the tests in that article.

To fix this and because it really grabbed my curiosity, I decided to create an API using each language and then benchmark the performance of each one using different types of tests in order to get more accurate data about which language is truly the best for backend development. Can you guess the results?

Before jumping to that, let me explain what types of APIs I created for these tests.

### The Database

Communication with the database is often one of the main bottlenecks for backend performance. In order to make it more stable I decided to use a basic Xampp MariaDB installed on my own computer to avoid internet issues affecting results even when this would rest realism to the tests at least it would simulate a stable connexion.

### The Node JS API

For this one, I decided to use [Express](https://www.npmjs.com/package/express) since it is one of the most popular frameworks and also one of the fastest, using it over plain Node JS would give me more realistic results without affecting performance too much.

The API would communicate with the Database using the [MariaDB](https://www.npmjs.com/package/mariadb) package and would count with the following endpoints.

`POST ‘/api/create_product’` — this calls a method on the controller that writes a product object passed on the body to the database. With this, we test the writing speed.

```javascript
async function CreateProduct(req, res) {
  const product = req.body.product
  try {
    const response = await productModel.CreateProduct(product)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error)
    throw error
  }
}
```

`GET ‘/api/get_products’` — calls a method on the controller that gets all the products from the database. With this, we test the reading speed.

```javascript
async function GetProducts(req, res) {
  const tax = req.params.tax || 1
  try {
    const result = await productModel.GetProducts()
    const response = result.filter(product => !!product.id)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error)
    throw error
  }
}
```

`DELETE ’/api/delete_product/:id’` — deletes a product from the database by the id passed on the parameters. With this, we test the deleting speed.

```javascript
async function DeleteProduct(req, res) {
  const id = req.params.id
  try {
    const response = await productModel.DeleteProduct(id)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error)
    throw error
  }
}
```

`GET ‘/api/fibonacci/:index’` — Which calls an unoptimized Fibonacci method that returns the number on the Fibonacci sequence of the given index. With this we simulate a more complex logic, usually, on a given backend there are a few endpoints that require more work than just reading or creating data.

```javascript
// Non Optimized Fibonacci
async function GetFibonacci(req, res) {
  const index = req.params.index
  const fibonacci = n => {
    if (n <= 1) return n

    return fibonacci(n - 1) + fibonacci(n - 2)
  }
  const response = await fibonacci(index)
  res.status(200).json(response)
}
```

With these four endpoints, we have the basics of a common `CRUD` (Update speed should be similar) and a more demanding functionality covered.

### The Go API

For this one, I decided to use [Gin](https://gin-gonic.com/), since it is the most popular Go backend framework, and the way to use it it’s quite similar to Express so I was able to maintain the design fairly similar.

I used [Gorm](https://gorm.io/) for communication with the database and created the same endpoints as in my Node JS API.

Gin Create Product

```go
func CreateProduct(c *gin.Context) {
 type Product struct {
  Id          uint
  Title       string
  Price       float64
  Description string
 }
 var body struct {
  Product *Product
 }
 c.Bind(&body)

 product := models.Product{Id: body.Product.Id, Title: body.Product.Title, Price: body.Product.Price, Description: body.Product.Description}
 result := initializers.DB.Create(&product)
 if result.Error != nil {
  c.Status(400)
  return
 }
 c.JSON(200, gin.H{
  "product": product,
 })
}
```

Gin Read Products Function

```go
func GetProducts(c *gin.Context) {
 var products []models.Product
 initializers.DB.Find(&products)
 c.JSON(200, gin.H{
  "products": products,
 })
}
```

Gin Delete Product Function

```go
func DeleteProduct(c *gin.Context) {
 // Get id from url
 id := c.Param("id")
 // Delete
 initializers.DB.Unscoped().Delete(&models.Product{}, id)
 // Respond
 // Delete method doesn't return anything so respond with ok status
 c.Status(200)
}
```

Gin Fibonacci Function

```go
func GetFibonacci(c *gin.Context) {
 index := c.Param("index")
 number, err := strconv.ParseUint(index, 10, 64)
 if err != nil {
  log.Fatal("Error while converting index to uint64")
 }
 response := fibonacci(number)
 c.JSON(200, gin.H{
  "response": response,
 })
}

func fibonacci(n uint64) uint64 {
 if n <= 1 {
  return n
 }
 return fibonacci(n-1) + fibonacci(n-2)
}
```

I have to say that I am quite new to using Go so I didn’t use Goroutines or any advanced topics but writing this backend felt pretty similar to using TypeScript and was quite fun to do.

### The tests

To conduct the tests, I created a frontend using vanilla JavaScript. By clicking a button, the frontend makes 100 sequential calls to each endpoint of each API using Axios.

It then registers the time difference from the moment the request is sent to the moment it is responded to. This includes the communication time between the frontend and the backend, giving results that are closer to the end-user experience. Even though all services are running on my local computer, the real times should be proportional to the results we get.

Test Example

```javascript
export async function ReadProducts({ port, resultComponent, tests }) {
  console.log('ReadProducts')
  const times = []
  for (let i = 0 i < tests i++) {
    const start = performance.now()
    const response = await axios.get(`http://localhost:${port}/api/get_products`)
    const end = performance.now()
    times.push(end - start)
  }
  const totalTime = times.reduce((a, b) => a + b, 0)
  resultComponent.innerText = `${totalTime / times.length}ms`
  return times
}
```

To benchmark concurrent requests to both APIs, I used an amazing tool called [autocannon](https://www.npmjs.com/package/autocannon). This tool allows me to run these types of tests using the CLI or programmatically using a script, which is the way I used it.

As you can see in the script, I am getting the port number from the CLI since in my local environment the only difference between the URLs of the Node JS API and the Go API is the port used. I am also getting the number of concurrent connections, the maximum number of requests per connection, and the total duration of the test in order to have more control over the tests.

Autocannon concurrency test configuration.

```javascript
const autocannon = require('autocannon')

function ConcurrencyTest() {
  const args = process.argv.slice(2)
  const url = `http://localhost:${args[0] || 3000}`
  const connections = args[1] || 1000
  const maxConnectionsRequests = args[2] || 1000
  const duration = args[3] || 10
  const instance = autocannon({
    url,
    connections,
    duration,
    maxConnectionsRequests,
    headers: {
      'Content-Type': 'application/json',
    },
    requests: [
      {
        method: 'GET',
        path: '/get_products'
      }
    ],
  })
  autocannon.track(instance)
}

ConcurrencyTest()
```

On the graphs, X-axis represents the request number and Y-axis represents the response time in milliseconds. Node JS, Express API, is represented in orange, and Go, Gin API, is represented in blue.

### Create Product Endpoint Test

![Create Product Endpoint Test Comparison Graph](https://miro.medium.com/v2/resize:fit:720/format:webp/1*1VIa6d20Y960-VL4g7pVtQ.png)

We can see here that even when the Go API is faster and more stable for almost the entire test, we can say that the standard performance difference between the two is so small that it can be neglected.

### Get Products Endpoint Test

![Read Products Endpoint Test Comparison Graph](https://miro.medium.com/v2/resize:fit:720/format:webp/1*0mJu7IAKXws_bG73FUSr1w.png)

In this one, we get almost the same result, with Node JS API being a little bit faster. But again the difference between the two is too small to be taken into account.

### Delete Products Endpoint Test

![Delete Product Endpoint Test Comparison Graph](https://miro.medium.com/v2/resize:fit:720/format:webp/1*HSaerIIdZW5EyOM2Tx50pw.png)

During these tests, we can see a reduction in performance on the Go API. Although the differences are still around 10 milliseconds, we can say that the result is not as similar as in the two previous tests. This is mostly due to the fact that the Gorm ORM’s delete method, by default, does a soft delete instead of really erasing the data from the database. Therefore, I had to chain another method to force a hard delete, reducing the performance. In real-life scenarios, you would usually prefer a soft delete, but for the sake of the tests, I had to make it equal to the actions of the Node JS API.

### Fibonacci Endpoint Test

![Fibonacci Endpoint Test Comparison Graph](https://miro.medium.com/v2/resize:fit:720/format:webp/1*7Y9fsjlfJeEA6eRmu5lw1g.png)

Remember that the idea behind this test is to simulate a more complex or resource-intensive logic on our backend. We are asking for the 30th number on the Fibonacci sequence, and the results are amazing!

Each request to the Node JS API took more than 50 milliseconds to respond, while the Go API remained stable at under 20 milliseconds almost all the time. It even dropped to less than 10 milliseconds by the final half of the tests, showing the “blazingly fast” performance of Go without even using Goroutines. Asking for larger indexes on the sequence only makes the difference larger.

### Average results

![Average Tests Results, Express API Orange, Gin API Blue](https://miro.medium.com/v2/resize:fit:720/format:webp/1*71BaNL255PTYKLynpTthKg.png)

### Concurrency Test

I don’t have graphics for this test but the numbers are really clear. On this test, I am sending 1000 concurrent connections with a maximum of 10 requests per connection and a connection time of 10 seconds. First to the Node JS API and second to the Go API.

There is a lot of interesting data returned by this tool but we can focus for now on these 3 aspects.

1. The Avg column on the Latency table (First table, sixth column). Which represents the average response time of each request.
2. The number of total requests (at the end of the image or second to last if there are some errors) represents the total amount of requests the API was capable of receiving during the test.
3. The number of errors (at the end of the image if any) represents the number of requests that timed out.

### Node JS API Test

![Express API Concurrency Test](https://miro.medium.com/v2/resize:fit:720/format:webp/1*5hQAhdVFfHE5tmsxBXyDoQ.png)

![Gin API Concurrency Test](https://miro.medium.com/v2/resize:fit:720/format:webp/1*KExSActyBxTxWazza-Xt7w.png)

1. As we can see the average response time in our Node JS API is of 173 milliseconds vs 82 milliseconds of our Go API which is less than half of the time.
2. The amount of requests to the Node JS API is 59000 vs 124000 on the Go API which managed to double the number of processed requests under the same conditions.
3. Also even when managing fewer requests the Node JS API resulted in 7 times out of errors while the Go API resulted in none.

### Conclusions

It is clear from this article that the performance of the Go language is better than JavaScript (Node JS) even for backend development. Go is able to solve complex problems at around a third of the time, manage twice as many requests in half the time, and has fewer errors, even though coding both backends took the same amount of time and effort.

However, for more common tasks such as CRUD operations, the performance differences are almost negligible. Additionally, JavaScript and Node JS are constantly improving and have a huge community, making it easier to find support, developers, and packages or tools that meet our development needs.

So, what should we do? For me, the answer is simple: Use the language you feel most comfortable with! If you are using JavaScript and have endpoints that require better performance, you can always use a Go micro-service to save the day. With this approach, if you start getting more concurrent users on your website, you can gradually move your logic to Go, one endpoint at a time.

I would only recommend using Go from the start if you are designing a project where performance is a big concern from the beginning, even if you are a JavaScript developer.

I hope this article was helpful or interesting to some of you. Doing it was indeed very interesting for me. If you see any errors, please feel free to comment. Feedback is always appreciated!

If you want to check all of my code, here is the project’s GitHub repository.

[Node.Js vs Go API](https://github.com/Armando284/nodejs_vs_go_api)
