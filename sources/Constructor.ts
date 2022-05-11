/**
 * 
 */
export type Constructor<Production = {}, Parameters extends Array<any> = Array<any>> = new (...parameters: Parameters) => Production

/**
 * 
 */
export namespace Constructor {
  /**
   * @todo documentation
   */
  export function instantiate<Production = {}, Parameters extends Array<any> = Array<any>>(
    constructor: Constructor<Production, Parameters>,
    ...parameters: Parameters
  ): Production {
    return new constructor(...parameters)
  }
}