/**
 *
 */
export declare type Constructor<Production = {}, Parameters extends Array<any> = Array<any>> = new (...parameters: Parameters) => Production;
/**
 *
 */
export declare namespace Constructor {
    /**
     * @todo documentation
     */
    function instantiate<Production = {}, Parameters extends Array<any> = Array<any>>(constructor: Constructor<Production, Parameters>, ...parameters: Parameters): Production;
}
