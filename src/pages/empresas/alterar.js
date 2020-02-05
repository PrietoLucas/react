import React, { Component } from "react";
import api from "../../services/api";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeMotorista = this.onChangeMotorista.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeCel = this.onChangeCel.bind(this);
    this.onChangeCpf = this.onChangeCpf.bind(this);
    this.onChangeRg = this.onChangeRg.bind(this);
    this.onChangeCat = this.onChangeCat.bind(this);

    this.state = {
      
        ID_MOTORISTA: "",
        NM_MOTORISTA: "",
        CEL_MOTORISTA: "",
        CPF_MOTORISTA: "",
        RG_MOTORISTA: "",
        CATEGORIACNH_MOTORISTA: "",
        DATA_NASC_MOTORISTA: "",
      
    };
   }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/motoristas/${id}`);
      console.log(response);
      this.setState( response.data[0]) ;
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  }

  onChangeId(e) {
    this.setState({
      value: e.target.value      
    });
    
  }

  onChangeMotorista(e) {
    this.setState({
      value: e.target.value
    });
  }
  onChangeCel(e) {
    this.setState({
      value: e.target.value
    });
  }
  onChangeCpf(e) {
    this.setState({
      value: e.target.value
    });
  }
  onChangeRg(e) {
    this.setState({
      value: e.target.value
    });
  }
  onChangeCat(e) {  
        
    this.setState({      
      value : e.target.value
    });
    console.log(this.state.value);  
  }
  onChangeData(e) {
    this.setState({
      value: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      ID_MOTORISTA: this.state.ID_MOTORISTA ,
      NM_MOTORISTA: this.state.NM_MOTORISTA,
      CEL_MOTORISTA: this.state.CEL_MOTORISTA,
      CPF_MOTORISTA: this.state.CPF_MOTORISTA,
      RG_MOTORISTA: this.state.RG_MOTORISTA,
      CATEGORIACNH_MOTORISTA: this.state.CATEGORIACNH_MOTORISTA,
      DATA_NASC_MOTORISTA: this.state.DATA_NASC_MOTORISTA
      
    };
    console.log(obj);
   
    api.put("/motoristas/"+this.props.match.params.id, obj).then(res => console.log(res.data));

    this.setState({
      ID_MOTORISTA: "",
      NM_MOTORISTA: "",
      CEL_MOTORISTA: "",
      CPF_MOTORISTA: "",
      RG_MOTORISTA: "",
      CATEGORIACNH_MOTORISTA: "",
      DATA_NASC_MOTORISTA: ""
    });

   //this.props.history.push("/PesquisarMot");
  }

  render() {
    return (
      <div>
        <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Motoristas</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Editar</BreadcrumbItem>
      </Breadcrumb>
      <div style={{ marginTop: 20 }}>
        <h3 align="center">Editar</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group id">
            <label>ID </label>
            <input
              type="text"
              className="form-control"
              defaultValue={this.state.ID_MOTORISTA}
              onChange={this.onChangeId}
              readonly="readonly"
              
            />
          </div>
          <div className="form-group">
            <label>Motorista</label>
            <input
              type="text"
              className="form-control"
              defaultValue={this.state.NM_MOTORISTA}
              onChange={this.onChangeMotorista.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>Celular </label>
            <input
              type="text"
              className="form-control"
              defaultValue={this.state.CEL_MOTORISTA}
              onChange={this.onChangeCel.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>CPF </label>
            <input
              type="text"
              className="form-control"
              defaultValue={this.state.CPF_MOTORISTA}
              onChange={this.onChangeCpf.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>RG</label>
            <input
              type="text"
              className="form-control"
              defaultValue={this.state.RG_MOTORISTA}
              onChange={this.onChangeRg}
            />
          </div>
          <div className="form-group">
            <label>Categoria CNH</label>
            <input
              type="text"
              className="form-control"
              defaultValue={this.state.CATEGORIACNH_MOTORISTA}
              onChange={this.onChangeCat}
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
              type="text"
              className="form-control"
              defaultValue={this.state.DATA_NASC_MOTORISTA}
              onChange={this.onChangeData}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Salvar" className="btn btn-primary" />
            <a class="btn btn-outline-danger" href="/" role="button">Cancelar</a>
          </div>
        </form>
        </div>
      </div>
    );
  }
}
