export enum ErrorType {
    ENV_MISSING,
    SERVER
}

type IErrorData = {
    envName?: string;
}

export const generateError = (errorType:ErrorType, data:IErrorData) : any => {
    switch(errorType) {
        case ErrorType.ENV_MISSING:
            throw new Error(`ENV MISSING: > ${data.envName} <`)
        default:
            throw new Error("Some error occured")
    }
}

export const checkEnvValues = (envVariables: Array<any>) => {
    envVariables.forEach( val => {
        console.log("val", val)
    })
}