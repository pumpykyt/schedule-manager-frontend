import { useState, useMemo } from "react";
import { useGetSchedulesQuery } from "../apis/scheduleApi";
import Paginator from "../components/Paginator";
import Schedule from "../components/Schedule";
import { Select } from 'antd';
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
const { Option } = Select;

function ScheduleList(){
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('name_asc');
    const [pageSize, setPageSize] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const { data, error, isLoading } = useGetSchedulesQuery({ pageNumber: currentPage, pageSize, search, sort });
    const breadcrumbs = useReactRouterBreadcrumbs();
    const paginator = useMemo(() => 
        !isLoading && !error &&
        <Paginator pageSize={pageSize} 
                   setPageSize={setPageSize} 
                   currentPage={currentPage} 
                   setCurrentPage={setCurrentPage} 
                   totalCount={data.totalDataCount}
        />, [data, error, isLoading, currentPage, pageSize]
    );
    
    return(
        <div className="schedule-list min-h-screen bg-bg-image bg-cover bg-no-repeat pt-36">
            <div className="container mx-auto grid grid-cols-12 gap-x-5">
                <div className="col-span-12 flex gap-1 mb-5">
                    {
                        breadcrumbs.map(({ breadcrumb }) => (
                            <div className="text-white text-lg">
                                {breadcrumb} / 
                            </div>
                        ))
                    }
                </div>
                <div className="col-span-12 text-white text-4xl font-bold">
                    List of available schedules
                </div>
                <div className="col-span-12 justify-self-end">
                    <Select defaultValue={sort} onChange={value => setSort(value)}>
                        <Option value="name_asc">Sort by name ascending</Option>
                        <Option value="name_desc">Sort by name descending</Option>
                    </Select>
                </div>
                <div className="col-span-12 bg-indigo-800 h-0.5 my-5"></div>
                <div className="w-full mb-5 bg-indigo-900 p-5 rounded-xl col-span-2 min-h-full">
                    <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search" className="mr-5 shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="col-span-10">
                    { 
                        !isLoading && !error && 
                        <div className="grid grid-cols-6 gap-10 mb-5">
                            {
                                data.data.map((element) => (<Schedule key={element.id} id={element.id} name={element.name}/>))
                            }
                        </div>
                    }
                    {
                    !isLoading && !error &&
                    <div className="container mx-auto">
                        {
                            paginator
                        }
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ScheduleList;