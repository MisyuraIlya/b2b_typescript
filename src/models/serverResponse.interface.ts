export interface IServerResponse {
    message: string
    status: 'success' | 'error'
    data: object
}