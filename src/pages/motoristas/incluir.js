import React, { Component } from "react";
import api from "../../services/api";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import MaskedInput from 'react-text-mask';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeCel = this.onChangeCel.bind(this);
    this.onChangeCpf = this.onChangeCpf.bind(this);
    this.onChangeRg = this.onChangeRg.bind(this);
    this.onChangeCat = this.onChangeCat.bind(this);
    this.onChangeEmpresa = this.onChangeEmpresa.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      NM_MOTORISTA: "",
      CEL_MOTORISTA: "",
      CPF_MOTORISTA: "",
      RG_MOTORISTA: "",
      CATEGORIACNH_MOTORISTA: "",
      DATA_NASC_MOTORISTA: "",
      EMPRESA_MOTORISTA: "",
    };
  }

  onChangeNome(e) {
    this.setState({
      NM_MOTORISTA: e.target.value
    });
  }
  onChangeCel(e) {
    this.setState({
      CEL_MOTORISTA: e.target.value
    });
  }
  onChangeCpf(e) {
    this.setState({
      CPF_MOTORISTA: e.target.value
    });
  }
  onChangeRg(e) {
    this.setState({
      RG_MOTORISTA: e.target.value
    });
  }
  onChangeCat(e) {
    this.setState({
      CATEGORIACNH_MOTORISTA: e.target.value
    });
  }
  onChangeData(e) {
      this.setState({
        DATA_NASC_MOTORISTA: e.target.value
      });
  }
  onChangeEmpresa(e){
    this.setState({
      NM_EMPRESA: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      NM_MOTORISTA: this.state.NM_MOTORISTA,
      CEL_MOTORISTA: this.state.CEL_MOTORISTA,
      CPF_MOTORISTA: this.state.CPF_MOTORISTA,
      RG_MOTORISTA: this.state.RG_MOTORISTA,
      CATEGORIACNH_MOTORISTA: this.state.CATEGORIACNH_MOTORISTA,
      DATA_NASC_MOTORISTA: this.state.DATA_NASC_MOTORISTA,
      EMPRESA_MOTORISTA: this.state.EMPRESA_MOTORISTA,
    };
    api.post("/motoristas", obj).then(res => console.log(res.data));

    this.setState({
      NM_MOTORISTA: "",
      CEL_MOTORISTA: "",
      CPF_MOTORISTA: "",
      RG_MOTORISTA: "",
      CATEGORIACNH_MOTORISTA: "",
      DATA_NASC_MOTORISTA: "",
      EMPRESA_MOTORISTA: "",
    });
  }


  render() {
    return (
      <div style={{ marginTop: 10 }}>
     <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Motoristas</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Incluir</BreadcrumbItem>
      </Breadcrumb>
    </div>
        <h3>Cadastro de Motoristas</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nome do Motorista </label>
            <input
              type="text"
              placeholder="Entre com o nome completo do Motorista"
              className="form-control"
              value={this.state.NM_MOTORISTA}
              onChange={this.onChangeNome}
            />
          </div>
          <div className="form-group">
          <label>Celular </label>
          <MaskedInput
          mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          className="form-control"
          placeholder="Entre com o número do celular"
          guide={false}
          id="my-input-id"
          onBlur={() => {}}
          value={this.state.CEL_MOTORISTA}
          onChange={this.onChangeCel}
          />
         </div>
          <div className="form-group">
            <label>CPF </label>
            <MaskedInput
              mask={[ /[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.',/\d/,/\d/, /\d/,'-', /\d/, /\d/]}
              className="form-control"
              placeholder="Entre com o número do CPF"
              guide={false}
              id="my-input-id"
              onBlur={() => {}}
              value={this.state.CPF_MOTORISTA}
              onChange={this.onChangeCpf}
            />
          </div>
          <div className="form-group">
            <label>RG</label>
            <MaskedInput
              mask={[ /[1-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.',/\d/,/\d/, /\d/,'-', /\d/]}
              className="form-control"
              placeholder="Entre com o número do RG"
              guide={false}
              id="my-input-id"
              onBlur={() => {}}
              value={this.state.RG_MOTORISTA}
              onChange={this.onChangeRg}
            />
          </div>
          <div className="form-group">
                <label>Categoria CNH</label>
                    <select id="categoria-cnh" className="custom-select" name="categoriaCnh" defaultValue={this.state.CATEGORIACNH_MOTORISTA}
                     onChange={this.onChangeCat} required >
                        <option defaultValue>selecione uma opção</option>
                        <option value='A'>A</option>
                        <option value='B'>B</option>
                        <option value='AB'>AB</option>
                        <option value='C'>C</option>
                        <option value='AC'>AC</option>
                        <option value='D'>D</option>
                        <option value='AD'>AD</option>
                        <option value='E'>E</option>
                        <option value='AE'>AE</option>
                    </select>
                </div>
        
          <div className="form-group">
            <label>Data de Nascimento</label>
            <input
              type="date"
              className="form-control"
              value={this.state.DATA_NASC_MOTORISTA }
              onChange={this.onChangeData}
            />
          </div>
          
          <div className="form-group">
            <input type="submit" value="Salvar" className="btn btn-primary" />
            <a class="btn btn-outline-danger" href="/" role="button">Cancelar</a>
          </div>
        </form>
      </div>
    );
  }
}
