import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { veiculos: [] };
    }

    async componentDidMount() {
        try {
            const response = await api.get('/veiculos');
            this.setState({ veiculos: response.data })
        }
        catch (error) {
            console.log(error)
        }
    }

    delete = async (id) => {  
        try {
            console.log(id);
            api.delete('/veiculos/'+ id)
        }
        catch (error) {
            console.log(error)
        }    
    }

    render() {
        return (
            <div>
                    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Veículos</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Pesquisar</BreadcrumbItem>
      </Breadcrumb>
    </div>
                <h3 align="center">Veículos</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Placa</th>
                            <th>Modelo</th>
                            <th>Marca</th>
                            <th>Renavam</th>
                            <th>Cor</th>
                            <th>Empresa</th>
                            <th colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>{
                        this.state.veiculos.map(veiculo => (
                            <tr key={veiculo.ID_VEICULO}>
                                <td>
                                    {veiculo.ID_VEICULO}
                                </td>
                                <td>
                                    {veiculo.PLACA_VEICULO}
                                </td>
                                <td>
                                    {veiculo.MODELO_VEICULO}
                                </td>
                                <td>
                                    {veiculo.MARCA_VEICULO}
                                </td>
                                <td>
                                    {veiculo.RENAVAM_VEICULO}
                                </td>
                                <td>
                                    {veiculo.COR_VEICULO}
                                </td>
                                <td>
                                    {veiculo.EMPRESA_VEICULO}
                                </td>
                                <td>
                                    <Link to={`/atualizar/${veiculo.ID_VEICULO}`}><button className="btn btn-primary">Editar</button></Link>
                                </td>
                                <td>
                                <button className="btn btn-danger"  onClick={() => this.delete(veiculo.ID_VEICULO) }>Excluir</button>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}