import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class Index extends Component {
    delete = async (id) => {  
        try {
            console.log(id);
            api.delete('/motoristas/'+ id)
            this.props.history.push("/PesquisarMotoristas");
        }
        catch (error) {
            console.log(error)
        }    
    }

    constructor(props) {
        super(props);
        this.state = { motoristas: [] };
     }

    async componentDidMount() {
        try {
            const response = await api.get('/motoristas');
            this.setState({ motoristas: response.data })
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
        <BreadcrumbItem tag="a" href="#">Motoristas</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Pesquisar</BreadcrumbItem>
      </Breadcrumb>
                <h3 align="center">Motoristas</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Motorista</th>
                            <th>Celular</th>
                            <th>CPF</th>
                            <th>RG</th>
                            <th>Categoria</th>
                            <th>Data</th>
                            <th>Empresa</th>
                            <th colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>{
                        this.state.motoristas.map(motorista => (
                            <tr key={motorista.ID_MOTORISTA}>
                                <td>
                                    {motorista.ID_MOTORISTA}
                                </td>
                                <td>
                                    {motorista.NM_MOTORISTA}
                                </td>
                                <td>
                                    {motorista.CEL_MOTORISTA}
                                </td>
                                <td>
                                    {motorista.CPF_MOTORISTA}
                                </td>
                                <td>
                                    {motorista.RG_MOTORISTA}
                                </td>
                                <td>
                                    {motorista.CATEGORIACNH_MOTORISTA}
                                </td>
                                <td>
                                    {motorista.DATA_NASC_MOTORISTA}
                                </td>
                                <td>
                                    {motorista.EMPRESA_MOTORISTA}
                                </td>
                                <td>
                                    <Link to={`/atualizarMot/${motorista.ID_MOTORISTA}`}><button className="btn btn-primary">Editar</button></Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger"  onClick={() => this.delete(motorista.ID_MOTORISTA) }>Excluir</button>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}