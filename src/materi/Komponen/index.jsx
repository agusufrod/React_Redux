import React from 'react';
import ClassComponent from './pembahasan/ClassComponent';
import FunctionComponent from './pembahasan/FunctionComponent';

export default class Komponen extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent nama="herman agus" />
        <FunctionComponent nama="herman agus" />
      </div>
    );
  }
}
