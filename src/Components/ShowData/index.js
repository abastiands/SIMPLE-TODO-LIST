import { useGlobalContext } from "../../Context/GlobalContext"

const ShowData = () => {
    const { setInput, datas, setDatas, setEdit } = useGlobalContext();

    const handleDelete = (event) => {
        let idData = parseInt(event.target.value);

        const filterData = datas.filter(items => {
            return items.id !== idData;
        })

        setDatas(filterData)
        handleCancel()
    }

    const handleEdit = (items) => {
        setInput(items.data);
        setEdit(items);
    }

    const handleCancel = () => {
        setEdit({})
        setInput("")
    }

    return (
        <div className="ShowData w-5/6 mx-auto grid grid-cols-1 gap-y-6 pb-10 md:grid-cols-3 md:gap-4 lg:grid-cols-5">
            {datas.map(items => {
                return (
                    <div className="DataItems bg-teal-400 w-full h-24 flex justify-center items-center rounded-xl" key={items.id}>
                        <div className="Wrapper w-5/6">
                            <div className="ContentData mb-1.5">
                                <p>Data : {items.data}</p>
                            </div>
                            <div className="ContentButton w-full md:grid md:grid-cols-2">
                                <button onClick={handleEdit.bind(this, items)} className="text-sm text-gray-200 py-1 px-3 mr-2 bg-stone-700 rounded-md">Ubah</button>
                                <button onClick={handleDelete} value={items.id} className="text-sm text-gray-200 py-1 px-3 bg-pink-600 rounded-md">Hapus</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default ShowData