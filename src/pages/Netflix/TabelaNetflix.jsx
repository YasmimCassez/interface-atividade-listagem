import styles from './Netflix.module.css';
import NavBar from "../../components/NavBar";
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import NetflixRequests from '../../fecth/NetflixRequests';

function TabelaNetflix() {
    const [netflix, setNetflix] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const listaTitulos = await NetflixRequests.ListarNetflix();
            setNetflix(listaTitulos);
        }

        fetchData();
    }, []);

    return (
        <>
            <NavBar />
            <h1>Tabela Netflix</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipo</th>
                        <th>Título</th>
                        <th>País</th>
                        <th>Ano de lançamento</th>
                    </tr>
                </thead>
                <tbody>
                    {netflix.length > 0 ? (
                        netflix.map((titulo) => (
                            <tr key={titulo.show_id}>
                                <td>{titulo.show_id}</td>
                                <td>{titulo.tipo}</td>
                                <td>{titulo.titulo}</td>
                                <td>{titulo.pais}</td>
                                <td>{titulo.ano_lancamento}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Carregando... Verifique se o servidor está funcionando</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default TabelaNetflix;
