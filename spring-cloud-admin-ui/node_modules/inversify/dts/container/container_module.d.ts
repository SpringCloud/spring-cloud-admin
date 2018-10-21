import { interfaces } from "../interfaces/interfaces";
export declare class ContainerModule implements interfaces.ContainerModule {
    guid: string;
    registry: interfaces.ContainerModuleCallBack;
    constructor(registry: interfaces.ContainerModuleCallBack);
}
export declare class AsyncContainerModule implements interfaces.AsyncContainerModule {
    guid: string;
    registry: interfaces.AsyncContainerModuleCallBack;
    constructor(registry: interfaces.AsyncContainerModuleCallBack);
}
