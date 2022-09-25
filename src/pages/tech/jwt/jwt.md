# Is JWT the right approach for my applications authentication?

Most of the time, JWTs aren't the best approach for working with backend authentication, despite the multitude of tutorials that use JWT. Session have been used for decades, with a lot of back end frameworks supporting them out of the box.

That said there are also scenarios when using a JWT token is the best approach:

- When using a third party auth service ( OpenID, Auth0, Firestore)
- Service to service calls
- Distributed architectures ( i.e Microservices)

See below to help you decide which works best for you:

https://evertpot.com/jwt-is-a-bad-default
https://redis.com/blog/json-web-tokens-jwt-are-dangerous-for-user-sessions
https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html
https://gist.github.com/samsch/a5c99b9faaac9f131967e8a6d61682b0
http://cryto.net/~joepie91/blog/2016/06/19/stop-using-jwt-for-sessions-part-2-why-your-solution-doesnt-work/
