import styles from './Amazon.module.css';
import NavBar from '../../components/NavBar';
import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import AmazonRequests from '../../fecth/AmazonRequests';


function TabelaAmazon() {
    const [amazon, setAmazon] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const listaVendas = await AmazonRequests.listarAmazon();
            setAmazon(listaVendas);
        }
        fetchData();
    }, []);

    return (
        <>
            <NavBar />
            <h1>Tabela Amazon</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id_livro</th>
                        <th>data_venda</th>
                        <th>nome_produto</th>
                        <th>edicao</th>
                    </tr>
                </thead>
                <tbody>
                    {amazon.length > 0 ? (
                        amazon.map((vendas) => (
                            <tr key={vendas.id_livro}>
                                <td>{vendas.id_livro}</td>
                                <td>{vendas.data_venda}</td>
                                <td>{vendas.nome_produto}</td>
                                <td>{vendas.edicao}</td>
                            </tr>
                        )
                        )) : (
                        <tr>
                            <td colSpan="6">Carregando... Verifique se o servidor está funcionando</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default TabelaAmazon;