import React, { Component } from "react";
import api from "../../services/api";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import MaskedInput from 'react-text-mask';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeRazao = this.onChangeRazao.bind(this);
    this.onChangeContato = this.onChangeContato.bind(this);
    this.onChangeCnpj = this.onChangeCnpj.bind(this);
    this.onChangeResponsavel = this.onChangeResponsavel.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onChangeRep = this.onChangeRep.bind(this);
    this.onChangeSta = this.onChangeSta.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      NM_EMPRESA: "",
      TELEFONE_EMPRESA: "",
      CNPJ_EMPRESA: "",
      RESPONSAVEL_EMPRESA: "",
      ENDERECO_EMPRESA: "",
      REPRESENTANTE_EMPRESA: "",
      STATUS: "",
    };
  }

  onChangeNome(e) {
    this.setState({
      NM_EMPRESA: e.target.value
    });
  }
  onChangeRazao(e) {
    this.setState({
      RAZAO_EMPRESA: e.target.value
    })
  }
  onChangeContato(e) {
    this.setState({
      TELEFONE_EMPRESA: e.target.value
    });
  }
  onChangeCnpj(e) {
    this.setState({
      CNPJ_EMPRESA: e.target.value
    });
  }
  onChangeResponsavel(e) {
    this.setState({
      RESPONSAVEL_EMPRESA: e.target.value
    });
  }
  onChangeEnd(e) {
    this.setState({
      ENDERECO_EMPRESA: e.target.value
    });
  }
  onChangeRep(e) {
      this.setState({
        REPRESENTANTE_EMPRESA: e.target.value
      });
  }
  onChangeSta(e){
    this.setState({
      STATUS: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      NM_EMPRESA: this.state.NM_EMPRESA,
      RAZAO_EMPRESA: this.state.RAZAO_EMPRESA,
      TELEFONE_EMPRESA: this.state.TELEFONE_EMPRESA,
      CNPJ_EMPRESA: this.state.CNPJ_EMPRESA,
      RESPONSAVEL_EMPRESA: this.state.RESPONSAVEL_EMPRESA,
      ENDERECO_EMPRESA: this.state.ENDERECO_EMPRESA,
      REPRESENTANTE_EMPRESA: this.state.REPRESENTANTE_EMPRESA,
      STATUS: this.state.EMPRESA_MOTORISTA,
    };
    api.post("/empresas", obj).then(res => console.log(res.data));

    this.setState({
      NM_EMPRESA: "",
      RAZAO_EMPRESA: "",
      TELEFONE_EMPRESA: "",
      CNPJ_EMPRESA: "",
      RESPONSAVEL_EMPRESA: "",
      ENDERECO_EMPRESA: "",
      REPRESENTANTE_EMPRESA: "",
      STATUS: "",
    });
  }


  render() {
    return (
      <div style={{ marginTop: 10 }}>
     <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Empresas</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Incluir</BreadcrumbItem>
      </Breadcrumb>
    </div>
        <h3>Cadastro de Empresas</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nome da Empresa</label>
            <input
              type="text"
              placeholder="Entre com o nome da Empresa"
              className="form-control"
              value={this.state.NM_EMPRESA}
              onChange={this.onChangeNome}
            />
          </div>
          <div className="form-group">
            <label>Razão Social</label>
            <input
              type="text"
              placeholder="Entre com a Razão da Empresa"
              className="form-control"
              value={this.state.RAZAO_EMPRESA}
              onChange={this.onChangeRazao}
            />
          </div>
          <div className="form-group">
          <label>Contato </label>
          <MaskedInput
          mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          className="form-control"
          placeholder="Entre com o número do contato"
          guide={false}
          id="my-input-id"
          onBlur={() => {}}
          value={this.state.TELEFONE_EMPRESA}
          onChange={this.onChangeContato}
          />
         </div>
          <div className="form-group">
            <label>CNPJ </label>
            <MaskedInput
              mask={[ /[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.',/\d/,/\d/, /\d/,'/', /\d/, /\d/,/\d/,/\d/,'-',/\d/,/\d/]}
              className="form-control"
              placeholder="Entre com o número do CPF"
              guide={false}
              id="my-input-id"
              onBlur={() => {}}
              value={this.state.CNPJ_EMPRESA}
              onChange={this.onChangeCnpj}
            />
          </div>
          <div className="form-group">
            <label>Responsável</label>
            <input
              type="text"
              placeholder="Entre com o nome do Responsável"
              className="form-control"
              value={this.state.RESPONSAVEL_EMPRESA}
              onChange={this.onChangeResponsavel}
            />
          </div>
          <div className="form-group">
            <label>Endereço</label>
            <input
              type="text"
              placeholder="Entre com o endereço"
              className="form-control"
              value={this.state.ENDERECO_EMPRESA}
              onChange={this.onChangeEnd}
            />
          </div>
          <div className="form-group">
            <label>Representante</label>
            <input
              type="text"
              placeholder="Entre com o nome do segundo representante"
              className="form-control"
              value={this.state.REPRESENTANTE_EMPRESA}
              onChange={this.onChangeRep}
            />
          </div>
          <div className="form-group">
                <label>Status</label>
                    <select id="status-empresa" className="custom-select" name="status-empre" defaultValue={this.state.STATUS}
                     onChange={this.onChangeSta} required >
                        <option defaultValue>selecione uma opção</option>
                        <option value='Ativa'>Ativa</option>
                        <option value='Bloqueada'>Bloqueada</option>
                    </select>
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
