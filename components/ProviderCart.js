import { createContext, useContext, useEffect, useState } from "react";

import { bank, auth } from "../screens/controler";
import { doc, setDoc, getDoc, getDocsFromCache } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";


const CarrinhoContext = createContext();

export function ProviderCart({children}){
    const [carrinho, setCarrinho] = useState([]);
    const [usuario, setUsuario] = useState(null);
    const [carregandoCarrinho, setCarregandoCarrinho] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setUsuario(user);
            setCarregandoCarrinho(true);

            if(user){
                try{
                    const docRef = doc(bank, 'carrinhos', user.uid);
                    const docSnap = await getDoc(docRef);
                    if(docSnap.exists()){
                        const dados = docSnap.data();
                        setCarrinho(Array.isArray(dados.produtos) ? dados.produtos : []); 
                    } else{
                        setCarrinho([]);
                    }
                } catch(error){
                    console.log('Erro ao carregar carrinho do FireBase', error);
                    setCarrinho([]);
                }
            } else{
                setCarrinho([]);
            }
            setCarregandoCarrinho(false);
        })
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        async function salvarCarrinhoNoFireBase(lista){
            if(!usuario || carregandoCarrinho){
                return;
            }
            try{
                const docRef = doc(bank, 'carrinhos', usuario.uid)
                await setDoc(docRef, {produtos:lista})
            } catch(error){
                console.log('erro ao salavr no firebase', erro)
            }
        }
        salvarCarrinhoNoFireBase(carrinho);
    }, [carrinho,usuario, carregandoCarrinho]);

    function adicionarProduto(produto){
        setCarrinho((anterior) => Array.isArray(anterior) ? [...anterior, produto] : [produto]);
    }

    function removerProduto(index){
        const novaLista = []

        setCarrinho((estadoAnterior) => {
            for(let i = 0; i < estadoAnterior.length; i++){
                if(i !== index){
                    novaLista.push(estadoAnterior[i])
                }
            }
            return novaLista;
        }
    )}

    return(
        <CarrinhoContext.Provider value = {{carrinho, adicionarProduto, removerProduto}}>
            {children}
        </CarrinhoContext.Provider>
    )
}  

export function useCarrinho(){
    return useContext(CarrinhoContext);
}
