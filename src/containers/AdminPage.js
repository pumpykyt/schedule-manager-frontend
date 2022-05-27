import {useState} from "react";
import {
    useAddScheduleMutation,
    useDeleteScheduleMutation,
    useGetSchedulesQuery,
    useUpdateScheduleMutation
} from "../apis/scheduleApi";
import {Table} from "antd";

function AdminPage(){
    const [search, setSearch] = useState('');
    const [addScheduleModel, setAddScheduleModel] = useState({name: ''});
    const onNameChanged = e => setAddScheduleModel({...addScheduleModel, name: e.target.value});
    const { data, error, isLoading } = useGetSchedulesQuery({pageNumber:1, pageSize:10, search, sort:'name_asc'});
    const [deleteSchedule] = useDeleteScheduleMutation();
    const [addSchedule] = useAddScheduleMutation();
    const handleSearchChange = e => {
        setSearch(e.target.value);
    }
    const handleScheduleDelete = id => {
        deleteSchedule(id);
    }
    const handleScheduleAdd = model => {
        addSchedule(model);
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (text, record) => (
                <div>
                    <button className="rounded bg-red-500 text-white px-4 py-2 mr-5 hover:bg-red-700 font-bold" onClick={() => handleScheduleDelete(record.id)}>Delete</button>
                    <button className="rounded bg-amber-500 text-white px-4 py-2 hover:bg-amber-600 font-bold">Update</button>
                </div>
            )
        }
    ];


    return(
      <div className="admin-page bg-gray-500 min-h-screen">
          <div className="pt-36 container mx-auto">
              <input placeholder="Name" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" onChange={onNameChanged} value={addScheduleModel.name}/>
              <button className="rounded bg-red-500 text-white ml-4 px-4 py-2 mr-5 hover:bg-red-700 font-bold" onClick={() => handleScheduleAdd(addScheduleModel)}>Add</button>
              <input placeholder="Search" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mb-2" onChange={handleSearchChange} value={search}/>
              { !isLoading && <Table dataSource={[...data.data]} columns={columns} pagination={false}/> }
          </div>
      </div>
    );
};

export default AdminPage;