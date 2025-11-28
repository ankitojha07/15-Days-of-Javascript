# HTTP Server Task

### Description
Buils a simple http server with the following features:
1. GET: `/` - send a simple hello from server message
2. GET: `/contact-us` - Send your email and contact number to the user.
3. POST: `/tweet` - do a fake db operation and send the Acknowledgement to the user
4. GET: `/tweet` - Send all the tweets from fake db to the user.

Also, you need to log all the incoming requests to a `log.txt` file with the timestamp.