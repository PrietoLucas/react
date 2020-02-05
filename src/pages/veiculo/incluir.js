import React, { Component } from 'react';
import api from '../../services/api'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import MaskedInput from 'react-text-mask';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangePlaca = this.onChangePlaca.bind(this);
        this.onChangeRenavam = this.onChangeRenavam.bind(this);
        this.onChangeCor = this.onChangeCor.bind(this);
        this.onChangeModelo = this.onChangeModelo.bind(this);
        this.onChangeMarca = this.onChangeMarca.bind(this);
        this.onChangeEmpresa = this.onChangeEmpresa.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            ID_VEICULO: '',
            PLACA_VEICULO: '',
            RENAVAM_VEICULO: '',
            MODELO_VEICULO: '',
            COR_VEICULO: '',
            MARCA_VEICULO: '',
            EMPRESA_VEICULO: '',
        }
    }
    onChangeId(e) {
        this.setState({
            ID_VEICULO: e.target.value
        });
    }
    onChangePlaca(e) {
        this.setState({
            PLACA_VEICULO: e.target.value
        })
    }
    onChangeRenavam(e) {
        this.setState({
            RENAVAM_VEICULO: e.target.value
        })
    }
    onChangeCor(e) {
        this.setState({
            COR_VEICULO: e.target.value
        })
    }
    onChangeModelo(e) {
        this.setState({
            MODELO_VEICULO: e.target.value
        })
    }
    onChangeMarca(e) {
        this.setState({
            MARCA_VEICULO: e.target.value
        })
    }
    onChangeEmpresa(e) {
        this.setState({
            EMPRESA_VEICULO: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            ID_VEICULO: this.state.ID_VEICULO,
            PLACA_VEICULO: this.state.PLACA_VEICULO,
            RENAVAM_VEICULO: this.state.RENAVAM_VEICULO,
            MODELO_VEICULO: this.state.MODELO_VEICULO,
            COR_VEICULO: this.state.COR_VEICULO,
            MARCA_VEICULO: this.state.MARCA_VEICULO,
            EMPRESA_VEICULO: this.state.EMPRESA_VEICULO,
        };
        api.post('/veiculos', obj)
            .then(res => console.log(res.data));

        this.setState({
            ID_VEICULO: '',
            PLACA_VEICULO: '',
            RENAVAM_VEICULO: '',
            MODELO_VEICULO: '',
            COR_VEICULO: '',
            MARCA_VEICULO: '',
            EMPRESA_VEICULO: '',
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Veículos</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Incluir</BreadcrumbItem>
      </Breadcrumb>
    </div>
                <h3>Cadastrar Veículos</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Placa</label>
                        <MaskedInput
                            mask={[/[a-z]/, /[a-z]/, /[a-z]/, '-', /\d/, /\d/, /\d/,/\d/]}
                            className="form-control"
                            placeholder="Entre com a placa do veículo"
                            guide={false}
                            id="my-input-id"
                            onBlur={() => {}}
                            value={this.state.PLACA_VEICULO}
                            onChange={this.onChangePlaca}
                        />
                    </div>
                    <div className="form-group">
                        <label>Renavam</label>
                        <MaskedInput
                            mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/,/\d/,/\d/,/\d/,/\d/]}
                            className="form-control"
                            placeholder="Entre com o Renavam"
                            guide={false}
                            id="my-input-id"
                            onBlur={() => {}}
                            value={this.state.RENAVAM_VEICULO}
                            onChange={this.onChangeRenavam}
                        />
                    </div>
                    <div className="form-group">
                        <label>Modelo</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Entre com o Modelo"
                            value={this.state.MODELO_VEICULO}
                            onChange={this.onChangeModelo}
                        />
                    </div>
                    <div className="form-group">
                <label>Modelo</label>
                    <select id="modelo-carro" className="custom-select" name="modeloCar" defaultValue={this.state.MARCA_VEICULO}
                     onChange={this.onChangeMarca} required >
                        <option defaultValue>selecione uma opção</option>
                        <option value='Nissan'>Nissan</option>
                        <option value='Volkswagen'>Volkswagen</option>
                        <option value='Ford'>Ford</option>
                        <option value='Renault'>Renault</option>
                        <option value='Chevrolet'>Chevrolet</option>
                        <option value='Audi'>Audi</option>
                        <option value='BMW'>BMW</option>
                        <option value='Honda'>Honda</option>
                        <option value='Hyundai'>Hyundai</option>
                    </select>
                </div>  
                    <div className="form-group">
                        <label>Cor</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Entre com a Cor"
                            value={this.state.COR_VEICULO}
                            onChange={this.onChangeCor}
                        />
                    </div>
                    <div className="form-group">
                        <label>Empresa</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Entre com a Cor"
                            value={this.state.EMPRESA_VEICULO}
                            onChange={this.onChangeEmpresa}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Salvar" className="btn btn-primary" />
                        <a class="btn btn-outline-danger" href="/" role="button">Cancelar</a>
                    </div>
                </form>
            </div>
        )
    }
}