import React, { Component } from 'react';
import api from '../../services/api'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class Index extends Component {
    delete = async (id) => {  
        try {
            console.log(id);
            api.delete('/viagens/'+ id)
            this.props.history.push("/PesquisarViagens");
        }
        catch (error) {
            console.log(error)
        }    
    }

    constructor(props) {
        super(props);
        this.state = { viagens: [] };
     }

    async componentDidMount() {
        try {
            const response = await api.get('/viagens');
            this.setState({ viagens: response.data })
        }
        catch (error) {
            console.log(error)
        }
    }

     

    render() {
        return (
            <div>
                      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Viagens</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Pesquisar</BreadcrumbItem>
      </Breadcrumb>
                <h3 align="center">Viagens</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Motorista</th>
                            <th>Veiculo</th>
                            <th>Saída</th>
                            <th>Data Saída</th>
                            <th>Hora Saída</th>
                            <th>Destino</th>
                            <th>Data Chegada</th>
                            <th>Hora Chegada</th>
                            <th>Descrição Viagem</th>
                            <th colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>{
                        this.state.viagens.map(viagem => (
                            <tr key={viagem.ID_Viagem}>
                                <td>
                                    {viagem.ID_Viagem}
                                </td>
                                <td>
                                    {viagem.ID_MOTORISTA}
                                </td>
                                <td>
                                    {viagem.ID_VEICULO}
                                </td>
                                <td>
                                    {viagem.SAIDA_VIAGEM}
                                </td>
                                <td>
                                    {viagem.DTA_VIAGEM}
                                </td>
                                <td>
                                    {viagem.HR_VIAGEM}
                                </td>
                                <td>
                                    {viagem.CHEGADA_VIAGEM}
                                </td>
                                <td>
                                    {viagem.DATA_CHEGADA}
                                </td>
                                <td>
                                    {viagem.HORA_CHEGADA}
                                </td>
                                <td>
                                    {viagem.DESCRICAO_VIAGEM}
                                </td>
                                <td>
                                    <button className="btn btn-danger"  onClick={() => this.delete(viagem.ID_VIAGEM) }>Excluir</button>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}