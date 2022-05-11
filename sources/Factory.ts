/**
 * 
 */
export type Factory<T = any, Parameters extends Array<any> = Array<any>> = (...parameters: Parameters) => T

/**
 * 
 */
export namespace Factory {
  /**
   * 
   */
  export function instantiator<
    T = any,
    DefaultParameters extends Array<any> = Array<any>,
    OtherParameters extends Array<any> = Array<any>
  >(
    factory: Factory<T, [...DefaultParameters, ...OtherParameters]>,
    ...parameters: DefaultParameters
  ): Factory<T, OtherParameters> {
    return factory.bind(undefined, ...parameters)
  }

  /**
   * @todo documentation
   */
  export function instantiate<T = any, Parameters extends Array<any> = Array<any>>(factory: Factory<T, Parameters>, ...parameters: Parameters): T {
    return factory(...parameters)
  }
}
