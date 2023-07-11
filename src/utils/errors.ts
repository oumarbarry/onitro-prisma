export const BadRequest = (message?: string) => createError({ statusCode: 400, message })
export const NotAuthenticated = (message?: string) => createError({ statusCode: 401, message })
export const PaymentError = (message?: string) => createError({ statusCode: 402, message })
export const Forbidden = (message?: string) => createError({ statusCode: 403, message })
export const NotFound = (message?: string) => createError({ statusCode: 404, message })
export const MethodNotAllowed = (message?: string) => createError({ statusCode: 405, message })
export const NotAcceptable = (message?: string) => createError({ statusCode: 406, message })
export const Timeout = (message?: string) => createError({ statusCode: 408, message })
export const Conflict = (message?: string) => createError({ statusCode: 409, message })
export const LengthRequired = (message?: string) => createError({ statusCode: 411, message })
export const Unprocessable = (message?: string) => createError({ statusCode: 422, message })
export const TooManyRequests = (message?: string) => createError({ statusCode: 429, message })
export const InternalError = (message?: string) => createError({ statusCode: 500, message })
export const NotImplemented = (message?: string) => createError({ statusCode: 501, message })
export const BadGateway = (message?: string) => createError({ statusCode: 502, message })
export const Unavailable = (message?: string) => createError({ statusCode: 503, message })
