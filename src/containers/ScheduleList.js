import { useState } from "react";
import { useGetSchedulesQuery } from "../apis/scheduleApi";
import { Fade } from 'react-reveal';
import Paginator from "../components/Paginator";
import Schedule from "../components/Schedule";
import { Select } from 'antd';
const { Option } = Select;

function ScheduleList(){
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('name_asc');
    const [pageSize, setPageSize] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const { data, error, isLoading } = useGetSchedulesQuery({ pageNumber: currentPage, pageSize, search, sort });
    
    return(
        <div className="schedule-list min-h-screen bg-bg-image bg-cover bg-no-repeat pt-24">
            <Fade delay={200}>
                <div className="container mx-auto w-full mb-5">
                    <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search" className="mr-5 shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
                    <Select defaultValue={sort} onChange={value => setSort(value)} style={{ width: 200 }}>
                        <Option value="name_asc">Sort by name ascending</Option>
                        <Option value="name_desc">Sort by name descending</Option>
                    </Select>
                </div>
            </Fade>
            <div className="container mx-auto mb-5">
                { 
                    !isLoading && !error && 
                    <div className="grid grid-cols-6 gap-10">
                        {
                            data.data.map((element) => (<Schedule key={element.id} id={element.id} name={element.name}/>))
                        }
                    </div>
                }
            </div>
            {
                !isLoading && !error &&
                <div className="container mx-auto">
                    <Paginator pageSize={10} setPageSize={setPageSize} currentPage={currentPage} setCurrentPage={setCurrentPage} totalCount={data.totalDataCount}/>
                </div>
            }
        </div>
    );
}

export default ScheduleList;