self.__BUILD_MANIFEST = function(s) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, "static/chunks/60-345932665c91058e.js", "static/chunks/pages/index-c0b2fb08118e27b4.js"],
        "/_error": ["static/chunks/pages/_error-565755ec872d23a2.js"],
        "/auth": [s, "static/chunks/769-ef137e2c26fe9a4b.js", "static/chunks/pages/auth-7889bc6622197ec9.js"],
        sortedPages: ["/", "/_app", "/_error", "/auth"]
    }
}("static/chunks/244-ba5aafa6146c0f85.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();