export class Constants {
    public static readonly CHARACTER_LIMIT = {
        nameLength: 50,
        passwordMinimumLength: 8,
        passwordMaximumLength: 15,
    };

    public static readonly PATTERN = {
        passwordPattern: /^(?=.*[A-Z])(?=.*[0-9])([a-zA-Z0-9$@$!%*?&_()#])+$/,
        emailPattern: '^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$',
        name: '^[a-zA-Z ]*$',
        url: '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
    };

    public static readonly ENDPOINTS = {
        login: '/v1/login',
    };

    public static readonly ERROR_CODES = {
        BAD_REQUEST: 422,
        CONFLICT: 409,
        UNAUTHENTICATED: 403,
        UNATHOURIZED: 401,
        NO_CONTENT: 204,
        SUCCESS: 200,
        NOTFOUND: 404,
        INTERNAL_SERVER_ERROR: 500,
    };
}
