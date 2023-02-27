export class Alert{
    id?: string;
    type?: AlertType;
    message?: string;
    autoClose?: boolean;
    RouteChange?: boolean;
    fade?: boolean;

    constructor(init?:Partial<Alert>){
        Object.assign(this, init);
    }
}

export enum AlertType{
    Success,
    Error,
    Info,
    Warning
}

export class AlertQptions{
    id?: string;
    autoClose?: boolean; 
    RouteChange?: boolean;
}