import {useState} from "react";
import {useDeleteScheduleMutation, useGetSchedulesQuery} from "../apis/scheduleApi";
import {Table} from "antd";
import {useLoginUserMutation} from "../apis/authApi";

function AdminPage(){
    const [search, setSearch] = useState('');
    const { data, error, isLoading } = useGetSchedulesQuery({pageNumber:1, pageSize:10, search, sort:'name_asc'});
    const [deleteSchedule] = useDeleteScheduleMutation();
    const handleSearchChange = e => {
        setSearch(e.target.value);
    }
    const handleScheduleDelete = id => {
        deleteSchedule(id);
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
                    <button className="rounded bg-red-500 text-white p-2 mr-5" onClick={() => handleScheduleDelete(record.id)}>Delete</button>
                    <button className="rounded bg-amber-600 text-white p-2">Update</button>
                </div>
            )
        }
    ];


    return(
      <div className="admin-page bg-gray-500 min-h-screen">
          <div className="pt-36 container mx-auto">
              <input placeholder="Search" type="text" className="drop-shadow-lg px-2 py-1 rounded mb-2" onChange={handleSearchChange} value={search}/>
              { !isLoading && <Table dataSource={[...data]} columns={columns} pagination={false}/> }
          </div>
      </div>
    );
};

export default AdminPage;