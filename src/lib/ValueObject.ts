import { shallowEqual } from 'shallow-equal-object';

interface ValueObjectProps {
  [index: string]: any;
}

export default abstract class ValueObject<T extends ValueObjectProps> {
  public readonly props: T;

  constructor(props: T) {
    this.props = Object.freeze(props);
  }

  public equals(obj?: ValueObject<T>): boolean {
    if (obj === null || obj === undefined) {
      return false;
    }

    if (obj.props === undefined) {
      return false;
    }

    return shallowEqual(this.props, obj.props);
  }
}
