import React from "react";
import style from "./Botal.module.scss";

class Botao extends React.Component<{ children?: React.ReactNode }> {
  render() {
    return <button className={style.botao}>{this.props.children}</button>;
  }
}

export default Botao;