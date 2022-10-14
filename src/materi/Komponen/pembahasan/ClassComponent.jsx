import React from 'react';

class ClassComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 0,
  //   };

  //DIGUNAKAN PENDING UNTUK MENGATASI ERROR

  //   this.handelMinus = this.handelMinus.bind(this);
  //   this.handelPlus = this.handelPlus.bind(this);
  // }

  state = {
    value: 0,
  };

  //AGAR TIDAK PERLU PENDING GUNAKAN FUNGSI ARROW FUNCTION PADA HANDEL PLUS DAN MINUS NYA

  handelPlus = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handelMinus = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  render() {
    return (
      <div>
        <h1>Komponen ini di buat dengan class komponen</h1>
        <h2>saya {this.props.nama} belajar class component, State dan Props</h2>
        <button onClick={this.handelMinus}>-</button>
        <span>
          {'  '}
          {this.state.value}
          {'  '}
        </span>
        <button onClick={this.handelPlus}>+</button>
      </div>
    );
  }
}

export default ClassComponent;
// STATE HANYA SUPPORT PADA CLASS COMPONENT
