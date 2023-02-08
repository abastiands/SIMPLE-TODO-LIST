const { createContext, useContext, useState, useEffect } = require("react");

export const GlobalContext = createContext();

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export const GlobalProvider = ({ children }) => {
    const [input, setInput] = useState("");
    const [datas, setDatas] = useState([]);
    const [edit, setEdit] = useState({});
    const [message, setMessage] = useState("")
    const [value, setValue] = useState([]);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(datas));
    }, [datas]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setDatas(items);
        }
    }, []);

    const GlobalContextValue = { input, setInput, datas, setDatas, edit, setEdit, message, setMessage, value, setValue }

    return (
        <GlobalContext.Provider value={GlobalContextValue}>
            {children}
        </GlobalContext.Provider>
    )
}