class ApiError extends Error {
    constructor(
        statuscode,
        messege = "something went wrong",
        error = [],
        stack = ""
    ){
        super(messege)
        this.statusCode = statuscode
        this.data = null
        this.message = messege
        this.success = false
        this.errors = error

        if(stack){
                this.stack = stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }

}

export {ApiError}