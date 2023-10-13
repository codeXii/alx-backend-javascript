/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */
export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  set maxStudentsSize(new_MaxStudentsSize) {
    if (typeof newMaxStudentsSize === 'number') {
      this._maxStudentsSize = new_MaxStudentsSize;
    }
  }

  get maxStudentsSize() {
    return this._maxStudentsSize;
  }
}
