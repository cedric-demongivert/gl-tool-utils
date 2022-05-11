/**
 *
 */
export declare type Factory<T = any, Parameters extends Array<any> = Array<any>> = (...parameters: Parameters) => T;
/**
 *
 */
export declare namespace Factory {
    /**
     *
     */
    function instantiator<T = any, DefaultParameters extends Array<any> = Array<any>, OtherParameters extends Array<any> = Array<any>>(factory: Factory<T, [...DefaultParameters, ...OtherParameters]>, ...parameters: DefaultParameters): Factory<T, OtherParameters>;
    /**
     * @todo documentation
     */
    function instantiate<T = any, Parameters extends Array<any> = Array<any>>(factory: Factory<T, Parameters>, ...parameters: Parameters): T;
}
