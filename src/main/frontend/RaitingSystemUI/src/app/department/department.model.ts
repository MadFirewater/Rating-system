import {Links} from '../core/base-entities';

export class Department {
  name: string;
  _links: Links;

  constructor(data?: {}) {
    Object.assign(this, data);
  }
}
