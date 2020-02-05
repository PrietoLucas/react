import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class Index extends Component {
    delete = async (id) => {  
        try {
            console.log(id);
            api.delete('/empresas/'+ id)
            this.props.history.push("/Empresas");
        }
        catch (error) {
            console.log(error)
        }    
    }

    constructor(props) {
        super(props);
        this.state = { empresas: [] };
     }

    async componentDidMount() {
        try {
            const response = await api.get('/empresas');
            this.setState({ empresas: response.data })
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
        <BreadcrumbItem tag="a" href="#">Empresas</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Pesquisar</BreadcrumbItem>
      </Breadcrumb>
                <h3 align="center">Empresas</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome da Empresa</th>
                            <th>Razão Social</th>
                            <th>CNPJ da Empresa</th>
                            <th>Responsável</th>
                            <th>Contato</th>
                            <th>Endereço</th>
                            <th>Representante</th>
                            <th>Status</th>
                            <th colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>{
                        this.state.empresas.map(empresa => (
                            <tr key={empresa.ID_EMPRESA}>
                                <td>
                                    {empresa.ID_EMPRESA}
                                </td>
                                <td>
                                    {empresa.NM_EMPRESA}
                                </td>
                                <td>
                                    {empresa.RAZAO_EMPRESA}
                                </td>
                                <td>
                                    {empresa.CNPJ_EMPRESA}
                                </td>
                                <td>
                                    {empresa.RESPONSAVEL_EMPRESA}
                                </td>
                                <td>
                                    {empresa.TELEFONE_EMPRESA}
                                </td>
                                <td>
                                    {empresa.ENDERECO_EMPRESA}
                                </td>
                                <td>
                                    {empresa.REPRESENTANTE_EMPRESA}
                                </td>
                                <td>
                                    {empresa.STATUS}
                                </td>
                                <td>
                                    <Link to={`/EditarEmpresa/${empresa.ID_EMPRESA}`}><button className="btn btn-primary">Editar</button></Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger"  onClick={() => this.delete(empresa.ID_EMPRESA) }>Excluir</button>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}