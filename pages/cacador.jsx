import Head from "next/head";
import AboutCategory from "../components/AboutCategory";
import Queries from "../components/Queries";
import Alert from "../components/Alert";
import ContactCategory from "../components/ContactCategory";

export default function Cacador() {
    return (
        <>
            <Head>
                <title>Caçador | Jackeline Oczust - Despachante de Armas</title>
            </Head>

            <AboutCategory
                icon="cacador"
                title="Caçador"
                text="Caçador é a pessoa física registrada no Comando do Exército, vinculada a entidade ligada a caça e que realiza o abate de espécies da fauna, com arma de fogo, em observância às normas de proteção ao meio ambiente."
            />

            <Queries
                data={[
                    {
                        query: "O que é necessário para ser um Caçador?",
                        answer: `Para o exercício da atividade de caça é necessário obter o Certificado de Registro(CR) concedido pelo Exército. <br />
                        <br />
                        A concessão do CR é realizada, de forma descentralizada, pela Organização Militar, integrante do SisFPC, designada pela Região Militar (RM) de acordo com o domicílio do interessado. <br />
                        <br />
                        O requerimento e a relação de documentos para concessão de CR encontram0se no Anexo B da Portaria nº 150-CELOG, de 5 de dezembro de 2019. <br />
                        <br />
                        <a href="http://www.dfpc.eb.mil.br/index.php/registro" target="_blank" style="color: blue">www.dfpc.eb.mil.br/index.php/registro</a>`,
                    },
                    {
                        query:
                            "Quantas armas o Caçador pode ter em seu acervo?",
                        answer: `<b>- 15 armas de uso permitido</b> <br />
                        <b>- 15 armas uso restrito</b> <br />
                        <br />
                        A autorização para a aquisição está condicionado ao atendimento do prescrito nos art. 9º ao art. 12 da Portaria nº 136-COLOG/2019 e será formalizada pelo despacho da Organização Militar do SisFPC de vinculação do colecionador no requerimento Anexo E da Portaria. <br />
                        <br />
                        <a href="http://www.dfpc.eb.mil.br/index.php/aquisicao" target="_blank" style="color: blue">www.dfpc.eb.mil.br/index.php/aquisicao</a> 
                        `,
                    },
                    {
                        query: "Quantas munições o Caçador pode adquirir?",
                        answer: `O Caçador poderá adquirir, anualmente, para cada arma registrada: <br />
                        <br />
                        <b>Munição de uso permitido: </b> até cinco mil cartuchos ou insumos para essa quantidade. <br />
                        <b>Munição de uso restrito: </b> até mil cartuchos ou insumos para essa quantidade. <br />
                        <br />
                        A quantidade anual de pólvora é de até vinte quilogramas por pessoa registrada no Exécito.
                        `,
                    },
                    {
                        query:
                            "O que é necessário para adquirir munições e insumos?",
                        answer:
                            `Apresentação ao fornecedor: <br />
                            <br />
                            - Documento de identificação válido; <br />
                            - CRAF da arma;<br />
                            - CR de atirador desportivo ou caçador.`,
                    },
                    {
                        query:
                            "Quais armas de fogo são proíbidas nesta categoria?",
                        answer:
                            `- Arma de fogo de uso proibido<br />
                            - Arma de fogo automática <br />
                            - Arma de fogo não-portátil`,
                    },
                ]}
            />

            <Alert />

            <ContactCategory
                text="Adquira seu CR na categoria Caça, permite que você atire com pistolas de 9 mm, .40, .45 e os revólveres 357. <br />
                Fale conosco, tire suas dúvidas que faremos de tudo para que você realize este sonho!"
            />
        </>
    );
}
