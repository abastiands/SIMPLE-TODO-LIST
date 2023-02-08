import { useGlobalContext } from "../../Context/GlobalContext"

const FormInput = () => {
    const { input, setInput, datas, setDatas, edit, setEdit, message, setMessage } = useGlobalContext();

    const generateId = () => {
        return Date.now()
    }

    const handleInput = (event) => {
        let data = event.target.value;
        setInput(data)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!input) {
            setMessage("Inputan tidak boleh kosong!");
        } else {
            if (edit.id) {
                const updatedTodo = {
                    ...edit,
                    data: input
                };

                const editTodoIndex = datas.findIndex(function (todo) {
                    return todo.id === edit.id;
                });

                const updatedDatas = [...datas];
                updatedDatas[editTodoIndex] = updatedTodo;

                setDatas(updatedDatas);
                return handleCancel();
            }

            setDatas([...datas, {
                id: generateId(),
                data: input
            }])

            setInput("")
            setMessage("")
        }
    }

    const handleCancel = () => {
        setEdit({})
        setInput("")
        setMessage("")
    }

    return (
        <div className="FormInput w-5/6 h-36 flex justify-center items-center bg-gray-200 my-6 mx-auto rounded-xl md:w-3/6 md:h-40 lg:w-4/12">
            <form onSubmit={handleSubmit} className="Wrapper w-5/6">
                <div className="FormGroup">
                    <label htmlFor="data" className="block mb-1.5  md:text-xl">Data</label>
                    <input value={input} onChange={handleInput} type={'text'} name="data" id="data" placeholder="Masukkan Data" className="w-full bg-stone-700 text-gray-200 placeholder-gray-200 text-sm p-2 rounded-md md:p-3" />
                    {message &&
                        <p className="text-sm text-red-500 md:mb-[-6px]">{message}</p>
                    }
                </div>
                <div className="FormButton mt-1 md:mt-2.5">
                    <button type="submit" className="text-sm text-gray-200 py-1 px-2 mr-2 bg-teal-500 rounded-md">
                        {edit.id ? 'Simpan Perubahan' : "Tambah"}</button>
                    {edit.id &&
                        <button onClick={handleCancel} className="text-sm text-gray-200 py-1 px-4 bg bg-pink-600 rounded-md">Batal</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default FormInput