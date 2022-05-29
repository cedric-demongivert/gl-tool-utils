/**
 * 
 */
export type Factory<Product = unknown, Parameters extends Array<unknown> = []> = (...parameters: Parameters) => Product

/**
 * 
 */
export namespace Factory {
  /**
   * 
   */
  export function instantiator<
    Product = unknown,
    DefaultParameters extends Array<unknown> = Array<unknown>,
    OtherParameters extends Array<unknown> = Array<unknown>
  >(
    factory: Factory<Product, [...DefaultParameters, ...OtherParameters]>,
    ...parameters: DefaultParameters
  ): Factory<Product, OtherParameters> {
    return function (...otherParameters: OtherParameters): Product {
      return factory(...parameters, ...otherParameters)
    }
  }

  /**
   * 
   */
  export function instantiate<
    Product = unknown,
    Parameters extends Array<unknown> = Array<unknown>
  >(factory: Factory<Product, Parameters>, ...parameters: Parameters): Product {
    return factory(...parameters)
  }
}
