## HTTP

## HTTP Status Codes

Document about the status codes of the HTTP Protocol.

They're part of the responses from the server, when client makes a request.

Groups

1. Informational
2. Success
3. Redirection
4. Client Error
5. Server Error

12 Frequently Used Codes, from [Rest API Tutorial](http://www.restapitutorial.com/httpstatuscodes.html):

* __200 Status OK__: request succeeded, information returned depends on the method used.
* __201 Created__: request was fulfilled and the resource with its URI, created. If server hadn't created the resource, should return code _202_.
* __204 No content__: server fulfilled request but does not need to return an entity body. Must not include message body.
* __303 See other__: response to request can be found under a different URI and should be retrieved using `GET` on that one.
* __304 Not modified__: shows that resource has not been modified since last requested. Client should provide a time reference to compare data.
* __400 Bad Request__: request could not be understood due to bad syntax. Client must modify and send again.
* __401 Unauthorized__: request requires user authentication.
* __403 Forbidden__: server understood the request but refuses to respond. Authorization would not help, petition should not be repeated. Responses should include why? or use `404`.
* __404 Not Found__: sever did not found a matching request URI. Use `410 Gone` resources no longer available.
* __408 Request timeout__: client did not produce request within server's wait time. Requests without modifications in future are allowed.
* __409 Conflict__: not fulfilled due to conflict with the resource's state. Response body should include an explanation.
* __500 Internal Server error__: server encountered an unexpected error which prevented from fulfillment.

## HTTP Methods

From REST API Turial and [MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Methods).

* Safe: does not changes the data.
* Idempotent: making multiple identical request have the same result of one.
* Success / Failure: refers to the HTTP status codes that would be returned in each case.

| Method    | CRUD Equivalent  | Safe? | Idempotent? | Success | Failure |
|-----------|------------------|-------|-------------|---------|---------|
| `DELETE`  | Delete           | No    | Should be   | `200`, `204`, `404`| |
| `GET`     | Read             | Yes   | Yes         | `200` | `400`, `404` |
| `PATCH`   | Modify / Update  | No    | No          | | |
| `POST`    | Create           | No    | No          | `201` | |
| `PUT`     | Update / Replace | No    | Recommended |`200`, `201`, `204` | `404` |
