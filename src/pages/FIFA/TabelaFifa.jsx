import NavBar from '../../components/NavBar';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import FifaRequests from '../../fecth/FifaRequests.js';

function TabelaFifa() {
    const [fifa, setFifa] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setFifa(await FifaRequests.ListarFifa());
        }
        fetchData();
    }, []);

    return (
        <>
            <NavBar />
            <h1>Tabela Fifa</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Player_id</th>
                        <th>nome_jogador</th>
                        <th>pé_dominante</th>
                        <th>posicao</th>
                        <th>ovr</th>
                    </tr>
                </thead>
                <tbody>
                    {fifa.length > 0 ? (
                        fifa.map((playercards) => (
                            <tr key={playercards.playerid}>
                                <td>{playercards.playerid}</td>
                                <td>{playercards.playername}</td>
                                <td>{playercards.foot}</td>
                                <td>{playercards.playerposition}</td>
                                <td>{playercards.ovr}</td>
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

export default TabelaFifa;
