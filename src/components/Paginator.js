import { Select } from 'antd';
import { Fade } from 'react-reveal';
const { Option } = Select;

function Paginator({currentPage, pageSize, totalCount, setCurrentPage, setPageSize}){
    const pagesCount = Math.ceil(totalCount / pageSize);

    return (
        <Fade delay={500}>
            <div className="paginator grid grid-cols-1 gap-y-5">
                <div className="flex gap-x-2 items-center">
                    {
                        Array.from({length: pagesCount}, (_, i) => i + 1).map((element) => (
                            <button onClick={() => setCurrentPage(element)} key={element} className={ 
                                element === currentPage 
                                ? 'bg-violet-900 py-2 px-4 rounded text-white font-bold' 
                                : 'bg-violet-700 py-2 px-4 rounded text-white font-bold' 
                            }>
                                {element}
                            </button>
                        ))
                    }
                </div>
                <div className="flex gap-x-5">
                    <p className="text-white font-semibold text-lg">Page size:</p>
                    <Select defaultValue={12} style={{ width: 120 }} onChange={value=> setPageSize(value)}>
                        <Option value={6}>6 per page</Option>
                        <Option value={12}>12 per page</Option>
                        <Option value={18}>18 per page</Option>
                    </Select>
                </div>
            </div>
        </Fade>
    );
}

export default Paginator;