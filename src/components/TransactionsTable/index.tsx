import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('/transactions')
          .then(data => console.log(data))
    })

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 1.000</td>
                        <td>Desevolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>aluguel</td>
                        <td className="withdraw">-R$ 500</td>
                        <td>casa</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}